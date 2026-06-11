"use client";

import { useState } from "react";
import Image from "next/image";

import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import { cn } from "@/lib/utils";

import type { ServiceItem } from "./types";

type ServicesAccordionProps = {
  items: ServiceItem[];
  className?: string;
};

export function ServicesAccordion({
  items,
  className,
}: ServicesAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!items.length) return null;

  return (
    <div className={cn("w-full", className)}>
      <div className="hidden gap-3 lg:flex lg:h-125">
        {items.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              aria-pressed={isActive}
              aria-label={`Vezi detalii despre ${item.title}`}
              className={cn(
                "group relative min-w-21 overflow-hidden rounded-[28px] border text-left outline-none transition-[flex,border-color,transform,opacity] duration-500 ease-out focus-visible:ring-2 focus-visible:ring-gold/50 motion-safe:animate-[servicesPanelReveal_520ms_cubic-bezier(0.22,1,0.36,1)_both]",
                isActive
                  ? cn("flex-6", item.accent.borderActive)
                  : "flex-[1.2] border-charcoal/10 hover:border-charcoal/20",
              )}
              style={{
                animationDelay: `${index * 90}ms`,
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
          loading={isActive ? "eager" : "lazy"}
          fetchPriority={isActive ? "high" : "auto"}
          sizes={
            isActive
              ? "(max-width: 1023px) 1px, (min-width: 1280px) 52vw, 48vw"
              : "(max-width: 1023px) 1px, 12vw"
          }
          className={cn(
            "object-cover transition-transform duration-700 ease-out motion-reduce:transition-none",
            isActive
              ? "scale-100"
              : "scale-[1.03] grayscale-[0.12] brightness-[0.9]",
          )}
        />
      </div>

      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 bg-linear-to-t transition-opacity duration-500 motion-reduce:transition-none",
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
          "rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]",
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
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/18 bg-white/14 text-sm font-semibold text-white">
          {String(index + 1).padStart(2, "0")}
        </div>

        <div
          className={cn(
            "min-w-0 transition-[opacity,transform] duration-500 motion-reduce:transition-none",
            isActive
              ? "translate-y-0 opacity-100"
              : "translate-y-2 opacity-0 lg:pointer-events-none",
          )}
        >
          <Heading
            as="h3"
            size="h4"
            color="cream"
            className="font-display text-[1.7rem] leading-tight"
          >
            {item.title}
          </Heading>

          <Text
            as="p"
            size="sm"
            color="cream"
            className="mt-2 max-w-xl leading-6 text-white/88"
          >
            {item.subtitle}
          </Text>

          <Button href={item.href} variant="cream" size="md" className="mt-5">
            Descoperă serviciul
          </Button>
        </div>
      </div>
    </div>
  );
}
