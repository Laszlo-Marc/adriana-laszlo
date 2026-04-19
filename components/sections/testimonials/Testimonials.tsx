"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export type TestimonialItem = {
  id: string;
  quote: string;
  name: string;
  role?: string;
  imageSrc: string;
  imageAlt?: string;
};

type TestimonialsStackProps = {
  items: TestimonialItem[];
  className?: string;
  title?: string;
  description?: string;
};

type CardProps = {
  item: TestimonialItem;
  position: number;
  isActive: boolean;
  onMove: (steps: number) => void;
};

const VISIBLE_RANGE = 2;

function TestimonialsCard({ item, position, isActive, onMove }: CardProps) {
  const abs = Math.abs(position);
  const isHidden = abs > VISIBLE_RANGE;

  return (
    <article
      aria-hidden={isHidden}
      onClick={() => !isHidden && onMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 w-[min(88vw,24rem)] sm:w-[24rem]",
        "cursor-pointer select-none border transition-all duration-500 ease-out",
        "rounded-[28px] rounded-tr-none",
        "p-6 sm:p-7",
        "will-change-transform",
        isActive
          ? "z-30 border-teal/20 bg-white shadow-[0_24px_70px_-24px_rgba(0,0,0,0.22)]"
          : "z-10 border-charcoal/10 bg-cream/95 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.22)] hover:border-teal/25",
      )}
      style={{
        opacity: isHidden ? 0 : isActive ? 1 : 0.72 - abs * 0.12,
        transform: `
          translate(-50%, -50%)
          translateX(${position * 17}rem)
          translateY(${isActive ? 0 : position % 2 === 0 ? -10 : 12}px)
          scale(${isActive ? 1 : 1 - abs * 0.06})
          rotate(${isActive ? 0 : position < 0 ? -3 : 3}deg)
        `,
        pointerEvents: isHidden ? "none" : "auto",
      }}
    >
      <div className="mb-5 flex items-center gap-4">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-charcoal/10 bg-sand/30">
          <Image
            src={item.imageSrc}
            alt={item.imageAlt ?? item.name}
            className="h-full w-full object-cover"
            loading={isActive ? "eager" : "lazy"}
            width={100}
            height={100}
          />
        </div>

        <div className="min-w-0">
          <p className="font-heading text-lg leading-tight text-charcoal">
            {item.name}
          </p>
          {item.role ? (
            <p className="mt-1 text-sm leading-snug text-charcoal/70">
              {item.role}
            </p>
          ) : null}
        </div>
      </div>

      <Quote
        className={cn(
          "mb-4 h-5 w-5",
          isActive ? "text-teal/70" : "text-charcoal/35",
        )}
        aria-hidden="true"
      />

      <blockquote className="pr-2 text-[15px] leading-7 text-charcoal sm:text-base">
        “{item.quote}”
      </blockquote>

      <div
        className={cn(
          "pointer-events-none absolute right-0 top-0 h-14 w-14 border-l border-b",
          "rounded-bl-2xl",
          isActive
            ? "border-teal/15 bg-teal/5"
            : "border-charcoal/8 bg-sand/20",
        )}
        aria-hidden="true"
      />
    </article>
  );
}

export default function TestimonialsStack({
  items,
  className,
  title = "Experiențele persoanelor care au lucrat cu Adriana",
  description = "Un spațiu terapeutic sigur începe cu încredere, claritate și sentimentul că ești cu adevărat înțeles.",
}: TestimonialsStackProps) {
  const [orderedItems, setOrderedItems] = React.useState(items);

  React.useEffect(() => {
    setOrderedItems(items);
  }, [items]);

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
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-teal/80">
            Testimoniale
          </p>
          <h2
            id="testimonials-heading"
            className="font-heading text-3xl leading-tight text-charcoal sm:text-4xl"
          >
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-charcoal/75">
            {description}
          </p>
        </div>

        <div className="relative mt-14 h-120 overflow-hidden sm:h-128">
          {visibleItems.map(({ item }, index) => {
            let position = index - centerIndex;

            if (position > Math.floor(orderedItems.length / 2)) {
              position -= orderedItems.length;
            }

            return (
              <TestimonialsCard
                key={item.id}
                item={item}
                position={position}
                isActive={position === 0}
                onMove={handleMove}
              />
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
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
