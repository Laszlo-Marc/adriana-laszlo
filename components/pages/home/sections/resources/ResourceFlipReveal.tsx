"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { ResourcePanel } from "./types";

const FLIP_SPEED = 750;

const flipTiming: KeyframeAnimationOptions = {
  duration: FLIP_SPEED,
  iterations: 1,
  easing: "cubic-bezier(0.76, 0, 0.24, 1)",
};

const flipAnimationTop: Keyframe[] = [
  { transform: "rotateX(0deg)" },
  { transform: "rotateX(-90deg)" },
  { transform: "rotateX(-90deg)" },
];

const flipAnimationBottom: Keyframe[] = [
  { transform: "rotateX(90deg)" },
  { transform: "rotateX(90deg)" },
  { transform: "rotateX(0deg)" },
];

type ResourcesFlipRevealProps = {
  panels: ResourcePanel[];
};

export default function ResourcesFlipReveal({
  panels,
}: ResourcesFlipRevealProps) {
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const layerRefs = useRef<HTMLElement[]>([]);
  const timersRef = useRef<number[]>([]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [contentIndex, setContentIndex] = useState(0);
  const [isContentVisible, setIsContentVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const activePanel = panels[contentIndex];

  useEffect(() => {
    if (!galleryRef.current || !panels.length) return;

    layerRefs.current = Array.from(
      galleryRef.current.querySelectorAll<HTMLElement>(".resource-flip-unite"),
    );

    layerRefs.current.forEach((layer) => {
      setLayerImage(layer, panels[0].image.src);
    });

    return () => {
      clearTimers();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [panels]);

  if (!panels.length || !activePanel) return null;

  const clearTimers = () => {
    timersRef.current.forEach(window.clearTimeout);
    timersRef.current = [];
  };

  const setLayerImage = (layer: HTMLElement, src: string) => {
    layer.style.backgroundImage = `url("${src}")`;
  };

  const changePanel = (nextIndex: number) => {
    if (nextIndex === currentIndex || isAnimating) return;

    const gallery = galleryRef.current;
    if (!gallery) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    clearTimers();
    setCurrentIndex(nextIndex);

    if (prefersReducedMotion) {
      layerRefs.current.forEach((layer) => {
        setLayerImage(layer, panels[nextIndex].image.src);
      });

      setContentIndex(nextIndex);
      setIsContentVisible(true);
      setIsAnimating(false);
      return;
    }

    setIsAnimating(true);
    setIsContentVisible(false);

    const overlayTop = gallery.querySelector<HTMLElement>(
      ".resource-flip-overlay-top",
    );
    const overlayBottom = gallery.querySelector<HTMLElement>(
      ".resource-flip-overlay-bottom",
    );

    overlayTop?.animate(flipAnimationTop, flipTiming);
    overlayBottom?.animate(flipAnimationBottom, flipTiming);

    layerRefs.current.forEach((layer, index) => {
      const shouldDelay = index === 1 || index === 2;
      const delay = shouldDelay ? FLIP_SPEED - 200 : 0;

      const timer = window.setTimeout(() => {
        setLayerImage(layer, panels[nextIndex].image.src);
      }, delay);

      timersRef.current.push(timer);
    });

    const contentTimer = window.setTimeout(() => {
      setContentIndex(nextIndex);
      setIsContentVisible(true);
    }, FLIP_SPEED * 0.48);

    const doneTimer = window.setTimeout(() => {
      setIsAnimating(false);
    }, FLIP_SPEED);

    timersRef.current.push(contentTimer, doneTimer);
  };

  const isExternal = activePanel.href.startsWith("http");

  return (
    <div className="relative">
      <div className="mb-7 flex justify-center">
        <div className="inline-flex rounded-full border border-border/70 bg-white/55 p-1 shadow-sm backdrop-blur-sm">
          {panels.map((panel, index) => {
            const isActive = index === currentIndex;

            return (
              <button
                key={panel.id}
                type="button"
                onClick={() => changePanel(index)}
                disabled={isAnimating}
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
        ref={galleryRef}
        className="resource-flip-gallery relative mx-auto h-[31rem] max-w-md overflow-hidden rounded-[2rem] bg-sand/20 shadow-[0_24px_80px_rgba(44,44,44,0.11)]"
        style={{ perspective: "900px" }}
      >
        <div className="resource-flip-top resource-flip-unite" />
        <div className="resource-flip-bottom resource-flip-unite" />
        <div className="resource-flip-overlay-top resource-flip-unite" />
        <div className="resource-flip-overlay-bottom resource-flip-unite" />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-charcoal/84 via-charcoal/34 to-transparent"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-cream/5"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-1/2 z-20 h-px bg-cream/18"
        />

        <div
          className={cn(
            "absolute inset-x-0 bottom-0 z-30 flex flex-col items-center px-5 pb-6 text-center text-white transition-all duration-500",
            isContentVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-3 opacity-0",
          )}
        >
          <Text
            as="p"
            size="xs"
            weight="medium"
            transform="upper"
            align="center"
            className="mb-3 tracking-[0.16em] text-white/72"
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
            className="mt-3 leading-6 text-white/84"
          >
            {activePanel.description}
          </Text>

          {isExternal ? (
            <Link
              href={activePanel.href}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-cream/90 px-4 py-3 text-xs font-medium uppercase tracking-[0.14em] text-charcoal shadow-sm backdrop-blur-sm transition-colors duration-300 hover:bg-cream"
            >
              {activePanel.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : (
            <Button variant="cream" href={activePanel.href} className="mt-5">
              {activePanel.cta}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
