"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

type ServiceDetail = {
  label: string;
  value: string;
};

type ServiceImage = {
  src: string;
  alt: string;
};

export type ServiceTabItem = {
  id: string;
  label: string;
  title: string;
  description: string;
  chips: string[];
  outcomes: string[];
  details: ServiceDetail[];
  ctaLabel: string;
  ctaHref: string;
  image: ServiceImage;
  featuredNote?: string;
  highlight?: boolean;
};

type ServicesTabsProps = {
  tabs: ServiceTabItem[];
  defaultTab?: string;
  className?: string;
};

export function ServicesTabs({
  tabs,
  defaultTab,
  className,
}: ServicesTabsProps) {
  const initialTab =
    defaultTab && tabs.some((tab) => tab.id === defaultTab)
      ? defaultTab
      : tabs[0]?.id;

  const [activeTab, setActiveTab] = useState<string>(initialTab);

  const activeItem = useMemo(
    () => tabs.find((tab) => tab.id === activeTab) ?? tabs[0],
    [activeTab, tabs],
  );

  if (!tabs.length || !activeItem) return null;

  return (
    <div className={cn("w-full", className)}>
      <div className="overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div
          className="inline-flex min-w-full gap-2 rounded-3xl border border-charcoal/10 bg-white/80 p-2 shadow-[0_14px_50px_rgba(0,0,0,0.05)] md:flex md:min-w-0 md:flex-wrap"
          role="tablist"
          aria-label="Servicii disponibile"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`service-panel-${tab.id}`}
                id={`service-tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "relative inline-flex min-h-11 shrink-0 items-center rounded-2xl px-4 py-2.5 text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-gold/50",
                  isActive
                    ? "text-charcoal"
                    : "text-charcoal/72 hover:text-charcoal",
                )}
              >
                {isActive ? (
                  <motion.div
                    layoutId="services-active-tab"
                    className={cn(
                      "absolute inset-0 rounded-2xl border",
                      tab.highlight
                        ? "border-gold/30 bg-gold/10"
                        : "border-charcoal/10 bg-cream",
                    )}
                    transition={{
                      type: "spring",
                      stiffness: 420,
                      damping: 34,
                    }}
                  />
                ) : null}

                <span className="relative z-10 flex items-center gap-2">
                  {tab.label}
                  {tab.highlight ? (
                    <span className="rounded-full bg-gold/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-gold">
                      EMDR
                    </span>
                  ) : null}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-4 overflow-hidden rounded-[28px] border border-charcoal/10 bg-white/80 shadow-[0_18px_60px_rgba(0,0,0,0.06)]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeItem.id}
            id={`service-panel-${activeItem.id}`}
            role="tabpanel"
            aria-labelledby={`service-tab-${activeItem.id}`}
            initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -8, filter: "blur(6px)" }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="grid lg:grid-cols-[1.08fr_0.92fr]"
          >
            <div className="px-5 py-6 md:px-8 md:py-7 lg:px-10 lg:py-8">
              {activeItem.highlight && activeItem.featuredNote ? (
                <div className="mb-5 rounded-2xl border border-gold/20 bg-gold/8 px-4 py-3">
                  <p className="text-sm font-medium leading-7 text-charcoal/80">
                    {activeItem.featuredNote}
                  </p>
                </div>
              ) : null}

              <h3 className="font-display text-3xl leading-tight text-charcoal md:text-[2rem]">
                {activeItem.title}
              </h3>

              <p className="mt-4 max-w-2xl text-base leading-8 text-charcoal/78">
                {activeItem.description}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {activeItem.details.map((detail) => (
                  <div
                    key={detail.label}
                    className="rounded-2xl border border-charcoal/10 bg-white/80 px-4 py-3"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-charcoal/56">
                      {detail.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-charcoal">
                      {detail.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {activeItem.chips.map((chip) => (
                  <span
                    key={chip}
                    className={cn(
                      "rounded-full px-3 py-1.5 text-sm font-medium",
                      activeItem.highlight
                        ? "bg-gold/10 text-charcoal"
                        : "bg-cream text-charcoal/84",
                    )}
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-charcoal/68">
                  Te poate ajuta să
                </p>

                <ul className="mt-4 space-y-3">
                  {activeItem.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex items-start gap-3 text-sm leading-7 text-charcoal/80 md:text-base"
                    >
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/12 text-gold">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className={cn(
                "border-t border-charcoal/10 px-5 py-5 lg:border-l lg:border-t-0 lg:px-8 lg:py-8",
                activeItem.highlight ? "bg-gold/6" : "bg-cream/40",
              )}
            >
              <div className="relative overflow-hidden rounded-3xl border border-charcoal/10 bg-white">
                <div className="relative aspect-4/3">
                  <Image
                    src={activeItem.image.src}
                    alt={activeItem.image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-charcoal/10 bg-white px-4 py-4">
                <p className="text-sm leading-7 text-charcoal/72">
                  Dacă nu știi încă ce format ți se potrivește, putem clarifica
                  împreună la primul contact cea mai potrivită direcție de
                  lucru.
                </p>

                <Link
                  href={activeItem.ctaHref}
                  className={cn(
                    "mt-4 inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50",
                    activeItem.highlight
                      ? "bg-gold hover:-translate-y-px hover:opacity-95"
                      : "bg-charcoal hover:-translate-y-px hover:opacity-95",
                  )}
                >
                  {activeItem.ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
