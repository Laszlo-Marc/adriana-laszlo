import Section from "@/components/ui/Section";

import HomeAboutTeaserMobile from "./HomeAboutTeaserMobile";
import HomeAboutTeaserDesktop from "./HomeAboutTeaserDesktop";

export default function HomeAboutTeaserSection() {
  return (
    <Section
      background="cream"
      spacing="none"
      aria-labelledby="home-about-title"
      className="relative overflow-x-clip"
      allowOverflow
    >
      <HomeAboutTeaserMobile />
      <HomeAboutTeaserDesktop />
    </Section>
  );
}
