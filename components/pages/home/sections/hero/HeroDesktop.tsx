import Image from "next/image";
import { Phone } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";
import AccentText from "@/components/ui/AccentText";
import { PHONE_DISPLAY, PHONE_HREF } from "@/components/layout/navbar/NavLinks";
import Heading from "@/components/ui/Heading";

export default function HeroDesktop() {
  return (
    <Section
      background="cream"
      spacing="none"
      aria-labelledby="hero-heading-desktop"
      className="mt-20 hidden overflow-hidden lg:block"
    >
      <Container size="full" padding="none">
        <div className="relative mx-auto min-h-205 max-w-400 px-8 pb-20 pt-24 xl:min-h-220 xl:px-12 xl:pt-28">
          {/* Brand thread ornaments */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-1"
          >
            {/* Left thread */}
            <div className="absolute -left-8 -top-18 w-60 opacity-45 xl:-left-4 xl:w-65">
              <Image
                src="/backgrounds/single.png"
                alt=""
                width={480}
                height={2048}
                sizes="(min-width: 1280px) 272px, 240px"
                className="h-auto w-full"
              />
            </div>

            {/* Right thread */}
            <div className="absolute -right-15 -top-18 w-60 scale-x-[-1] opacity-45 xl:-right-3 xl:w-65">
              <Image
                src="/backgrounds/single.png"
                alt=""
                width={480}
                height={2048}
                sizes="(min-width: 1280px) 272px, 240px"
                className="h-auto w-full"
              />
            </div>
          </div>

          {/* soft ambient shapes */}
          <div
            aria-hidden="true"
            className="absolute left-[18%] top-[18%] z-0 h-72 w-72 rounded-full bg-teal-soft/40 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute right-[14%] top-[22%] z-0 h-80 w-80 rounded-full bg-sand/60 blur-3xl"
          />

          {/* Side visuals */}
          <div className="pointer-events-none absolute inset-0 z-2">
            <div className="absolute left-0 top-37.5 w-[23vw] max-w-90 min-w-60 xl:top-37.5 xl:max-w-100">
              <div className="overflow-hidden rounded-md bg-white/40 shadow-[0_20px_60px_rgba(44,44,44,0.06)]">
                <Image
                  src="/home-page/left-hero.jpg"
                  alt="Cadru interior calm și luminos"
                  width={700}
                  height={920}
                  priority
                  sizes="(min-width: 1280px) 400px, 23vw"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            <div className="absolute right-0 top-37.5 w-[23vw] max-w-90 min-w-60 xl:top-37.5 xl:max-w-100">
              <div className="overflow-hidden rounded-md bg-white/40 shadow-[0_20px_60px_rgba(44,44,44,0.06)]">
                <Image
                  src="/home-page/hero-mobile.jpg"
                  alt="Element natural în tonuri calme de verde și bej"
                  width={700}
                  height={920}
                  priority
                  sizes="(min-width: 1280px) 400px, 23vw"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="relative z-10 mx-auto flex min-h-155 max-w-4xl flex-col items-center justify-center text-center">
            <Text
              as="p"
              size="sm"
              color="muted-teal"
              weight="medium"
              transform="upper"
              align="center"
              className="mb-6 tracking-[0.18em]"
            >
              AF-EMDR · Traumă · Atașament
            </Text>

            <Heading as="h1" size="display" case="normal" className="max-w-2xl">
              <AccentText className="ml-2 inline-block text-[1.5em] leading-none">
                Terapia Traumei
              </AccentText>
            </Heading>

            <AccentText className="text-[2rem]">In Cluj-Napoca</AccentText>

            <Text
              size="lg"
              color="muted"
              align="center"
              className="mt-8 max-w-2xl text-lg leading-8 xl:text-[1.18rem]"
            >
              Sprijin psihoterapeutic pentru traumă, anxietate și răni de
              atașament, într-un cadru sigur, profund și orientat spre schimbare
              reală.
            </Text>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Programează o ședință
              </Button>

              <Button
                href={PHONE_HREF}
                variant="outline"
                size="lg"
                leftIcon={<Phone size={16} strokeWidth={1.75} />}
                aria-label={`Sună la ${PHONE_DISPLAY}`}
              >
                {PHONE_DISPLAY}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
