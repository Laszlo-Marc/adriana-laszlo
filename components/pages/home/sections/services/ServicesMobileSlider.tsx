"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import { cn } from "@/lib/utils";

export type MobileServiceSlide = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  ctaLabel: string;
  tone: "teal" | "purple" | "sand";
};

type ServicesMobileSliderProps = {
  services: MobileServiceSlide[];
};

const toneClasses: Record<MobileServiceSlide["tone"], string> = {
  teal: "bg-teal/90",
  purple: "bg-purple/90",
  sand: "bg-sand/90",
};

export default function ServicesMobileSlider({
  services,
}: ServicesMobileSliderProps) {
  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 4500,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    [],
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
    },
    [autoplay],
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const updateSelectedIndex = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);
  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", updateSelectedIndex);
    emblaApi.on("reInit", updateSelectedIndex);

    return () => {
      emblaApi.off("select", updateSelectedIndex);
      emblaApi.off("reInit", updateSelectedIndex);
    };
  }, [emblaApi, updateSelectedIndex]);
  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  if (!services.length) return null;

  return (
    <section
      aria-labelledby="mobile-services-slider-title"
      className="relative h-svh  overflow-hidden lg:hidden"
    >
      <h2 id="mobile-services-slider-title" className="sr-only">
        Servicii de psihoterapie
      </h2>

      <div ref={emblaRef} className="h-svh  overflow-hidden">
        <div className="flex h-full touch-pan-y">
          {services.map((service, index) => (
            <article
              key={service.id}
              className="relative h-svh  min-w-0 flex-[0_0_100%] overflow-hidden"
              aria-label={service.title}
            >
              <Image
                src={service.imageSrc}
                alt={service.imageAlt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-charcoal/25"
              />

              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-[52%] bg-linear-to-t from-charcoal via-charcoal/65 to-transparent"
              />

              <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-10 pt-24">
                <div className="mx-auto max-w-sm">
                  <div
                    className={cn(
                      "mb-5 inline-flex rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-charcoal",
                      toneClasses[service.tone],
                    )}
                  >
                    Serviciu
                  </div>

                  <Heading
                    as="h3"
                    size="h2"
                    textCase="uppercase"
                    className="max-w-[11ch] text-balance leading-[0.95] text-white"
                  >
                    {service.title}
                  </Heading>

                  <Text className="mt-5 max-w-[30ch] text-base leading-7 text-white/85">
                    {service.description}
                  </Text>

                  <Button href={service.href} className="mt-7">
                    {service.ctaLabel}
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 pt-6">
        <p className="text-xs uppercase tracking-[0.24em] text-white/75">
          Servicii
        </p>

        <p className="text-xs tabular-nums text-white/75">
          {String(selectedIndex + 1).padStart(2, "0")} /{" "}
          {String(services.length).padStart(2, "0")}
        </p>
      </div>

      <div className="absolute bottom-10 right-5 z-20 flex gap-2">
        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Serviciul anterior"
          className="inline-flex size-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
        </button>

        <button
          type="button"
          onClick={scrollNext}
          aria-label="Serviciul următor"
          className="inline-flex size-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <ArrowRight className="size-4" aria-hidden="true" />
        </button>
      </div>

      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {services.map((service, index) => (
          <button
            key={service.id}
            type="button"
            onClick={() => scrollTo(index)}
            aria-label={`Mergi la ${service.title}`}
            aria-current={selectedIndex === index ? "true" : undefined}
            className={cn(
              "h-1.5 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white",
              selectedIndex === index
                ? "w-8 bg-white"
                : "w-2 bg-white/45 hover:bg-white/70",
            )}
          />
        ))}
      </div>
    </section>
  );
}
