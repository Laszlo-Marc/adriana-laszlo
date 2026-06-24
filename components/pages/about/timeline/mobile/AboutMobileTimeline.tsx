"use client";

import { useState } from "react";
import Image from "next/image";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import AccentText from "@/components/ui/AccentText";
import { cn } from "@/lib/utils";

import { storyItems } from "../desktop/data";
import { StoryCard } from "../desktop/StoryCard";

export default function AboutTimelineMobile() {
  const [activeIndex, setActiveIndex] = useState(0);

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
          <AccentText>Povestea profesională</AccentText>

          <Heading
            as="h2"
            size="h2"
            textCase="uppercase"
            align="center"
            className="mt-4"
          >
            Parcursul meu în psihoterapie
          </Heading>
        </div>
        <div className="-mx-4 mt-10 overflow-x-auto px-4 pb-3 scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex snap-x snap-mandatory items-start gap-4">
            {storyItems.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={`${item.year}-${item.title}`}
                  className="min-w-[82%] max-w-88 shrink-0 snap-center"
                >
                  <StoryCard
                    item={item}
                    index={index}
                    compact
                    isExpandable
                    isActive={isActive}
                    onToggle={() => {
                      setActiveIndex((currentIndex) =>
                        currentIndex === index ? -1 : index,
                      );
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center gap-2">
          {storyItems.map((item, index) => (
            <span
              key={`${item.year}-indicator`}
              aria-hidden="true"
              className={cn(
                "h-1.5 w-8 rounded-full transition-colors duration-300 motion-reduce:transition-none",
                activeIndex === index ? "bg-gold" : "bg-teal/25",
              )}
            />
          ))}
        </div>

        <p className="mt-5 text-center text-xs font-medium uppercase tracking-[0.18em] text-charcoal/45">
          Glisează și apasă pentru detalii
        </p>
      </Container>
    </div>
  );
}
