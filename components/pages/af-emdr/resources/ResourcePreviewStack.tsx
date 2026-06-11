"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { DownloadResource } from "./resourceContent";

type ResourcePreviewStackProps = {
  resources: DownloadResource[];
  activeIndex: number;
  onNext: () => void;
  onPrev: () => void;
  onSelect: (index: number) => void;
};

function getRelativePosition(
  index: number,
  activeIndex: number,
  length: number,
) {
  if (index === activeIndex) return "active";

  if ((activeIndex - 1 + length) % length === index) {
    return "previous";
  }

  if ((activeIndex + 1) % length === index) {
    return "next";
  }

  return "hidden";
}

export default function ResourcePreviewStack({
  resources,
  activeIndex,
  onNext,
  onPrev,
  onSelect,
}: ResourcePreviewStackProps) {
  return (
    <div className="relative">
      <div className="relative mx-auto aspect-square w-full max-w-[30rem] sm:max-w-[34rem] lg:max-w-[36rem]">
        {resources.map((resource, index) => {
          const position = getRelativePosition(
            index,
            activeIndex,
            resources.length,
          );

          const isActive = position === "active";

          return (
            <motion.button
              key={resource.id}
              type="button"
              onClick={() => onSelect(index)}
              aria-label={`Selectează resursa: ${resource.title}`}
              className="absolute inset-0 mx-auto block h-full w-full overflow-hidden rounded-[1.75rem] border border-white/70 bg-white shadow-[0_24px_80px_rgba(44,44,44,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-cream"
              initial={false}
              animate={
                position === "active"
                  ? {
                      x: 0,
                      y: 0,
                      scale: 1,
                      rotate: 0,
                      opacity: 1,
                      zIndex: 30,
                    }
                  : position === "previous"
                    ? {
                        x: "-22%",
                        y: -28,
                        scale: 0.82,
                        rotate: -5,
                        opacity: 0.72,
                        zIndex: 20,
                      }
                    : position === "next"
                      ? {
                          x: "22%",
                          y: -28,
                          scale: 0.82,
                          rotate: 5,
                          opacity: 0.72,
                          zIndex: 20,
                        }
                      : {
                          x: 0,
                          y: 0,
                          scale: 0.78,
                          rotate: 0,
                          opacity: 0,
                          zIndex: 0,
                        }
              }
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                pointerEvents: position === "hidden" ? "none" : "auto",
              }}
            >
              <Image
                src={resource.image}
                alt={resource.imageAlt}
                fill
                sizes="(min-width: 1024px) 34rem, 90vw"
                className="object-contain"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-charcoal/28 via-transparent to-transparent"
              />

              <div className="absolute left-5 top-5 rounded-full bg-purple px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-sm">
                {resource.eyebrow}
              </div>

              {isActive ? (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/78 to-transparent p-6 text-left">
                  <p className="max-w-xs font-display text-2xl leading-tight text-white">
                    {resource.title}
                  </p>
                </div>
              ) : null}
            </motion.button>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={onPrev}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-charcoal shadow-sm transition hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-cream"
          aria-label="Resursa anterioară"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-2">
          {resources.map((resource, index) => (
            <button
              key={resource.id}
              type="button"
              onClick={() => onSelect(index)}
              aria-label={`Selectează ${resource.title}`}
              aria-current={index === activeIndex ? "true" : undefined}
              className={
                index === activeIndex
                  ? "h-2.5 w-8 rounded-full bg-charcoal transition-all"
                  : "h-2.5 w-2.5 rounded-full bg-charcoal/25 transition-all hover:bg-charcoal/45"
              }
            />
          ))}
        </div>

        <button
          type="button"
          onClick={onNext}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-charcoal text-white shadow-sm transition hover:bg-charcoal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-cream"
          aria-label="Resursa următoare"
        >
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
