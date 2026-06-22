import { Mail } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";
import AccentText from "@/components/ui/AccentText";
import Heading from "@/components/ui/Heading";
import BackgroundVideo from "@/components/ui/BackgroundVideo";

export default function HeroMobile() {
  return (
    <Section
      background="cream"
      spacing="none"
      aria-labelledby="hero-heading-mobile"
      className="relative lg:hidden"
      allowOverflow
    >
      <Container size="full" padding="none">
        <div className="relative min-h-svh overflow-hidden bg-cream">
          <BackgroundVideo
            src="/home-page/hero/hero-video.mp4"
            posterSrc="/home-page/hero/right-hero.jpg"
            priority
            fetchPriority="high"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-cream/18"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,250,242,0.18)_0%,rgba(255,250,242,0.52)_52%,rgba(255,250,242,0.88)_100%)]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-b from-cream via-cream/70 to-transparent"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-linear-to-b from-transparent via-cream/78 to-cream"
          />

          <div className="relative z-10 flex min-h-svh items-center justify-center px-6 pb-6 pt-30">
            <div className="mx-auto max-w-sm">
              <Text
                as="p"
                size="xs"
                weight="medium"
                transform="upper"
                align="center"
                className="mb-5 tracking-[0.18em]"
              >
                AF-EMDR · Traumă · Atașament
              </Text>

              <Heading as="h1" id="hero-heading-mobile" align="center">
                <AccentText
                  as="span"
                  className="block text-[7rem] leading-[0.82] text-charcoal"
                >
                  Terapia Traumei
                </AccentText>

                <AccentText
                  as="span"
                  className="mb-5 block text-[1.85rem] leading-none text-charcoal"
                >
                  În Cluj-Napoca
                </AccentText>
              </Heading>

              <div className="mx-auto mt-12 max-w-xs">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="w-full shadow-sm"
                  leftIcon={<Mail size={20} aria-hidden="true" />}
                >
                  Programează o discuție
                </Button>
              </div>

              <div className="mx-auto mt-6 px-5 py-4">
                <Text
                  as="p"
                  size="lg"
                  weight="medium"
                  transform="upper"
                  align="center"
                  className="mb-5 tracking-[0.18em]"
                >
                  O metodă unică în România
                </Text>

                <div className="text-center">
                  <AccentText
                    as="span"
                    className="mb-5 block text-[2.35rem] leading-[0.9] text-charcoal"
                  >
                    Attachment-Focused
                  </AccentText>

                  <AccentText
                    as="span"
                    className="mt-1 block text-[4rem] leading-[0.78] text-charcoal"
                  >
                    EMDR
                  </AccentText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
