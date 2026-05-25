"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Text from "@/components/ui/Text";
import Heading from "@/components/ui/Heading";
import AccentText from "@/components/ui/AccentText";
import { problemsContent } from "./problemsContent";

function StoryPanel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={[
        "relative flex min-h-[62svh] items-center justify-center px-6 py-16 text-center",
        className,
      ].join(" ")}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.58 }}
        transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mx-auto max-w-sm"
      >
        {children}
      </motion.div>
    </section>
  );
}

export default function HomeProblemsMobileStory() {
  return (
    <div className="relative -mt-20 lg:hidden">
      {/* Sticky visual stage */}
      <div className="sticky top-0 h-svh overflow-hidden bg-cream">
        <Image
          src={problemsContent.image.src}
          alt={problemsContent.image.alt}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Soft atmospheric treatment */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-cream/42"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,250,242,0.18)_0%,rgba(255,250,242,0.62)_58%,rgba(255,250,242,0.96)_100%)]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-cream via-cream/76 to-transparent"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent via-cream/82 to-cream"
        />
      </div>

      {/* Scroll content over the sticky stage */}
      <div className="relative z-10 -mt-[100svh]">
        {/* Intro */}
        <StoryPanel className="min-h-svh">
          <AccentText className="mb-5 block text-2xl leading-none text-gold">
            {problemsContent.eyebrow}
          </AccentText>

          <Heading
            as="h2"
            size="h1"
            align="center"
            className="mx-auto max-w-sm text-balance text-charcoal"
          >
            {problemsContent.title}
          </Heading>

          <Text
            as="p"
            size="sm"
            color="muted"
            align="center"
            className="mx-auto mt-5 max-w-xs text-pretty leading-6"
          >
            {problemsContent.description}
          </Text>
        </StoryPanel>

        {/* Cues */}
        {problemsContent.signs.map((sign) => (
          <StoryPanel key={sign.number}>
            <Text
              as="p"
              size="xs"
              color="gold"
              weight="medium"
              transform="upper"
              align="center"
              className="mb-5 tracking-[0.24em]"
            >
              {sign.number}
            </Text>

            <Text
              as="p"
              size="lg"
              color="charcoal"
              align="center"
              className="mx-auto max-w-xs text-balance leading-8"
            >
              {sign.text}
            </Text>
          </StoryPanel>
        ))}
      </div>
    </div>
  );
}
