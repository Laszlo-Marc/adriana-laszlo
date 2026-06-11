import type { ReactNode } from "react";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";
import AccentText from "@/components/ui/AccentText";
import { cn } from "@/lib/utils";

export type FaqItem = {
  question: string;
  answer: ReactNode;
};

type FaqTone = "charcoal" | "teal" | "purple" | "gold" | "light";

type FaqSectionProps = {
  id?: string;
  items: FaqItem[];
  eyebrow?: string;
  title?: string;
  description?: ReactNode;
  tone?: FaqTone;
  background?:
    | "cream"
    | "white"
    | "sand"
    | "teal-soft"
    | "purple-soft"
    | "charcoal";
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
  containerSize?: "narrow" | "default" | "wide" | "wider";
  className?: string;
};

const toneStyles: Record<
  FaqTone,
  {
    title: string;
    eyebrow: string;
    description: string;
    border: string;
    question: string;
    answer: string;
    icon: string;
  }
> = {
  charcoal: {
    title: "text-charcoal",
    eyebrow: "text-gold",
    description: "text-muted",
    border: "border-charcoal/30",
    question: "text-charcoal",
    answer: "text-charcoal/72",
    icon: "text-charcoal/80",
  },
  teal: {
    title: "text-charcoal",
    eyebrow: "text-teal",
    description: "text-muted",
    border: "border-teal/45",
    question: "text-charcoal",
    answer: "text-charcoal/72",
    icon: "text-teal",
  },
  purple: {
    title: "text-charcoal",
    eyebrow: "text-purple",
    description: "text-muted",
    border: "border-purple/45",
    question: "text-charcoal",
    answer: "text-charcoal/72",
    icon: "text-purple",
  },
  gold: {
    title: "text-charcoal",
    eyebrow: "text-gold",
    description: "text-muted",
    border: "border-gold/45",
    question: "text-charcoal",
    answer: "text-charcoal/72",
    icon: "text-gold",
  },
  light: {
    title: "text-cream",
    eyebrow: "text-gold",
    description: "text-cream/75",
    border: "border-cream/25",
    question: "text-cream",
    answer: "text-cream/72",
    icon: "text-cream/80",
  },
};

export default function FaqSection({
  id = "faq",
  items,
  eyebrow,
  title = "Întrebări frecvente",
  description,
  tone = "charcoal",
  background = "cream",
  spacing = "md",
  containerSize = "narrow",
  className,
}: FaqSectionProps) {
  if (!items.length) return null;

  const styles = toneStyles[tone];
  const headingId = `${id}-heading`;

  return (
    <Section
      id={id}
      background={background}
      spacing={spacing}
      aria-labelledby={headingId}
      className={cn("relative overflow-hidden", className)}
    >
      <Container
        size={containerSize}
        padding="default"
        className="relative z-10"
      >
        <div className="mx-auto max-w-3xl">
          {eyebrow ? (
            <Text
              as="p"
              size="xs"
              weight="medium"
              transform="upper"
              align="center"
              className={cn("mb-4 tracking-[0.18em]", styles.eyebrow)}
            >
              {eyebrow}
            </Text>
          ) : null}

          <AccentText
            as="h2"
            id={headingId}
            className={cn(
              "block text-center text-5xl leading-none md:text-7xl",
              styles.title,
            )}
          >
            {title}
          </AccentText>

          {description ? (
            <Text
              as="div"
              size="lg"
              align="center"
              className={cn(
                "mx-auto mt-5 max-w-2xl text-pretty",
                styles.description,
              )}
            >
              {description}
            </Text>
          ) : null}

          <div className={cn("mt-10 border-t", styles.border)}>
            {items.map((item) => (
              <details
                key={item.question}
                className={cn("group border-b py-5", styles.border)}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left marker:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 focus-visible:ring-offset-4 focus-visible:ring-offset-cream [&::-webkit-details-marker]:hidden">
                  <span
                    className={cn(
                      "font-body text-base font-medium leading-6 md:text-lg",
                      styles.question,
                    )}
                  >
                    {item.question}
                  </span>

                  <span
                    aria-hidden="true"
                    className={cn(
                      "relative flex size-8 shrink-0 items-center justify-center transition-transform duration-300 group-open:rotate-45 motion-reduce:transition-none",
                      styles.icon,
                    )}
                  >
                    <span className="absolute h-px w-5 bg-current" />
                    <span className="absolute h-5 w-px bg-current" />
                  </span>
                </summary>

                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 group-open:grid-rows-[1fr] motion-reduce:transition-none">
                  <div className="overflow-hidden">
                    <Text
                      as="div"
                      size="base"
                      className={cn("max-w-2xl pt-4 leading-7", styles.answer)}
                    >
                      {item.answer}
                    </Text>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
