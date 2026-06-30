"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import AccentText from "@/components/ui/AccentText";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

import { storyItems } from "../desktop/data";
import { StoryCard } from "../desktop/StoryCard";

export default function AboutTimelineMobile() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goToCard = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const nextIndex = Math.min(Math.max(index, 0), storyItems.length - 1);

    const card = container.querySelector<HTMLElement>(
      `[data-story-card-index="${nextIndex}"]`,
    );

    card?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });

    setActiveIndex(nextIndex);
  }, []);

  const scrollToCard = useCallback(
    (direction: "prev" | "next") => {
      const nextIndex =
        direction === "next"
          ? Math.min(activeIndex + 1, storyItems.length - 1)
          : Math.max(activeIndex - 1, 0);

      goToCard(nextIndex);
    },
    [activeIndex, goToCard],
  );

  const updateActiveIndex = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    const cards = Array.from(
      container.querySelectorAll<HTMLElement>("[data-story-card-index]"),
    );

    if (!cards.length) return;

    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card) => {
      const index = Number(card.dataset.storyCardIndex);
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  return (
    <div className="relative overflow-hidden lg:hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-teal/10 blur-3xl"
      />

      <Image
        src="/backgrounds/df-purple-down.png"
        alt=""
        width={110}
        height={90}
        sizes="110px"
        aria-hidden="true"
        className="pointer-events-none absolute right-3 top-14 h-auto w-27.5 opacity-25"
      />

      <Container size="wide" padding="default" className="relative z-10">
        <div className="mx-auto max-w-md text-center">
          <ScrollReveal>
            <AccentText>Povestea profesională</AccentText>
          </ScrollReveal>

          <ScrollReveal delay="sm">
            <Heading
              as="h2"
              size="h2"
              textCase="uppercase"
              align="center"
              className="mt-4"
            >
              Parcursul meu în psihoterapie
            </Heading>
          </ScrollReveal>
        </div>

        <ScrollReveal delay="md" preset="fade-up">
          <div
            ref={scrollRef}
            onScroll={updateActiveIndex}
            className="-mx-4 mt-10 flex snap-x snap-mandatory items-start gap-4 overflow-x-auto px-4 pb-4 scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {storyItems.map((item, index) => (
              <div
                key={`${item.year}-${item.title}`}
                data-story-card-index={index}
                className="min-w-[82%] max-w-88 shrink-0 snap-center"
              >
                <StoryCard item={item} index={index} compact isActive />
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay="lg">
          <div className="mt-5 flex items-center justify-between">
            <button
              type="button"
              onClick={() => scrollToCard("prev")}
              disabled={activeIndex === 0}
              aria-label="Etapa anterioară"
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
              {storyItems.map((item, index) => (
                <button
                  key={`${item.year}-indicator`}
                  type="button"
                  onClick={() => goToCard(index)}
                  aria-label={`Mergi la etapa ${index + 1}`}
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
              disabled={activeIndex === storyItems.length - 1}
              aria-label="Etapa următoare"
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

        <ScrollReveal delay="xl" preset="fade-in">
          <p className="mt-5 text-center text-xs font-medium uppercase tracking-[0.18em] text-charcoal/45">
            Glisează sau folosește săgețile
          </p>
        </ScrollReveal>
      </Container>
    </div>
  );
}
