import { Compass, HandHeart, Sparkles, Sprout } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import AccentText from "@/components/ui/AccentText";

const steps = [
  {
    title: "Orientare și înțelegere",
    description:
      "Clarificăm ce te aduce în terapie, ce ai nevoie acum și ce ar fi important să se schimbe.",
    Icon: Compass,
  },
  {
    title: "Stabilizare și resurse",
    description:
      "Înainte de a intra în conținut dificil, lucrăm cu resurse, ritm, reglare și siguranță.",
    Icon: HandHeart,
  },
  {
    title: "Procesare și integrare",
    description:
      "În funcție de obiective, putem lucra cu AF-EMDR sau alte intervenții terapeutice potrivite.",
    Icon: Sparkles,
  },
  {
    title: "Claritate în viața de zi cu zi",
    description:
      "Urmărim ca schimbările să fie integrate practic: în relații, reacții, limite și felul în care te raportezi la tine.",
    Icon: Sprout,
  },
] as const;

export default function ServicesProcessSection() {
  return (
    <Section
      background="cream"
      spacing="lg"
      aria-labelledby="services-process-heading"
    >
      <Container size="wide">
        <div className="mx-auto max-w-3xl text-center">
          <AccentText>Proces terapeutic</AccentText>

          <Heading as="h2" size="h2" align="center" className="mt-3">
            Cum construim siguranța în procesul terapeutic
          </Heading>

          <Text className="mx-auto mt-5 max-w-2xl text-charcoal/75">
            Terapia nu înseamnă să forțăm lucrurile. Procesul este construit
            gradual, cu atenție la corp, emoții, resurse și ritmul tău.
          </Text>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ title, description, Icon }, index) => (
            <div
              key={title}
              className="relative rounded-3xl border border-charcoal/10 bg-white/70 p-6 shadow-sm"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex size-11 items-center justify-center rounded-full bg-teal/10 text-teal">
                  <Icon className="size-5" aria-hidden="true" />
                </div>

                <span className="font-display text-4xl text-charcoal/10">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-6 text-lg font-medium text-charcoal">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-charcoal/70">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
