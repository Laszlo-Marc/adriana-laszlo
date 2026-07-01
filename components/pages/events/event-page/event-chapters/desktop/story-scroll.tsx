"use client";

import React, { useMemo, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export type FlowSectionProps = {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  "aria-label"?: string;
};

export function FlowSection({
  className,
  style,
  children,
  "aria-label": ariaLabel,
}: FlowSectionProps) {
  return (
    <section
      data-flow-section
      aria-label={ariaLabel}
      className={cn("relative min-h-screen w-full overflow-hidden", className)}
    >
      <div
        data-flow-inner
        className={cn(
          "flow-art-container relative flex min-h-screen w-full flex-col justify-between gap-6 px-[4vw] pb-[4vw] pt-[clamp(2rem,8vw,4vw)]",
          "motion-safe:will-change-transform",
        )}
        style={{ transformOrigin: "bottom left", ...style }}
      >
        {children}
      </div>
    </section>
  );
}

type FlowArtProps = {
  children: React.ReactNode;
  className?: string;
  "aria-label"?: string;
};

export default function FlowArt({
  children,
  className,
  "aria-label": ariaLabel = "Story scroll",
}: FlowArtProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion() ?? false;

  const childCount = useMemo(() => React.Children.count(children), [children]);

  useGSAP(
    () => {
      const container = containerRef.current;

      if (!container || shouldReduceMotion) return;

      const sections = Array.from(
        container.querySelectorAll<HTMLElement>("[data-flow-section]"),
      );

      if (sections.length <= 1) return;

      const triggers: ScrollTrigger[] = [];
      const tweens: gsap.core.Tween[] = [];

      sections.forEach((section, index) => {
        gsap.set(section, { zIndex: index + 1 });

        const inner = section.querySelector<HTMLElement>("[data-flow-inner]");

        if (!inner) return;

        if (index > 0) {
          gsap.set(inner, {
            rotation: 30,
            transformOrigin: "bottom left",
            force3D: true,
          });

          const tween = gsap.to(inner, {
            rotation: 0,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              end: "top 15%",
              scrub: true,
            },
          });

          tweens.push(tween);

          if (tween.scrollTrigger) {
            triggers.push(tween.scrollTrigger);
          }
        }

        if (index < sections.length - 1) {
          triggers.push(
            ScrollTrigger.create({
              trigger: section,
              start: "bottom bottom",
              end: "bottom top",
              pin: true,
              pinSpacing: false,
            }),
          );
        }
      });

      ScrollTrigger.refresh();

      return () => {
        tweens.forEach((tween) => tween.kill());
        triggers.forEach((trigger) => trigger.kill());
      };
    },
    {
      scope: containerRef,
      dependencies: [childCount, shouldReduceMotion],
    },
  );

  return (
    <div
      ref={containerRef}
      aria-label={ariaLabel}
      className={cn("w-full", className)}
    >
      {children}
    </div>
  );
}
