"use client";

import Image from "next/image";

import Button from "@/components/ui/Button";
import FlowArt, { FlowSection } from "@/components/ui/story-scroll";
import type { EventDetail, EventStoryChapter } from "./eventData";
import Heading from "@/components/ui/Heading";

type EventStoryScrollSectionProps = {
  event: EventDetail;
};

export default function EventStoryScrollSection({
  event,
}: EventStoryScrollSectionProps) {
  const chapters: EventStoryChapter[] = event.storyChapters;

  return (
    <section
      id="structura"
      aria-labelledby="event-story-scroll-title"
      className="relative overflow-hidden bg-cream"
    >
      <h2 id="event-story-scroll-title" className="sr-only">
        Ce conține programul
      </h2>

      <FlowArt aria-label="Ce conține programul">
        {chapters.map((chapter, index) => (
          <FlowSection
            key={`${chapter.eyebrow}-${chapter.title}`}
            aria-label={chapter.title}
            className="bg-cream"
          >
            <Image
              src={chapter.image}
              alt={chapter.imageAlt}
              fill
              sizes="100vw"
              className="absolute inset-0 object-cover"
              priority={index === 0}
            />

            {/* immersive cream blending */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-10 bg-cream/28"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[34%] bg-gradient-to-b from-cream via-cream/86 via-[42%] to-transparent"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[40%] bg-gradient-to-t from-cream via-cream/90 via-[46%] to-transparent"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[42%] bg-gradient-to-r from-cream via-cream/80 via-[42%] to-transparent"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[32%] bg-gradient-to-l from-cream/72 to-transparent"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-[72%] w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cream/22 blur-3xl"
            />

            {/* content */}
            <div className="relative z-20 flex min-h-[calc(100svh-8vw)] flex-col justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                  {chapter.eyebrow}
                </p>

                <hr className="my-[clamp(1.25rem,2vw,2rem)] border-none border-t border-charcoal/20" />

                <Heading as="h2" size="display" className="max-w-4xl">
                  {chapter.title}
                </Heading>
              </div>

              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                <p className="max-w-[48ch] text-[clamp(1.05rem,1.75vw,1.55rem)] leading-relaxed text-charcoal/76">
                  {chapter.description}
                </p>

                {chapter.points && chapter.points.length > 0 ? (
                  <div className="grid gap-4 md:grid-cols-3">
                    {chapter.points.map((point) => (
                      <article
                        key={point.title}
                        className="border-t border-charcoal/18 pt-4"
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                          {point.title}
                        </p>

                        <p className="mt-3 text-sm leading-7 text-charcoal/68">
                          {point.description}
                        </p>
                      </article>
                    ))}
                  </div>
                ) : null}
              </div>

              {index === chapters.length - 1 ? (
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="#inscriere" variant="primary">
                    Înscrie-te în program
                  </Button>

                  <Button href="#cum-functioneaza" variant="secondary">
                    Cum funcționează
                  </Button>
                </div>
              ) : null}
            </div>
          </FlowSection>
        ))}
      </FlowArt>
    </section>
  );
}
