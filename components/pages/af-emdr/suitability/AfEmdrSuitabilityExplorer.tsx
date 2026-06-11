"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import { cn } from "@/lib/utils";

type SuitabilityPattern = {
  id: string;
  label: string;
  title: string;
  description: string;
  signs: string[];
  image: string;
  imageAlt: string;
};

type AfEmdrSuitabilityExplorerProps = {
  patterns: SuitabilityPattern[];
};

export default function AfEmdrSuitabilityExplorer({
  patterns,
}: AfEmdrSuitabilityExplorerProps) {
  const [activeId, setActiveId] = useState(patterns[0]?.id);
  const shouldReduceMotion = useReducedMotion() ?? false;

  const activePattern =
    patterns.find((pattern) => pattern.id === activeId) ?? patterns[0];

  const setActivePattern = useCallback((id: string) => {
    setActiveId((currentId) => (currentId === id ? currentId : id));
  }, []);

  if (!activePattern) return null;

  return (
    <div className="hidden lg:block">
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute -inset-10 -z-10 rounded-[3rem] bg-teal/10 blur-3xl"
        />

        <div className="relative h-152 overflow-hidden rounded-[2.75rem] shadow-[0_34px_110px_rgba(44,44,44,0.13)]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activePattern.id}
              className="absolute inset-0"
              initial={
                shouldReduceMotion ? false : { opacity: 0, scale: 1.035 }
              }
              animate={{ opacity: 1, scale: 1 }}
              exit={
                shouldReduceMotion ? undefined : { opacity: 0, scale: 0.985 }
              }
              transition={{
                duration: shouldReduceMotion ? 0 : 0.55,
                ease: "easeOut",
              }}
            >
              <Image
                src={activePattern.image}
                alt={activePattern.imageAlt}
                fill
                sizes="(max-width: 1023px) 1px, (min-width: 1280px) 56vw, 62vw"
                className="object-cover object-center"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-charcoal/72 via-charcoal/26 to-transparent"
              />

              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-charcoal/75 via-charcoal/35 to-transparent"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-x-0 bottom-0 z-10 p-9 xl:p-11">
            <AnimatePresence mode="wait" initial={false}>
              <motion.article
                key={activePattern.id}
                id={`suitability-panel-${activePattern.id}`}
                role="tabpanel"
                aria-labelledby={`suitability-tab-${activePattern.id}`}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, y: -12 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.42,
                  ease: "easeOut",
                }}
              >
                <Text
                  as="p"
                  size="xs"
                  weight="medium"
                  transform="upper"
                  className="tracking-[0.28em] text-white/65"
                >
                  Poate fi potrivită / {activePattern.label}
                </Text>

                <Heading
                  as="h3"
                  size="h2"
                  color="cream"
                  className="mt-4 max-w-2xl text-balance leading-none xl:text-5xl"
                >
                  {activePattern.title}
                </Heading>

                <Text className="mt-6 max-w-2xl text-pretty text-white/78">
                  {activePattern.description}
                </Text>

                <ul className="mt-7 flex flex-wrap gap-2">
                  {activePattern.signs.map((sign) => (
                    <li
                      key={sign}
                      className="rounded-full border border-white/25 bg-white/12 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white/72 backdrop-blur-sm"
                    >
                      {sign}
                    </li>
                  ))}
                </ul>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>

        <div
          role="tablist"
          aria-label="Tipare pentru care AF-EMDR poate fi potrivită"
          className="mt-6 grid grid-cols-4 gap-3"
        >
          {patterns.map((pattern) => {
            const isActive = pattern.id === activePattern.id;

            return (
              <button
                key={pattern.id}
                id={`suitability-tab-${pattern.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`suitability-panel-${pattern.id}`}
                onClick={() => setActivePattern(pattern.id)}
                onMouseEnter={() => setActivePattern(pattern.id)}
                className={cn(
                  "rounded-full border px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em]",
                  "transition-[background-color,border-color,color,box-shadow] duration-300 motion-reduce:transition-none",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
                  isActive
                    ? "border-gold/35 bg-sand/35 text-charcoal shadow-[0_14px_35px_rgba(44,44,44,0.06)]"
                    : "border-charcoal/10 bg-white/35 text-charcoal/45 hover:border-gold/25 hover:text-charcoal/65",
                )}
              >
                {pattern.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
