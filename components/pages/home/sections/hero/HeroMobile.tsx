import Image from "next/image";
import { Mail } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";
import AccentText from "@/components/ui/AccentText";

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
        <div className="relative min-h-[calc(100svh-4.75rem)] overflow-hidden">
          <Image
            src="/home-page/hero/hero-mobile.jpg"
            alt="Spațiu calm și sigur, asociat terapiei pentru traumă"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Readability overlays */}
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
            className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cream via-cream/70 to-transparent"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent via-cream/78 to-cream"
          />

          {/* Optional brand ornament behind text */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[49%] z-0 h-[440px] w-[300px] -translate-x-1/2 -translate-y-1/2 opacity-[0.09]"
          >
            <Image
              src="/brand/double-vine.png"
              alt=""
              fill
              sizes="300px"
              className="object-contain"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex min-h-svh items-center justify-center px-6 pb-14 pt-10 text-center">
            <div className="mx-auto max-w-sm">
              <Text
                as="p"
                size="xs"
                weight="medium"
                transform="upper"
                className="mb-5 tracking-[0.18em]"
                align="center"
              >
                AF-EMDR · Traumă · Atașament
              </Text>

              <h1 id="hero-heading-mobile">
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
              </h1>

              <div className="mx-auto mt-12 max-w-xs">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="w-full shadow-sm"
                  leftIcon={<Mail size={20} />}
                >
                  Programează o discuție
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
