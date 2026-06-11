"use client";

import { useCallback, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import ResourcePreviewStack from "./ResourcePreviewStack";
import ResourceDownloadForm from "./ResourceDownloadForm";
import { DownloadResource } from "./resourceContent";


type DownloadResourcesClientProps = {
  resources: DownloadResource[];
};

export default function DownloadResourcesClient({
  resources,
}: DownloadResourcesClientProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeResource = useMemo(
    () => resources[activeIndex],
    [activeIndex, resources],
  );

  const resourcesCount = resources.length;

  const handleNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % resourcesCount);
  }, [resourcesCount]);

  const handlePrev = useCallback(() => {
    setActiveIndex(
      (current) => (current - 1 + resourcesCount) % resourcesCount,
    );
  }, [resourcesCount]);

  const handleSelect = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  if (!resources.length || !activeResource) {
    return null;
  }

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(25rem,0.95fr)] lg:gap-16">
      <ResourcePreviewStack
        resources={resources}
        activeIndex={activeIndex}
        onNext={handleNext}
        onPrev={handlePrev}
        onSelect={handleSelect}
      />

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeResource.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <ResourceDownloadForm resource={activeResource} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
