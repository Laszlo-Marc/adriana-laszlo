import Image from "next/image";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

import { afEmdrHeroContent } from "./afEmdrContent";

export default function AfEmdrHero() {
  const { eyebrow, title, subtitle, primaryCta, media } = afEmdrHeroContent;

  return (
    <Section
      background="cream"
      spacing="none"
      aria-labelledby="af-emdr-hero-title"
      className="relative isolate min-h-svh overflow-hidden"
    >
      <Image
        src={media.posterSrc}
        alt=""
        aria-hidden="true"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="z-0 object-cover object-center"
      />

      <video
        className="absolute inset-0 z-[1] size-full object-cover object-center"
        src={media.videoSrc}
        poster={media.posterSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />

      <div aria-hidden="true" className="absolute inset-0 z-10 bg-cream/20" />

      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[48%] z-20 h-136 w-[min(92vw,58rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cream/50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-20 h-48 bg-linear-to-b from-cream/55 via-cream/20 to-transparent"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 z-20 h-[42vh] bg-linear-to-t from-cream via-cream/85 via-45% to-transparent"
      />

      <Container
        size="wide"
        padding="default"
        className="relative z-30 flex min-h-svh items-center justify-center pb-32 pt-32 lg:pb-28 lg:pt-28"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
            {eyebrow}
          </p>

          <Heading
            id="af-emdr-hero-title"
            as="h1"
            size="display"
            font="accent"
            align="center"
            className="mx-auto text-balance text-[clamp(5.2rem,24vw,9rem)] leading-[0.78] text-charcoal drop-shadow-[0_2px_20px_rgba(255,250,242,0.8)] lg:text-[clamp(9rem,13vw,13rem)]"
          >
            {title}
          </Heading>

          <p className="mt-7 max-w-3xl text-balance font-display text-[clamp(1.7rem,4vw,3.6rem)] leading-[0.95] tracking-[0.08em] text-charcoal">
            {subtitle}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={primaryCta.href} variant="primary">
              {primaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
