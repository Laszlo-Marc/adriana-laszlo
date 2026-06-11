import { AnimatePresence, motion } from "framer-motion";

import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

import type { MethodStep } from "../data";

export function MethodTextPanel({
  step,
  activeIndex,
  reduceMotion = false,
}: {
  step: MethodStep;
  activeIndex: number;
  reduceMotion?: boolean;
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`${activeIndex}-${step.title}`}
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-[2.5rem] xl:p-12"
      >
        <Heading
          as={activeIndex === 0 ? "h2" : "h3"}
          size="h3"
          textCase="none"
          className="text-charcoal"
        >
          {step.title}
        </Heading>

        <Text
          as="p"
          size="lg"
          color="muted"
          className="mt-7 max-w-xl leading-8"
        >
          {step.body}
        </Text>

        <div className="mt-8 h-px w-20 bg-gold/35" />

        <ul className="mt-8 space-y-4">
          {step.points.map((point) => (
            <li key={point} className="flex gap-4">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />

              <Text as="span" color="charcoal" className="leading-7">
                {point}
              </Text>
            </li>
          ))}
        </ul>

        {step.cta ? (
          <div className="mt-9">
            <Button href={step.cta.href}>{step.cta.label}</Button>
          </div>
        ) : null}
      </motion.div>
    </AnimatePresence>
  );
}
