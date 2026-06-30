"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Section from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import { afEmdrMethodContent } from "../afEmdrContent";

export default function AfEmdrMethodMobile() {
  const { lead, steps } = afEmdrMethodContent;

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = container.clientWidth * 0.86;
    const gap = 16;
    const index = Math.round(container.scrollLeft / (cardWidth + gap));

    setActiveIndex(Math.min(Math.max(index, 0), steps.length - 1));
  }, [steps.length]);

  const goToCard = useCallback(
    (index: number) => {
      const container = scrollRef.current;
      if (!container) return;

      const nextIndex = Math.min(Math.max(index, 0), steps.length - 1);

      const card = container.querySelector<HTMLElement>(
        `[data-method-card-index="${nextIndex}"]`,
      );

      card?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });

      setActiveIndex(nextIndex);
    },
    [steps.length],
  );

  const scrollToCard = useCallback(
    (direction: "prev" | "next") => {
      const nextIndex =
        direction === "next"
          ? Math.min(activeIndex + 1, steps.length - 1)
          : Math.max(activeIndex - 1, 0);

      goToCard(nextIndex);
    },
    [activeIndex, goToCard, steps.length],
  );

  return (
    <Section className="relative overflow-hidden lg:hidden" spacing="sm">
      <Container padding="default" className="relative z-10">
        <ScrollReveal>
          <div className="mx-auto max-w-sm text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Metoda AF-EMDR
            </p>

            <Heading
              as="h2"
              size="h2"
              align="center"
              textCase="uppercase"
              className="mt-4 text-balance text-charcoal"
            >
              Cum funcționează
            </Heading>

            <Text
              className="mt-5 text-pretty leading-7 text-charcoal/70"
              align="center"
            >
              {lead}
            </Text>
          </div>
        </ScrollReveal>

        <ScrollReveal delay="sm">
          <div
            ref={scrollRef}
            onScroll={updateActiveIndex}
            className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {steps.map((step, index) => (
              <article
                key={step.title}
                data-method-card-index={index}
                className="relative min-h-124 min-w-[86%] snap-center overflow-hidden rounded-4xl bg-charcoal"
              >
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  fill
                  sizes="86vw"
                  className="object-cover object-center"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-charcoal/28"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-charcoal/90 via-charcoal/45 to-charcoal/12"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-charcoal/30 to-transparent"
                />

                <div className="relative z-10 flex min-h-124 flex-col items-center justify-center px-6 py-10 text-center text-white">
                  <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-white/72">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="max-w-[10ch] text-balance text-3xl font-semibold leading-[1.03] text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 max-w-[24ch] text-pretty text-base font-medium leading-snug text-white/88">
                    {step.subtitle}
                  </p>

                  <div className="mx-auto mt-6 h-px w-16 bg-gold/60" />

                  <Text
                    size="sm"
                    align="center"
                    className="mt-6 max-w-[30ch] text-pretty leading-6 text-white/78"
                  >
                    {step.description}
                  </Text>
                </div>
              </article>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay="md" preset="fade-in">
          <div className="mt-5 flex items-center justify-between">
            <button
              type="button"
              onClick={() => scrollToCard("prev")}
              disabled={activeIndex === 0}
              aria-label="Pasul anterior"
              className={cn(
                "inline-flex size-12 items-center justify-center rounded-full",
                "border border-charcoal/15 bg-white/70 text-charcoal shadow-sm backdrop-blur-sm",
                "transition hover:bg-white disabled:pointer-events-none disabled:opacity-35",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
              )}
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
            </button>

            <div className="flex items-center gap-2">
              {steps.map((step, index) => (
                <button
                  key={step.title}
                  type="button"
                  onClick={() => goToCard(index)}
                  aria-label={`Mergi la pasul ${index + 1}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300 motion-reduce:transition-none",
                    activeIndex === index
                      ? "w-8 bg-gold"
                      : "w-2 bg-charcoal/20",
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollToCard("next")}
              disabled={activeIndex === steps.length - 1}
              aria-label="Pasul următor"
              className={cn(
                "inline-flex size-12 items-center justify-center rounded-full",
                "border border-charcoal/15 bg-white/70 text-charcoal shadow-sm backdrop-blur-sm",
                "transition hover:bg-white disabled:pointer-events-none disabled:opacity-35",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
              )}
            >
              <ArrowRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
