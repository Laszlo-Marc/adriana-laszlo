"use client";

import { useCallback, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import ResourcePreviewStack from "./ResourcePreviewStack";
import ResourceDownloadForm from "./ResourceDownloadForm";
import type { DownloadResource } from "./resourceContent";

type DownloadResourcesClientProps = {
  resources: DownloadResource[];
};

export default function DownloadResourcesClient({
  resources,
}: DownloadResourcesClientProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion() ?? false;

  const resourcesCount = resources.length;

  const safeActiveIndex =
    resourcesCount > 0 ? Math.min(activeIndex, resourcesCount - 1) : 0;

  const activeResource = useMemo(
    () => resources[safeActiveIndex],
    [resources, safeActiveIndex],
  );

  const handleNext = useCallback(() => {
    if (!resourcesCount) return;

    setActiveIndex((current) => (current + 1) % resourcesCount);
  }, [resourcesCount]);

  const handlePrev = useCallback(() => {
    if (!resourcesCount) return;

    setActiveIndex(
      (current) => (current - 1 + resourcesCount) % resourcesCount,
    );
  }, [resourcesCount]);

  const handleSelect = useCallback((index: number) => {
    setActiveIndex((currentIndex) =>
      currentIndex === index ? currentIndex : index,
    );
  }, []);

  if (!resourcesCount || !activeResource) return null;

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(25rem,0.95fr)] lg:gap-16">
      <ResourcePreviewStack
        resources={resources}
        activeIndex={safeActiveIndex}
        onNext={handleNext}
        onPrev={handlePrev}
        onSelect={handleSelect}
        reduceMotion={shouldReduceMotion}
      />

      <div className="relative">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeResource.id}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: -14 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.28,
              ease: "easeOut",
            }}
          >
            <ResourceDownloadForm resource={activeResource} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
