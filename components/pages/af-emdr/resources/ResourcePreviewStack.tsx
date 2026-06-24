"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import type { DownloadResource } from "./resourceContent";

type ResourcePreviewStackProps = {
  resources: DownloadResource[];
  activeIndex: number;
  onNext: () => void;
  onPrev: () => void;
  onSelect: (index: number) => void;
  reduceMotion: boolean;
};

function getRelativePosition(
  index: number,
  activeIndex: number,
  length: number,
) {
  if (index === activeIndex) return "active";

  if ((activeIndex - 1 + length) % length === index) return "previous";

  if ((activeIndex + 1) % length === index) return "next";

  return "hidden";
}

function getMotionState(position: ReturnType<typeof getRelativePosition>) {
  if (position === "active") {
    return {
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      opacity: 1,
      zIndex: 30,
    };
  }

  if (position === "previous") {
    return {
      x: "-22%",
      y: -28,
      scale: 0.82,
      rotate: -5,
      opacity: 0.72,
      zIndex: 20,
    };
  }

  if (position === "next") {
    return {
      x: "22%",
      y: -28,
      scale: 0.82,
      rotate: 5,
      opacity: 0.72,
      zIndex: 20,
    };
  }

  return {
    x: 0,
    y: 0,
    scale: 0.78,
    rotate: 0,
    opacity: 0,
    zIndex: 0,
  };
}

export default function ResourcePreviewStack({
  resources,
  activeIndex,
  onNext,
  onPrev,
  onSelect,
  reduceMotion,
}: ResourcePreviewStackProps) {
  return (
    <div className="relative">
      <div className="relative mx-auto aspect-square w-full max-w-120 sm:max-w-136 lg:max-w-xl">
        {resources.map((resource, index) => {
          const position = getRelativePosition(
            index,
            activeIndex,
            resources.length,
          );

          const isActive = position === "active";
          const isHidden = position === "hidden";

          return (
            <motion.button
              key={resource.id}
              type="button"
              onClick={() => onSelect(index)}
              aria-label={`Selectează resursa: ${resource.title}`}
              aria-pressed={isActive}
              aria-hidden={isHidden ? "true" : undefined}
              tabIndex={isHidden ? -1 : 0}
              className="absolute inset-0 mx-auto block h-full w-full overflow-hidden rounded-[1.75rem] border border-white/70 bg-white shadow-[0_24px_80px_rgba(44,44,44,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-cream"
              initial={false}
              animate={getMotionState(position)}
              transition={{
                duration: reduceMotion ? 0 : 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                pointerEvents: isHidden ? "none" : "auto",
              }}
            >
              <Image
                src={resource.image}
                alt={resource.imageAlt}
                fill
                sizes="(max-width: 1023px) 90vw, 36rem"
                className="object-contain"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-charcoal/28 via-transparent to-transparent"
              />

              <div className="absolute left-5 top-5 rounded-full bg-purple px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-sm">
                {resource.eyebrow}
              </div>
            </motion.button>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={onPrev}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-charcoal shadow-sm transition-[background-color,border-color,color] duration-300 hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-cream motion-reduce:transition-none"
          aria-label="Resursa anterioară"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-2">
          {resources.map((resource, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={resource.id}
                type="button"
                onClick={() => onSelect(index)}
                aria-label={`Selectează ${resource.title}`}
                aria-current={isActive ? "true" : undefined}
                className={
                  isActive
                    ? "h-2.5 w-8 rounded-full bg-charcoal transition-[width,background-color] duration-300 motion-reduce:transition-none"
                    : "h-2.5 w-2.5 rounded-full bg-charcoal/25 transition-[width,background-color] duration-300 hover:bg-charcoal/45 motion-reduce:transition-none"
                }
              />
            );
          })}
        </div>

        <button
          type="button"
          onClick={onNext}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-charcoal text-white shadow-sm transition-[background-color,border-color,color] duration-300 hover:bg-charcoal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-cream motion-reduce:transition-none"
          aria-label="Resursa următoare"
        >
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
