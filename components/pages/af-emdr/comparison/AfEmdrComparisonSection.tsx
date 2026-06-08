import Image from "next/image";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

import { afEmdrComparisonContent } from "../afEmdrContent";
import AfEmdrComparisonMobileTabs from "./AfEmdrComparisonMobileTabs";

export default function AfEmdrComparisonSection() {
  const { chapter, eyebrow, title, lead, items, bridge, insight } =
    afEmdrComparisonContent;

  const [emdr, afEmdr] = items;

  return (
    <Section
      aria-labelledby="af-emdr-comparison-title"
      background="cream"
      spacing="sm"
      className="relative overflow-hidden"
    >
      {/* Faded section image background */}
      <div className="absolute inset-0">
        <Image
          src="/af-emdr/comparison.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        <div aria-hidden="true" className="absolute inset-0 bg-cream/72" />

        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-cream via-cream/75 to-transparent"
        />

        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-cream via-cream/85 to-transparent"
        />
      </div>

      <Container size="wide" padding="default" className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            {eyebrow}
          </p>

          <Heading
            id="af-emdr-comparison-title"
            as="h2"
            size="h1"
            align="center"
            className="mt-5 text-balance text-charcoal"
          >
            {title}
          </Heading>
        </div>

        {/* Desktop editorial split */}
        <div className="relative mt-16 hidden lg:block">
          <div className="grid grid-cols-[1fr_auto_1fr] items-stretch gap-8 xl:gap-12">
            <ComparisonPanel item={emdr} tone="sand" />

            <div className="flex w-28 flex-col items-center justify-center">
              <div className="h-24 w-px bg-gradient-to-b from-transparent via-gold/55 to-transparent" />

              <div className="my-5 rounded-full border border-gold/25 bg-cream/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold shadow-[0_14px_35px_rgba(44,44,44,0.05)]">
                {bridge.label}
              </div>

              <div className="h-24 w-px bg-gradient-to-b from-transparent via-gold/55 to-transparent" />
            </div>

            <ComparisonPanel item={afEmdr} tone="teal" />
          </div>
        </div>

        {/* Mobile tabs */}
        <div className="mt-10">
          <AfEmdrComparisonMobileTabs items={items} />
        </div>
      </Container>
    </Section>
  );
}

type ComparisonPanelProps = {
  item: {
    label: string;
    title: string;
    description: string;
    points: string[];
  };
  tone: "sand" | "teal";
};

function ComparisonPanel({ item, tone }: ComparisonPanelProps) {
  const toneClass =
    tone === "teal"
      ? "bg-teal/20 border-teal/20"
      : "bg-white/50 border-white/70";

  return (
    <article
      className={`${toneClass} group relative min-h-[31rem] overflow-hidden rounded-[2.5rem] border p-9 shadow-[0_26px_90px_rgba(44,44,44,0.06)] backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:shadow-[0_34px_110px_rgba(44,44,44,0.09)] xl:p-10`}
    >
      <div
        aria-hidden="true"
        className="absolute -right-28 -top-28 size-72 rounded-full bg-cream/50 blur-3xl"
      />

      <div className="relative z-10 flex h-full flex-col">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">
          {item.label}
        </p>

        <h3 className="mt-6 max-w-xl text-balance text-4xl font-semibold leading-tight text-charcoal">
          {item.title}
        </h3>

        <Text className="mt-6 max-w-xl text-pretty text-charcoal/70">
          {item.description}
        </Text>

        <ul className="mt-auto space-y-4 pt-10">
          {item.points.map((point) => (
            <li
              key={point}
              className="flex gap-3 text-sm leading-relaxed text-charcoal/68"
            >
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
