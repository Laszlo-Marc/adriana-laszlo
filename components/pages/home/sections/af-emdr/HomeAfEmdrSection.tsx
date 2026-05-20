import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import AccentText from "@/components/ui/AccentText";
import Button from "@/components/ui/Button";

export default function HomeAfEmdrBannerSection() {
  return (
    <Section
      background="teal-muted"
      spacing="none"
      aria-labelledby="af-emdr-heading"
      className="relative overflow-hidden"
    >
      {/* Mobile decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-16 top-[420px] z-0 h-[520px] w-56 opacity-30 md:hidden"
      >
        <Image
          src="/backgrounds/double-simple.png"
          alt=""
          fill
          className="object-contain object-top"
          sizes="224px"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-[520px] z-0 h-60 w-36 opacity-35 md:hidden"
      >
        <Image
          src="/backgrounds/df-purple-up.png"
          alt=""
          fill
          className="object-contain"
          sizes="144px"
        />
      </div>

      <Container size="full" padding="none">
        <div className="relative z-10 lg:grid lg:min-h-[720px] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-stretch">
          {/* Mobile image header / Desktop image right */}
          <div className="relative h-[460px] overflow-hidden bg-charcoal/10 md:h-[520px] lg:order-2 lg:h-auto lg:min-h-[720px]">
            <Image
              src="/home-page/certifications.jpg"
              alt="Certificate și diplome profesionale în cabinetul Adrianei Laszlo"
              fill
              priority={false}
              className="object-cover object-center lg:object-[center_center]"
              sizes="(min-width: 1024px) 55vw, 100vw"
            />

            {/* General darkening for better mood */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-charcoal/15"
            />

            {/* Mobile fade into section background */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent via-muted-teal/60 to-muted-teal lg:hidden"
            />

            {/* Desktop fade from text side into image */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 hidden w-48 bg-gradient-to-r from-muted-teal via-muted-teal/80 to-transparent lg:block"
            />

            {/* Desktop bottom fade */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-40 bg-gradient-to-b from-transparent to-muted-teal/75 lg:block"
            />
          </div>

          {/* Content */}
          <div className="relative px-6 pb-12 pt-0 text-center sm:px-8 lg:order-1 lg:flex lg:items-center lg:px-14 lg:py-24 lg:text-left xl:px-20">
            {/* Desktop decorative elements */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-0 z-0 hidden h-full w-60 opacity-45 lg:block"
            >
              <Image
                src="/backgrounds/single.png"
                alt=""
                fill
                className="object-contain object-left-top"
                sizes="144px"
              />
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-8 left-10 z-0 hidden h-36 w-36 opacity-45 lg:block"
            >
              <Image
                src="/backgrounds/df-purple-up.png"
                alt=""
                fill
                className="object-contain"
                sizes="144px"
              />
            </div>

            <div className="relative z-10 mx-auto -mt-10 max-w-2xl lg:mt-0 lg:mx-0">
              <AccentText className="justify-center text-center text-white/90 lg:justify-start lg:text-left">
                Formare profesională specializată
              </AccentText>

              <Heading
                as="h2"
                size="h1"
                align="center"
                color="cream"
                className="mt-4 text-[2.15rem] leading-[1.05] text-white lg:text-left"
              >
                Specializare în traumă și AF-EMDR
              </Heading>

              <Text
                size="lg"
                align="center"
                color="cream"
                className="mx-auto mt-5 text-white/95 lg:mx-0 lg:text-left"
              >
                O abordare blândă și structurată pentru procesarea traumelor,
                adaptată ritmului și siguranței fiecărei persoane.
              </Text>

              <Text
                align="center"
                color="cream"
                className="mx-auto mt-5 text-sm leading-7 text-white/85 sm:text-base lg:mx-0 lg:text-left"
              >
                În cabinet, formarea profesională se traduce într-un cadru
                terapeutic atent, bazat pe reglare emoțională, relație și
                înțelegerea profundă a experiențelor dificile.
              </Text>
              <div className="mt-8 flex justify-center lg:justify-start">
                <Button
                  href="/contact"
                  leftIcon={<Mail className="h-4 w-4" />}
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
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
