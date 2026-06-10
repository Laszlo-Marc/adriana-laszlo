// components/pages/home/education-method/EducationMethodMobileSection.tsx
"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import Heading from "@/components/ui/Heading";
import AccentText from "@/components/ui/AccentText";
import { methodSteps } from "./data";
import { ScrollStepTrigger } from "./ScrollStepTrigger";

export default function EducationMethodMobileSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActiveChange = useCallback((index: number) => {
    setActiveIndex((currentIndex) =>
      currentIndex === index ? currentIndex : index,
    );
  }, []);

  const activeStep = methodSteps[activeIndex];

  return (
    <section
      aria-labelledby="education-method-mobile-title"
      className="relative bg-cream lg:hidden"
    >
      <div className="relative h-[300svh]">
        <div className="sticky top-0 h-svh overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.imageSrc}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={activeStep.imageSrc}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </motion.div>
            </AnimatePresence>

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-charcoal/20"
            />

            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cream via-cream/75 to-transparent"
            />

            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-cream via-cream/92 to-transparent"
            />
          </div>

          {/* Soft brand detail */}
          <Image
            src="/backgrounds/df-teal-down.png"
            alt=""
            aria-hidden="true"
            width={105}
            height={105}
            className="pointer-events-none absolute right-4 top-28 z-10 rotate-[-10deg] opacity-30"
          />

          {/* Content */}
          <div className="relative z-20 flex h-full items-end px-5 pb-12 pt-28">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeStep.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="mx-auto w-full max-w-sm rounded-[2rem] border border-white/60 bg-cream/94 p-7 text-center shadow-[0_18px_55px_rgba(44,44,44,0.18)] backdrop-blur-md"
              >
                <Heading
                  id={
                    activeIndex === 0
                      ? "education-method-mobile-title"
                      : undefined
                  }
                  as={activeIndex === 0 ? "h2" : "h3"}
                  size="h2"
                  color="charcoal"
                  align="center"
                  className="mt-4 text-balance leading-[1.08]"
                >
                  {activeStep.title}
                </Heading>

                <Text
                  as="p"
                  size="base"
                  color="muted"
                  align="center"
                  className="mt-5 text-pretty leading-7"
                >
                  {activeStep.body}
                </Text>

                {activeStep.points?.length ? (
                  <>
                    <div className="mx-auto mt-6 h-px w-16 bg-gold/35" />

                    <div className="mt-6 space-y-3">
                      {activeStep.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-start justify-center gap-3 text-center"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />

                          <Text
                            as="p"
                            size="sm"
                            color="charcoal"
                            align="center"
                            className="text-pretty leading-6"
                          >
                            {point}
                          </Text>
                        </div>
                      ))}
                    </div>
                  </>
                ) : null}

                {activeStep.cta ? (
                  <Button
                    href={activeStep.cta.href}
                    variant="primary"
                    size="sm"
                    className="mt-7"
                  >
                    {activeStep.cta.label}
                  </Button>
                ) : null}
              </motion.article>
            </AnimatePresence>
          </div>

          {/* Progress dots */}
          <div
            aria-hidden="true"
            className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2"
          >
            {methodSteps.map((step, index) => (
              <span
                key={step.title}
                className={[
                  "h-1.5 rounded-full transition-all duration-300",
                  activeIndex === index
                    ? "w-6 bg-gold"
                    : "w-1.5 bg-charcoal/25",
                ].join(" ")}
              />
            ))}
          </div>
        </div>

        {/* Scroll triggers */}
        <div className="pointer-events-none absolute inset-0 z-30">
          {methodSteps.map((step, index) => (
            <ScrollStepTrigger
              key={step.title}
              index={index}
              onActive={handleActiveChange}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
