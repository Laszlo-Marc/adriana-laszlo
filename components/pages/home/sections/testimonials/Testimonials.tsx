"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useReducedMotion } from "framer-motion";

import Heading from "@/components/ui/Heading";
import AccentText from "@/components/ui/AccentText";
import Text from "@/components/ui/Text";
import { cn } from "@/lib/utils";

import type { TestimonialItem } from "./TestimonialContent";
import { TestimonialsMobileCard } from "./TestimonialMobileCard";
import { TestimonialsDesktopCard } from "./TestimonialDesktopCard";

type TestimonialsStackProps = {
  items: TestimonialItem[];
  className?: string;
  title?: string;
  description?: string;
};

const MOBILE_AUTOPLAY_MS = 4500;
const MOBILE_AUTOPLAY_RESUME_DELAY = 7000;
const SWIPE_THRESHOLD = 44;

export default function TestimonialsStack({
  items,
  className,
  title = "Ce spun clienții",
  description = "Un spațiu terapeutic sigur începe cu încredere, claritate și sentimentul că ești cu adevărat înțeles.",
}: TestimonialsStackProps) {
  const shouldReduceMotion = useReducedMotion();

  const [orderedItems, setOrderedItems] = React.useState(items);
  const [mobileIndex, setMobileIndex] = React.useState(0);

  const pointerStartX = React.useRef<number | null>(null);
  const autoplayIntervalRef = React.useRef<number | null>(null);
  const resumeTimeoutRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    setOrderedItems(items);
    setMobileIndex(0);
  }, [items]);

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

  const handleMove = React.useCallback((steps: number) => {
    if (!steps) return;

    setOrderedItems((current) => {
      const next = [...current];

      if (steps > 0) {
        for (let i = 0; i < steps; i += 1) {
          const first = next.shift();
          if (!first) break;
          next.push(first);
        }
      } else {
        for (let i = 0; i < Math.abs(steps); i += 1) {
          const last = next.pop();
          if (!last) break;
          next.unshift(last);
        }
      }

      return next;
    });
  }, []);

  const goToMobileIndex = React.useCallback(
    (index: number) => {
      const total = items.length;
      if (!total) return;

      setMobileIndex(((index % total) + total) % total);
    },
    [items.length],
  );

  const nextMobile = React.useCallback(() => {
    if (!items.length) return;
    setMobileIndex((current) => (current + 1) % items.length);
  }, [items.length]);

  const prevMobile = React.useCallback(() => {
    if (!items.length) return;
    setMobileIndex((current) => (current - 1 + items.length) % items.length);
  }, [items.length]);

  const startMobileAutoplay = React.useCallback(() => {
    clearAutoplayTimers();

    if (shouldReduceMotion || items.length <= 1 || document.hidden) return;

    const mobileQuery = window.matchMedia("(max-width: 767px)");
    if (!mobileQuery.matches) return;

    autoplayIntervalRef.current = window.setInterval(() => {
      if (!document.hidden) nextMobile();
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

  const visibleItems = React.useMemo(() => {
    return orderedItems.map((item, index) => ({
      item,
      position: index,
    }));
  }, [orderedItems]);

  if (!items.length) return null;

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-cream py-10 sm:py-16",
        className,
      )}
      aria-labelledby="testimonials-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-5 top-5 z-20 w-20 opacity-70 lg:hidden"
      >
        <Image
          src="/backgrounds/df-teal-down.png"
          alt=""
          width={48}
          height={48}
          sizes="80px"
          className="h-auto w-full object-contain"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-5 top-5 z-20 w-20 opacity-70 lg:hidden"
      >
        <Image
          src="/backgrounds/df-purple-down.png"
          alt=""
          width={48}
          height={48}
          sizes="80px"
          className="h-auto w-full object-contain rotate-x-180"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <AccentText className="block text-center text-2xl text-gold">
            Testimoniale
          </AccentText>

          <Heading
            id="testimonials-heading"
            as="h2"
            size="h1"
            className="mt-4"
            align="center"
            font="display"
          >
            {title}
          </Heading>

          {description ? (
            <Text
              as="p"
              size="lg"
              color="muted"
              align="center"
              className="mx-auto mt-5 max-w-2xl text-pretty"
            >
              {description}
            </Text>
          ) : null}
        </div>

        <div className="mt-12 md:hidden">
          <div
            className="overflow-hidden"
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
            aria-roledescription="carousel"
            aria-label="Testimoniale clienți"
          >
            <div
              className="flex touch-pan-y transition-transform duration-500 ease-out motion-reduce:transition-none"
              style={{
                transform: `translateX(-${mobileIndex * 100}%)`,
              }}
            >
              {items.map((item, index) => (
                <div key={item.id} className="w-full shrink-0 px-1">
                  <TestimonialsMobileCard
                    item={item}
                    isActive={index === mobileIndex}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <CarouselArrowButton
              direction="previous"
              size="mobile"
              onClick={() => {
                pauseMobileAutoplay();
                prevMobile();
              }}
            />

            <div className="flex items-center gap-2">
              {items.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    pauseMobileAutoplay();
                    goToMobileIndex(index);
                  }}
                  className={cn(
                    "h-2.5 rounded-full transition-[width,background-color] motion-reduce:transition-none",
                    index === mobileIndex
                      ? "w-7 bg-teal"
                      : "w-2.5 bg-charcoal/18 hover:bg-charcoal/30",
                  )}
                  aria-label={`Mergi la testimonialul ${index + 1}`}
                  aria-pressed={index === mobileIndex}
                />
              ))}
            </div>

            <CarouselArrowButton
              direction="next"
              size="mobile"
              onClick={() => {
                pauseMobileAutoplay();
                nextMobile();
              }}
            />
          </div>
        </div>

        <div className="relative mt-14 hidden h-120 overflow-hidden md:block sm:h-128">
          {visibleItems.map(({ item }, index) => {
            let position = index;

            if (position > Math.floor(orderedItems.length / 2)) {
              position -= orderedItems.length;
            }

            return (
              <TestimonialsDesktopCard
                key={item.id}
                item={item}
                position={position}
                isActive={position === 0}
                onMove={handleMove}
              />
            );
          })}
        </div>

        <div className="mt-8 hidden items-center justify-center gap-3 md:flex">
          <CarouselArrowButton
            direction="previous"
            size="desktop"
            onClick={() => handleMove(-1)}
          />

          <CarouselArrowButton
            direction="next"
            size="desktop"
            onClick={() => handleMove(1)}
          />
        </div>
      </div>
    </section>
  );
}

function CarouselArrowButton({
  direction,
  size,
  onClick,
}: {
  direction: "previous" | "next";
  size: "mobile" | "desktop";
  onClick: () => void;
}) {
  const Icon = direction === "previous" ? ChevronLeft : ChevronRight;

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center rounded-full border",
        "border-charcoal/10 bg-white text-charcoal transition-[background-color,border-color,color] motion-reduce:transition-none",
        "hover:border-teal/20 hover:bg-teal hover:text-white",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/40 focus-visible:ring-offset-2",
        size === "mobile" ? "h-11 w-11" : "h-12 w-12",
      )}
      aria-label={
        direction === "previous"
          ? "Testimonial anterior"
          : "Testimonial următor"
      }
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
