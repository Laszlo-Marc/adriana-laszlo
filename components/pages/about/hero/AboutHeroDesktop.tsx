// components/pages/about/hero/AboutHeroDesktop.tsx

import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import AccentText from "@/components/ui/AccentText";

import { aboutHeroContent } from "./data";

export default function AboutHeroDesktop() {
  return (
    <Section
      background="cream"
      spacingTop="lg"
      spacing="none"
      aria-labelledby="about-hero-heading"
      className="relative hidden overflow-hidden lg:block"
    >
      <Container size="full" padding="default">
        <div className="relative min-h-[calc(100svh-5rem)]">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-136 w-136 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 blur-2xl"
          />

          <div
            aria-hidden="true"
            className="absolute right-8 top-24 h-52 w-52 rounded-full bg-purple/10 blur-3xl"
          />

          <div className="relative grid min-h-[calc(100svh-5rem)] grid-cols-[0.95fr_1fr_0.95fr] items-center gap-20">
            <div className="relative z-20 order-3 text-left">
              <p className="font-script text-4xl leading-tight text-charcoal/80">
                {aboutHeroContent.editorialLine}
              </p>
            </div>

            <div className="relative z-10 order-2 flex min-h-[620px] items-end justify-center">
              <div
                aria-hidden="true"
                className="absolute bottom-16 left-1/2 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-teal/25"
              />

              <Image
                src={aboutHeroContent.desktopImage.src}
                alt={aboutHeroContent.desktopImage.alt}
                width={620}
                height={820}
                priority
                sizes="32vw"
                className="relative z-10 h-auto max-w-[500px] object-contain drop-shadow-2xl"
              />
            </div>

            <div className="relative z-20 order-1 max-w-3xl text-left">
              <AccentText>{aboutHeroContent.eyebrow}</AccentText>

              <Heading
                id="about-hero-heading"
                as="h1"
                size="h3"
                className="mt-4"
              >
                Psihoterapeut specializat în traumă și{" "}
                <span className="text-teal">
                  {aboutHeroContent.highlightedTitle}
                </span>
              </Heading>

              <Text size="lg" className="mt-6 text-charcoal/75">
                {aboutHeroContent.description}
              </Text>

              <div className="mt-8 flex justify-start gap-3">
                <Button>
                  <Link href={aboutHeroContent.primaryCta.href}>
                    {aboutHeroContent.primaryCta.label}
                  </Link>
                </Button>

                <Button variant="outline">
                  <Link href={aboutHeroContent.secondaryCta.href}>
                    {aboutHeroContent.secondaryCta.label}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
