"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { TestimonialItem } from "./TestimonialContent";
import { TestimonialsMobileCard } from "./TestimonialMobileCard";
import { TestimonialsDesktopCard } from "./TestimonialDesktopCard";
import Heading from "@/components/ui/Heading";
import AccentText from "@/components/ui/AccentText";

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
  const [orderedItems, setOrderedItems] = React.useState(items);
  const [mobileIndex, setMobileIndex] = React.useState(0);

  const pointerStartX = React.useRef<number | null>(null);
  const autoplayTimeoutRef = React.useRef<number | null>(null);
  const resumeTimeoutRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    setOrderedItems(items);
    setMobileIndex(0);
  }, [items]);

  const clearAutoplayTimers = React.useCallback(() => {
    if (autoplayTimeoutRef.current) {
      window.clearInterval(autoplayTimeoutRef.current);
      autoplayTimeoutRef.current = null;
    }

    if (resumeTimeoutRef.current) {
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
    setMobileIndex((current) => (current + 1) % items.length);
  }, [items.length]);

  const prevMobile = React.useCallback(() => {
    setMobileIndex((current) => (current - 1 + items.length) % items.length);
  }, [items.length]);

  const pauseMobileAutoplay = React.useCallback(() => {
    clearAutoplayTimers();

    resumeTimeoutRef.current = window.setTimeout(() => {
      autoplayTimeoutRef.current = window.setInterval(() => {
        if (document.hidden) return;
        nextMobile();
      }, MOBILE_AUTOPLAY_MS);
    }, MOBILE_AUTOPLAY_RESUME_DELAY);
  }, [clearAutoplayTimers, nextMobile]);

  React.useEffect(() => {
    if (items.length <= 1) return;

    const mobileQuery = window.matchMedia("(max-width: 767px)");

    const startAutoplayIfNeeded = () => {
      clearAutoplayTimers();

      if (!mobileQuery.matches || document.hidden) return;

      autoplayTimeoutRef.current = window.setInterval(() => {
        nextMobile();
      }, MOBILE_AUTOPLAY_MS);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearAutoplayTimers();
        return;
      }

      startAutoplayIfNeeded();
    };

    const handleMediaChange = () => {
      startAutoplayIfNeeded();
    };

    startAutoplayIfNeeded();
    document.addEventListener("visibilitychange", handleVisibilityChange);
    mobileQuery.addEventListener("change", handleMediaChange);

    return () => {
      clearAutoplayTimers();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      mobileQuery.removeEventListener("change", handleMediaChange);
    };
  }, [clearAutoplayTimers, items.length, nextMobile]);

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

  const centerIndex = 0;

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-linear-to-b from-cream to-white py-16 sm:py-20",
        className,
      )}
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <AccentText className="justify-center text-2xl text-center text-gold">
            Testimoniale
          </AccentText>

          <Heading
            as="h2"
            size="h1"
            className="font-playfair mt-4 "
            align="center"
          >
            {title}
          </Heading>
        </div>

        <div className="mt-12 md:hidden">
          <div
            className="overflow-hidden"
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
            aria-roledescription="carousel"
          >
            <div
              className="flex touch-pan-y transition-transform duration-500 ease-out"
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
            <button
              type="button"
              onClick={() => {
                pauseMobileAutoplay();
                prevMobile();
              }}
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-full border",
                "border-charcoal/10 bg-white text-charcoal transition",
                "hover:border-teal/20 hover:bg-teal hover:text-white",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/40 focus-visible:ring-offset-2",
              )}
              aria-label="Testimonial anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

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
                    "h-2.5 rounded-full transition-all",
                    index === mobileIndex
                      ? "w-7 bg-teal"
                      : "w-2.5 bg-charcoal/18 hover:bg-charcoal/30",
                  )}
                  aria-label={`Mergi la testimonialul ${index + 1}`}
                  aria-pressed={index === mobileIndex}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => {
                pauseMobileAutoplay();
                nextMobile();
              }}
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-full border",
                "border-charcoal/10 bg-white text-charcoal transition",
                "hover:border-teal/20 hover:bg-teal hover:text-white",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/40 focus-visible:ring-offset-2",
              )}
              aria-label="Testimonial următor"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative mt-14 hidden h-120 overflow-hidden md:block sm:h-128">
          {visibleItems.map(({ item }, index) => {
            let position = index - centerIndex;

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
          <button
            type="button"
            onClick={() => handleMove(-1)}
            className={cn(
              "inline-flex h-12 w-12 items-center justify-center rounded-full border",
              "border-charcoal/10 bg-white text-charcoal transition",
              "hover:border-teal/20 hover:bg-teal hover:text-white",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/40 focus-visible:ring-offset-2",
            )}
            aria-label="Testimonial anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={() => handleMove(1)}
            className={cn(
              "inline-flex h-12 w-12 items-center justify-center rounded-full border",
              "border-charcoal/10 bg-white text-charcoal transition",
              "hover:border-teal/20 hover:bg-teal hover:text-white",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/40 focus-visible:ring-offset-2",
            )}
            aria-label="Testimonial următor"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
