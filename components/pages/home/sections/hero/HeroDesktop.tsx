import Image from "next/image";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";
import AccentText from "@/components/ui/AccentText";
import Heading from "@/components/ui/Heading";

export default function HeroDesktop() {
  return (
    <Section
      background="cream"
      spacing="none"
      aria-labelledby="hero-heading-desktop"
      className=" hidden overflow-hidden lg:block"
    >
      <Container size="full" padding="none">
        <div className="relative min-h-svh overflow-hidden">
          {/* Soft center atmosphere */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sand/20 blur-3xl"
          />

          <div className="relative z-10 grid min-h-svh grid-cols-[31vw_minmax(420px,1fr)_31vw] items-stretch">
            {/* Left image panel */}
            <div className="relative min-h-full overflow-hidden">
              <Image
                src="/home-page/hero/left-hero.jpg"
                alt="Cabinet de psihoterapie luminos și calm"
                fill
                priority
                sizes="31vw"
                className="object-cover object-center"
              />

              {/* Fade image into center */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 right-0 w-2/3 bg-gradient-to-l from-cream via-cream/75 to-transparent"
              />

              {/* Soft fade at bottom */}
              {/* <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-cream/80"
              /> */}
            </div>

            {/* Center content */}
            <div className="relative flex min-h-full items-center justify-center px-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-30 top-0 z-0 h-250 w-120 opacity-20"
              >
                <Image
                  src="/backgrounds/double-simple.png"
                  alt=""
                  fill
                  sizes="360px"
                  className="object-contain"
                />
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-30 top-30 z-0 h-40 w-50 opacity-20"
              >
                <Image
                  src="/backgrounds/df-purple-down.png"
                  alt=""
                  fill
                  sizes="360px"
                  className="object-contain "
                />
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-20 bottom-20 z-0 h-40 w-50 opacity-20"
              >
                <Image
                  src="/backgrounds/dragonfly.png"
                  alt=""
                  fill
                  sizes="360px"
                  className="object-contain "
                />
              </div>
              <div className="mx-auto max-w-[680px] text-center">
                <Text
                  as="p"
                  size="sm"
                  color="muted-teal"
                  weight="medium"
                  transform="upper"
                  align="center"
                  className="mb-6 tracking-[0.22em]"
                >
                  AF-EMDR · Traumă · Atașament
                </Text>

                <Heading as="h1" size="display" className="mx-auto">
                  <AccentText className="inline-block text-[1.45em] leading-none">
                    Terapia Traumei
                  </AccentText>
                </Heading>

                <AccentText className="mt-4 block text-[2.05rem] leading-none">
                  În Cluj-Napoca
                </AccentText>

                <Text
                  size="lg"
                  color="muted"
                  align="center"
                  className="mx-auto mt-8 max-w-[560px] text-pretty leading-8"
                >
                  Sprijin pentru traumă, anxietate și atașament, într-un spațiu
                  terapeutic sigur, cald și orientat spre schimbări reale.
                </Text>

                <div className="mt-10 flex justify-center">
                  <Button href="/contact" variant="primary" size="lg">
                    Programează o primă discuție
                  </Button>
                </div>
              </div>
            </div>

            {/* Right image panel */}
            <div className="relative min-h-full overflow-hidden">
              <Image
                src="/home-page/hero/right-hero.jpg"
                alt="Detaliu natural dintr-un cabinet de psihoterapie"
                fill
                priority
                sizes="31vw"
                className="object-cover object-right"
              />

              {/* Fade image into center */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-cream via-cream/75 to-transparent"
              />

              {/* Soft fade at bottom */}
              {/* <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-cream/80"
              /> */}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
