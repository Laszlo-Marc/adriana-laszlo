import FinalCTA from "@/components/pages/about/AboutCTA";
import AfEmdrSection from "@/components/pages/about/af-emdr/AfEmdrSection";
import ApproachProcessSection from "@/components/pages/about/approach-process/ApproachProccessSection";
import AboutFaqSection from "@/components/pages/about/faq/AboutFaqSection";
import AboutHeroSection from "@/components/pages/about/hero/HeroSection";
import AboutStatsStrip from "@/components/pages/about/StatsStrip";
import AboutTimelineSection from "@/components/pages/about/timeline/TimelineSection";

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutStatsStrip />
      <AboutTimelineSection />
      <ApproachProcessSection />
      <AfEmdrSection />
      <AboutFaqSection />
      <FinalCTA />
    </>
  );
}
