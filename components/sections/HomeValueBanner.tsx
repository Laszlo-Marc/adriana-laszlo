import Image from "next/image";
import { Heart, Leaf, Scale, Sparkles } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import AccentText from "@/components/ui/AccentText";

type ValueItem = {
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
  tone: "teal" | "purple";
};

const values: ValueItem[] = [
  {
    title: "Empatie",
    description:
      "Te întâmpin cu căldură, înțelegere și respect, într-un spațiu în care te poți simți în siguranță să fii tu.",
    Icon: Heart,
    tone: "teal",
  },
  {
    title: "Autenticitate",
    description:
      "Cred în prezență reală, sinceritate și o relație terapeutică construită cu delicatețe și claritate.",
    Icon: Leaf,
    tone: "purple",
  },
  {
    title: "Echilibru",
    description:
      "Îmbin știința, sensibilitatea clinică și ritmul tău personal pentru un proces terapeutic așezat.",
    Icon: Scale,
    tone: "teal",
  },
  {
    title: "Evoluție",
    description:
      "Terapia nu înseamnă doar alinare, ci și transformare profundă, în timp, cu pași siguri și sustenabili.",
    Icon: Sparkles,
    tone: "purple",
  },
];

function ValueCard({ title, description, Icon, tone }: ValueItem) {
  const iconShellClassName =
    tone === "teal" ? "bg-teal/80 text-charcoal" : "bg-purple/80 text-charcoal";

  return (
    <article className="group relative flex h-full flex-col items-center text-center">
      <div
        className={[
          "mb-5 flex h-18 w-18 items-center justify-center rounded-[1.75rem] border border-charcoal/6 backdrop-blur-[2px]",
          iconShellClassName,
        ].join(" ")}
      >
        <Icon className="h-7 w-7" />
      </div>

      <h3 className="text-[1.05rem] font-medium uppercase tracking-[0.18em] text-charcoal sm:text-[1.1rem]">
        {title}
      </h3>

      <div className="mt-4 h-px w-10 bg-teal/70" />

      <Text
        size="base"
        color="muted"
        align="center"
        className="mt-5 max-w-[20rem] leading-8"
      >
        {description}
      </Text>
    </article>
  );
}

export default function HomeValuesDividerSection() {
  return (
    <Section
      background="cream"
      spacing="none"
      aria-labelledby="home-values-heading"
      className="relative isolate overflow-hidden mt-20"
    >
      {/* soft inner wash */}
      <div className="absolute inset-0 bg-linear-to-b from-sand/90 via-sand/75 to-cream/90" />

      {/* decorative brand assets */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* left large dragonfly */}
        <div className="absolute -left-14 top-14 hidden opacity-[20] lg:block xl:-left-4">
          <Image
            src="/backgrounds/dragonfly.png"
            alt=""
            width={360}
            height={360}
            className="h-auto w-[18rem] xl:w-84"
          />
        </div>

        {/* left stem */}
        <div className="absolute -bottom-24 -left-4 hidden opacity-[20] md:block lg:left-0">
          <Image
            src="/backgrounds/single.png"
            alt=""
            width={240}
            height={1200}
            className="h-auto w-32 lg:w-40"
          />
        </div>

        {/* right curved botanical */}
        <div className="absolute -right-8 top-4 hidden opacity-[20] md:block lg:-right-4">
          <Image
            src="/backgrounds/double-simple.png"
            alt=""
            width={280}
            height={1200}
            className="h-auto w-32 lg:w-40 xl:w-44"
          />
        </div>

        {/* right lower botanical with dragonflies */}
        <div className="absolute -bottom-32 -right-8 hidden opacity-[20] lg:block">
          <Image
            src="/backgrounds/double-df.png"
            alt=""
            width={340}
            height={1600}
            className="h-auto w-44 xl:w-52"
          />
        </div>

        {/* small mobile decorative wash */}
        <div className="absolute left-1/2 top-8 h-40 w-40 -translate-x-1/2 rounded-full bg-teal/8 blur-3xl md:hidden" />
      </div>

      <Container size="full" padding="default" className="relative z-10">
        <div className="mx-auto  px-1 py-20">
          <div className="mx-auto  text-center">
            <AccentText className="justify-center text-center text-purple text-4xl">
              Valorile mele
            </AccentText>

            <Heading
              as="h2"
              size="h2"
              align="center"
              className="mx-auto mt-5 text-balance"
            >
              Valorile care ghidează fiecare pas al procesului terapeutic
            </Heading>

            <Text
              size="lg"
              color="muted"
              align="center"
              className="mx-auto mt-6 max-w-2xl text-balance leading-8"
            >
              Un cadru terapeutic sigur se construiește prin prezență,
              claritate, respect și grijă autentică față de ritmul fiecărei
              persoane.
            </Text>

            <div className="mt-8 flex items-center justify-center gap-4">
              <span className="h-px w-14 bg-teal/70" />
              <Heart className="h-5 w-5 text-teal/80" strokeWidth={1.6} />
              <span className="h-px w-14 bg-teal/70" />
            </div>
          </div>

          <div className="mt-6 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-x-10">
            {values.map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
