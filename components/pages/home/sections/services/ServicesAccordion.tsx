"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { ServiceItem } from "./types";


type ServicesAccordionProps = {
  items: ServiceItem[];
  className?: string;
};

export function ServicesAccordion({
  items,
  className,
}: ServicesAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [revealedItems, setRevealedItems] = useState<number[]>([]);

  useEffect(() => {
    const timers = items.map((_, index) =>
      window.setTimeout(() => {
        setRevealedItems((current) =>
          current.includes(index) ? current : [...current, index],
        );
      }, 120 * index),
    );

    return () => {
      timers.forEach(window.clearTimeout);
    };
  }, [items]);

  if (!items.length) return null;

  return (
    <div className={cn("w-full", className)}>
      <div className="hidden gap-3 lg:flex lg:h-125">
        {items.map((item, index) => {
          const isActive = index === activeIndex;
          const isVisible = revealedItems.includes(index);

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              aria-pressed={isActive}
              aria-label={item.title}
              className={cn(
                "group relative min-w-21 overflow-hidden rounded-[28px] border text-left outline-none transition-[flex-grow,transform,box-shadow,border-color] duration-500 ease-out focus-visible:ring-2 focus-visible:ring-gold/50",
                isActive
                  ? cn(
                      "flex-6 shadow-[0_20px_60px_rgba(44,44,44,0.14)]",
                      item.accent.borderActive,
                    )
                  : "flex-[1.2] border-charcoal/10 shadow-[0_10px_30px_rgba(44,44,44,0.08)] hover:border-charcoal/20",
              )}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-24px)",
              }}
            >
              <AccordionImage item={item} isActive={isActive} />
              <AccordionLabel item={item} />
              <AccordionContent item={item} index={index} isActive={isActive} />
            </button>
          );
        })}
      </div>
    </div>
  );
}

function AccordionImage({
  item,
  isActive,
}: {
  item: ServiceItem;
  isActive: boolean;
}) {
  return (
    <>
      <div className="absolute inset-0">
        <Image
          src={item.image.src}
          alt={item.image.alt}
          fill
          loading="eager"
          sizes="(min-width: 1280px) 56vw, (min-width: 1024px) 50vw, 100vw"
          className={cn(
            "object-cover transition-transform duration-700 ease-out",
            isActive
              ? "scale-100"
              : "scale-[1.03] grayscale-[0.12] brightness-[0.9]",
          )}
        />
      </div>

      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 bg-linear-to-t transition-opacity duration-500",
          isActive ? item.accent.overlayActive : item.accent.overlayInactive,
        )}
      />
    </>
  );
}

function AccordionLabel({ item }: { item: ServiceItem }) {
  return (
    <div className="absolute left-4 top-4 z-20">
      <span
        className={cn(
          "rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] backdrop-blur-sm",
          item.accent.pillBg,
          item.accent.pillText,
        )}
      >
        {item.label}
      </span>
    </div>
  );
}

function AccordionContent({
  item,
  index,
  isActive,
}: {
  item: ServiceItem;
  index: number;
  isActive: boolean;
}) {
  return (
    <div className="absolute inset-x-0 bottom-0 z-20 p-5">
      <div className="flex items-end gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/18 bg-white/14 text-sm font-semibold text-white backdrop-blur-sm">
          {String(index + 1).padStart(2, "0")}
        </div>

        <div
          className={cn(
            "min-w-0 transition-all duration-500",
            isActive
              ? "translate-y-0 opacity-100"
              : "translate-y-2 opacity-0 lg:pointer-events-none",
          )}
        >
          <h3 className="font-display text-[1.7rem] leading-tight text-white">
            {item.title}
          </h3>

          <p className="mt-2 max-w-xl text-sm leading-6 text-white/88">
            {item.subtitle}
          </p>

          <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white">
            Descoperă serviciul
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </div>
  );
}
