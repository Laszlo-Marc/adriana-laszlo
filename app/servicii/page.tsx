import FinalCTA from "@/components/pages/about/AboutCTA";
import ConditionMarqueeSection from "@/components/pages/services/ConditionsTreatedMarquee";
import FeesSection from "@/components/pages/services/FeesSection";
import ServicesHero from "@/components/pages/services/ServicesHero";
import ServicesQuickLinks from "@/components/pages/services/ServicesQuickLinks";
import TherapistIntroSection from "@/components/pages/services/TherapistIntroSection";

import ServicesDetails from "@/components/pages/services/service-details/ServiceDetails";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesQuickLinks />
      <ServicesDetails />
      <ConditionMarqueeSection />
      <TherapistIntroSection />
      <FeesSection />
      <FinalCTA />
    </>
  );
}
