import Image from "next/image";
import { Mail, Phone } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";
import AccentText from "@/components/ui/AccentText";
import { PHONE_DISPLAY, PHONE_HREF } from "@/components/layout/navbar/NavLinks";
import BrandOrnament from "@/components/ui/BrandOrnament";

export default function HeroMobile() {
  return (
    <Section
      background="cream"
      spacing="none"
      aria-labelledby="hero-heading-mobile"
      className="relative lg:hidden"
      allowOverflow
    >
      <Container size="wider" padding="none">
        <div className="mx-auto max-w-2xl">
          <div className="-mx-4 sm:-mx-6">
            <div className="relative h-135 bg-sand/20 sm:h-145">
              <Image
                src="/home-page/hero-mobile.jpg"
                alt="Spațiu calm și sigur, asociat terapiei pentru traumă"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-charcoal/20 via-charcoal/5 to-transparent"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent via-cream/88 to-cream"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-cream/5"
              />
            </div>
          </div>

          <div className="relative -mt-40 px-6 pb-14 text-center">
            <BrandOrnament
              variant="double-df"
              className="-left-16 top-3 w-76 opacity-[0.22]"
              sizes="304px"
            />

            <div className="relative z-10">
              <div className="mx-auto max-w-xl">
                <Text
                  as="p"
                  size="xs"
                  color="muted-teal"
                  weight="medium"
                  transform="upper"
                  className="mb-4 tracking-[0.16em]"
                  align="center"
                >
                  AF-EMDR · Traumă · Atașament
                </Text>

                <h1 id="hero-heading-mobile">
                  <AccentText
                    as="span"
                    className="block text-[3.7rem] leading-[0.86] text-charcoal"
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

                <div className="mt-7 grid grid-cols-1 gap-3">
                  <Button
                    href="/contact"
                    variant="primary"
                    size="lg"
                    className="w-full shadow-sm"
                    leftIcon={<Mail size={20} />}
                  >
                    Programează o ședință
                  </Button>

                  <Button
                    href={PHONE_HREF}
                    variant="outline"
                    size="lg"
                    leftIcon={<Phone size={16} strokeWidth={1.75} />}
                    aria-label={`Sună la ${PHONE_DISPLAY}`}
                    className="w-full bg-cream/70 backdrop-blur-sm"
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
