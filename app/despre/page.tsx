import AboutStoryPathTimeline from "@/components/pages/about/AboutStoryTimelineSection";
import AboutTimeline from "@/components/pages/about/AboutStoryTimelineSection";

import AboutHeroSection from "@/components/pages/about/Hero";
import AboutStatsStrip from "@/components/pages/about/StatsStrip";

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutStatsStrip />
      <AboutStoryPathTimeline />
    </>
  );
}
