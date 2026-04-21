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
          <div className="relative h-28 w-28 ">
            <Image
              src="/home-page/tc-banner.svg"
              alt="Trauma Center"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 112px, (max-width: 1024px) 128px, 160px"
              priority={false}
            />
          </div>
          <Text align="center" size="lg" color="teal" weight="medium">
            Workshopuri, ateliere și programe de grup
          </Text>
          <Heading as="h2" size="h1" className="mt-6 " align="center">
            Evenimentele <AccentText>Trauma Center</AccentText>
          </Heading>

          <Text className="mt-5 " align="center">
            Trauma Center este spațiul fondat de Adriana László pentru lucru
            atent ghidat cu trauma, reglare emoțională și experiențe de grup
            desfășurate într-un cadru profesionist, cald și conținător.
          </Text>

          <ProgramsImageMarquee
            images={homeProgramsCarouselImages}
            className="mt-10 w-screen relative left-1/2 -translate-x-1/2 sm:mt-12 lg:mt-14"
          />

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:mt-12 sm:flex-row">
            <Button variant="primary" leftIcon={<Calendar />} size="lg">
              <Link href="/evenimente">Vezi toate evenimentele</Link>
            </Button>

            <Button variant="purple" rightIcon={<ArrowRight />} size="lg">
              <Link
                href="https://traumacenter.ro"
                target="_blank"
                rel="noreferrer"
              >
                Descoperă Trauma Center
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
