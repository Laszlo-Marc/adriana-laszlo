"use client";

import Image from "next/image";

import Button from "@/components/ui/Button";
import FlowArt, {
  FlowSection,
} from "@/components/pages/events/event-page/story-scroll";
import type { EventDetail, EventStoryChapter } from "./eventData";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

type EventStoryScrollSectionProps = {
  event: EventDetail;
};

function getChapterBody(chapter: EventStoryChapter) {
  return chapter.body ?? chapter.description;
}

export default function EventStoryScrollSection({
  event,
}: EventStoryScrollSectionProps) {
  const chapters = event.storyChapters;

  if (!chapters.length) return null;

  return (
    <section
      id="structura"
      aria-labelledby="event-story-scroll-title"
      className="relative overflow-visible bg-cream"
    >
      <h2 id="event-story-scroll-title" className="sr-only">
        Ce conține programul
      </h2>

      <FlowArt aria-label="Ce conține programul">
        {chapters.map((chapter, index) => {
          const chapterBody = getChapterBody(chapter);
          const isLast = index === chapters.length - 1;

          return (
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

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-10 bg-cream/34"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[34%] bg-linear-to-b from-cream via-cream/88 via-42% to-transparent"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[38%] bg-linear-to-t from-cream via-cream/90 via-46% to-transparent"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[48%] bg-linear-to-r from-cream via-cream/88 via-45% to-transparent"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[36%] bg-linear-to-l from-cream/74 to-transparent"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-[72%] w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cream/24 blur-3xl"
              />

              <div className="relative z-20 flex min-h-[calc(100svh-8vw)] items-center">
                <div className="grid w-full gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16">
                  <div className="flex flex-col justify-center">
                    <div className="max-w-2xl">
                      <Text
                        as="p"
                        size="xs"
                        weight="medium"
                        transform="upper"
                        color="gold"
                        className="tracking-[0.28em]"
                      >
                        {chapter.eyebrow}
                      </Text>

                      <div className="mt-6 h-px w-16 bg-gold/55" />

                      <Heading
                        as={index === 0 ? "h2" : "h3"}
                        size="h1"
                        className="mt-8 max-w-3xl text-charcoal"
                      >
                        {chapter.title}
                      </Heading>

                      {isLast ? (
                        <div className="mt-10 hidden flex-col gap-3 sm:flex-row lg:flex">
                          <Button href="#inscriere" variant="primary">
                            Înscrie-te în program
                          </Button>

                          <Button
                            href="#event-quick-info-title"
                            variant="secondary"
                          >
                            Vezi detaliile
                          </Button>
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <article className="w-full max-w-2xl rounded-4xl border border-white/60 bg-white/38 p-6 shadow-[0_24px_80px_rgba(44,44,44,0.08)] backdrop-blur-md sm:p-8 lg:p-10">
                      <Text
                        as="p"
                        size="xs"
                        weight="medium"
                        transform="upper"
                        color="gold"
                        className="tracking-[0.22em]"
                      >
                        Despre această etapă
                      </Text>

                      <div className="mt-5 space-y-5">
                        <Text className="text-lg leading-8 sm:text-xl sm:leading-8">
                          {chapterBody}
                        </Text>
                      </div>

                      {isLast ? (
                        <div className="mt-8 flex flex-col gap-3 lg:hidden">
                          <Button href="#inscriere" variant="primary">
                            Înscrie-te în program
                          </Button>

                          <Button
                            href="#event-quick-info-title"
                            variant="secondary"
                          >
                            Vezi detaliile
                          </Button>
                        </div>
                      ) : null}
                    </article>
                  </div>
                </div>
              </div>
            </FlowSection>
          );
        })}
      </FlowArt>
    </section>
  );
}
