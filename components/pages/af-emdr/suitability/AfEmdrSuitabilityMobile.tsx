"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import { cn } from "@/lib/utils";

type SuitabilityPattern = {
  id: string;
  label: string;
  title: string;
  description: string;
  signs: string[];
  image: string;
  imageAlt: string;
};

type AfEmdrSuitabilityMobileProps = {
  patterns: SuitabilityPattern[];
  insight?: string;
};

export default function AfEmdrSuitabilityMobile({
  patterns,
  insight,
}: AfEmdrSuitabilityMobileProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const cards = Array.from(
      container.querySelectorAll<HTMLElement>("[data-suitability-card-index]"),
    );

    if (!cards.length) return;

    const containerCenter = container.scrollLeft + container.clientWidth / 2;

    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  const scrollToCard = useCallback(
    (index: number) => {
      const container = scrollRef.current;
      if (!container) return;

      const nextIndex = Math.min(Math.max(index, 0), patterns.length - 1);

      const card = container.querySelector<HTMLElement>(
        `[data-suitability-card-index="${nextIndex}"]`,
      );

      card?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });

      setActiveIndex(nextIndex);
    },
    [patterns.length],
  );

  const scrollByDirection = useCallback(
    (direction: "prev" | "next") => {
      const nextIndex =
        direction === "next"
          ? Math.min(activeIndex + 1, patterns.length - 1)
          : Math.max(activeIndex - 1, 0);

      scrollToCard(nextIndex);
    },
    [activeIndex, patterns.length, scrollToCard],
  );

  if (!patterns.length) return null;

  return (
    <div className="lg:hidden">
      <div className="mb-4 flex items-center justify-between gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
          Tipare posibile
        </p>

        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-charcoal/35">
          Glisează
        </p>
      </div>

      <div
        ref={scrollRef}
        onScroll={updateActiveIndex}
        className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-5 scrollbar-none sm:-mx-6 sm:px-6 [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {patterns.map((pattern, index) => (
          <article
            key={pattern.id}
            data-suitability-card-index={index}
            className="relative min-w-[88%] snap-center overflow-hidden rounded-4xl sm:min-w-[72%]"
          >
            <div className="relative h-108">
              <Image
                src={pattern.image}
                alt={pattern.imageAlt}
                fill
                sizes="(max-width: 639px) 88vw, (max-width: 1023px) 72vw, 1px"
                className="object-cover object-center"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-charcoal/88 via-charcoal/42 to-charcoal/10"
              />

              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-charcoal/28 to-transparent"
              />

              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="rounded-full border border-white/25 bg-white/12 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/70 backdrop-blur-sm">
                      {pattern.label}
                    </span>
                  </div>

                  <Heading as="h3" size="h3" className="mt-4 text-white">
                    {pattern.title}
                  </Heading>

                  <Text
                    as="p"
                    size="sm"
                    className="mt-4 max-w-[18rem] leading-relaxed text-white/76"
                  >
                    {pattern.description}
                  </Text>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between">
        <button
          type="button"
          onClick={() => scrollByDirection("prev")}
          disabled={activeIndex === 0}
          aria-label="Tiparul anterior"
          className="inline-flex size-12 items-center justify-center rounded-full border border-charcoal/15 bg-white/70 text-charcoal shadow-sm backdrop-blur-sm transition hover:bg-white disabled:pointer-events-none disabled:opacity-35"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
        </button>

        <div className="flex items-center gap-2">
          {patterns.map((pattern, index) => (
            <button
              key={pattern.id}
              type="button"
              onClick={() => scrollToCard(index)}
              aria-label={`Mergi la tiparul ${index + 1}`}
              aria-current={activeIndex === index ? "true" : undefined}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                activeIndex === index ? "w-8 bg-gold" : "w-2 bg-charcoal/20",
              )}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollByDirection("next")}
          disabled={activeIndex === patterns.length - 1}
          aria-label="Tiparul următor"
          className="inline-flex size-12 items-center justify-center rounded-full border border-charcoal/15 bg-white/70 text-charcoal shadow-sm backdrop-blur-sm transition hover:bg-white disabled:pointer-events-none disabled:opacity-35"
        >
          <ArrowRight className="size-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
