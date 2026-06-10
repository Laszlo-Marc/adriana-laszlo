import Section from "@/components/ui/Section";

import HomeProblemsDesktop from "./HomeProblemsDesktop";
import HomeProblemsMobileStory from "./HomeProblemsMobile";
import { problemsContent } from "./problemsContent";

export default function HomeProblemsSection() {
  return (
    <Section
      background="cream"
      spacing="none"
      aria-labelledby="home-problems-title"
      className="relative"
      allowOverflow
    >
      <span id="home-problems-title" className="sr-only">
        {problemsContent.title}
      </span>

      <HomeProblemsMobileStory />
      <HomeProblemsDesktop />
    </Section>
  );
}
