import Image from "next/image";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

import { resourcePanels } from "./data";
import ResourcesFlipReveal from "./ResourceFlipReveal";
import AccentText from "@/components/ui/AccentText";

function HomeResourcesMobile() {
  return (
    <div className="lg:hidden ">
      <Container size="full" padding="none">
        <div className="px-4 pb-10 pt-10">
          <div className="relative z-10 text-center">
            <AccentText className="justify-center text-center text-2xl text-gold">
              Resurse
            </AccentText>

            <Heading
              as="h2"
              size="h1"
              align="center"
              className=" mt-4 text-balance "
            >
              Continuă procesul
            </Heading>
          </div>

          <div className="relative mt-11">
            <div
              aria-hidden="true"
              className="absolute -left-6 top-20 h-72 w-[calc(100%+3rem)] bg-teal/18"
            />

            <div className="relative z-20">
              <ResourcesFlipReveal panels={resourcePanels} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

function HomeResourcesDesktopPlaceholder() {
  return (
    <div className="hidden lg:block">
      <Container size="wider" padding="default">
        <div className="py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Text
              as="p"
              size="xs"
              color="gold"
              weight="medium"
              transform="upper"
              align="center"
              className="mb-4 tracking-[0.16em]"
            >
              Resurse
            </Text>

            <Heading as="h2" size="h2" align="center" className="text-charcoal">
              Continuă procesul în ritmul tău
            </Heading>

            <Text
              size="base"
              color="muted"
              align="center"
              className="mx-auto mt-5 max-w-2xl leading-7"
            >
              Între ședințe sau înainte de a începe terapia, poți explora
              articole, materiale descărcabile și resurse video scurte.
            </Text>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default function HomeResourcesSection() {
  return (
    <Section
      background="white"
      spacing="none"
      className="relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 top-24 h-72 w-72 rounded-full bg-purple/8 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 bottom-24 h-72 w-72 rounded-full bg-teal/10 blur-3xl"
      />

      <HomeResourcesMobile />
      <HomeResourcesDesktopPlaceholder />
    </Section>
  );
}
