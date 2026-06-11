import Section from "@/components/ui/Section";

import AboutHeroDesktop from "./AboutHeroDesktop";
import AboutHeroMobile from "./AboutHeroMobile";
import { aboutHeroContent } from "./data";

export default function AboutHeroSection() {
  return (
    <Section
      background="cream"
      spacing="none"
      aria-labelledby="about-hero-heading"
      className="relative overflow-hidden"
    >
      <span id="about-hero-heading" className="sr-only">
        {aboutHeroContent.title}
      </span>

      <AboutHeroMobile />
      <AboutHeroDesktop />
    </Section>
  );
}
