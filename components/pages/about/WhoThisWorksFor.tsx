import Image from "next/image";
import {
  HeartCrack,
  Repeat2,
  Waves,
  ShieldAlert,
  Scale,
  CloudRain,
  ArrowRight,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";
import AccentText from "@/components/ui/AccentText";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const supportAreas = [
  {
    label: "Relații dificele, toxice si dinamica narcisică",
    icon: Repeat2,
  },
  {
    label: "Frică de abandon sau respingere",
    icon: HeartCrack,
  },
  {
    label: "Blocaje emoționale, anxietate și tensiune constantă",
    icon: Waves,
  },
  {
    label: "Perfecționism și autocritică",
    icon: ShieldAlert,
  },
  {
    label: "Dificultăți în a pune limite",
    icon: Scale,
  },
  {
    label:
      "Trauma - fie ca vorbim de traume mici sau mari, simple sau complexe",
    icon: CloudRain,
  },
];

export default function WhoThisWorkIsForSection() {
  return (
    <Section
      id="pentru-cine"
      background="cream"
      spacing="md"
      aria-labelledby="who-this-work-is-for-title"
      className="relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-10 h-96 w-80 rounded-full bg-teal/12 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-96 w-80 rounded-full bg-purple/10 blur-3xl"
      />

      <Image
        src="/backgrounds/df-purple-down.png"
        alt=""
        width={130}
        height={110}
        sizes="130px"
        aria-hidden="true"
        className="pointer-events-none absolute right-6 top-12 hidden h-auto w-32 opacity-68 md:block"
      />
      <Image
        src="/backgrounds/dragonfly.png"
        alt=""
        width={130}
        height={110}
        sizes="130px"
        aria-hidden="true"
        className="pointer-events-none absolute right-25 top-0 hidden h-auto w-32 opacity-68 md:block"
      />

      <Container size="wide" padding="default" className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1fr] lg:items-center xl:gap-16">
          <div className="relative">
            <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-teal/14 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-sand/35 bg-white/40 shadow-[0_26px_80px_rgba(44,44,44,0.08)] md:rounded-[2.75rem]">
              <Image
                src="/about/for-who.jpg"
                alt="Spațiu terapeutic calm, pregătit pentru o sesiune de psihoterapie"
                width={900}
                height={1040}
                sizes="(max-width: 1023px) 100vw, 44vw"
                className="aspect-[4/4.6] w-full object-cover object-center "
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-charcoal/24 via-transparent to-cream/10"
              />
            </div>
          </div>

          <div className="lg:pl-2">
            <AccentText>Când terapia devine necesară</AccentText>

            <Heading
              id="who-this-work-is-for-title"
              as="h2"
              size="h3"
              textCase="uppercase"
              className="mt-4 max-w-3xl text-charcoal"
            >
              Când simți că ai dus prea mult, prea mult timp
            </Heading>

            <Text className="mt-6 max-w-2xl text-pretty leading-8 text-charcoal/72">
              Mulți oameni ajung în terapie nu pentru că nu au încercat
              suficient, ci pentru că au conștientzat că trauma se trăiește în
              singurătate dar se vindecă împreună.
            </Text>

            <Text className="mt-5 max-w-2xl text-pretty leading-8 text-charcoal/72">
              Astfel aici începe procesul terapeutic, atunci când te confrunți
              cu:
            </Text>

            <div className="mt-9 grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {supportAreas.map((area) => {
                const Icon = area.icon;

                return (
                  <div
                    key={area.label}
                    className="group flex items-start gap-3  pb-4"
                  >
                    <span
                      className={cn(
                        "mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-full",
                        " bg-teal/10 text-teal",
                        "transition duration-300 group-hover:border-gold/35 group-hover:bg-gold/10 group-hover:text-gold",
                      )}
                    >
                      <Icon className="size-4" aria-hidden="true" />
                    </span>

                    <p className="text-sm font-medium leading-6 text-charcoal/78">
                      {area.label}
                    </p>
                  </div>
                );
              })}
            </div>
            <Text className="mt-5 max-w-2xl text-pretty leading-8 text-charcoal/72">
              Și da, știu ca trauma se poate vindeca.
            </Text>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="primary">
                Programează o discuție
              </Button>

              <Button href="/servicii" variant="outline">
                Vezi serviciile
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
