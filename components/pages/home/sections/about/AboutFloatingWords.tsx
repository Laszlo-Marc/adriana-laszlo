"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import type { RefObject } from "react";
import AccentText from "@/components/ui/AccentText";
import { cn } from "@/lib/utils";

type FloatingWord = {
  text: string;
  className?: string;
  startY?: number;
  endY?: number;
};

type AboutFloatingWordsProps = {
  words: FloatingWord[];
  targetRef: RefObject<HTMLDivElement | null>;
  className?: string;
};

function FloatingWordItem({
  text,
  className,
  startY = 0,
  endY = -50,
  targetRef,
}: FloatingWord & { targetRef: RefObject<HTMLDivElement | null> }) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [startY, endY]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.12, 0.24, 0.24, 0.1],
  );

  return (
    <motion.div
      style={{ y, opacity }}
      className={cn(
        "pointer-events-none absolute will-change-transform",
        className,
      )}
      aria-hidden="true"
    >
      <AccentText className="text-[clamp(2.4rem,5vw,5.5rem)] italic text-charcoal">
        {text}
      </AccentText>
    </motion.div>
  );
}

export default function AboutFloatingWords({
  words,
  targetRef,
  className,
}: AboutFloatingWordsProps) {
  return (
    <div className={cn("absolute inset-0 ", className)} aria-hidden="true">
      {words.map((word) => (
        <FloatingWordItem key={word.text} {...word} targetRef={targetRef} />
      ))}
    </div>
  );
}
