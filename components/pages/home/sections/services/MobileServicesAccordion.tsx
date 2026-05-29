"use client";

import { useState } from "react";
import Image from "next/image";

import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import Heading from "@/components/ui/Heading";
import { cn } from "@/lib/utils";
import type { ServiceItem } from "./types";

type MobileServicesAccordionProps = {
  services: ServiceItem[];
};

function PlusMinusIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <span
      aria-hidden="true"
      className="relative flex size-8 shrink-0 items-center justify-center rounded-full border "
    >
      <span className="absolute h-px w-3.5 bg-current transition-transform duration-300" />
      <span
        className={cn(
          "absolute h-3.5 w-px bg-current transition-transform duration-300",
          isOpen ? "scale-y-0" : "scale-y-100",
        )}
      />
    </span>
  );
}

export default function MobileServicesAccordion({
  services,
}: MobileServicesAccordionProps) {
  const [activeId, setActiveId] = useState<string | null>(
    services[0]?.id ?? null,
  );

  return (
    <div className="  overflow-hidden bg-cream">
      {services.map((service, index) => {
        const isActive = activeId === service.id;

        return (
          <article key={service.id} className="overflow-hidden">
            <button
              type="button"
              onClick={() => setActiveId(isActive ? null : service.id)}
              aria-expanded={isActive}
              aria-controls={`${service.id}-panel`}
              className={cn(
                "group flex w-full items-center gap-4 px-6 py-5 text-left transition-colors duration-300",
                isActive
                  ? service.accent.mobileRowActive
                  : service.accent.mobileRow,
              )}
            >
              <PlusMinusIcon isOpen={isActive} />

              <span className="flex-1">
                <span className="block font-display text-[1rem] font-semibold uppercase leading-tight tracking-[0.08em]">
                  {service.title}
                </span>
              </span>
            </button>

            <div
              id={`${service.id}-panel`}
              className={cn(
                "grid bg-cream transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <div className="relative">
                  <div className="relative h-[330px] w-full overflow-hidden">
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      fill
                      sizes="100vw"
                      className="object-cover object-center"
                    />

                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-charcoal/10"
                    />

                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent via-cream/75 to-cream"
                    />
                  </div>

                  <div className="relative z-10 -mt-12 px-6 pb-10 text-center">
                    <Heading
                      as="h3"
                      size="h2"
                      color="charcoal"
                      align="center"
                      className="mx-auto text-balance leading-[1.05]"
                    >
                      {service.title}
                    </Heading>

                    <Text
                      as="p"
                      size="base"
                      color="muted"
                      align="center"
                      className="mx-auto mt-5 max-w-sm text-pretty leading-7"
                    >
                      {service.mobile?.description ?? service.subtitle}
                    </Text>

                    <div className="mt-7">
                      <Button href={service.href} size="lg" className="w-full">
                        {service.mobile?.ctaLabel ?? "Află mai multe"}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
