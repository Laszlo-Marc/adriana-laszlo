import Image from "next/image";

import AccentText from "@/components/ui/AccentText";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";

import AboutEducationWorkshopsDesktop from "./AboutEducationWorkshopsDesktop";
import AboutEducationWorkshopsMobile from "./AboutEducationWorkshopsMobile";

export default function AboutEducationWorkshopsSection() {
  return (
    <Section
      id="workshopuri-educatie"
      background="cream"
      spacing="lg"
      aria-labelledby="about-workshops-title"
      className="relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-24 h-96 w-80 rounded-full bg-purple/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-0 h-96 w-80 rounded-full bg-teal/12 blur-3xl"
      />

      <Image
        src="/backgrounds/df-teal-down.png"
        alt=""
        width={150}
        height={130}
        sizes="150px"
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-14 hidden h-auto w-36 opacity-20 md:block"
      />

      <Container size="wider" padding="default" className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <AccentText>Din cabinet în comunitate</AccentText>

          <Heading
            id="about-workshops-title"
            as="h2"
            size="h2"
            textCase="uppercase"
            align="center"
            className="mt-4 text-balance text-charcoal"
          >
            Workshopuri, programe de grup și educație terapeutică
          </Heading>
        </div>

        <AboutEducationWorkshopsDesktop />
        <AboutEducationWorkshopsMobile />
      </Container>
    </Section>
  );
}
