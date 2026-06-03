import FinalCTA from "@/components/pages/about/AboutCTA";
import ConditionMarqueeSection from "@/components/pages/services/ConditionsTreatedMarquee";
import ServicesHero from "@/components/pages/services/sections/ServicesHero";
import ServicesProcessSection from "@/components/pages/services/sections/ServicesProcessSection";
import ServicesQuickLinks from "@/components/pages/services/sections/ServicesQuickLinks";
import TherapistIntroSection from "@/components/pages/services/sections/TherapistIntroSection";

import ServicesDetails from "@/components/pages/services/service-details/ServiceDetails";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesQuickLinks />
      <ServicesDetails />
      <ConditionMarqueeSection />
      <TherapistIntroSection />
      <ServicesProcessSection />

      <FinalCTA />
    </>
  );
}
