"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type AnimatedTextCycleProps = {
  words: string[];
  interval?: number;
  className?: string;
};

export default function AnimatedTextCycle({
  words,
  interval = 3200,
  className = "",
}: AnimatedTextCycleProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState("auto");
  const measureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!measureRef.current) return;

    const currentWord = measureRef.current.children[currentIndex];

    if (!currentWord) return;

    const nextWidth = currentWord.getBoundingClientRect().width;
    setWidth(`${Math.ceil(nextWidth)}px`);
  }, [currentIndex, words]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentIndex((current) => (current + 1) % words.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [interval, words.length]);

  return (
    <>
      <div
        ref={measureRef}
        aria-hidden="true"
        className="pointer-events-none absolute opacity-0"
        style={{ visibility: "hidden" }}
      >
        {words.map((word) => (
          <span key={word} className={className}>
            {word}
          </span>
        ))}
      </div>

      <motion.span
        className="relative inline-block align-baseline"
        animate={{
          width,
          transition: {
            type: "spring",
            stiffness: 150,
            damping: 18,
            mass: 1,
          },
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={words[currentIndex]}
            className={`inline-block ${className}`}
            initial={{ y: -18, opacity: 0, filter: "blur(8px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: 18, opacity: 0, filter: "blur(8px)" }}
            transition={{
              duration: 0.38,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ whiteSpace: "nowrap" }}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </>
  );
}
