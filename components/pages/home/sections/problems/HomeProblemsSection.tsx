import Section from "@/components/ui/Section";

import HomeProblemsDesktop from "./HomeProblemsDesktop";

import { problemsContent } from "./problemsContent";
import HomeProblemsMobileStory from "./HomeProblemsMobile";

export default function HomeProblemsSection() {
  return (
    <Section
      background="cream"
      spacing="none"
      aria-labelledby="home-problems-title"
      className="relative overflow-x-clip "
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
