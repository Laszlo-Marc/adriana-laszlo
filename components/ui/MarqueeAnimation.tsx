"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

type MarqueeAnimationProps = {
  children: React.ReactNode;
  className?: string;
  direction?: "left" | "right";
  baseVelocity?: number; // px/sec
};

export function MarqueeAnimation({
  children,
  className,
  direction = "left",
  baseVelocity = 40, // px/sec
}: MarqueeAnimationProps) {
  const baseX = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [loopWidth, setLoopWidth] = useState(0);

  // Measure width of one "set"
  useLayoutEffect(() => {
    if (!trackRef.current) return;

    const measure = () => {
      const firstSet = trackRef.current?.querySelector(
        "[data-marquee-set='1']",
      ) as HTMLElement | null;

      if (!firstSet) return;
      setLoopWidth(firstSet.offsetWidth);
    };

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(trackRef.current);
    return () => ro.disconnect();
  }, []);

  useAnimationFrame((_, delta) => {
    if (!loopWidth) return;

    const dir = direction === "left" ? -1 : 1;
    const moveBy = dir * baseVelocity * (delta / 1000);

    let next = baseX.get() + moveBy;

    if (dir === -1 && next <= -loopWidth) next += loopWidth;
    if (dir === 1 && next >= 0) next -= loopWidth;

    baseX.set(next);
  });

  return (
    <div className={cn("w-full overflow-hidden", className)}>
      <motion.div
        ref={trackRef}
        className={cn(
          "flex w-max will-change-transform select-none",

          "text-2xl sm:text-3xl lg:text-5xl",
          "uppercase font-display",
        )}
        style={{ x: baseX }}
      >
        {/* Set 1 */}
        <div data-marquee-set="1" className="flex items-center gap-10 pr-10">
          {children}
        </div>
        {/* Set 2 (clone) */}
        <div aria-hidden className="flex items-center gap-10 pr-10">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
