import OtherEventsSection from "@/components/pages/events/events-grid/OtherEventsSection";
import EventsFaqSection from "@/components/pages/events/EventsFAQSection";
import EventsHero from "@/components/pages/events/EventsHero";
import FeaturedEventSection from "@/components/pages/events/featured-event/FeaturedEventSection";

import FinalCTA from "@/components/sections/FinalCTA";

export const metadata = {
  title: "Evenimente, workshopuri și terapie de grup în Cluj | Adriana Laszlo",
  description:
    "Programe de grup, workshopuri și ateliere ghidate pentru traumă, anxietate, stres și reconectare emoțională, susținute de psihoterapeut Adriana Laszlo.",
};

export default function EventsPage() {
  return (
    <>
      <EventsHero />
      <FeaturedEventSection />
      <OtherEventsSection />

      <EventsFaqSection />
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
