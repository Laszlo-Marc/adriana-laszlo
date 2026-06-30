"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";
import Section from "@/components/ui/Section";
import { cn } from "@/lib/utils";

import { methodSteps } from "./data";
import Heading from "@/components/ui/Heading";

const cardTones = [
  {
    card: "bg-teal text-charcoal",
    eyebrow: "text-charcoal/60",
    line: "bg-charcoal/22",
    title: "text-charcoal",
    body: "text-charcoal/74",
    bullet: "bg-gold",
    point: "text-charcoal/76",
    number: "text-charcoal/45",
  },
  {
    card: "bg-purple text-charcoal",
    eyebrow: "text-charcoal/60",
    line: "bg-charcoal/22",
    title: "text-charcoal",
    body: "text-charcoal/74",
    bullet: "bg-gold",
    point: "text-charcoal/76",
    number: "text-charcoal/45",
  },
  {
    card: "bg-sand text-charcoal",
    eyebrow: "text-charcoal/60",
    line: "bg-charcoal/22",
    title: "text-charcoal",
    body: "text-charcoal/74",
    bullet: "bg-gold",
    point: "text-charcoal/76",
    number: "text-charcoal/45",
  },
] as const;

export default function EducationMethodMobileSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const cards = Array.from(
      container.querySelectorAll<HTMLElement>("[data-education-method-card]"),
    );

    if (!cards.length) return;

    const containerCenter = container.scrollLeft + container.clientWidth / 2;

    const closestIndex = cards.reduce((closest, card, index) => {
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const currentDistance = Math.abs(containerCenter - cardCenter);

      const closestCard = cards[closest];
      const closestDistance = Math.abs(
        containerCenter -
          (closestCard.offsetLeft + closestCard.clientWidth / 2),
      );

      return currentDistance < closestDistance ? index : closest;
    }, 0);

    setActiveIndex(closestIndex);
  }, []);

  const scrollToIndex = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.querySelector<HTMLElement>(
      `[data-education-method-card-index="${index}"]`,
    );

    card?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });

    setActiveIndex(index);
  }, []);

  const scrollToCard = useCallback(
    (direction: "prev" | "next") => {
      const nextIndex =
        direction === "next"
          ? Math.min(activeIndex + 1, methodSteps.length - 1)
          : Math.max(activeIndex - 1, 0);

      scrollToIndex(nextIndex);
    },
    [activeIndex, scrollToIndex],
  );

  return (
    <Section
      spacing="none"
      className="relative isolate overflow-hidden bg-charcoal lg:hidden"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/home-page/method.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        <div aria-hidden="true" className="absolute inset-0 bg-charcoal/48" />

        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-charcoal/55 via-charcoal/28 to-transparent"
        />

        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-56 bg-linear-to-t from-charcoal/80 via-charcoal/38 to-transparent"
        />
      </div>

      <Container
        padding="default"
        className="relative z-10 flex min-h-svh flex-col justify-center py-14"
      >
        <div
          ref={scrollRef}
          onScroll={updateActiveIndex}
          className="flex w-full snap-x snap-mandatory gap-4 overflow-x-auto pb-4 scroll-smooth scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {methodSteps.map((step, index) => {
            const tone = cardTones[index % cardTones.length];

            return (
              <article
                key={step.title}
                data-education-method-card
                data-education-method-card-index={index}
                className={cn(
                  " bg-cream text-charcoal relative flex min-h-[70svh] w-full shrink-0 basis-full snap-center flex-col overflow-hidden rounded-4xl px-7 py-8",
                )}
              >
                <div className="flex items-center justify-between">
                  <p
                    className={cn(
                      "text-xs font-semibold uppercase tracking-[0.24em]",
                      tone.number,
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <span className={cn("h-px w-14", tone.line)} />
                </div>

                <div className="my-auto text-center">
                  <p
                    className={cn(
                      "text-xs font-semibold uppercase tracking-[0.22em] mt-5",
                      tone.eyebrow,
                    )}
                  >
                    {step.imageTitle}
                  </p>

                  <Heading
                    align="center"
                    color="charcoal"
                    as="h2"
                    size="h3"
                    textCase="uppercase"
                    className="mt-5"
                  >
                    {step.title}
                  </Heading>

                  <Text
                    size="sm"
                    align="center"
                    className={cn(
                      "mx-auto max-w-xl mt-6 text-pretty leading-6",
                      tone.body,
                    )}
                  >
                    {step.body}
                  </Text>

                  <ul className="mx-auto mt-7 max-w-[31ch] space-y-3 text-left">
                    {step.points.slice(0, 3).map((point) => (
                      <li key={point} className="flex gap-3">
                        <span
                          className={cn(
                            "mt-2 h-1.5 w-1.5 shrink-0 rounded-full",
                            tone.bullet,
                          )}
                        />

                        <Text
                          as="span"
                          size="sm"
                          className={cn("text-pretty leading-6", tone.point)}
                          align="left"
                        >
                          {point}
                        </Text>
                      </li>
                    ))}
                  </ul>

                  {step.cta ? (
                    <Button
                      href={step.cta.href}
                      variant="urgent"
                      size="md"
                      className="mx-auto mt-8"
                    >
                      {step.cta.label}
                    </Button>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-5 grid grid-cols-[auto_1fr_auto] items-center gap-5">
          <button
            type="button"
            onClick={() => scrollToCard("prev")}
            disabled={activeIndex === 0}
            aria-label="Cardul anterior"
            className="inline-flex size-14 items-center justify-center rounded-full border border-white/25 bg-gold text-charcoal shadow-[0_12px_34px_rgba(0,0,0,0.22)] transition hover:scale-105 hover:bg-gold/90 disabled:pointer-events-none disabled:scale-100 disabled:bg-white/18 disabled:text-white/45"
          >
            <ArrowLeft className="size-5" aria-hidden="true" />
          </button>

          <div className="flex items-center justify-center gap-2.5">
            {methodSteps.map((step, index) => (
              <button
                key={step.title}
                type="button"
                onClick={() => scrollToIndex(index)}
                aria-label={`Mergi la cardul ${index + 1}`}
                aria-current={activeIndex === index ? "true" : undefined}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  activeIndex === index ? "w-10 bg-gold" : "w-2.5 bg-white/42",
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollToCard("next")}
            disabled={activeIndex === methodSteps.length - 1}
            aria-label="Cardul următor"
            className="inline-flex size-14 items-center justify-center rounded-full border border-white/25 bg-gold text-charcoal shadow-[0_12px_34px_rgba(0,0,0,0.22)] transition hover:scale-105 hover:bg-gold/90 disabled:pointer-events-none disabled:scale-100 disabled:bg-white/18 disabled:text-white/45"
          >
            <ArrowRight className="size-5" aria-hidden="true" />
          </button>
        </div>
      </Container>
    </Section>
  );
}
