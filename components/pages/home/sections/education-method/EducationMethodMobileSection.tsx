import Image from "next/image";

import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Section from "@/components/ui/Section";

const afEmdrMobileSpotlight = {
  eyebrow: "Metodă specializată",
  title: "AF-EMDR pentru lucrul profund cu trauma",
  description:
    "AF-EMDR este o formă avansată de lucru terapeutic, folosită pentru procesarea experiențelor dureroase, reglarea reacțiilor emoționale și reconectarea cu resursele interioare.",
  points: [
    "sprijină procesarea amintirilor și reacțiilor dificile",
    "lucrează cu corpul, emoțiile și sistemul nervos",
    "se desfășoară într-un ritm sigur, adaptat persoanei",
  ],
  cta: {
    label: "Află mai multe",
    href: "/terapie-af-emdr",
  },
  image: {
    src: "/home-page/method.jpg",
    alt: "Cabinet de psihoterapie calm, pregătit pentru o ședință AF-EMDR",
  },
};

export default function EducationMethodMobileSection() {
  return (
    <Section
      aria-labelledby="af-emdr-mobile-spotlight-title"
      spacing="sm"
      className="relative isolate overflow-hidden min-h-svh lg:hidden"
    >
      <Image
        src={afEmdrMobileSpotlight.image.src}
        alt={afEmdrMobileSpotlight.image.alt}
        fill
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-center"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-charcoal/35"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-t from-charcoal via-charcoal/70 to-transparent"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-1/2 bg-gradient-to-b from-charcoal/45 to-transparent"
      />

      <Image
        src="/backgrounds/df-teal-down.png"
        alt=""
        aria-hidden="true"
        width={105}
        height={105}
        sizes="105px"
        className="pointer-events-none absolute right-4 top-20 z-10 h-auto w-26.25 rotate-[-10deg] opacity-35"
      />

      <div className="relative z-20 mx-auto flex min-h-svh w-full max-w-md items-center px-5">
        <article className="w-full rounded-4xl border border-white/55 bg-cream/94 p-7 text-center shadow-[0_18px_55px_rgba(0,0,0,0.22)] backdrop-blur-md">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-gold">
            {afEmdrMobileSpotlight.eyebrow}
          </p>

          <Heading
            id="af-emdr-mobile-spotlight-title"
            as="h2"
            size="h2"
            color="charcoal"
            align="center"
            className="mt-4 text-balance leading-[1.04]"
          >
            {afEmdrMobileSpotlight.title}
          </Heading>

          <Text
            as="p"
            size="base"
            color="muted"
            align="center"
            className="mt-5 text-pretty leading-7"
          >
            {afEmdrMobileSpotlight.description}
          </Text>

          <div className="mx-auto mt-6 h-px w-16 bg-gold/35" />

          <ul className="mt-6 space-y-3 text-left">
            {afEmdrMobileSpotlight.points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />

                <Text
                  as="span"
                  size="sm"
                  color="charcoal"
                  className="text-pretty leading-6"
                >
                  {point}
                </Text>
              </li>
            ))}
          </ul>

          <Button
            href={afEmdrMobileSpotlight.cta.href}
            variant="primary"
            size="md"
            className="mt-7"
          >
            {afEmdrMobileSpotlight.cta.label}
          </Button>
        </article>
      </div>
    </Section>
  );
}
