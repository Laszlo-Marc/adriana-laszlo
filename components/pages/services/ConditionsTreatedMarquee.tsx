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
} from "lucide-react";
import Section from "@/components/ui/Section";
import { cn } from "@/lib/utils";

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
    <Section aria-labelledby="conditions-marquee-heading" spacing="md">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <p className="font-accent text-xl text-charcoal/70 md:text-2xl">
          În procesul terapeutic
        </p>

        <h2
          id="conditions-marquee-heading"
          className="mt-3 font-display text-4xl uppercase leading-tight tracking-[0.16em] text-charcoal md:text-5xl lg:text-6xl"
        >
          Cu ce te pot ajuta
        </h2>
      </div>

      <div className="relative mt-12 overflow-hidden space-y-4 py-2 md:mt-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-cream via-cream/95 to-transparent sm:w-36 md:w-56 lg:w-72"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 bg-gradient-to-l from-cream via-cream/95 to-transparent sm:w-36 md:w-56 lg:w-72"
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
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="group flex overflow-hidden py-2">
      <div
        className={cn(
          "flex min-w-max gap-3 will-change-transform group-hover:[animation-play-state:paused]",
          direction === "left"
            ? "animate-[conditions-marquee-left_var(--duration)_linear_infinite]"
            : "animate-[conditions-marquee-right_var(--duration)_linear_infinite]",
        )}
        style={
          {
            "--duration": duration,
          } as CSSProperties
        }
      >
        {duplicatedItems.map((condition, index) => {
          const Icon = condition.icon;
          const isTeal = (index + startIndex) % 2 === 0;

          return (
            <div
              key={`${condition.label}-${index}`}
              className={cn(
                "flex items-center gap-3 rounded-full border px-4 py-3 text-sm font-medium tracking-wide shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-0.5 md:px-5",
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
    </div>
  );
}
