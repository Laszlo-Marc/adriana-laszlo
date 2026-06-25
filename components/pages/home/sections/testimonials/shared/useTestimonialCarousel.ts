"use client";

import * as React from "react";
import { useReducedMotion } from "framer-motion";

import type { TestimonialItem } from "./TestimonialContent";

const MOBILE_AUTOPLAY_MS = 4500;
const MOBILE_AUTOPLAY_RESUME_DELAY = 7000;
const SWIPE_THRESHOLD = 44;

function getWrappedIndex(index: number, total: number) {
  if (total <= 0) return 0;

  return ((index % total) + total) % total;
}

export function useTestimonialsCarousel(items: TestimonialItem[]) {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = React.useState(0);

  const pointerStartX = React.useRef<number | null>(null);
  const autoplayIntervalRef = React.useRef<number | null>(null);
  const resumeTimeoutRef = React.useRef<number | null>(null);

  const normalizedActiveIndex = getWrappedIndex(activeIndex, items.length);

  const orderedItems = React.useMemo(() => {
    if (items.length === 0) return [];

    return items.map((_, index) => {
      const itemIndex = getWrappedIndex(activeIndex + index, items.length);
      return items[itemIndex];
    });
  }, [items, activeIndex]);

  const visibleItems = React.useMemo(() => {
    return orderedItems.map((item, index) => ({
      item,
      position: index,
    }));
  }, [orderedItems]);

  const clearAutoplayTimers = React.useCallback(() => {
    if (autoplayIntervalRef.current !== null) {
      window.clearInterval(autoplayIntervalRef.current);
      autoplayIntervalRef.current = null;
    }

    if (resumeTimeoutRef.current !== null) {
      window.clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }
  }, []);

  const handleMove = React.useCallback(
    (steps: number) => {
      if (!steps || items.length === 0) return;

      setActiveIndex((current) =>
        getWrappedIndex(current + steps, items.length),
      );
    },
    [items.length],
  );

  const goToMobileIndex = React.useCallback(
    (index: number) => {
      if (items.length === 0) return;

      setActiveIndex(getWrappedIndex(index, items.length));
    },
    [items.length],
  );

  const nextMobile = React.useCallback(() => {
    if (items.length === 0) return;

    setActiveIndex((current) => getWrappedIndex(current + 1, items.length));
  }, [items.length]);

  const prevMobile = React.useCallback(() => {
    if (items.length === 0) return;

    setActiveIndex((current) => getWrappedIndex(current - 1, items.length));
  }, [items.length]);

  const startMobileAutoplay = React.useCallback(() => {
    clearAutoplayTimers();

    if (shouldReduceMotion || items.length <= 1 || document.hidden) return;

    const mobileQuery = window.matchMedia("(max-width: 767px)");
    if (!mobileQuery.matches) return;

    autoplayIntervalRef.current = window.setInterval(() => {
      if (!document.hidden) {
        nextMobile();
      }
    }, MOBILE_AUTOPLAY_MS);
  }, [clearAutoplayTimers, items.length, nextMobile, shouldReduceMotion]);

  const pauseMobileAutoplay = React.useCallback(() => {
    clearAutoplayTimers();

    if (shouldReduceMotion || items.length <= 1) return;

    resumeTimeoutRef.current = window.setTimeout(() => {
      startMobileAutoplay();
    }, MOBILE_AUTOPLAY_RESUME_DELAY);
  }, [
    clearAutoplayTimers,
    items.length,
    shouldReduceMotion,
    startMobileAutoplay,
  ]);

  React.useEffect(() => {
    if (items.length <= 1 || shouldReduceMotion) return;

    const mobileQuery = window.matchMedia("(max-width: 767px)");

    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearAutoplayTimers();
        return;
      }

      startMobileAutoplay();
    };

    const handleMediaChange = () => {
      startMobileAutoplay();
    };

    startMobileAutoplay();

    document.addEventListener("visibilitychange", handleVisibilityChange);
    mobileQuery.addEventListener("change", handleMediaChange);

    return () => {
      clearAutoplayTimers();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      mobileQuery.removeEventListener("change", handleMediaChange);
    };
  }, [
    clearAutoplayTimers,
    items.length,
    shouldReduceMotion,
    startMobileAutoplay,
  ]);

  const handlePointerDown = React.useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      pointerStartX.current = event.clientX;
    },
    [],
  );

  const handlePointerUp = React.useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (pointerStartX.current === null) return;

      const deltaX = event.clientX - pointerStartX.current;
      pointerStartX.current = null;

      if (Math.abs(deltaX) < SWIPE_THRESHOLD) return;

      pauseMobileAutoplay();

      if (deltaX < 0) {
        nextMobile();
      } else {
        prevMobile();
      }
    },
    [nextMobile, pauseMobileAutoplay, prevMobile],
  );

  const handlePointerCancel = React.useCallback(() => {
    pointerStartX.current = null;
  }, []);

  return {
    normalizedActiveIndex,
    orderedItems,
    visibleItems,
    handleMove,
    goToMobileIndex,
    nextMobile,
    prevMobile,
    pauseMobileAutoplay,
    handlePointerDown,
    handlePointerUp,
    handlePointerCancel,
  };
}
