// components/pages/home/education-method/ScrollStepTrigger.tsx
"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

type ScrollStepTriggerProps = {
  index: number;
  onActive: (index: number) => void;
  className?: string;
};

export function ScrollStepTrigger({
  index,
  onActive,
  className = "h-svh",
}: ScrollStepTriggerProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(ref, {
    margin: "-45% 0px -45% 0px",
    amount: "some",
  });

  useEffect(() => {
    if (isInView) {
      onActive(index);
    }
  }, [index, isInView, onActive]);

  return <div ref={ref} className={className} />;
}
