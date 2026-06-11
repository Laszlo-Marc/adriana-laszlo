import AfEmdrSection from "@/components/pages/about/af-emdr/AfEmdrSection";
import ApproachProcessSection from "@/components/pages/about/approach-process/ApproachProccessSection";

import AboutHeroSection from "@/components/pages/about/hero/HeroSection";
import AboutStatsStrip from "@/components/pages/about/StatsStrip";
import AboutTimelineSection from "@/components/pages/about/timeline/TimelineSection";
import { aboutFaqItems } from "@/components/sections/faq-data";
import FaqSection from "@/components/sections/FaqSection";
import FinalCTA from "@/components/sections/FinalCTA";

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutStatsStrip />
      <AboutTimelineSection />
      <ApproachProcessSection />
      <AfEmdrSection />
      <FaqSection
        id="about-faq"
        items={aboutFaqItems}
        title="Întrebări frecvente"
        tone="charcoal"
        background="cream"
        spacing="md"
      />
      <FinalCTA
        title="Dacă simți că rezonăm, sunt aici."
        description="Terapia începe cu un spațiu sigur în care poți vorbi sincer despre ce te apasă, fără presiune și fără judecată."
        primaryLabel="Următorul pas"
        primaryButton={{
          label: "Contactează-mă",
          href: "/contact",
          variant: "urgent",
          size: "lg",
        }}
        secondaryLabel="Află cum te pot ajuta"
        secondaryButtons={[
          {
            label: "Vezi serviciile",
            href: "/servicii",
            variant: "primary",
          },
          {
            label: "Citește articolele",
            href: "/blog",
            variant: "purple",
          },
        ]}
      />
    </>
  );
}
