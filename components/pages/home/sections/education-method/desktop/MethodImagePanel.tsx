import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import type { MethodStep } from "../data";

export function MethodImagePanel({
  step,
  activeIndex,
  reduceMotion = false,
}: {
  step: MethodStep;
  activeIndex: number;
  reduceMotion?: boolean;
}) {
  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeIndex}-${step.imageTitle}`}
          initial={
            reduceMotion ? { opacity: 1 } : { opacity: 0, y: 24, scale: 0.985 }
          }
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={
            reduceMotion ? { opacity: 0 } : { opacity: 0, y: -18, scale: 0.985 }
          }
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[min(60vh,600px)] w-full overflow-hidden rounded-2xl shadow-[0_24px_70px_rgba(44,44,44,0.14)]"
        >
          <Image
            src={step.imageSrc}
            alt={step.imageAlt}
            fill
            sizes="(max-width: 1023px) 1px, (min-width: 1536px) 38vw, 42vw"
            className="object-cover object-center"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-t from-charcoal/55 via-charcoal/12 to-transparent"
          />

          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-60 bg-linear-to-t from-cream/45 via-cream/10 to-transparent"
          />
        </motion.div>
      </AnimatePresence>

      <Image
        src="/backgrounds/df-purple-up.png"
        alt=""
        aria-hidden="true"
        width={130}
        height={130}
        sizes="130px"
        className="pointer-events-none absolute -right-8 -top-10 h-auto w-32.5 rotate-[8deg] opacity-30"
      />
    </div>
  );
}
