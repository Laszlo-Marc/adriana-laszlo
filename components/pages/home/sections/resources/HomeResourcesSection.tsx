import Image from "next/image";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

import { resourcePanels } from "./data";
import ResourcesFlipReveal from "./ResourceFlipReveal";

function HomeResourcesMobile() {
  return (
    <div className="lg:hidden ">
      <Container size="wider" padding="none">
        <div className="px-6 pb-20 pt-16">
          <div className="relative z-10 text-center">
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

            <Heading
              as="h2"
              size="h2"
              align="center"
              className="mx-auto max-w-sm text-balance text-charcoal"
            >
              Continuă procesul în ritmul tău
            </Heading>

            <Text
              size="base"
              color="muted"
              align="center"
              className="mx-auto mt-5 max-w-md text-pretty leading-7"
            >
              Între ședințe sau înainte de a începe terapia, poți explora
              resurse care te ajută să înțelegi mai bine trauma, atașamentul și
              reglarea emoțională.
            </Text>
          </div>

          <div className="relative mt-11">
            <div
              aria-hidden="true"
              className="absolute left-[-1.5rem] top-20 h-[18rem] w-[calc(100%+3rem)] bg-teal/18"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-14 top-4 z-10 w-36 opacity-22"
            >
              <Image
                src="/backgrounds/single.png"
                alt=""
                width={700}
                height={1100}
                sizes="144px"
                className="h-auto w-full max-w-none"
              />
            </div>

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
