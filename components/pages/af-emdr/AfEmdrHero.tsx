import Image from "next/image";
import Link from "next/link";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Section from "@/components/ui/Section";

import { afEmdrHeroContent } from "./afEmdrContent";

export default function AfEmdrHero() {
  const { eyebrow, title, subtitle, description, primaryCta, media } =
    afEmdrHeroContent;

  return (
    <Section
      aria-labelledby="af-emdr-hero-title"
      spacing="none"
      className="relative isolate min-h-[100svh] overflow-hidden bg-cream"
    >
      <Image
        src={media.posterSrc}
        alt={media.alt}
        fill
        priority
        sizes="100vw"
        className="z-0 object-cover object-center md:hidden"
      />

      <video
        className="absolute inset-0 z-0 hidden size-full object-cover md:block"
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
        className="absolute left-1/2 top-[48%] z-20 h-[34rem] w-[min(92vw,58rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cream/50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-20 h-48 bg-gradient-to-b from-cream/55 via-cream/20 to-transparent"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 z-20 h-[42vh] bg-gradient-to-t from-cream via-cream/85 via-45% to-transparent"
      />

      <Container
        size="wide"
        padding="default"
        className="relative z-30 flex min-h-[100svh] items-center justify-center pb-32 pt-32 lg:pb-28 lg:pt-28"
      >
        <div className="mx-auto flex  flex-col items-center text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
            {eyebrow}
          </p>

          <Heading
            id="af-emdr-hero-title"
            as="h1"
            size="display"
            font="accent"
            align="center"
            className="mx-auto text-balance text-[clamp(5.5rem,24vw,9rem)] leading-[0.78] text-charcoal drop-shadow-[0_2px_20px_rgba(255,250,242,0.8)] lg:text-[clamp(9rem,13vw,15rem)]"
          >
            {title}
          </Heading>

          <p className="mt-7 max-w-3xl text-balance font-display text-[clamp(1.8rem,4vw,3.6rem)] leading-[0.95] tracking-[0.08em] text-charcoal">
            {subtitle}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="primary">
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
