import Image from "next/image";
import { Phone } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";
import AccentText from "@/components/ui/AccentText";
import { PHONE_DISPLAY, PHONE_HREF } from "@/components/layout/navbar/NavLinks";

export default function HeroMobile() {
  return (
    <Section
      background="cream"
      spacing="none"
      aria-labelledby="hero-heading-mobile"
      className="relative overflow-hidden lg:hidden"
    >
      <Container size="wider" padding="none">
        <div className="mx-auto max-w-2xl">
          {/* Image */}
          <div className="-mx-4 sm:-mx-6">
            <div className="relative h-[500px] overflow-hidden bg-sand/20 sm:h-[520px]">
              <Image
                src="/home-page/hero-mobile.jpg"
                alt="Spațiu calm și sigur, asociat terapiei pentru traumă"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />

              {/* soft fade into cream background */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-cream/80 to-cream"
              />

              {/* subtle top shade for image depth */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-charcoal/20 to-transparent"
              />
            </div>
          </div>

          {/* Content */}
          <div className="relative -mt-28 px-6 pb-8 text-center">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-20 top-8 z-0 -translate-x-1/2"
            >
              <Image
                src="/backgrounds/double-df.png"
                alt=""
                width={1000}
                height={1400}
                sizes="220px"
                className="h-auto w-full max-w-none opacity-35 sm:w-[20rem]"
              />
            </div>

            <div className="relative z-10">
              {/* Overlapping title group */}
              <div className="mx-auto max-w-xl">
                <Text
                  as="p"
                  size="xs"
                  color="muted-teal"
                  weight="medium"
                  transform="upper"
                  className="mb-4 tracking-[0.14em]"
                  align="center"
                >
                  AF-EMDR · Traumă · Atașament
                </Text>

                <h1 id="hero-heading-mobile">
                  <AccentText
                    as="span"
                    className="block text-[4.35rem] leading-[0.86] text-charcoal"
                  >
                    Terapia Traumei
                  </AccentText>

                  <AccentText
                    as="span"
                    className="mt-5 block text-2xl leading-none text-charcoal"
                  >
                    În Cluj-Napoca
                  </AccentText>
                </h1>
              </div>

              {/* Main copy + CTA */}
              <div className="mx-auto mt-6 max-w-xl">
                <Text
                  size="base"
                  color="muted"
                  className="text-pretty leading-7"
                  align="center"
                >
                  Sprijin pentru traumă, anxietate și atașament, într-un cadru
                  sigur, profesionist și orientat spre schimbare profundă.
                </Text>

                <div className="mt-6 grid grid-cols-1 gap-3">
                  <Button
                    href="/contact"
                    variant="primary"
                    size="lg"
                    className="w-full"
                  >
                    Programează o ședință
                  </Button>

                  <Button
                    href={PHONE_HREF}
                    variant="outline"
                    size="lg"
                    leftIcon={<Phone size={16} strokeWidth={1.75} />}
                    aria-label={`Sună la ${PHONE_DISPLAY}`}
                    className="w-full"
                  >
                    {PHONE_DISPLAY}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
