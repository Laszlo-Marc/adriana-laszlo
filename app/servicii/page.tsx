import FinalCTA from "@/components/pages/about/AboutCTA";
import AFEmdrServiceSection from "@/components/pages/services/sections/AfEmdrSection";
import ConditionsTreatedSection from "@/components/pages/services/sections/ConditionsTreatedSection";
import EventsServiceSection from "@/components/pages/services/sections/EventsSection";
import IndividualTherapyServiceSection from "@/components/pages/services/sections/IndividualTherapyServiceSection";
import OnlineTherapyServiceSection from "@/components/pages/services/sections/OnlineTherapySection";
import ServicesFAQSection from "@/components/pages/services/sections/ServicesFAQSection";
import ServicesHero from "@/components/pages/services/sections/ServicesHero";
import ServicesProcessSection from "@/components/pages/services/sections/ServicesProcessSection";
import ServicesQuickLinks from "@/components/pages/services/sections/ServicesQuickLinks";
import TherapistIntroSection from "@/components/pages/services/sections/TherapistIntroSection";

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
      <TherapistIntroSection />
      <ServicesProcessSection />
      <ServicesFAQSection />
      <FinalCTA />
    </>
  );
}
