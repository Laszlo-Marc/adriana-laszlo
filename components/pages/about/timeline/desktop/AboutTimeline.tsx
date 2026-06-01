"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import AccentText from "@/components/ui/AccentText";
import { TimelineDecorations } from "./TimelineDecorations";

import { storyItems } from "./data";
import { StoryTimelineItem } from "./TimelineItem";
import TimelinePath from "./TimelinePath";

export default function AboutStoryPathTimelineDesktop() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 65%", "end 55%"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const pathOpacity = useTransform(scrollYProgress, [0, 0.08], [0, 1]);

  return (
    <section ref={sectionRef} className="hidden lg:block">
      <Section
        background="white"
        spacing="lg"
        aria-labelledby="about-story-heading"
        className="relative "
        allowOverflow
      >
        <Container size="wide" padding="default">
          <div className="mx-auto max-w-6xl text-center">
            <AccentText>Povestea profesională</AccentText>

            <Heading
              id="about-story-heading"
              as="h2"
              size="h2"
              align="center"
              className="mt-4"
            >
              Parcursul meu în psihoterapie
            </Heading>
          </div>

          <div className="relative mx-auto mt-20 max-w-6xl pb-10">
            <TimelineDecorations />

            <TimelinePath pathLength={pathLength} pathOpacity={pathOpacity} />

            <div className="relative z-10 space-y-24">
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
