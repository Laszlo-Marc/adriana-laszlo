import Section from "@/components/ui/Section";

import AboutStoryPathTimelineDesktop from "./desktop/AboutTimeline";
import AboutTimelineMobile from "./mobile/AboutMobileTimeline";

export default function AboutTimelineSection() {
  return (
    <Section
      background="cream"
      spacing="lg"
      aria-labelledby="about-story-heading"
      className="relative overflow-hidden"
      allowOverflow
    >
      <span id="about-story-heading" className="sr-only">
        Parcursul meu în psihoterapie
      </span>

      <AboutTimelineMobile />
      <AboutStoryPathTimelineDesktop />
    </Section>
  );
}
