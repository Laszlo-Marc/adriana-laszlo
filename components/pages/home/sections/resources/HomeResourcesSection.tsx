import Section from "@/components/ui/Section";
import { HomeResourcesMobile } from "./HomeResourcesMobile";
import ResourcesDesktopSection from "./HomeResourcesDesktop";

export default function HomeResourcesSection() {
  return (
    <Section
      background="cream"
      spacing="none"
      className="relative overflow-hidden"
    >
      <HomeResourcesMobile />
      <ResourcesDesktopSection />
      <div
        aria-hidden="true"
        className="pointer-events-none hidden lg:block absolute inset-x-0 bottom-0 z-20 h-40 bg-gradient-to-t from-cream via-cream/80 to-transparent"
      />
    </Section>
  );
}
