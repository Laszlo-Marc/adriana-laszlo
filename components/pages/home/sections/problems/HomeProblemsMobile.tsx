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
        "relative flex min-h-[56dvh] items-center justify-center px-6 py-14 text-center",
        className,
      ].join(" ")}
    >
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.62 }}
        transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mx-auto max-w-sm transform-gpu will-change-transform"
      >
        {children}
      </motion.div>
    </section>
  );
}

export default function HomeProblemsMobileStory() {
  return (
    <div className="relative  lg:hidden">
      {/* Stable sticky visual stage */}
      <div className="sticky top-0 h-[100dvh] overflow-hidden bg-cream [backface-visibility:hidden]">
        <div className="absolute inset-0">
          <Image
            src={problemsContent.image.src}
            alt={problemsContent.image.alt}
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

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

      {/* Scroll content over sticky stage */}
      <div className="relative z-10 -mt-[100dvh]">
        <StoryPanel className="min-h-[100dvh]">
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
            size="lg"
            color="charcoal"
            align="center"
            className="mx-auto mt-5 max-w-xs text-pretty leading-6"
          >
            {problemsContent.description}
          </Text>
        </StoryPanel>

        {problemsContent.signs.map((sign) => (
          <StoryPanel key={sign.number}>
            <Text
              as="p"
              size="base"
              color="charcoal"
              weight="medium"
              transform="upper"
              align="center"
              className="mb-5 tracking-[0.24em]"
            >
              {sign.number}
            </Text>

            <Text
              as="p"
              size="xl"
              color="charcoal"
              align="center"
              className="mx-auto max-w-xs font-semibold text-balance leading-8"
            >
              {sign.text}
            </Text>
          </StoryPanel>
        ))}

        <StoryPanel className="min-h-[68dvh]">
          <div className="mx-auto mb-6 h-px w-28 bg-gold/45" />

          <Text
            as="p"
            size="base"
            color="charcoal"
            align="center"
            className="mx-auto max-w-xs text-balance leading-7"
          >
            {problemsContent.closing}
          </Text>
        </StoryPanel>
      </div>
    </div>
  );
}
