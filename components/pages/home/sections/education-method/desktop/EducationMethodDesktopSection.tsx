"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";
import Container from "@/components/ui/Container";
import { MethodImagePanel } from "./MethodImagePanel";
import { MethodTextPanel } from "./MethodTextPanel";
import { methodSteps } from "./data";

function ScrollStepTrigger({
  index,
  onActive,
}: {
  index: number;
  onActive: (index: number) => void;
}) {
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

  return <div ref={ref} className="h-svh" />;
}

export default function EducationMethodDesktopSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActiveChange = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const activeStep = methodSteps[activeIndex];

  return (
    <section
      aria-labelledby="education-method-desktop-title"
      className="relative hidden bg-cream lg:block"
    >
      <div className="relative h-[300svh]">
        <div className="sticky top-0 h-svh overflow-hidden">
          {/* Background atmosphere */}
          <div className="absolute inset-0">
            <Image
              src="/home-page/method.jpg"
              alt=""
              aria-hidden="true"
              fill
              priority={false}
              sizes="100vw"
              className="object-cover object-center"
            />

            <div aria-hidden="true" className="absolute inset-0 bg-cream/72" />

            <div
              aria-hidden="true"
              className="absolute inset-y-0 right-0 w-2/3 bg-gradient-to-l from-cream via-cream/90 to-transparent"
            />

            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cream via-cream/70 to-transparent"
            />

            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-cream via-cream/80 to-transparent"
            />
          </div>

          {/* Brand ornaments */}
          <Image
            src="/backgrounds/single.png"
            alt=""
            aria-hidden="true"
            width={360}
            height={620}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 rotate-[8deg] opacity-[0.1]"
          />

          <Image
            src="/backgrounds/df-teal-down.png"
            alt=""
            aria-hidden="true"
            width={150}
            height={150}
            className="pointer-events-none absolute right-[9%] top-[12%] rotate-[-10deg] opacity-25"
          />

          <Container
            size="wider"
            padding="default"
            className="relative z-10 h-full"
          >
            <div className="grid h-full grid-cols-[1fr_1fr] items-center gap-14 xl:gap-20">
              <div>
                <MethodImagePanel step={activeStep} activeIndex={activeIndex} />
              </div>

              <div className="ml-auto w-full max-w-2xl">
                <MethodTextPanel step={activeStep} activeIndex={activeIndex} />
              </div>
            </div>
          </Container>
        </div>

        {/* Scroll triggers */}
        <div className="pointer-events-none absolute inset-0 z-20">
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
