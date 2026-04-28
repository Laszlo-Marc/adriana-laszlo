// components/about/AboutStoryPathTimeline.tsx

"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { cn } from "@/lib/utils";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import AccentText from "@/components/ui/AccentText";

type StoryItem = {
  year: string;
  title: string;
  description: string;
  side: "left" | "right";
};

const pathD =
  "M210 0 C 90 150, 85 275, 210 375 C 335 475, 335 610, 210 705 C 85 805, 90 980, 210 1160";

const storyItems: StoryItem[] = [
  {
    year: "2012",
    title: "Începutul drumului în psihoterapie",
    description:
      "Un parcurs profesional construit în jurul înțelegerii omului, a relației terapeutice și a modului în care experiențele dificile influențează prezentul.",
    side: "left",
  },
  {
    year: "2018",
    title: "Orientarea către traumă și atașament",
    description:
      "Practica s-a conturat tot mai clar în jurul lucrului cu trauma, reglarea emoțională, relațiile și siguranța interioară.",
    side: "right",
  },
  {
    year: "2020",
    title: "Specializare în Attachment-Focused EMDR",
    description:
      "Formarea în AF-EMDR a devenit un reper central în felul în care lucrează cu trauma, atașamentul și procesarea experiențelor dificile.",
    side: "left",
  },
  {
    year: "Astăzi",
    title: "O abordare calmă, structurată și profundă",
    description:
      "Procesul terapeutic este adaptat ritmului fiecărei persoane, cu atenție la siguranță, claritate și stabilitate emoțională.",
    side: "right",
  },
];

export default function AboutStoryPathTimeline() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 65%", "end 55%"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const pathOpacity = useTransform(scrollYProgress, [0, 0.08], [0, 1]);

  return (
    <section ref={sectionRef}>
      <Section
        background="white"
        spacing="lg"
        aria-labelledby="about-story-heading"
        className="relative overflow-hidden"
      >
        <Container size="wide" padding="default">
          <div className="mx-auto max-w-3xl text-center">
            <AccentText>Povestea profesională</AccentText>

            <Heading as="h2" size="h2" align="center" className="mt-4">
              Un parcurs construit în jurul traumei, atașamentului și relației
              terapeutice.
            </Heading>

            <Text size="lg" className="mx-auto mt-5 max-w-2xl text-charcoal/70">
              Nu este doar o listă de formări, ci o direcție profesională clară:
              lucrul cu trauma într-un ritm sigur, atent și structurat.
            </Text>
          </div>

          <div className="relative mx-auto mt-20 max-w-6xl pb-10">
            {/* Brand decorations */}
            <Image
              src="/backgrounds/double-simple.png"
              alt=""
              width={260}
              height={520}
              aria-hidden="true"
              className="pointer-events-none absolute -left-28 top-20 hidden opacity-30 lg:block"
            />

            <Image
              src="/backgrounds/single.png"
              alt=""
              width={170}
              height={520}
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 bottom-10 hidden opacity-25 lg:block"
            />

            <Image
              src="/backgrounds/df-purple-up.png"
              alt=""
              width={110}
              height={110}
              aria-hidden="true"
              className="pointer-events-none absolute right-14 top-8 hidden rotate-12 opacity-45 lg:block"
            />

            <Image
              src="/backgrounds/df-teal-down.png"
              alt=""
              width={95}
              height={95}
              aria-hidden="true"
              className="pointer-events-none absolute left-20 bottom-20 hidden -rotate-12 opacity-45 lg:block"
            />

            {/* Desktop flowing path */}
            <svg
              aria-hidden="true"
              viewBox="0 0 420 1160"
              preserveAspectRatio="none"
              className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-105 -translate-x-1/2 lg:block"
            >
              <path
                d={pathD}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-teal/15"
              />

              <path
                d={pathD}
                fill="none"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray="1 26"
                className="text-purple/20"
              />

              <motion.path
                d={pathD}
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                style={{
                  pathLength,
                  opacity: pathOpacity,
                }}
                className="text-teal drop-shadow-[0_0_10px_rgba(129,213,202,0.75)]"
              />
            </svg>

            {/* Mobile animated path */}
            <div
              aria-hidden="true"
              className="absolute left-5 top-0 h-full w-px overflow-hidden bg-teal/15 lg:hidden"
            >
              <motion.div
                style={{
                  scaleY: pathLength,
                  opacity: pathOpacity,
                }}
                className="h-full w-px origin-top bg-teal"
              />
            </div>

            <div className="relative space-y-14 lg:space-y-24">
              {storyItems.map((item, index) => (
                <StoryTimelineItem key={item.title} item={item} index={index} />
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </section>
  );
}

function StoryTimelineItem({
  item,
  index,
}: {
  item: StoryItem;
  index: number;
}) {
  const isLeft = item.side === "left";

  return (
    <article className="relative grid items-center gap-6 lg:grid-cols-[1fr_120px_1fr]">
      <div
        className={cn(
          "pl-14 lg:pl-0",
          isLeft ? "lg:col-start-1" : "hidden lg:block",
        )}
      >
        {isLeft ? <StoryCard item={item} index={index} /> : null}
      </div>

      <div className="absolute left-0 top-7 z-10 flex items-center lg:static lg:col-start-2 lg:justify-center">
        <div className="flex size-11 items-center justify-center rounded-full border border-teal/25 bg-white shadow-sm">
          <span className="size-3 rounded-full bg-teal" />
        </div>
      </div>

      <div
        className={cn(
          "pl-14 lg:pl-0",
          !isLeft ? "lg:col-start-3" : "hidden lg:block",
        )}
      >
        {!isLeft ? <StoryCard item={item} index={index} /> : null}
      </div>
    </article>
  );
}

function StoryCard({ item, index }: { item: StoryItem; index: number }) {
  const isFeatured = index === 2;

  return (
    <div
      className={cn(
        "relative rounded-[1.75rem] border border-border/70 bg-cream/80 p-6 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md md:p-7",
        isFeatured && "border-teal/30 bg-teal/8",
      )}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal">
        {item.year}
      </p>

      <Heading as="h3" size="h4" className="mt-3">
        {item.title}
      </Heading>

      <Text className="mt-4 text-charcoal/70">{item.description}</Text>

      {isFeatured ? (
        <div className="mt-5 rounded-2xl border border-white/70 bg-white/65 p-4">
          <p className="text-sm font-medium leading-relaxed text-charcoal/80">
            Această etapă susține poziționarea Adrianei ca specialist în
            Attachment-Focused EMDR.
          </p>
        </div>
      ) : null}
    </div>
  );
}
