"use client";

import { useState } from "react";
import Image from "next/image";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import AccentText from "@/components/ui/AccentText";
import { storyItems } from "../desktop/data";
import { StoryCard } from "../desktop/StoryCard";

export default function AboutTimelineMobile() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Section
      background="cream"
      spacing="lg"
      aria-labelledby="about-story-mobile-heading"
      className="relative overflow-hidden lg:hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-teal/10 blur-3xl"
      />

      <Image
        src="/backgrounds/df-purple-down.png"
        alt=""
        width={110}
        height={90}
        aria-hidden="true"
        className="pointer-events-none absolute right-3 top-14 opacity-25"
      />

      <Container size="wide" padding="default" className="relative z-10">
        <div className="mx-auto max-w-md text-center">
          <AccentText>Povestea profesională</AccentText>

          <Heading
            id="about-story-mobile-heading"
            as="h2"
            size="h2"
            align="center"
            className="mt-4"
          >
            Parcursul meu în psihoterapie
          </Heading>
        </div>

        <div className="-mx-4 mt-10 overflow-x-auto px-4 pb-5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex snap-x snap-mandatory gap-4">
            {storyItems.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={`${item.year}-${item.title}`}
                  className="min-w-[82%] max-w-[22rem] snap-center"
                >
                  <StoryCard
                    item={item}
                    index={index}
                    compact
                    isExpandable
                    isActive={isActive}
                    onToggle={() =>
                      setActiveIndex((currentIndex) =>
                        currentIndex === index ? -1 : index,
                      )
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-1 flex justify-center gap-2">
          {storyItems.map((item, index) => (
            <span
              key={`${item.year}-indicator`}
              aria-hidden="true"
              className={
                activeIndex === index
                  ? "h-1.5 w-8 rounded-full bg-gold"
                  : "h-1.5 w-8 rounded-full bg-teal/25"
              }
            />
          ))}
        </div>

        <p className="mt-5 text-center text-xs font-medium uppercase tracking-[0.18em] text-charcoal/45">
          Glisează și apasă pentru detalii
        </p>
      </Container>
    </Section>
  );
}
