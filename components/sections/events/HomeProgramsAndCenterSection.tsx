import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import AccentText from "@/components/ui/AccentText";

import ProgramsImageMarquee from "./ProgramsImageMarquee";
import { homeProgramsCarouselImages } from "./events-data";

export default function HomeProgramsAndCenterSection() {
  return (
    <Section
      background="cream"
      spacing="none"
      aria-labelledby="programs-center-heading"
      className="overflow-hidden"
    >
      <Container size="full" padding="default">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <div className="relative h-40 w-50 sm:h-44 sm:w-44 lg:h-48 lg:w-60">
            <Image
              src="/home-page/tc-banner.svg"
              alt="Trauma Center"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 160px, (max-width: 1024px) 176px, 192px"
              priority={false}
            />
          </div>

          <Heading as="h2" size="h1" className="mt-6 " align="center">
            Evenimentele <AccentText>Trauma Center</AccentText>
          </Heading>

          <Text className="mt-2 " align="center">
            Trauma Center este spațiul fondat de Adriana László pentru lucru
            atent ghidat cu trauma, reglare emoțională și experiențe de grup
            desfășurate într-un cadru profesionist, cald și conținător.
          </Text>

          <ProgramsImageMarquee
            images={homeProgramsCarouselImages}
            className="relative  mt-10 w-screen  sm:mt-12 lg:mt-14"
          />

          <div className="mt-10 grid w-full max-w-md grid-cols-2 gap-3 sm:mt-12 sm:max-w-xl">
            <Button
              variant="primary"
              leftIcon={<Calendar className="hidden sm:block" />}
              size="lg"
              className="w-full min-w-0 px-3 text-[11px] sm:px-5 sm:text-sm"
            >
              <Link href="/evenimente" className="block w-full truncate">
                <span className="sm:hidden">Evenimente</span>
                <span className="hidden sm:inline">
                  Vezi toate evenimentele
                </span>
              </Link>
            </Button>

            <Button
              variant="purple"
              rightIcon={<ArrowRight className="hidden sm:block" />}
              size="lg"
              className="w-full min-w-0 px-3 text-[11px] sm:px-5 sm:text-sm"
            >
              <Link
                href="https://traumacenter.ro"
                target="_blank"
                rel="noreferrer"
                className="block w-full truncate"
              >
                <span className="sm:hidden">Trauma Center</span>
                <span className="hidden sm:inline">
                  Descoperă Trauma Center
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
