import Section from "@/components/ui/Section";
import AboutStoryPathTimelineDesktop from "./desktop/AboutTimeline";
import AboutTimelineMobile from "./mobile/AboutMobileTimeline";

export default function AboutTimelineSection() {
  return (
    <>
      <AboutTimelineMobile />
      <AboutStoryPathTimelineDesktop />
    </>
  );
}
