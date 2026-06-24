import type { ComponentType, CSSProperties } from "react";
import {
  Brain,
  CloudRain,
  HeartCrack,
  Leaf,
  Moon,
  Repeat2,
  ShieldAlert,
  Sparkles,
  Waves,
  Zap,
  ArrowUp,
} from "lucide-react";
import Section from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Heading from "@/components/ui/Heading";

export type ConditionItem = {
  label: string;
  icon: ComponentType<{ className?: string }>;
};

const conditionsRowOne: ConditionItem[] = [
  { label: "Anxietate", icon: Waves },
  { label: "Atacuri de panică", icon: ShieldAlert },
  { label: "Traumă", icon: Brain },
  { label: "Depresie", icon: CloudRain },
  { label: "Dificultăți în relații", icon: HeartCrack },
];

const conditionsRowTwo: ConditionItem[] = [
  { label: "Răni de atașament", icon: HeartCrack },
  { label: "Burnout", icon: Zap },
  { label: "Somn dificil", icon: Moon },
  { label: "Tipare emoționale repetitive", icon: Repeat2 },
  { label: "Stres și suprasolicitare", icon: Leaf },
  { label: "Reconectare cu sinele", icon: Sparkles },
];

export default function ConditionMarqueeSection() {
  return (
    <Section
      background="cream"
      aria-labelledby="conditions-marquee-heading"
      spacing="md"
    >
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-10 flex justify-center">
          <Link
            href="#servicii"
            aria-label="Înapoi sus"
            className="group inline-flex items-center gap-3 rounded-full border border-charcoal/10 bg-white/70 px-5 py-3 text-xs font-medium uppercase tracking-[0.18em] text-charcoal shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-teal/30 hover:bg-teal/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/40"
          >
            <span className="flex size-8 items-center justify-center rounded-full bg-teal/15 text-teal transition duration-300 group-hover:bg-teal/25">
              <ArrowUp className="size-4" aria-hidden="true" />
            </span>
            Înapoi sus
          </Link>
        </div>
        <p className="font-accent text-xl text-charcoal/70 md:text-2xl">
          În procesul terapeutic
        </p>

        <Heading
          id="conditions-marquee-heading"
          as="h2"
          size="h2"
          textCase="uppercase"
          align="center"
          className="mt-5"
        >
          Cu ce te pot ajuta
        </Heading>
      </div>

      <div className="relative mt-12 overflow-hidden space-y-4 py-2 md:mt-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 bg-linear-to-r from-cream via-cream/95 to-transparent sm:w-36 md:w-56 lg:w-72"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 bg-linear-to-l from-cream via-cream/95 to-transparent sm:w-36 md:w-56 lg:w-72"
        />

        <ConditionMarquee
          items={conditionsRowOne}
          direction="left"
          duration="34s"
          startIndex={0}
        />

        <ConditionMarquee
          items={conditionsRowTwo}
          direction="right"
          duration="38s"
          startIndex={1}
        />
      </div>
    </Section>
  );
}

function ConditionMarquee({
  items,
  direction,
  duration,
  startIndex = 0,
}: {
  items: ConditionItem[];
  direction: "left" | "right";
  duration: string;
  startIndex?: number;
}) {
  return (
    <div className="group flex overflow-hidden py-2">
      <div
        className={cn(
          "flex min-w-max gap-3 will-change-transform motion-reduce:animate-none group-hover:[animation-play-state:paused]",
          direction === "left"
            ? "animate-[conditions-marquee-left_var(--duration)_linear_infinite]"
            : "animate-[conditions-marquee-right_var(--duration)_linear_infinite]",
        )}
        style={{ "--duration": duration } as CSSProperties}
      >
        <ConditionItems items={items} startIndex={startIndex} />

        <ConditionItems
          items={items}
          startIndex={startIndex + items.length}
          duplicate
        />

        <ConditionItems
          items={items}
          startIndex={startIndex + items.length * 2}
          duplicate
        />

        <ConditionItems
          items={items}
          startIndex={startIndex + items.length * 3}
          duplicate
        />
      </div>
    </div>
  );
}

function ConditionItems({
  items,
  startIndex = 0,
  duplicate = false,
}: {
  items: ConditionItem[];
  startIndex?: number;
  duplicate?: boolean;
}) {
  return (
    <div aria-hidden={duplicate ? "true" : undefined} className="flex gap-3">
      {items.map((condition, index) => {
        const Icon = condition.icon;
        const isTeal = (index + startIndex) % 2 === 0;

        return (
          <div
            key={`${condition.label}-${startIndex}-${index}`}
            className={cn(
              "flex items-center gap-3 rounded-full border px-4 py-3 text-sm font-medium tracking-wide shadow-sm backdrop-blur-md transition-[transform,border-color,background-color] duration-300 hover:-translate-y-0.5 md:px-5 motion-reduce:transition-none",
              isTeal
                ? "border-teal/20 bg-teal/10 text-charcoal shadow-teal/10 hover:border-teal/35 hover:bg-teal/15"
                : "border-purple/20 bg-purple/10 text-charcoal shadow-purple/10 hover:border-purple/35 hover:bg-purple/15",
            )}
          >
            <span
              className={cn(
                "flex size-8 items-center justify-center rounded-full",
                isTeal ? "bg-teal/20 text-teal" : "bg-purple/20 text-purple",
              )}
            >
              <Icon className="size-4" aria-hidden="true" />
            </span>

            <span className="whitespace-nowrap">{condition.label}</span>
          </div>
        );
      })}
    </div>
  );
}
