"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type ServiceTabItem = {
  id: string;
  label: string;
  eyebrow?: string;
  badge?: string;
  title: string;
  description: string;
  forWho: string;
  benefits: string[];
  details: Array<{
    label: string;
    value: string;
  }>;
  ctaLabel: string;
  ctaHref: string;
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
      <div
        className="rounded-[28px] border border-charcoal/10 bg-white/80 p-2 shadow-[0_14px_50px_rgba(0,0,0,0.05)]"
        role="tablist"
        aria-label="Servicii disponibile"
      >
        <div className="flex flex-wrap gap-2">
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
                  "relative inline-flex min-h-11 items-center rounded-2xl px-4 py-2.5 text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-gold/50",
                  isActive
                    ? "text-charcoal"
                    : "text-charcoal/72 hover:text-charcoal",
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="services-active-pill"
                    className={cn(
                      "absolute inset-0 rounded-2xl border",
                      tab.highlight
                        ? "border-gold/30 bg-gold/12"
                        : "border-charcoal/10 bg-cream",
                    )}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 32,
                    }}
                  />
                )}

                <span className="relative z-10 flex items-center gap-2">
                  {tab.label}
                  {tab.highlight ? (
                    <span className="rounded-full bg-gold/15 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold">
                      EMDR
                    </span>
                  ) : null}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-3 overflow-hidden rounded-3xl border border-charcoal/10 bg-cream/70">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeItem.id}
              id={`service-panel-${activeItem.id}`}
              role="tabpanel"
              aria-labelledby={`service-tab-${activeItem.id}`}
              initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -6, filter: "blur(6px)" }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]"
            >
              <div className="px-5 py-6 md:px-8 md:py-8">
                <div className="flex flex-wrap items-center gap-3">
                  {activeItem.eyebrow ? (
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                      {activeItem.eyebrow}
                    </span>
                  ) : null}

                  {activeItem.badge ? (
                    <span className="rounded-full border border-gold/20 bg-white px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-charcoal/78">
                      {activeItem.badge}
                    </span>
                  ) : null}
                </div>

                <h3 className="mt-4 font-display text-3xl leading-tight text-charcoal md:text-[2rem]">
                  {activeItem.title}
                </h3>

                <p className="mt-4 max-w-2xl text-base leading-8 text-charcoal/80">
                  {activeItem.description}
                </p>

                <div className="mt-6 rounded-2xl border border-charcoal/10 bg-white px-4 py-4">
                  <p className="text-sm font-semibold text-charcoal">
                    Cui i se potrivește
                  </p>
                  <p className="mt-2 text-sm leading-7 text-charcoal/72">
                    {activeItem.forWho}
                  </p>
                </div>

                <div className="mt-6">
                  <p className="text-sm font-semibold text-charcoal">
                    Ce poți obține prin acest tip de lucru
                  </p>

                  <ul className="mt-3 space-y-3">
                    {activeItem.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-3 text-sm leading-7 text-charcoal/78"
                      >
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/12 text-gold">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div
                className={cn(
                  "flex h-full flex-col justify-between border-t border-charcoal/10 px-5 py-6 lg:border-l lg:border-t-0 md:px-8 md:py-8",
                  activeItem.highlight ? "bg-gold/8" : "bg-white/70",
                )}
              >
                <div>
                  <p className="text-sm font-semibold text-charcoal">Detalii</p>

                  <div className="mt-4 space-y-3">
                    {activeItem.details.map((detail) => (
                      <div
                        key={detail.label}
                        className="flex items-center justify-between gap-4 rounded-2xl border border-charcoal/10 bg-white px-4 py-3"
                      >
                        <span className="text-sm text-charcoal/68">
                          {detail.label}
                        </span>
                        <span className="text-sm font-semibold text-charcoal">
                          {detail.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 rounded-2xl border border-charcoal/10 bg-white px-4 py-4">
                  <p className="text-sm leading-7 text-charcoal/72">
                    Dacă nu știi încă ce format ți se potrivește cel mai bine,
                    poți începe cu o primă programare și stabilim împreună cea
                    mai potrivită direcție de lucru.
                  </p>

                  <Link
                    href={activeItem.ctaHref}
                    className={cn(
                      "mt-4 inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50",
                      activeItem.highlight
                        ? "bg-gold text-white hover:-translate-y-px hover:opacity-95"
                        : "bg-charcoal text-white hover:-translate-y-px hover:opacity-95",
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
    </div>
  );
}
