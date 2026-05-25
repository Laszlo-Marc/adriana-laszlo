import Image from "next/image";

import Section from "@/components/ui/Section";
import HomeProblemsMobile from "./HomeProblemsMobile";
import HomeProblemsDesktop from "./HomeProblemsDesktop";
import BrandOrnament from "@/components/ui/BrandOrnament";

export default function HomeProblemsSection() {
  return (
    <Section
      background="cream"
      spacing="none"
      aria-labelledby="home-problems-title-mobile"
      className="relative overflow-hidden"
    >
      {/* Shared soft atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-24 h-72 w-72 rounded-full bg-teal/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 bottom-10 h-72 w-72 rounded-full bg-purple/8 blur-3xl"
      />

      <HomeProblemsMobile />
      <HomeProblemsDesktop />
    </Section>
  );
}
