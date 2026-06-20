import Image from "next/image";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import AccentText from "@/components/ui/AccentText";

import { aboutHeroContent } from "./data";

export default function AboutHeroDesktop() {
  return (
    <div className="relative hidden overflow-hidden pt-20 lg:block">
      <Container size="full" padding="default">
        <div className="relative min-h-[calc(100svh-5rem)]">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-136 w-136 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 blur-2xl"
          />

          <div className="relative grid min-h-[calc(100svh-5rem)] grid-cols-[0.95fr_1fr_0.95fr] items-center gap-20">
            <div className="relative z-20 order-3 text-left motion-safe:animate-[heroFadeUp_700ms_cubic-bezier(0.22,1,0.36,1)_both]">
              <p className="font-script text-4xl leading-tight text-charcoal/80">
                {aboutHeroContent.editorialLine}
              </p>
            </div>

            <div className="relative z-10 order-2 flex min-h-155 items-end justify-center">
              <div className="relative z-10">
                <Image
                  src={aboutHeroContent.desktopImage.src}
                  alt={aboutHeroContent.desktopImage.alt}
                  width={620}
                  height={820}
                  loading="eager"
                  fetchPriority="high"
                  sizes="(max-width: 1023px) 1px, 32vw"
                  className="relative z-10 h-auto max-w-125 object-contain"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-40 bg-linear-to-t from-cream via-cream/75 to-transparent"
                />
              </div>
            </div>

            <div className="relative z-20 order-1 max-w-3xl text-left motion-safe:animate-[heroFadeUp_700ms_cubic-bezier(0.22,1,0.36,1)_both]">
              <AccentText>{aboutHeroContent.eyebrow}</AccentText>

              <Heading as="h1" size="h3" className="mt-4">
                Psihoterapeut integrativ specializat în traumă și{" "}
                <span className="text-teal">
                  {aboutHeroContent.highlightedTitle}
                </span>
              </Heading>

              <Text size="lg" className="mt-6 text-charcoal/75">
                {aboutHeroContent.description}
              </Text>

              <div className="mt-8 flex justify-start gap-3">
                <Button href={aboutHeroContent.primaryCta.href}>
                  {aboutHeroContent.primaryCta.label}
                </Button>

                <Button
                  href={aboutHeroContent.secondaryCta.href}
                  variant="outline"
                >
                  {aboutHeroContent.secondaryCta.label}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
