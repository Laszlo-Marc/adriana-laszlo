"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import Text from "@/components/ui/Text";
import Heading from "@/components/ui/Heading";
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
  insight?: string;
};

export default function AfEmdrComparisonMobileTabs({
  items,
  insight,
}: AfEmdrComparisonMobileTabsProps) {
  const [activeId, setActiveId] = useState(items[1]?.id ?? items[0]?.id);
  const shouldReduceMotion = useReducedMotion() ?? false;

  const activeItem = items.find((item) => item.id === activeId) ?? items[0];

  if (!activeItem) return null;

  return (
    <div>
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
                "rounded-full px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em]",
                "transition-[background-color,color,box-shadow] duration-300 motion-reduce:transition-none",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
                isActive
                  ? "bg-teal/35 text-charcoal shadow-[0_10px_30px_rgba(44,44,44,0.06)]"
                  : "text-charcoal/45 hover:text-charcoal",
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="mt-5 min-h-104 overflow-hidden rounded-4xl border border-white/70 bg-white/55 p-6 shadow-[0_20px_70px_rgba(44,44,44,0.06)]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.article
            key={activeItem.id}
            id={`comparison-panel-${activeItem.id}`}
            role="tabpanel"
            aria-labelledby={`comparison-tab-${activeItem.id}`}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.28,
              ease: "easeOut",
            }}
          >
            <Text
              as="p"
              size="xs"
              weight="medium"
              transform="upper"
              color="gold"
              className="tracking-[0.24em]"
            >
              {activeItem.label}
            </Text>

            <Heading
              as="h3"
              size="h3"
              className="mt-4 text-balance text-charcoal"
            >
              {activeItem.title}
            </Heading>

            <Text className="mt-5 text-pretty text-charcoal/70">
              {activeItem.description}
            </Text>

            <ul className="mt-7 space-y-3">
              {activeItem.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-sm leading-relaxed text-charcoal/70"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-gold"
                  />
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
