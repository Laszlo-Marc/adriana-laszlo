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

      {/* continuation from hero: faded organic line behind the image area */}
      <BrandOrnament
        variant="double-simple"
        className="-left-22 -top-10 w-68 opacity-[0.14] lg:-left-12 lg:top-8 lg:w-80 lg:opacity-[0.16]"
        sizes="320px"
      />

      {/* small exit marker toward About section */}
      <BrandOrnament
        variant="dragonfly"
        className="right-8 bottom-18 w-18 opacity-[0.2] lg:right-[18%] lg:bottom-24 lg:w-22"
        sizes="88px"
      />
      {/* Desktop continuity ornaments */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-35 -top-5 z-0 hidden w-70 opacity-30 lg:block"
      >
        <Image
          src="/backgrounds/single.png"
          alt=""
          width={1000}
          height={1400}
          sizes="300px"
          className="h-auto w-full max-w-none"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-20 z-10 hidden w-[9rem] opacity-35 md:right-45 md:top-1/2 md:w-[13rem] md:-translate-y-1/2 lg:block"
      >
        <Image
          src="/backgrounds/single.png"
          alt=""
          width={700}
          height={1100}
          sizes="180px"
          className="h-auto w-full max-w-none"
        />
      </div>

      <HomeProblemsMobile />
      <HomeProblemsDesktop />
    </Section>
  );
}
