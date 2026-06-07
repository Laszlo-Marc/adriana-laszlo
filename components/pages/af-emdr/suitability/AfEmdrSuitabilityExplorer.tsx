"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

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
  const activePattern =
    patterns.find((pattern) => pattern.id === activeId) ?? patterns[0];

  return (
    <div className="hidden lg:block">
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute -inset-10 -z-10 rounded-[3rem] bg-teal/10 blur-3xl"
        />

        <div className="relative h-[38rem] overflow-hidden rounded-[2.75rem] shadow-[0_34px_110px_rgba(44,44,44,0.13)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePattern.id}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.035 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.985 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <Image
                src={activePattern.image}
                alt={activePattern.imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-charcoal/72 via-charcoal/26 to-transparent"
              />

              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-charcoal/75 via-charcoal/35 to-transparent"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-x-0 bottom-0 z-10 p-9 xl:p-11">
            <AnimatePresence mode="wait">
              <motion.article
                key={activePattern.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.42, ease: "easeOut" }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/65">
                  Poate fi potrivită / {activePattern.label}
                </p>

                <h3 className="mt-4 max-w-2xl text-balance text-4xl font-semibold leading-none text-white xl:text-5xl">
                  {activePattern.title}
                </h3>

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

        <div className="mt-6 grid grid-cols-4 gap-3">
          {patterns.map((pattern) => {
            const isActive = pattern.id === activePattern.id;

            return (
              <button
                key={pattern.id}
                type="button"
                onClick={() => setActiveId(pattern.id)}
                onMouseEnter={() => setActiveId(pattern.id)}
                className={cn(
                  "rounded-full border px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition",
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
