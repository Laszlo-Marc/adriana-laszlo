"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import { cn } from "@/lib/utils";
import { EventStoryChapter } from "../../eventData";

type EventStoryMobileAccordionProps = {
  chapters: EventStoryChapter[];
};

function getChapterBody(chapter: EventStoryChapter) {
  return chapter.body ?? chapter.description;
}

function getChapterId(chapter: EventStoryChapter, index: number) {
  return `${chapter.eyebrow}-${index}`
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function formatStep(index: number) {
  return String(index + 1).padStart(2, "0");
}

export default function EventStoryMobileAccordion({
  chapters,
}: EventStoryMobileAccordionProps) {
  const [activeId, setActiveId] = useState<string | null>(
    chapters[0] ? getChapterId(chapters[0], 0) : null,
  );

  return (
    <div className="lg:hidden">
      <div className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-xl">
          <Text
            as="p"
            size="xs"
            weight="medium"
            transform="upper"
            color="gold"
            align="center"
            className="tracking-[0.28em]"
          >
            Structura programului
          </Text>

          <Heading
            as="h3"
            size="h2"
            align="center"
            textCase="uppercase"
            className="mt-5 text-charcoal"
          >
            Ce conține fiecare etapă
          </Heading>
        </div>

        <div className="-mx-5 mt-10 overflow-hidden sm:-mx-8">
          {chapters.map((chapter, index) => {
            const chapterId = getChapterId(chapter, index);
            const isActive = activeId === chapterId;
            const isPurple = index % 2 === 1;
            const isLast = index === chapters.length - 1;
            const chapterBody = getChapterBody(chapter);
            const step = formatStep(index);

            return (
              <article key={chapterId}>
                <button
                  type="button"
                  onClick={() => setActiveId(isActive ? null : chapterId)}
                  aria-expanded={isActive}
                  aria-controls={`${chapterId}-panel`}
                  className={cn(
                    "group flex w-full items-center justify-between gap-5 px-5 py-5 text-left transition duration-300 sm:px-8",
                    isPurple
                      ? "bg-purple/70 text-charcoal"
                      : "bg-teal/70 text-charcoal",
                  )}
                >
                  <span className="flex min-w-0 items-center gap-5">
                    <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal/80">
                      {step}
                    </span>

                    <span className="text-base font-medium uppercase leading-tight tracking-[0.16em] text-charcoal">
                      {chapter.eyebrow}
                    </span>
                  </span>

                  <span
                    className={cn(
                      "flex size-9 shrink-0 items-center justify-center rounded-full border bg-white/18 text-charcoal transition duration-300",
                      isPurple ? "border-purple/35" : "border-teal/35",
                      isActive && "rotate-180",
                    )}
                  >
                    <ChevronDown className="size-4" aria-hidden="true" />
                  </span>
                </button>

                <div
                  id={`${chapterId}-panel`}
                  className={cn(
                    "grid bg-cream transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="bg-cream">
                      <div className="relative h-[28rem] overflow-hidden">
                        <Image
                          src={chapter.image}
                          alt={chapter.imageAlt}
                          fill
                          sizes="100vw"
                          className="object-cover opacity-90"
                          priority={index === 0}
                        />

                        <div
                          aria-hidden="true"
                          className="absolute inset-0 bg-charcoal/10"
                        />

                        <div
                          aria-hidden="true"
                          className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-cream via-cream/70 to-transparent"
                        />

                        <div
                          aria-hidden="true"
                          className="absolute inset-x-0 bottom-0 h-52 bg-linear-to-t from-cream via-cream/82 to-transparent"
                        />

                        <div className="absolute bottom-7 left-5 right-5 z-10">
                          <Heading
                            as="h3"
                            size="h3"
                            align="center"
                            textCase="uppercase"
                            className="leading-[1.02] text-charcoal"
                          >
                            {chapter.title}
                          </Heading>
                        </div>
                      </div>

                      <div className="px-5 pb-9 pt-3 sm:px-8">
                        <Text
                          size="base"
                          color="muted"
                          align="center"
                          className="mx-auto max-w-xl leading-8"
                        >
                          {chapterBody}
                        </Text>

                        {isLast ? (
                          <div className="mx-auto mt-8 flex max-w-sm flex-col gap-3">
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
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
