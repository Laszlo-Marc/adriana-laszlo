import OtherEventsSection from "@/components/pages/events/events-grid/OtherEventsSection";
import EventsHero from "@/components/pages/events/EventsHero";
import FeaturedEventSection from "@/components/pages/events/featured-event/FeaturedEventSection";
import { eventsFaqItems } from "@/components/sections/faq-data";
import FaqSection from "@/components/sections/FaqSection";
import FinalCTA from "@/components/sections/FinalCTA";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { getEvents } from "@/sanity/lib/fetchers";
import {
  getFeaturedEvent,
  toFeaturedEvent,
  toOtherEventItems,
} from "@/sanity/adapters/event";
import NewsletterCTASection from "@/components/newsletter/NewsLetterCtaSection";
import { JsonLd } from "@/lib/seo/JsonLd";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seo/schema";

export const metadata: Metadata = buildMetadata({
  title: "Evenimente terapeutice în Cluj-Napoca | Adriana Laszlo",
  description:
    "Evenimente terapeutice, grupuri de lucru și experiențe ghidate în Cluj-Napoca, create pentru conectare, claritate și siguranță emoțională.",
  path: "/evenimente",
  image: "/og/events-og.jpg",
  keywords: [
    "evenimente terapeutice Cluj",
    "terapie de grup Cluj",
    "grup terapeutic Cluj-Napoca",
    "workshop psihoterapie Cluj",
  ],
});

export default async function EventsPage() {
  const events = await getEvents();

  const featuredEvent = getFeaturedEvent(events);
  const otherEvents = toOtherEventItems(events, featuredEvent?.slug);

  console.log("Featured event:", featuredEvent?.title);

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Evenimente terapeutice în Cluj-Napoca | Adriana Laszlo",
            description:
              "Evenimente terapeutice, grupuri de lucru și experiențe ghidate în Cluj-Napoca, create pentru conectare, claritate și siguranță emoțională.",
            path: "/evenimente",
          }),
          breadcrumbSchema([
            { name: "Acasă", path: "/" },
            { name: "Evenimente", path: "/evenimente" },
          ]),
          faqSchema(eventsFaqItems),
        ]}
      />
      <EventsHero />

      {featuredEvent ? (
        <FeaturedEventSection event={toFeaturedEvent(featuredEvent)} />
      ) : null}

      <OtherEventsSection events={otherEvents} />

      <NewsletterCTASection
        source="Events page newsletter CTA"
        eyebrow="Rămâi aproape"
        title="Alătură-te comunității."
        description="Primești ocazional anunțuri despre programe, grupuri și materiale utile pentru procesul tău."
      />
      <FaqSection
        id="events-faq"
        items={eventsFaqItems}
        title="Întrebări frecvente"
        tone="charcoal"
        background="cream"
        spacing="md"
      />
      <FinalCTA
        title="Vrei să afli ce program ți se potrivește?"
        description="Scrie-mi și aflăm împreună."
        primaryLabel="Lucrează cu mine"
        primaryButton={{
          label: "Scrie-mi un mesaj",
          href: "/contact",
          variant: "urgent",
          size: "lg",
        }}
        secondaryLabel="Explorează mai întâi"
        secondaryButtons={[
          {
            label: "Vezi serviciile",
            href: "/servicii",
            variant: "primary",
          },
          {
            label: "Despre mine",
            href: "/despre",
            variant: "purple",
          },
        ]}
      />
    </>
  );
}
