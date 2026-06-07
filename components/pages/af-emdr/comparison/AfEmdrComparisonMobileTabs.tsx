"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Text from "@/components/ui/Text";
import { cn } from "@/lib/utils";

type ComparisonItem = {
  id: string;
  label: string;
  title: string;
  description: string;
  points: string[];
};

type AfEmdrComparisonMobileTabsProps = {
  items: ComparisonItem[];
};

export default function AfEmdrComparisonMobileTabs({
  items,
}: AfEmdrComparisonMobileTabsProps) {
  const [activeId, setActiveId] = useState(items[1]?.id ?? items[0]?.id);
  const activeItem = items.find((item) => item.id === activeId) ?? items[0];

  return (
    <div className="lg:hidden">
      <div
        role="tablist"
        aria-label="Comparație între EMDR clasic și AF-EMDR"
        className="grid grid-cols-2 rounded-full border border-charcoal/10 bg-white/45 p-1"
      >
        {items.map((item) => {
          const isActive = item.id === activeId;

          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`comparison-panel-${item.id}`}
              id={`comparison-tab-${item.id}`}
              onClick={() => setActiveId(item.id)}
              className={cn(
                "rounded-full px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition",
                isActive
                  ? "bg-teal/35 text-charcoal shadow-[0_10px_30px_rgba(44,44,44,0.06)]"
                  : "text-charcoal/45",
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="mt-5 min-h-[26rem] overflow-hidden rounded-[2rem] border border-white/70 bg-white/55 p-6 shadow-[0_20px_70px_rgba(44,44,44,0.06)]">
        <AnimatePresence mode="wait">
          <motion.article
            key={activeItem.id}
            id={`comparison-panel-${activeItem.id}`}
            role="tabpanel"
            aria-labelledby={`comparison-tab-${activeItem.id}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              {activeItem.label}
            </p>

            <h3 className="mt-4 text-balance text-3xl font-semibold leading-tight text-charcoal">
              {activeItem.title}
            </h3>

            <Text className="mt-5 text-pretty text-charcoal/70">
              {activeItem.description}
            </Text>

            <ul className="mt-7 space-y-3">
              {activeItem.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-sm leading-relaxed text-charcoal/70"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        </AnimatePresence>
      </div>
    </div>
  );
}
