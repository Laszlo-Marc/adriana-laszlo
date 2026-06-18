import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FinalCTA from "@/components/sections/FinalCTA";
import EventDetailHero from "@/components/pages/events/event-page/EventDetailsHero";
import EventSignupSection from "@/components/pages/events/event-page/EventSignUpSection";
import EventQuickInfo from "@/components/pages/events/event-page/EventQuickInfo";
import FaqSection from "@/components/sections/FaqSection";
import EventStoryScrollLoader from "@/components/pages/events/event-page/EventStoryScrollLoader";
import { buildMetadata } from "@/lib/seo/metadata";
import { getEventBySlug, getEvents } from "@/sanity/lib/fetchers";
import { getSanityEventOgImage, toEventDetail } from "@/sanity/adapters/event";
import { JsonLd } from "@/lib/seo/JsonLd";
import {
  breadcrumbSchema,
  eventSchema,
  faqSchema,
  webPageSchema,
} from "@/lib/seo/schema";

type EventDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const events = await getEvents();

  return events.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({
  params,
}: EventDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) {
    return buildMetadata({
      title: "Eveniment negăsit | Adriana Laszlo",
      description: "Evenimentul căutat nu este disponibil.",
      path: `/evenimente/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: event.seo?.title ?? `${event.title} | Adriana Laszlo`,
    description: event.seo?.description ?? event.summary,
    path: `/evenimente/${event.slug}`,
    image: getSanityEventOgImage(event),
    noIndex: event.seo?.noIndex ?? false,
    keywords: [
      "eveniment terapeutic Cluj",
      "AF-EMDR Cluj",
      "terapie de grup Cluj",
      event.title,
    ],
  });
}

export default async function EventDetailPage({
  params,
}: EventDetailPageProps) {
  const { slug } = await params;
  const sanityEvent = await getEventBySlug(slug);

  if (!sanityEvent) {
    notFound();
  }

  const event = toEventDetail(sanityEvent);
  const eventPath = `/evenimente/${event.slug}`;

  const numericPrice = sanityEvent.details?.price?.match(/\d+/)?.[0];

  const jsonLdData = [
    webPageSchema({
      title: event.title,
      description: event.summary,
      path: eventPath,
    }),
    breadcrumbSchema([
      { name: "Acasă", path: "/" },
      { name: "Evenimente", path: "/evenimente" },
      { name: event.title, path: eventPath },
    ]),
    ...(sanityEvent.schedule?.startDate
      ? [
          eventSchema({
            title: event.title,
            description: event.summary,
            path: eventPath,
            image: event.image,

            startDate: sanityEvent.schedule.startDate,
            endDate: sanityEvent.schedule.endDate,

            locationName: sanityEvent.details?.location || "Trauma Center",
            streetAddress: "Strada Artelor nr. 35",
            locality: "Cluj-Napoca",
            region: "Cluj",
            country: "RO",

            price: numericPrice,
            currency: "RON",
          }),
        ]
      : []),
    ...(event.faq.length > 0 ? [faqSchema(event.faq)] : []),
  ];

  return (
    <>
      <JsonLd data={jsonLdData} />

      <EventDetailHero event={event} />
      <EventQuickInfo event={event} />
      <EventStoryScrollLoader event={event} />
      <EventSignupSection event={event} />

      {event.faq.length > 0 ? (
        <FaqSection
          id="event-faq"
          items={event.faq}
          title="Întrebări frecvente"
          tone="charcoal"
          background="cream"
          spacing="md"
        />
      ) : null}

      <FinalCTA
        title="Nu ești sigur/ă dacă acest program ți se potrivește?"
        description="Putem clarifica împreună într-o discuție scurtă dacă formatul de grup este potrivit pentru ce ai nevoie acum."
        primaryLabel="Următorul pas"
        primaryButton={{
          label: "Întreabă despre program",
          href: "/contact",
          variant: "urgent",
          size: "lg",
        }}
        secondaryLabel="Mai multe opțiuni"
        secondaryButtons={[
          {
            label: "Vezi toate evenimentele",
            href: "/evenimente",
            variant: "primary",
          },
          {
            label: "Vezi serviciile",
            href: "/servicii",
            variant: "purple",
          },
        ]}
      />
    </>
  );
}
