import Image from "next/image";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import { cn } from "@/lib/utils";

import { afEmdrComparisonContent } from "../afEmdrContent";
import AfEmdrComparisonMobileTabs from "./AfEmdrComparisonMobileTabs";

type ComparisonItem = (typeof afEmdrComparisonContent.items)[number];

export default function AfEmdrComparisonSection() {
  const { eyebrow, title, lead, items, bridge, insight } =
    afEmdrComparisonContent;

  const [emdr, afEmdr] = items;

  if (!emdr || !afEmdr) return null;

  return (
    <Section
      aria-labelledby="af-emdr-comparison-title"
      background="cream"
      spacing="sm"
      className="relative overflow-hidden"
    >
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
          className="absolute inset-x-0 top-0 h-52 bg-linear-to-b from-cream via-cream/75 to-transparent"
        />

        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-64 bg-linear-to-t from-cream via-cream/85 to-transparent"
        />
      </div>

      <Container size="wide" padding="default" className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <Text
            as="p"
            size="xs"
            weight="medium"
            transform="upper"
            color="gold"
            align="center"
            className="mt-5 tracking-[0.28em]"
          >
            {eyebrow}
          </Text>

          <Heading
            id="af-emdr-comparison-title"
            as="h2"
            size="h1"
            align="center"
            className="mt-5 text-balance text-charcoal"
          >
            {title}
          </Heading>

          {lead ? (
            <Text
              size="lg"
              align="center"
              className="mx-auto mt-6 max-w-2xl text-pretty text-charcoal/70"
            >
              {lead}
            </Text>
          ) : null}
        </div>

        <div className="relative mt-16 hidden lg:block">
          <div className="grid grid-cols-[1fr_auto_1fr] items-stretch gap-8 xl:gap-12">
            <ComparisonPanel item={emdr} tone="sand" />

            <div className="flex w-28 flex-col items-center justify-center">
              <div
                aria-hidden="true"
                className="h-24 w-px bg-linear-to-b from-transparent via-gold/55 to-transparent"
              />

              <div className="my-5 rounded-full border border-gold/25 bg-cream/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold shadow-[0_14px_35px_rgba(44,44,44,0.05)]">
                {bridge.label}
              </div>

              <div
                aria-hidden="true"
                className="h-24 w-px bg-linear-to-b from-transparent via-gold/55 to-transparent"
              />
            </div>

            <ComparisonPanel item={afEmdr} tone="teal" />
          </div>

          {insight ? (
            <div className="mx-auto mt-12 max-w-3xl rounded-4xl border border-white/70 bg-white/55 px-8 py-6 text-center shadow-[0_18px_60px_rgba(44,44,44,0.05)] backdrop-blur-sm">
              <Text
                size="lg"
                align="center"
                className="text-pretty text-charcoal/72"
              >
                {insight}
              </Text>
            </div>
          ) : null}
        </div>

        <div className="mt-10 lg:hidden">
          <AfEmdrComparisonMobileTabs items={items} insight={insight} />
        </div>
      </Container>
    </Section>
  );
}

type ComparisonPanelProps = {
  item: ComparisonItem;
  tone: "sand" | "teal";
};

function ComparisonPanel({ item, tone }: ComparisonPanelProps) {
  const toneClass =
    tone === "teal"
      ? "border-teal/20 bg-teal/20"
      : "border-white/70 bg-white/50";

  return (
    <article
      className={cn(
        toneClass,
        "group relative min-h-124 overflow-hidden rounded-[2.5rem] border p-9 shadow-[0_26px_90px_rgba(44,44,44,0.06)] backdrop-blur-sm",
        "transition-[transform,box-shadow,border-color,background-color] duration-500 hover:-translate-y-1 hover:shadow-[0_34px_110px_rgba(44,44,44,0.09)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 xl:p-10",
      )}
    >
      <div
        aria-hidden="true"
        className="absolute -right-28 -top-28 size-72 rounded-full bg-cream/50 blur-3xl"
      />

      <div className="relative z-10 flex h-full flex-col">
        <Text
          as="p"
          size="xs"
          weight="medium"
          transform="upper"
          color="gold"
          className="tracking-[0.26em]"
        >
          {item.label}
        </Text>

        <Heading
          as="h3"
          size="h3"
          className="mt-6 max-w-xl text-balance text-charcoal"
        >
          {item.title}
        </Heading>

        <Text className="mt-6 max-w-xl text-pretty text-charcoal/70">
          {item.description}
        </Text>

        <ul className="mt-auto space-y-4 pt-10">
          {item.points.map((point) => (
            <li
              key={point}
              className="flex gap-3 text-sm leading-relaxed text-charcoal/68"
            >
              <span
                aria-hidden="true"
                className="mt-2 size-1.5 shrink-0 rounded-full bg-gold"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
