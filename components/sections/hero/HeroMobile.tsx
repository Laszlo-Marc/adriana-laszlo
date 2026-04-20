import Image from "next/image";
import { Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";
import { PHONE_DISPLAY, PHONE_HREF } from "@/components/layout/navbar/NavLinks";
import AccentText from "@/components/ui/AccentText";

const certificationLogos = [
  {
    src: "/logos/arpi.jpg",
    alt: "Asociația Română de Psihoterapie Integrativă",
    label: "ARPI",
  },
  {
    src: "/logos/parnell.png",
    alt: "Parnell Institute",
    label: "Parnell Institute",
  },
] as const;

export default function HeroMobile() {
  return (
    <Section
      background="cream"
      spacing="md"
      aria-labelledby="hero-heading-mobile"
      className="mt-20 lg:hidden"
    >
      <Container size="wider" padding="default">
        <div className="mx-auto max-w-2xl">
          {/* Visual block */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[28px] bg-sand/20 shadow-[0_16px_40px_rgba(44,44,44,0.08)]">
              <Image
                src="/home-page/hero-image.jpg"
                alt="Spațiu calm și sigur, asociat terapiei pentru traumă"
                width={1200}
                height={1500}
                priority
                sizes="(min-width: 768px) 42rem, 92vw"
                className="h-92 w-full object-cover object-center sm:h-112"
              />

              <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-linear-to-b from-charcoal/18 via-charcoal/8 to-transparent" />
            </div>

            <div className="relative z-10 -mt-20 px-4 sm:px-6">
              <div className="rounded-3xl items-center justify-center bg-white/70 px-5 py-5 shadow-[0_14px_34px_rgba(44,44,44,0.08)] ring-1 ring-charcoal/6 sm:px-6 sm:py-6">
                <AccentText as="div" className="text-center text-[3rem]">
                  Terapia Traumei
                </AccentText>

                <Text
                  size="base"
                  color="muted"
                  align="center"
                  className="mx-auto mt-3 max-w-xl text-pretty leading-7 sm:mt-4 sm:text-lg"
                >
                  Sprijin pentru traumă, anxietate și atașament, într-un cadru
                  sigur și profund orientat spre vindecare.
                </Text>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full"
            >
              Programează
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
      </Container>

      {/* Institutes / certifications */}
      <div className="mt-8 bg-white/30 py-7 sm:mt-10 sm:py-8">
        <Container size="wider" padding="default">
          <div className="mx-auto max-w-2xl">
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {certificationLogos.map((logo) => (
                <div
                  key={logo.label}
                  className="flex min-h-42 items-center justify-center rounded-3xl bg-white p-4 shadow-[0_10px_24px_rgba(44,44,44,0.05)] ring-1 ring-charcoal/6"
                >
                  <div className="relative w-full max-w-40">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={320}
                      height={220}
                      sizes="(min-width: 768px) 10rem, 42vw"
                      className="h-auto w-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
}
