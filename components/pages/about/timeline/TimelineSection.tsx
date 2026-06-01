import Section from "@/components/ui/Section";
import AboutStoryPathTimelineDesktop from "./desktop/AboutTimeline";

export default function AboutTimelineSection() {
  return (
    <Section
      background="cream"
      spacing="none"
      className="relative overflow-hidden"
    >
      <AboutStoryPathTimelineDesktop />
    </Section>
  );
}
