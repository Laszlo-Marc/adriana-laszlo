"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { EventItem } from "./events-data";
import Button from "@/components/ui/Button";

type Props = {
  items: EventItem[];
  className?: string;
};

type AccordionCardProps = {
  item: EventItem;
  isActive: boolean;
  onActivate: () => void;
};

function AccordionCard({ item, isActive, onActivate }: AccordionCardProps) {
  return (
    <button
      type="button"
      onClick={onActivate}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      aria-pressed={isActive}
      className={cn(
        "group relative h-105 overflow-hidden rounded-[28px] border border-border/60 text-left transition-all duration-500 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/60 focus-visible:ring-offset-2",
        isActive ? "w-90" : "w-22",
      )}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes={isActive ? "360px" : "88px"}
        className="object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-t from-charcoal/85 via-charcoal/35 to-charcoal/10" />

      <div className="absolute inset-x-0 top-0 p-5">
        <span
          className={cn(
            "inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm transition-opacity duration-300",
            isActive ? "opacity-100" : "opacity-0",
          )}
        >
          {item.eyebrow}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5">
        {isActive ? (
          <div className="translate-y-0 transition-all duration-300">
            <p className="mb-3 text-sm text-white/80">{item.meta}</p>

            <h3 className="max-w-[18ch] text-2xl font-semibold text-white">
              {item.title}
            </h3>

            <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-white bg-gold/90 px-3 py-1 rounded-full">
              {item.ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        ) : (
          <div className="flex min-h-55 items-end justify-center">
            <span className="origin-center -rotate-90 whitespace-nowrap text-sm font-medium tracking-[0.18em] text-white/90 uppercase">
              {item.title}
            </span>
          </div>
        )}
      </div>

      {isActive && (
        <Link
          href={item.href}
          aria-label={`${item.ctaLabel} - ${item.title}`}
          className="absolute inset-0 z-10"
          tabIndex={-1}
        />
      )}
    </button>
  );
}

function MobileEventCard({ item }: { item: EventItem }) {
  return (
    <article className="relative min-w-[82%] snap-center overflow-hidden rounded-[28px] border border-border/60 bg-surface shadow-sm">
      <div className="relative aspect-4/5">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 82vw, 420px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-charcoal/85 via-charcoal/35 to-charcoal/10" />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
        <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
          {item.eyebrow}
        </span>

        <p className="mt-3 text-sm text-white/80">{item.meta}</p>

        <h3 className="mt-2 text-2xl font-semibold">{item.title}</h3>

        <p className="mt-3 text-sm leading-6 text-white/85">
          {item.description}
        </p>

        <Link
          href={item.href}
          className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white"
        >
          {item.ctaLabel}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

export default function HomeEventsAccordion({ items, className }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!items.length) return null;

  return (
    <div className={cn("w-full", className)}>
      {/* Mobile */}
      <div className="md:hidden">
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((item) => (
            <MobileEventCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex md:items-stretch md:justify-end md:gap-3">
        {items.map((item, index) => (
          <AccordionCard
            key={item.id}
            item={item}
            isActive={index === activeIndex}
            onActivate={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
