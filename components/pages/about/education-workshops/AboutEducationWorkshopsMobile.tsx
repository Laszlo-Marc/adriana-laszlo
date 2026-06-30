"use client";

import { useCallback, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, CalendarDays } from "lucide-react";

import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { educationCards } from "./aboutEducationWorkshopsData";

export default function AboutEducationWorkshopsMobile() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goToCard = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const nextIndex = Math.min(Math.max(index, 0), educationCards.length - 1);

    const card = container.querySelector<HTMLElement>(
      `[data-education-card-index="${nextIndex}"]`,
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
          ? Math.min(activeIndex + 1, educationCards.length - 1)
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
      container.querySelectorAll<HTMLElement>("[data-education-card-index]"),
    );

    if (!cards.length) return;

    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card) => {
      const index = Number(card.dataset.educationCardIndex);
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
    <div className="mt-10 lg:hidden">
      <article className="relative isolate overflow-hidden rounded-[2rem] border border-white/20 bg-charcoal px-5 py-8 text-center text-cream shadow-[0_24px_70px_rgba(44,44,44,0.12)]">
        <Image
          src="/events/events-hero.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="(max-width: 1023px) 92vw"
          className="absolute inset-0 -z-30 object-cover object-center opacity-70"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-charcoal/48"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-linear-to-t from-charcoal/96 via-charcoal/72 to-charcoal/32"
        />

        <div className="relative z-10 mx-auto flex min-h-[25rem] max-w-[18.5rem] flex-col items-center justify-center">
          <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-teal/25 bg-teal/12 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-teal backdrop-blur-md">
            <CalendarDays className="size-4 shrink-0" aria-hidden="true" />
            <span className="truncate">Programe AF-EMDR</span>
          </div>

          <Heading
            as="h3"
            size="h4"
            color="cream"
            textCase="uppercase"
            align="center"
            className="text-balance text-[1.45rem] leading-tight"
          >
            Programe de grup pentru traumă, relații și reglaj emoțional
          </Heading>

          <Text
            size="sm"
            align="center"
            className="mt-4 text-pretty leading-6 text-cream/78"
          >
            Un cadru structurat în care participanții pot lucra cu resurse
            pozitive, reglaj emoțional și teme precum anxietatea,
            perfecționismul, abandonul sau limitele în relații.
          </Text>

          <div className="mt-7 flex w-full flex-col gap-3">
            <Button
              href="/evenimente"
              variant="primary"
              className="w-full justify-center"
            >
              Vezi programele
            </Button>

            <Button
              href="/af-emdr"
              variant="outline"
              className="w-full justify-center border-cream/30 text-cream hover:bg-cream hover:text-charcoal"
            >
              Despre AF-EMDR
            </Button>
          </div>
        </div>
      </article>

      <div
        ref={scrollRef}
        onScroll={updateActiveIndex}
        className="-mx-4 mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {educationCards.map((card, index) => {
          const Icon = card.icon;
          const isWarm = card.tone === "warm";

          return (
            <article
              key={card.title}
              data-education-card-index={index}
              className={cn(
                "min-w-[82%] max-w-[20rem] shrink-0 snap-center rounded-[2rem] border px-5 py-7 text-center",
                isWarm
                  ? "border-gold/20 bg-gold/8"
                  : "border-teal/16 bg-white/64",
              )}
            >
              <span
                className={cn(
                  "mx-auto inline-flex size-12 items-center justify-center rounded-full border",
                  isWarm
                    ? "border-gold/30 bg-gold/12 text-gold"
                    : "border-teal/25 bg-teal/12 text-teal",
                )}
              >
                <Icon className="size-5" aria-hidden="true" />
              </span>

              <h3 className="mx-auto mt-5 max-w-[14rem] font-display text-[1.45rem] font-medium leading-tight text-charcoal">
                {card.title}
              </h3>

              <p className="mx-auto mt-4 max-w-[27ch] text-sm leading-6 text-charcoal/68">
                {card.description}
              </p>

              <a
                href={card.href}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-teal px-5 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-charcoal transition hover:bg-gold"
              >
                {card.cta}
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </article>
          );
        })}
      </div>

      <div className="mt-2 flex items-center justify-between">
        <button
          type="button"
          onClick={() => scrollToCard("prev")}
          disabled={activeIndex === 0}
          aria-label="Cardul anterior"
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
          {educationCards.map((card, index) => (
            <button
              key={`${card.title}-indicator`}
              type="button"
              onClick={() => goToCard(index)}
              aria-label={`Mergi la ${card.title}`}
              aria-current={activeIndex === index ? "true" : undefined}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300 motion-reduce:transition-none",
                activeIndex === index ? "w-8 bg-gold" : "w-2 bg-charcoal/20",
              )}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollToCard("next")}
          disabled={activeIndex === educationCards.length - 1}
          aria-label="Cardul următor"
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
    </div>
  );
}
