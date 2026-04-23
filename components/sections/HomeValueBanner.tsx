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
    tone === "teal" ? "bg-teal/70 text-charcoal" : "bg-purple/70 text-charcoal";

  return (
    <article className="relative flex h-full flex-col items-center text-center">
      <div
        className={[
          "mb-4 flex h-16 w-16 items-center justify-center rounded-3xl border border-charcoal/8 backdrop-blur-[2px] sm:h-18 sm:w-18",
          iconShellClassName,
        ].join(" ")}
      >
        <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
      </div>

      <h3 className="text-[0.95rem] font-medium uppercase tracking-[0.18em] text-charcoal sm:text-[1.05rem]">
        {title}
      </h3>

      <div className="mt-3 h-px w-10 bg-teal/70" />

      <Text
        size="base"
        color="muted"
        align="center"
        className="mt-4 max-w-88 text-[0.98rem] leading-7"
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
      spacing="sm"
      aria-labelledby="home-values-heading"
      className="relative isolate  overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-b from-sand/95 via-sand/80 to-cream/90" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* MOBILE: centered botanical behind content */}
        <div className="absolute inset-x-0 top-0 flex justify-center md:hidden">
          <Image
            src="/backgrounds/double-simple.png"
            alt=""
            width={320}
            height={900}
            className="h-auto w-44 opacity-[0.6]"
          />
        </div>

        {/* MOBILE: dragonflies in quiet spaces */}
        <div className="absolute -left-9 top-10 md:hidden">
          <Image
            src="/backgrounds/dragonfly.png"
            alt=""
            width={220}
            height={220}
            className="h-auto w-28 opacity-[0.6]"
          />
        </div>

        <div className="absolute bottom-10 -right-6 md:hidden">
          <Image
            src="/backgrounds/dragonfly.png"
            alt=""
            width={160}
            height={160}
            className="h-auto w-20 rotate-22 opacity-[0.6]"
          />
        </div>

        {/* DESKTOP/TABLET assets */}
        <div className="absolute -left-14 top-14 hidden lg:block xl:-left-4">
          <Image
            src="/backgrounds/dragonfly.png"
            alt=""
            width={360}
            height={360}
            className="h-auto w-[18rem] opacity-[0.6] xl:w-60"
          />
        </div>

        <div className="absolute -bottom-14 -left-4 hidden lg:block">
          <Image
            src="/backgrounds/single.png"
            alt=""
            width={240}
            height={1200}
            className="h-auto w-32 opacity-[0.6] lg:w-40"
          />
        </div>

        <div className="absolute right-8 top-0 hidden md:block lg:right-10">
          <Image
            src="/backgrounds/double-simple.png"
            alt=""
            width={280}
            height={1200}
            className="h-auto w-28 opacity-[0.6] lg:w-40 xl:w-44"
          />
        </div>

        <div className="absolute -bottom-32 -right-8 hidden lg:block">
          <Image
            src="/backgrounds/double-df.png"
            alt=""
            width={340}
            height={1600}
            className="h-auto w-44 opacity-[0.6] xl:w-52"
          />
        </div>
      </div>

      <Container size="full" padding="lg" className="relative z-10">
        <div className="mx-auto px-1 py-14 sm:py-16 lg:py-10">
          <div className="mx-auto  text-center">
            <AccentText className="justify-center text-center text-purple text-3xl sm:text-4xl">
              Valorile mele
            </AccentText>

            <Heading
              as="h2"
              size="h2"
              align="center"
              className="mx-auto mt-4  text-balance"
            >
              Valorile care ghidează fiecare pas al procesului terapeutic
            </Heading>

            <Text
              size="lg"
              color="muted"
              align="center"
              className="mx-auto mt-5  text-balance leading-7 sm:leading-8"
            >
              Un cadru terapeutic sigur se construiește prin prezență,
              claritate, respect și grijă autentică față de ritmul fiecărei
              persoane.
            </Text>
          </div>

          {/* MOBILE: snap glider */}
          <div className="relative mt-6 md:hidden">
            <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="w-[82%] shrink-0 snap-center px-5 py-7"
                >
                  <ValueCard {...value} />
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-center gap-4 md:hidden">
              {/* left arrow */}
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-charcoal/10 bg-cream/60 backdrop-blur">
                <span className="text-lg text-charcoal/70">←</span>
              </div>

              {/* hint text */}
              <span className="text-xs tracking-wide text-charcoal/50">
                Glisează pentru a descoperi
              </span>

              {/* right arrow */}
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-charcoal/10 bg-cream/60 backdrop-blur">
                <span className="text-lg text-charcoal/70">→</span>
              </div>
            </div>
          </div>

          {/* DESKTOP/TABLET: grid */}
          <div className="mt-12 hidden gap-x-8 gap-y-12 sm:grid sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-x-10">
            {values.map((value) => (
              <div key={value.title}>
                <ValueCard {...value} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
