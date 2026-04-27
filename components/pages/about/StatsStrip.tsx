import Image from "next/image";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { cn } from "@/lib/utils";

type Stat = {
  value: string;
  label: string;
  icon: string;
};

const stats: Stat[] = [
  {
    value: "15+",
    label: "ani de experiență",
    icon: "/backgrounds/dragonfly.png",
  },
  {
    value: "1000+",
    label: "clienți susținuți",
    icon: "/backgrounds/df-purple-down.png",
  },
  {
    value: "Fondator",
    label: "Trauma Center",
    icon: "/backgrounds/df-teal-down.png",
  },
  {
    value: "AF-EMDR",
    label: "specializare",
    icon: "/backgrounds/df-purple-up.png",
  },
];

export default function AboutStatsStrip() {
  return (
    <Section
      background="sand"
      spacing="sm"
      aria-label="Statistici profesionale"
      className="relative border-y border-border/60 overflow-hidden"
    >
      <Container size="wide">
        <div className="grid grid-cols-2 gap-y-10 text-center sm:grid-cols-4 sm:gap-y-0">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "relative flex flex-col items-center justify-center px-4",

                index === stats.length - 1 && "sm:border-r-0",
              )}
            >
              {/* Dragonfly accent */}
              <div className="relative mb-4 h-20 w-20 opacity-60">
                <Image
                  src={stat.icon}
                  alt=""
                  fill
                  sizes="60px"
                  className="object-contain"
                />
              </div>

              {/* Value */}
              <p className="text-2xl font-semibold text-charcoal sm:text-3xl">
                {stat.value}
              </p>

              {/* Label */}
              <p className="mt-1 text-sm text-charcoal/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
