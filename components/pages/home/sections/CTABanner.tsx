import Image from "next/image";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import { PHONE_HREF } from "@/components/layout/navbar/NavLinks";
import { Mail, MessageCircle } from "lucide-react";

export default function FinalCTA() {
  return (
    <Section
      spacing="md"
      aria-labelledby="final-cta-heading"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#c894d6_0%,#b8b5dc_42%,#94d6c8_100%)]"
    >
      {/* soft atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.28),transparent_42%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-white/10"
      />

      {/* background brand elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 hidden w-40 lg:block"
      >
        <Image
          src="/backgrounds/df-teal-down.png"
          alt=""
          fill
          className="object-contain object-left opacity-60 motion-safe:animate-cta-float-slow"
          sizes="160px"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 hidden h-48 w-48 md:block lg:h-64 lg:w-64"
      >
        <Image
          src="/backgrounds/df-purple-up.png"
          alt=""
          fill
          className="object-contain object-top-right opacity-60 motion-safe:animate-cta-float"
          sizes="256px"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-6 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-white/20 blur-3xl"
      />

      <Container size="wide" className="relative z-10">
        <div className="mx-auto max-w-5xl">
          <div className="relative rounded-4xl border border-white/20 bg-white px-6 py-12 text-center shadow-[0_30px_80px_rgba(32,24,43,0.22)] backdrop-blur-md sm:px-10 sm:py-14 lg:px-16 lg:py-16">
            {/* subtle inner decorative layer */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,transparent_35%,rgba(255,255,255,0.04)_100%)]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-8 top-1/2 hidden h-24 w-24 -translate-y-1/2 lg:block"
            >
              <Image
                src="/backgrounds/dragonfly.png"
                alt=""
                fill
                className="object-contain opacity-60"
                sizes="96px"
              />
            </div>

            <div className="relative mx-auto max-w-3xl">
              <Heading as="h2" size="h2" align="center">
                Poți începe să lucrezi cu trauma ta, în siguranță.
              </Heading>

              <Text size="lg" align="center" className="mx-auto mt-5 ">
                Îți ofer un spațiu sigur, ghidat, în care putem lucra împreună
                asupra traumelor și tiparelor care te blochează, în ritmul tău.
              </Text>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <Button
                  size="lg"
                  leftIcon={<MessageCircle />}
                  variant="primary"
                >
                  Trimite un mesaj
                </Button>

                <Button
                  size="lg"
                  variant="purple"
                  leftIcon={<Mail />}
                  aria-label="Programează o discuție"
                >
                  <a href={PHONE_HREF}>Programează o discuție</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
