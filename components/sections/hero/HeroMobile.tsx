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
      spacing="md"
      aria-labelledby="hero-heading-mobile"
      className="relative overflow-hidden lg:hidden"
    >
      <Container size="wider" padding="none">
        <div className="mx-auto max-w-2xl">
          <div className="-mx-4 sm:-mx-6">
            <div className="relative overflow-hidden bg-sand/20">
              <Image
                src="/home-page/left-image.jpg"
                alt="Spațiu calm și sigur, asociat terapiei pentru traumă"
                width={1200}
                height={1500}
                priority
                sizes="100vw"
                className="h-[20rem] w-full object-cover object-center"
              />
            </div>
          </div>

          <div className="relative px-6 pt-6 pb-6 text-center">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-0 z-0 -translate-x-1/2"
            >
              <Image
                src="/backgrounds/double-df.png"
                alt=""
                width={1000}
                height={1400}
                sizes="220px"
                className="h-auto w-[15rem] max-w-none opacity-40 sm:w-[20rem]"
              />
            </div>

            <div className="relative z-10">
              <Text
                as="p"
                size="xs"
                color="muted-teal"
                weight="medium"
                transform="upper"
                className="mb-6 tracking-[0.14em]"
                align="center"
              >
                AF-EMDR · Traumă · Atașament
              </Text>

              <AccentText className="mt-6 text-[4rem] leading-none text-charcoal">
                Terapie Traumei
              </AccentText>

              <AccentText as="div" className="mt-6 text-2xl leading-none">
                În Cluj-Napoca
              </AccentText>

              <Text
                size="base"
                color="muted"
                className="mt-4 max-w-xl text-pretty leading-7"
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
      </Container>
    </Section>
  );
}
