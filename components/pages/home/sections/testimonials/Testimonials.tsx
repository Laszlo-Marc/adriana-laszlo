"use client";

import Image from "next/image";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

import type { TestimonialItem } from "./shared/TestimonialContent";

import { TestimonialsDesktopCard } from "./desktop/TestimonialDesktopCard";
import CarouselArrowButton from "./shared/CarouselArrowButton";
import { useTestimonialsCarousel } from "./shared/useTestimonialCarousel";
import TestimonialsHeader from "./shared/TestimonialsHeading";
import { TestimonialsMobileCard } from "./mobile/TestimonialMobileCard";

type TestimonialsStackProps = {
  items: TestimonialItem[];
  className?: string;
  title?: string;
  description?: string;
};

export default function TestimonialsStack({
  items,
  className,
  title = "Ce spun clienții",
  description = "Un spațiu terapeutic sigur începe cu încredere, claritate și sentimentul că ești cu adevărat înțeles.",
}: TestimonialsStackProps) {
  const {
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
  } = useTestimonialsCarousel(items);

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
          className="h-auto w-full rotate-x-180 object-contain"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <TestimonialsHeader title={title} description={description} />

        <ScrollReveal className="mt-12 md:hidden" delay="sm">
          <div
            className="overflow-hidden"
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
            aria-roledescription="carousel"
            aria-label="Testimoniale clienți"
          >
            <div
              className="flex touch-pan-y transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] motion-reduce:transition-none"
              style={{
                transform: `translateX(-${normalizedActiveIndex * 100}%)`,
              }}
            >
              {items.map((item, index) => (
                <div key={item.id} className="w-full shrink-0 px-1">
                  <TestimonialsMobileCard
                    item={item}
                    isActive={index === normalizedActiveIndex}
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
                    index === normalizedActiveIndex
                      ? "w-7 bg-teal"
                      : "w-2.5 bg-charcoal/18 hover:bg-charcoal/30",
                  )}
                  aria-label={`Mergi la testimonialul ${index + 1}`}
                  aria-pressed={index === normalizedActiveIndex}
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
        </ScrollReveal>

        <ScrollReveal
          className="relative mt-14 hidden h-120 overflow-hidden md:block sm:h-128"
          delay="sm"
        >
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
        </ScrollReveal>

        <ScrollReveal
          className="mt-8 hidden items-center justify-center gap-3 md:flex"
          delay="md"
        >
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
        </ScrollReveal>
      </div>
    </section>
  );
}
