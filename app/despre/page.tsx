import AboutApproachEmdrAccordionSection from "@/components/pages/about/AboutApproachEmdrSection";
import AboutCredentialsSection from "@/components/pages/about/AboutCredentialsSection";
import FinalCTA from "@/components/pages/about/AboutCTA";
import AboutHeroSection from "@/components/pages/about/hero/HeroSection";
import AboutStatsStrip from "@/components/pages/about/StatsStrip";
import AboutTimelineSection from "@/components/pages/about/timeline/TimelineSection";

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutStatsStrip />
      <AboutTimelineSection />
      <AboutApproachEmdrAccordionSection />
      <AboutCredentialsSection />
      <FinalCTA />
    </>
  );
}
