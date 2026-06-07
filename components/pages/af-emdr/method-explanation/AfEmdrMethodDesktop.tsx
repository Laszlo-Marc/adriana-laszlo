"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useInView } from "framer-motion";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import { afEmdrMethodContent } from "../afEmdrContent";

type ScrollStepTriggerProps = {
  index: number;
  onActive: (index: number) => void;
};

function ScrollStepTrigger({ index, onActive }: ScrollStepTriggerProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(ref, {
    margin: "-50% 0px -40% 0px",
    amount: "some",
  });

  useEffect(() => {
    if (isInView) {
      onActive(index);
    }
  }, [index, isInView, onActive]);

  return <div ref={ref} className="h-[115svh]" />;
}

export default function AfEmdrMethodDesktop() {
  const [activeIndex, setActiveIndex] = useState(0);

  const { chapter, eyebrow, title, lead, thesis, note, steps } =
    afEmdrMethodContent;

  const activeStep = steps[activeIndex];

  const handleActiveChange = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <section
      id="cum-functioneaza"
      aria-labelledby="af-emdr-method-title"
      className="relative hidden bg-cream lg:block"
    >
      <div className="relative h-[460svh]">
        <div className="sticky top-0 h-svh overflow-hidden">
          {/* Background atmosphere */}
          <div className="absolute inset-0">
            <Image
              src="/af-emdr/method/af-emdr-method.jpg"
              alt=""
              aria-hidden="true"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />

            <div aria-hidden="true" className="absolute inset-0 bg-cream/78" />

            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-cream via-cream/95 to-transparent"
            />

            <div
              aria-hidden="true"
              className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-cream via-cream/90 to-transparent"
            />

            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-cream via-cream/80 to-transparent"
            />

            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-cream via-cream/85 to-transparent"
            />
          </div>

          {/* Oversized editorial word */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-semibold uppercase leading-none tracking-[-0.08em] text-charcoal/[0.035]"
          >
            ATAȘAMENT
          </div>

          <Container
            size="wider"
            padding="default"
            className="relative z-10 h-full"
          >
            <div className="grid h-full grid-cols-[0.9fr_1.1fr] items-center gap-16 xl:gap-24">
              {/* Left fixed explanation */}
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-charcoal/45">
                  {chapter}
                </p>

                <Heading
                  id="af-emdr-method-title"
                  as="h2"
                  size="h2"
                  className="mt-6 text-balance text-charcoal"
                >
                  {eyebrow}
                </Heading>

                <Text className="mt-6 max-w-xl text-pretty text-charcoal/70">
                  {lead}
                </Text>

                <div className="mt-10 border-l border-gold/45 pl-6">
                  <p className="text-balance text-2xl font-medium leading-snug text-charcoal xl:text-3xl">
                    {thesis}
                  </p>

                  <Text size="sm" className="mt-5 max-w-lg text-charcoal/62">
                    {note}
                  </Text>
                </div>
              </div>

              {/* Right scroll-revealed process */}
              <div className="relative ml-auto w-full max-w-3xl">
                <div className="relative">
                  <div className="relative h-[34rem] overflow-hidden rounded-[2.5rem] shadow-[0_34px_110px_rgba(44,44,44,0.14)]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeStep.title}
                        className="absolute inset-0"
                        initial={{ opacity: 0, scale: 1.03 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.985 }}
                        transition={{ duration: 0.55, ease: "easeOut" }}
                      >
                        <Image
                          src={activeStep.image}
                          alt={activeStep.imageAlt}
                          fill
                          sizes="(min-width: 1024px) 50vw, 100vw"
                          className="object-cover object-center"
                        />

                        <div
                          aria-hidden="true"
                          className="absolute inset-0 bg-gradient-to-t from-charcoal/62 via-charcoal/18 to-transparent"
                        />

                        <div
                          aria-hidden="true"
                          className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-charcoal/70 via-charcoal/30 to-transparent"
                        />
                      </motion.div>
                    </AnimatePresence>

                    <div className="absolute inset-x-0 bottom-0 z-10 p-8 xl:p-10">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeStep.title}
                          initial={{ opacity: 0, y: 18 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -12 }}
                          transition={{ duration: 0.45, ease: "easeOut" }}
                        >
                          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/65">
                            Cum funcționează / {activeStep.label}
                          </p>

                          <h3 className="mt-4 max-w-xl text-balance text-5xl font-semibold leading-none text-white">
                            {activeStep.title}
                          </h3>

                          <p className="mt-3 max-w-xl text-balance text-xl text-white/85">
                            {activeStep.subtitle}
                          </p>

                          <Text className="mt-5 max-w-2xl text-pretty text-white/78">
                            {activeStep.description}
                          </Text>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Step progress — outside image, no white frame */}
                  <div className="mt-5 grid grid-cols-4 gap-3 px-2">
                    {steps.map((step, index) => {
                      const isActive = index === activeIndex;

                      return (
                        <div
                          key={step.title}
                          className="h-1.5 overflow-hidden rounded-full bg-charcoal/12"
                        >
                          <div
                            className={
                              isActive
                                ? "h-full rounded-full bg-gold transition-all duration-500"
                                : "h-full w-0 rounded-full bg-gold transition-all duration-500"
                            }
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Scroll triggers */}
        <div className="pointer-events-none absolute inset-0 z-20">
          {steps.map((step, index) => (
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
