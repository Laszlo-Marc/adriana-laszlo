import Image from "next/image";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

import { afEmdrSuitabilityContent } from "../afEmdrContent";
import AfEmdrSuitabilityExplorer from "./AfEmdrSuitabilityExplorer";
import AfEmdrSuitabilityMobile from "./AfEmdrSuitabilityMobile";

export default function AfEmdrSuitabilitySection() {
  const { chapter, eyebrow, title, lead, patterns, insight } =
    afEmdrSuitabilityContent;

  return (
    <Section
      aria-labelledby="af-emdr-suitability-title"
      background="cream"
      spacing="lg"
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="/af-emdr/suitability/suitability-bg.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        <div aria-hidden="true" className="absolute inset-0 bg-cream/70" />

        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-cream via-cream/80 to-transparent"
        />

        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-cream via-cream/85 to-transparent"
        />
      </div>

      <Container size="full" padding="lg" className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-16 xl:gap-20">
          <div className="max-w-2xl">
            <Heading
              id="af-emdr-suitability-title"
              as="h2"
              size="h2"
              font="display"
              className="mt-5 text-balance lg:text-left"
              align="center"
            >
              {eyebrow}
            </Heading>

            <Text
              className="mt-6 max-w-xl text-pretty text-charcoal/70 lg:text-left"
              align="center"
            >
              {lead}
            </Text>

            <div className="mt-9 hidden border-l border-gold/45 pl-6 lg:block">
              <Text className="max-w-lg text-pretty text-charcoal/64">
                Alege o zonă din dreapta pentru a vedea cum se poate manifesta
                trauma relațională în viața de zi cu zi.
              </Text>
            </div>
          </div>

          <AfEmdrSuitabilityExplorer patterns={patterns} />
        </div>

        <div className="mt-10 lg:mt-14">
          <AfEmdrSuitabilityMobile patterns={patterns} />
        </div>
      </Container>
    </Section>
  );
}
