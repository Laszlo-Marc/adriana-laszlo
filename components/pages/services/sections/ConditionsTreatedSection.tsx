import {
  Brain,
  Cloud,
  HeartCrack,
  HeartHandshake,
  Leaf,
  Moon,
  Repeat,
  ShieldAlert,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import AccentText from "@/components/ui/AccentText";

const conditions = [
  {
    label: "Anxietate",
    Icon: Cloud,
  },
  {
    label: "Atacuri de panică",
    Icon: ShieldAlert,
  },
  {
    label: "Traumă",
    Icon: Brain,
  },
  {
    label: "Dificultăți în relații",
    Icon: HeartHandshake,
  },
  {
    label: "Răni de atașament",
    Icon: HeartCrack,
  },
  {
    label: "Burnout",
    Icon: Leaf,
  },
  {
    label: "Somn dificil",
    Icon: Moon,
  },
  {
    label: "Tipare emoționale repetitive",
    Icon: Repeat,
  },
] as const;

export default function ConditionsTreatedSection() {
  return (
    <Section
      background="cream"
      spacing="lg"
      aria-labelledby="conditions-treated-heading"
    >
      <Container size="wide">
        <div className="mx-auto  text-center">
          <AccentText>Cu ce te poate ajuta terapia</AccentText>

          <Heading as="h2" size="h2" align="center" className="mt-3">
            Dificultăți abordate în procesul terapeutic
          </Heading>

          <Text
            className="mx-auto mt-5 max-w-4xl text-charcoal/75"
            align="center"
          >
            Fiecare persoană ajunge în terapie cu o poveste diferită. Procesul
            poate susține claritate, reglare emoțională și integrarea unor
            experiențe care continuă să influențeze prezentul.
          </Text>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {conditions.map(({ label, Icon }) => (
            <div
              key={label}
              className="group rounded-3xl border border-charcoal/10 bg-white/70 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal/25 hover:bg-white"
            >
              <div className="flex size-11 items-center justify-center rounded-full bg-teal/10 text-teal">
                <Icon className="size-5" aria-hidden="true" />
              </div>

              <h3 className="mt-5 text-base font-medium text-charcoal">
                {label}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
