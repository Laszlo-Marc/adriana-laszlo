"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";

type ServiceAccordionImage = {
  src: string;
  alt: string;
};

type ServiceAccent = {
  overlayActive: string;
  overlayInactive: string;
  borderActive: string;
  pillBg: string;
  pillText: string;
  mobileRow: string;
  mobileRowActive: string;
};

export type ServiceAccordionItem = {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  image: ServiceAccordionImage;
  label: string;
  accent: ServiceAccent;
};

type ServicesAccordionProps = {
  items: ServiceAccordionItem[];
  className?: string;
};

export function ServicesAccordion({
  items,
  className,
}: ServicesAccordionProps) {
  const [desktopActiveIndex, setDesktopActiveIndex] = useState(0);
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);
  const [revealedItems, setRevealedItems] = useState<number[]>([]);

  useEffect(() => {
    const timers = items.map((_, index) =>
      window.setTimeout(() => {
        setRevealedItems((prev) =>
          prev.includes(index) ? prev : [...prev, index],
        );
      }, 120 * index),
    );

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [items]);

  const toggleMobileItem = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index],
    );
  };

  const activeItem = useMemo(
    () => items[desktopActiveIndex] ?? items[0],
    [items, desktopActiveIndex],
  );

  if (!items.length || !activeItem) return null;

  return (
    <div className={cn("w-full", className)}>
      <div className="hidden gap-3 lg:flex lg:h-125">
        {items.map((item, index) => {
          const isActive = index === desktopActiveIndex;
          const isVisible = revealedItems.includes(index);

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setDesktopActiveIndex(index)}
              onFocus={() => setDesktopActiveIndex(index)}
              className={cn(
                "group relative min-w-21 overflow-hidden rounded-[28px] border text-left outline-none transition-[flex-grow,transform,box-shadow,border-color] duration-500 ease-out focus-visible:ring-2 focus-visible:ring-gold/50",
                isActive
                  ? cn(
                      "flex-6 shadow-[0_20px_60px_rgba(44,44,44,0.14)]",
                      item.accent.borderActive,
                    )
                  : "flex-[1.2] border-charcoal/10 shadow-[0_10px_30px_rgba(44,44,44,0.08)] hover:border-charcoal/20",
              )}
              aria-pressed={isActive}
              aria-label={item.title}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-24px)",
              }}
            >
              <div className="absolute inset-0">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 100vw"
                  className={cn(
                    "object-cover transition-transform duration-700 ease-out",
                    isActive
                      ? "scale-[1.02]"
                      : "scale-[1.08] grayscale-[0.2] brightness-[0.85]",
                  )}
                />
              </div>

              <div
                className={cn(
                  "absolute inset-0 bg-linear-to-t transition-opacity duration-500",
                  isActive
                    ? item.accent.overlayActive
                    : item.accent.overlayInactive,
                )}
              />

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
            </button>
          );
        })}
      </div>

      <div className="lg:hidden">
        {items.map((item, index) => {
          const isActive = openIndexes.includes(index);

          return (
            <div key={item.id} className="py-1">
              <button
                type="button"
                onClick={() => toggleMobileItem(index)}
                className={cn(
                  "flex w-full items-center justify-between gap-4 rounded-xl px-3 py-4 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold/50",
                  isActive
                    ? item.accent.mobileRowActive
                    : item.accent.mobileRow,
                )}
                aria-expanded={isActive}
                aria-controls={`mobile-service-panel-${item.id}`}
                id={`mobile-service-trigger-${item.id}`}
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-lg leading-tight text-charcoal">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <motion.span
                  animate={{ rotate: isActive ? 180 : 0 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="shrink-0 text-charcoal/50"
                >
                  <ChevronDown className="h-5 w-5" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isActive ? (
                  <motion.div
                    id={`mobile-service-panel-${item.id}`}
                    aria-labelledby={`mobile-service-trigger-${item.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6">
                      <div className="relative mt-10 aspect-4/3 w-full overflow-hidden rounded-[20px]">
                        <Image
                          src={item.image.src}
                          alt={item.image.alt}
                          fill
                          sizes="100vw"
                          className="object-cover"
                        />

                        <div
                          className={cn(
                            "absolute inset-0 bg-linear-to-t",
                            item.accent.overlayInactive,
                          )}
                        />
                      </div>

                      <div className="mt-5 flex flex-col items-center gap-4 px-2 text-center">
                        <Heading as="h4" size="h3" align="center">
                          {item.title}
                        </Heading>

                        <p className="max-w-[34ch] text-base leading-7 text-charcoal/75 text-center">
                          {item.subtitle}
                        </p>

                        <div className="mt-3 flex justify-center">
                          <Button href={item.href} variant="outline">
                            Vezi detalii
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex justify-center">
        <Button size="lg" variant="urgent" href="/servicii">
          Vezi toate serviciile
        </Button>
      </div>
    </div>
  );
}
