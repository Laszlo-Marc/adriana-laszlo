"use client";

import { useRef } from "react";
import { useReducedMotion, useScroll, useTransform } from "framer-motion";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import AccentText from "@/components/ui/AccentText";
import ScrollReveal from "@/components/ui/ScrollReveal";

import { TimelineDecorations } from "./TimelineDecorations";
import { storyItems } from "./data";
import { StoryTimelineItem } from "./TimelineItem";
import TimelinePath from "./TimelinePath";

const revealDelays = ["none", "sm", "md"] as const;

export default function AboutStoryPathTimelineDesktop() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion() ?? false;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 65%", "end 55%"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const pathOpacity = useTransform(scrollYProgress, [0, 0.08], [0, 1]);

  return (
    <div ref={sectionRef} className="relative hidden lg:block">
      <Container size="wide" padding="default">
        <div className="mx-auto max-w-6xl text-center">
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

        <div className="relative mx-auto mt-20 max-w-6xl pb-10">
          <TimelineDecorations />

          {!shouldReduceMotion ? (
            <TimelinePath pathLength={pathLength} pathOpacity={pathOpacity} />
          ) : null}

          <div className="relative z-10 space-y-24">
            {storyItems.map((item, index) => (
              <ScrollReveal
                key={`${item.year}-${item.title}`}
                preset="fade-up"
                delay={revealDelays[index % revealDelays.length]}
                className="relative"
              >
                <StoryTimelineItem item={item} index={index} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
