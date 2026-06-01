import Section from "@/components/ui/Section";
import AboutStoryPathTimelineDesktop from "./desktop/AboutTimeline";
import AboutTimelineMobile from "./mobile/AboutMobileTimeline";

export default function AboutTimelineSection() {
  return (
    <Section
      background="cream"
      spacing="none"
      className="relative overflow-hidden"
    >
      <AboutTimelineMobile />
      <AboutStoryPathTimelineDesktop />
    </Section>
  );
}
