"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Section from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import { EventDetail } from "./eventData";

type EventDetailHeroProps = {
  event: EventDetail;
  className?: string;
};

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 90,
      damping: 22,
    },
  },
};

export default function EventDetailHero({
  event,
  className,
}: EventDetailHeroProps) {
  const prefersReducedMotion = useReducedMotion();

  const galleryImages =
    event.gallery.length > 0
      ? event.gallery
      : [
          {
            src: event.image,
            alt: event.imageAlt,
          },
        ];

  const duplicatedImages = [...galleryImages, ...galleryImages];

  return (
    <section
      className={cn(
        "relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-cream px-4 text-center",
        className,
      )}
      aria-labelledby="event-detail-hero-title"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-teal/16 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10rem] top-1/4 h-96 w-96 rounded-full bg-purple/12 blur-3xl"
      />

      <motion.div
        initial="hidden"
        animate="show"
        className="relative z-20 mx-auto flex flex-col items-center pb-36 pt-28 md:pb-44"
      >
        <motion.p
          variants={fadeIn}
          className="rounded-full border border-charcoal/10 bg-white/55 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-gold shadow-[0_12px_40px_rgba(44,44,44,0.05)] backdrop-blur-md"
        >
          {event.eyebrow}
        </motion.p>

        <motion.h1
          id="event-detail-hero-title"
          variants={fadeIn}
          className="mt-6 font-accent text-4xl font-medium  leading-[1.04] tracking-[0.08em] text-charcoal  text-[clamp(4rem,4vw,4rem)] lg:text-[clamp(8rem,8vw,8rem)]"
        >
          {event.title}
        </motion.h1>

        <motion.p
          variants={fadeIn}
          className="mt-6 max-w-2xl text-base leading-relaxed text-charcoal/72 sm:text-lg"
        >
          {event.summary}
        </motion.p>

        <motion.div
          variants={fadeIn}
          className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
        >
          <Link
            href="#inscriere"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-teal px-7 text-center text-sm font-semibold uppercase tracking-[0.2em] text-charcoal transition hover:bg-teal/85 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 sm:w-auto"
          >
            Vreau să mă înscriu
          </Link>

          <Link
            href="#structura"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-charcoal/12 bg-white/60 px-7 text-center text-sm font-semibold uppercase tracking-[0.2em] text-charcoal transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/30 focus-visible:ring-offset-2 sm:w-auto"
          >
            Vezi structura
          </Link>
        </motion.div>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[34vh] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)] md:h-[40vh]">
        <motion.div
          className="flex w-max gap-4 px-4 md:gap-5"
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  x: ["-50%", "0%"],
                }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  ease: "linear",
                  duration: 48,
                  repeat: Infinity,
                }
          }
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="relative h-44 w-36 shrink-0 overflow-hidden rounded-[1.5rem] border border-white/70 bg-white shadow-[0_18px_60px_rgba(44,44,44,0.12)] sm:h-56 sm:w-44 md:h-64 md:w-52 lg:h-72 lg:w-56"
              style={{
                rotate: `${index % 2 === 0 ? -2 : 3}deg`,
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                sizes="(min-width: 1024px) 224px, (min-width: 768px) 208px, 176px"
                className="object-cover"
              />

              <div aria-hidden="true" className="absolute inset-0 bg-cream/5" />
            </div>
          ))}
        </motion.div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-t from-cream via-cream/75 to-transparent"
      />
    </section>
  );
}
