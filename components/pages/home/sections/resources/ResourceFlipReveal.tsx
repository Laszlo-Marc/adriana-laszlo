"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import { cn } from "@/lib/utils";
import type { ResourcePanel } from "./types";

const FLIP_SPEED = 720;

type ResourcesFlipRevealProps = {
  panels: ResourcePanel[];
};

export default function ResourcesFlipReveal({
  panels,
}: ResourcesFlipRevealProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [transition, setTransition] = useState<{
    fromIndex: number;
    toIndex: number;
  } | null>(null);

  const timeoutRef = useRef<number | null>(null);

  const activePanel = panels[displayIndex];
  const fromPanel = transition ? panels[transition.fromIndex] : null;
  const toPanel = transition ? panels[transition.toIndex] : null;

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;

    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (!panels.length || !activePanel) return null;

  const changePanel = (index: number) => {
    if (index === activeIndex || transition) return;

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    setTransition({
      fromIndex: displayIndex,
      toIndex: index,
    });

    // Important:
    // The new panel becomes the base immediately.
    // The flip overlay animates above it, so there is no delayed content swap.
    setDisplayIndex(index);
    setActiveIndex(index);

    if (prefersReducedMotion) {
      setTransition(null);
      return;
    }

    timeoutRef.current = window.setTimeout(() => {
      setTransition(null);
    }, FLIP_SPEED);
  };

  return (
    <div className="relative">
      <div className="mb-7 flex justify-center">
        <div className="inline-flex rounded-full border border-border/70 bg-white/55 p-1 shadow-sm backdrop-blur-sm">
          {panels.map((panel, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={panel.id}
                type="button"
                onClick={() => changePanel(index)}
                disabled={Boolean(transition)}
                aria-pressed={isActive}
                className={cn(
                  "rounded-full px-4 py-2 text-[0.68rem] font-medium uppercase tracking-[0.14em] transition-colors duration-300 disabled:cursor-default disabled:opacity-70",
                  isActive
                    ? "bg-charcoal text-cream"
                    : "text-charcoal/60 hover:text-charcoal",
                )}
              >
                {panel.label}
              </button>
            );
          })}
        </div>
      </div>

      <div
        className="relative mx-auto h-[31rem] max-w-md overflow-hidden rounded-[2rem]"
        style={{ perspective: "900px" }}
      >
        <StaticPanel panel={activePanel} />

        {fromPanel && toPanel && transition ? (
          <FlipOverlay currentPanel={fromPanel} nextPanel={toPanel} />
        ) : null}
      </div>
    </div>
  );
}

function FlipOverlay({
  currentPanel,
  nextPanel,
}: {
  currentPanel: ResourcePanel;
  nextPanel: ResourcePanel;
}) {
  return (
    <div className="pointer-events-none absolute inset-0 z-30">
      {/* Old top half flips away */}
      <div className="animate-resource-flip-top absolute inset-x-0 top-0 h-1/2 origin-bottom overflow-hidden">
        <PanelHalf panel={currentPanel} half="top" />
      </div>

      {/* New bottom half flips in */}
      <div className="animate-resource-flip-bottom absolute inset-x-0 bottom-0 h-1/2 origin-top overflow-hidden">
        <PanelHalf panel={nextPanel} half="bottom" />
      </div>
    </div>
  );
}

function StaticPanel({ panel }: { panel: ResourcePanel }) {
  const isExternal = panel.href.startsWith("http");

  return (
    <article className="relative h-[31rem] overflow-hidden rounded-[2rem] bg-sand/20 shadow-[0_24px_80px_rgba(44,44,44,0.11)]">
      <Image
        src={panel.image.src}
        alt={panel.image.alt}
        fill
        sizes="(min-width: 768px) 448px, calc(100vw - 3rem)"
        className="object-cover"
        priority={false}
      />

      {/* Readability gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-charcoal/82 via-charcoal/34 to-transparent"
      />

      {/* Warm image wash */}
      <div aria-hidden="true" className="absolute inset-0 bg-cream/5" />

      {/* Subtle fold line for the flip effect */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 h-px bg-cream/18"
      />

      <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-6 text-white">
        <Text
          as="p"
          size="xs"
          weight="medium"
          transform="upper"
          className="mb-3 tracking-[0.16em] text-white/72"
        >
          {panel.label}
        </Text>

        <Heading
          as="h3"
          size="h3"
          className="max-w-[16rem] text-balance text-white"
        >
          {panel.title}
        </Heading>

        <Text size="sm" className="mt-3 max-w-[18rem] leading-6 text-white/84">
          {panel.description}
        </Text>

        <Link
          href={panel.href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer" : undefined}
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-cream/90 px-4 py-3 text-xs font-medium uppercase tracking-[0.14em] text-charcoal shadow-sm backdrop-blur-sm transition-colors duration-300 hover:bg-cream"
        >
          {panel.cta}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

function PanelHalf({
  panel,
  half,
}: {
  panel: ResourcePanel;
  half: "top" | "bottom";
}) {
  return (
    <div
      className={cn(
        "absolute left-0 h-[31rem] w-full",
        half === "top" ? "top-0" : "bottom-0",
      )}
    >
      <StaticPanel panel={panel} />
    </div>
  );
}
