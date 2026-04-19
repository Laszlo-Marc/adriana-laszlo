"use client";
import Image from "next/image";
import { useRef } from "react";
import { Sparkles } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Heading from "../../ui/Heading";
import { StatCard, stats } from "./StatCard";
import { PointFeature, points } from "./PointFeature";
import { AboutSectionCta } from "./AboutSectionCTA";

export default function AboutSignatureSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);

  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.25 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageAccentY = useTransform(scrollYProgress, [0, 1], [0, -18]);
  const imageAccentY2 = useTransform(scrollYProgress, [0, 1], [0, 18]);

  const leftPoints = points.filter((point) => point.position === "left");
  const rightPoints = points.filter((point) => point.position === "right");

  return (
    <section
      id="despre"
      ref={sectionRef}
      aria-labelledby="about-signature-heading"
      className="relative overflow-hidden bg-cream py-20 md:py-20"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-charcoal/8" />

      <div className="relative mx-auto max-w-425 px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto mb-14 max-w-full text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-charcoal/10 bg-white/70 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-charcoal/70 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-teal" />
            Despre Adriana Laszlo
          </div>

          <Heading as="h2" size="h2" align="center" className="mb-10 mt-10">
            Un cadru terapeutic profund, sigur și orientat spre vindecare reală
          </Heading>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_minmax(340px,420px)_1fr] lg:gap-8 xl:gap-12">
          <div className="order-2 space-y-12 lg:order-1">
            {leftPoints.map((point, index) => (
              <PointFeature
                key={point.id}
                point={point}
                delay={index * 0.12}
                direction="left"
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={isSectionInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            className="order-1 lg:order-2"
          >
            <div className="relative mx-auto w-full max-w-105">
              <motion.div
                style={{ y: imageAccentY }}
                className="absolute inset-0 translate-x-4 translate-y-4 rounded-4xl border border-purple/25 bg-purple/8"
              />

              <div className="relative overflow-hidden rounded-4xl border border-charcoal/10 bg-sand/30 shadow-[0_20px_70px_rgba(31,31,31,0.08)]">
                <div className="relative aspect-4/5 w-full">
                  <Image
                    src="/adriana10.webp"
                    alt="Portret Adriana Laszlo"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 420px, (min-width: 1024px) 36vw, 90vw"
                  />
                </div>

                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-charcoal/55 via-charcoal/12 to-transparent p-6">
                  <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md">
                    <p className="text-sm font-medium text-white">
                      Specializare în traumă și AF-EMDR
                    </p>
                    <p className="mt-1 text-sm text-white/82">
                      Terapie orientată spre schimbări reale, într-un ritm sigur
                      și bine ghidat.
                    </p>
                  </div>
                </div>
              </div>

              <motion.div
                style={{ y: imageAccentY2 }}
                className="absolute -left-5 top-10 h-16 w-16 rounded-full border border-teal/30 bg-teal/12 blur-[1px]"
              />
              <motion.div
                style={{ y: imageAccentY }}
                className="absolute -right-6 bottom-16 h-20 w-20 rounded-full border border-purple/30 bg-purple/12 blur-[1px]"
              />
            </div>
          </motion.div>

          <div className="order-3 space-y-12">
            {rightPoints.map((point, index) => (
              <PointFeature
                key={point.id}
                point={point}
                delay={index * 0.12}
                direction="right"
              />
            ))}
          </div>
        </div>

        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 24 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-24 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <StatCard
              key={stat.id}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix ?? ""}
              label={stat.label}
              delay={index * 0.08}
            />
          ))}
        </motion.div>
        <AboutSectionCta />
      </div>
    </section>
  );
}
