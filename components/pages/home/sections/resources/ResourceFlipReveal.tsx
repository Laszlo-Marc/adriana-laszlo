"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { ResourcePanel } from "./types";

type ResourcesFlipRevealProps = {
  panels: ResourcePanel[];
};

export default function ResourcesFlipReveal({
  panels,
}: ResourcesFlipRevealProps) {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const [activeIndex, setActiveIndex] = useState(0);

  const activePanel = panels[activeIndex];

  if (!panels.length || !activePanel) return null;

  return (
    <div className="relative">
      <div className="mb-7 flex justify-center">
        <div className="inline-flex max-w-full rounded-full border border-border/70 bg-white/60 p-1 shadow-sm backdrop-blur-sm">
          {panels.map((panel, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={panel.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-pressed={isActive}
                className={cn(
                  "relative rounded-full px-4 py-2 text-[0.68rem] font-medium uppercase tracking-[0.14em] transition-colors duration-300 motion-reduce:transition-none",
                  isActive
                    ? "text-cream"
                    : "text-charcoal/60 hover:text-charcoal",
                )}
              >
                {isActive ? (
                  <motion.span
                    layoutId="resources-active-pill"
                    className="absolute inset-0 rounded-full bg-charcoal"
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.32,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                  />
                ) : null}

                <span className="relative z-10">{panel.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <article className="relative mx-auto h-124 max-w-md overflow-hidden rounded-4xl bg-sand/20 ">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePanel.id}
            initial={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 1.04 }
            }
            animate={{ opacity: 1, scale: 1 }}
            exit={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.015 }
            }
            transition={{
              duration: shouldReduceMotion ? 0 : 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0"
          >
            <Image
              src={activePanel.image.src}
              alt={activePanel.image.alt}
              fill
              sizes="(max-width: 1023px) 100vw, 420px"
              className="object-cover object-center"
              priority={activeIndex === 0}
            />
          </motion.div>
        </AnimatePresence>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-charcoal/86 via-charcoal/36 to-transparent"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-cream/5"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-6 top-6 z-20 flex justify-between"
        >
          {panels.map((panel, index) => (
            <span
              key={panel.id}
              className={cn(
                "h-1 rounded-full transition-all duration-300 motion-reduce:transition-none",
                index === activeIndex ? "w-10 bg-cream" : "w-5 bg-cream/35",
              )}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activePanel.id}
            initial={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }
            }
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.38,
              ease: "easeOut",
            }}
            className="absolute inset-x-0 bottom-0 z-30 flex flex-col items-center px-5 pb-6 text-center text-white"
          >
            <Text
              as="p"
              size="xs"
              weight="medium"
              transform="upper"
              align="center"
              className="mb-3 tracking-[0.16em] text-white"
            >
              {activePanel.label}
            </Text>

            <Heading
              as="h3"
              size="h3"
              align="center"
              className="text-balance text-white"
            >
              {activePanel.title}
            </Heading>

            <Text
              size="sm"
              align="center"
              className="mt-3 max-w-[31ch] leading-6 text-white/84"
            >
              {activePanel.description}
            </Text>

            <Button
              href={activePanel.href}
              variant="cream"
              className="mt-5"
              external={activePanel.href.startsWith("http")}
            >
              {activePanel.cta}
            </Button>
          </motion.div>
        </AnimatePresence>
      </article>
    </div>
  );
}
