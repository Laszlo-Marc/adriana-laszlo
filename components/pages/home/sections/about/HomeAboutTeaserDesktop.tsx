"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef, useState } from "react";

import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import AccentText from "@/components/ui/AccentText";
import { aboutStoryContent } from "./aboutStoryContent";

type StoryChapter = (typeof aboutStoryContent.chapters)[number];

type StoryChapterPanelProps = {
  index: number;
  total: number;
  progress: MotionValue<number>;
  chapter: StoryChapter;
};

function StoryChapterPanel({
  index,
  total,
  progress,
  chapter,
}: StoryChapterPanelProps) {
  const segment = 1 / total;

  const start = Math.max(0, index * segment - 0.08);
  const enter = index * segment + 0.04;
  const hold = (index + 1) * segment - 0.12;
  const exit = Math.min(1, (index + 1) * segment + 0.02);

  const opacity = useTransform(
    progress,
    [start, enter, hold, exit],
    [0, 1, 1, 0],
  );

  const y = useTransform(progress, [start, enter, hold, exit], [18, 0, 0, -18]);

  const blur = useTransform(
    progress,
    [start, enter, hold, exit],
    ["blur(5px)", "blur(0px)", "blur(0px)", "blur(5px)"],
  );

  return (
    <motion.div
      style={{ opacity, y, filter: blur }}
      className="absolute inset-0 flex flex-col items-center justify-center px-9 py-10 text-center"
    >
      <AccentText className="mb-4 block text-2xl leading-none text-gold">
        {chapter.eyebrow}
      </AccentText>

      <Heading
        as="h2"
        size="h2"
        align="center"
        className="mx-auto max-w-md text-balance text-charcoal"
      >
        {chapter.title}
      </Heading>

      <Text
        as="p"
        size="base"
        color="muted"
        align="center"
        className="mx-auto mt-6 max-w-md text-pretty leading-8"
      >
        {chapter.body}
      </Text>
    </motion.div>
  );
}

export default function HomeAboutTeaserDesktopStory() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const chapterCount = aboutStoryContent.chapters.length;

    let nextIndex = 0;

    if (latest > 0.66) {
      nextIndex = 2;
    } else if (latest > 0.33) {
      nextIndex = 1;
    }

    setActiveIndex((current) => {
      if (current === nextIndex) return current;
      return nextIndex;
    });
  });

  const activeChapter = aboutStoryContent.chapters[activeIndex];

  return (
    <div
      ref={sectionRef}
      className="relative hidden h-[300vh] bg-cream lg:block"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Soft background atmosphere */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-1/2 h-[36rem] w-[36rem] -translate-y-1/2 rounded-full bg-teal/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 top-[20%] h-[34rem] w-[34rem] rounded-full bg-purple/10 blur-3xl"
        />

        <div className="grid h-full grid-cols-[31vw_minmax(460px,1fr)_31vw] items-stretch">
          {/* Left image */}
          <div className="relative overflow-hidden">
            <Image
              src={aboutStoryContent.leftImage.src}
              alt={aboutStoryContent.leftImage.alt}
              fill
              sizes="31vw"
              className="object-cover object-center"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-cream/12"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 w-2/3 bg-gradient-to-l from-cream via-cream/76 to-transparent"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-cream/80 via-cream/40 to-transparent"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent via-cream/65 to-cream"
            />

            <motion.div
              key={`left-word-${activeChapter.word}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 0.24, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-none absolute bottom-[18%] left-[12%] font-accent text-[5rem] leading-none text-charcoal"
            >
              {activeChapter.word}
            </motion.div>
          </div>

          {/* Center sticky story */}
          <div className="relative flex items-center justify-center px-10">
            {/* Brand ornament behind center card */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[660px] w-[420px] -translate-x-1/2 -translate-y-1/2 opacity-[0.08]"
            >
              <Image
                src="/backgrounds/double-vine.png"
                alt=""
                fill
                sizes="420px"
                className="object-contain"
              />
            </div>
            <article className="relative z-10 mx-auto h-[30rem] w-full max-w-[34rem] overflow-hidden rounded-[2rem] border border-white/45 bg-cream/72 text-center shadow-[0_20px_70px_rgba(44,44,44,0.08)] backdrop-blur-xl">
              <div className="relative flex h-[21rem] items-center justify-center px-9 py-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeChapter.title}
                    initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -18, filter: "blur(6px)" }}
                    transition={{
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0 flex flex-col items-center justify-center px-9 py-10 text-center"
                  >
                    <AccentText className="mb-4 block text-2xl leading-none text-gold">
                      {activeChapter.eyebrow}
                    </AccentText>

                    <Heading
                      as="h2"
                      size="h2"
                      align="center"
                      className="mx-auto max-w-md text-balance text-charcoal"
                    >
                      {activeChapter.title}
                    </Heading>

                    <Text
                      as="p"
                      size="base"
                      color="muted"
                      align="center"
                      className="mx-auto mt-6 max-w-md text-pretty leading-8"
                    >
                      {activeChapter.body}
                    </Text>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="relative z-20 mx-auto flex justify-center gap-2">
                {aboutStoryContent.chapters.map((chapter, index) => (
                  <span
                    key={chapter.title}
                    aria-hidden="true"
                    className={[
                      "h-1.5 rounded-full transition-all duration-500",
                      index === activeIndex
                        ? "w-8 bg-gold"
                        : "w-1.5 bg-gold/30",
                    ].join(" ")}
                  />
                ))}
              </div>

              <div className="relative z-20 mt-8 px-9">
                <Button href={aboutStoryContent.cta.href} size="lg">
                  {aboutStoryContent.cta.label}
                </Button>
              </div>
            </article>
          </div>

          {/* Right image */}
          <div className="relative overflow-hidden">
            <Image
              src={aboutStoryContent.rightImage.src}
              alt={aboutStoryContent.rightImage.alt}
              fill
              sizes="31vw"
              className="object-cover object-center"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-cream/16"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-cream via-cream/76 to-transparent"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-cream/80 via-cream/40 to-transparent"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent via-cream/65 to-cream"
            />

            <motion.div
              key={`right-word-${activeChapter.word}`}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 0.22, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-none absolute right-[10%] top-[20%] font-accent text-[5.5rem] leading-none text-charcoal"
            >
              {activeChapter.word}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
