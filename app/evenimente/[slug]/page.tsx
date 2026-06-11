import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FinalCTA from "@/components/sections/FinalCTA";
import { eventDetails } from "@/components/pages/events/event-page/eventData";
import EventDetailHero from "@/components/pages/events/event-page/EventDetailsHero";
import EventSignupSection from "@/components/pages/events/event-page/EventSignUpSection";
import EventQuickInfo from "@/components/pages/events/event-page/EventQuickInfo";
import FaqSection from "@/components/sections/FaqSection";
import EventStoryScrollLoader from "@/components/pages/events/event-page/EventStoryScrollLoader";

type EventDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return eventDetails.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({
  params,
}: EventDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = eventDetails.find((item) => item.slug === slug);

  if (!event) {
    return {
      title: "Eveniment negăsit",
    };
  }

  return {
    title: `${event.title} | Adriana Laszlo`,
    description: event.summary,
    alternates: {
      canonical: `/evenimente/${event.slug}`,
    },
    openGraph: {
      title: event.title,
      description: event.summary,
      type: "website",
      images: [
        {
          url: event.image,
          alt: event.imageAlt,
        },
      ],
    },
  };
}

export default async function EventDetailPage({
  params,
}: EventDetailPageProps) {
  const { slug } = await params;
  const event = eventDetails.find((item) => item.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <>
      <EventDetailHero event={event} />
      <EventQuickInfo event={event} />
      <EventStoryScrollLoader event={event} />
      <EventSignupSection event={event} />
      <FaqSection
        id="event-faq"
        items={event.faq}
        title="Întrebări frecvente"
        tone="charcoal"
        background="cream"
        spacing="md"
      />
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
