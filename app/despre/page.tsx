import AboutApproachEmdrAccordionSection from "@/components/pages/about/AboutApproachEmdrSection";
import AboutCredentialsSection from "@/components/pages/about/AboutCredentialsSection";
import FinalCTA from "@/components/pages/about/AboutCTA";
import AboutStoryPathTimeline from "@/components/pages/about/AboutStoryTimelineSection";

import AboutHeroSection from "@/components/pages/about/Hero";
import AboutStatsStrip from "@/components/pages/about/StatsStrip";

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutStatsStrip />
      <AboutStoryPathTimeline />
      <AboutApproachEmdrAccordionSection />
      <AboutCredentialsSection />
      <FinalCTA />
    </>
  );
}
