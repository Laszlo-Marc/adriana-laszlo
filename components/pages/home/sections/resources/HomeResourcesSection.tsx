import Section from "@/components/ui/Section";
import { HomeResourcesMobile } from "./HomeResourcesMobile";
import ResourcesDesktopSection from "./HomeResourcesDesktop";

export default function HomeResourcesSection() {
  return (
    <Section
      background="cream"
      spacing="none"
      aria-labelledby="home-resources-title"
      className="relative overflow-hidden"
    >
      <span id="home-resources-title" className="sr-only">
        Resurse pentru continuarea procesului terapeutic
      </span>

      <HomeResourcesMobile />
      <ResourcesDesktopSection />
    </Section>
  );
}
