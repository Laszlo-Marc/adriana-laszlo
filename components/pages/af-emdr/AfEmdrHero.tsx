import Image from "next/image";
import Link from "next/link";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

import Section from "@/components/ui/Section";

import { afEmdrHeroContent } from "./afEmdrContent";

export default function AfEmdrHero() {
  const { title, description, primaryCta, image } = afEmdrHeroContent;

  return (
    <Section
      aria-labelledby="af-emdr-hero-title"
      spacing="none"
      className="relative isolate min-h-[100svh] overflow-hidden bg-cream"
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="z-0 object-cover"
      />

      {/* Soft image wash — keeps the image visible without making it dark */}
      <div aria-hidden="true" className="absolute inset-0 z-10 bg-cream/18" />

      {/* Subtle center readability glow */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 z-20 h-[34rem] w-[min(92vw,52rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cream/45 blur-3xl"
      />
      {/* Top softness so navbar area does not feel harsh */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-20 h-44 bg-gradient-to-b from-cream/45 to-transparent"
      />

      <Container
        size="wide"
        padding="default"
        className="relative z-30 flex min-h-[100svh] items-center justify-center pb-24 pt-32 sm:pb-28 lg:pb-0 lg:pt-20"
      >
        <div className="mx-auto max-w-4xl text-center">
          <Heading
            id="af-emdr-hero-title"
            as="h1"
            size="display"
            font="accent"
            align="center"
            className="mx-auto max-w-4xl text-balance text-charcoal drop-shadow-[0_2px_14px_rgba(255,250,242,0.55)] text-[clamp(4rem,4vw,4rem)] lg:text-[clamp(8rem,8vw,8rem)]"
          >
            {title}
          </Heading>

          <Text
            size="lg"
            className="mx-auto mt-6 max-w-2xl text-balance text-charcoal/85"
            align="center"
          >
            {description}
          </Text>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="primary">
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
