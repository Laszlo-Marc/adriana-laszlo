import FinalCTA from "@/components/pages/home/sections/CTABanner";
import AFEmdrServiceSection from "@/components/pages/services/sections/AfEmdrSection";
import ConditionsTreatedSection from "@/components/pages/services/sections/ConditionsTreatedSection";
import EventsServiceSection from "@/components/pages/services/sections/EventsSection";
import IndividualTherapyServiceSection from "@/components/pages/services/sections/IndividualTherapyServiceSection";
import OnlineTherapyServiceSection from "@/components/pages/services/sections/OnlineTherapySection";
import ServicesHero from "@/components/pages/services/sections/ServicesHero";
import ServicesQuickLinks from "@/components/pages/services/sections/ServicesQuickLinks";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesQuickLinks />
      <AFEmdrServiceSection />
      <IndividualTherapyServiceSection />
      <OnlineTherapyServiceSection />
      <EventsServiceSection />
      <ConditionsTreatedSection />
      <FinalCTA />
    </>
  );
}
