"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { cn } from "@/lib/utils";

type Stat = {
  value: string;
  label: string;
  icon: string;
  iconClassName?: string;
  isNumeric?: boolean;
  number?: number;
  suffix?: string;
};

const stats: Stat[] = [
  {
    value: "Fondatoare",
    label: "Trauma Center",
    icon: "/backgrounds/dragonfly.png",
    iconClassName: "rotate-[-8deg]",
  },
  {
    value: "15+",
    label: "ani de experiență",
    icon: "/backgrounds/df-purple-down.png",
    iconClassName: "rotate-[6deg]",
    isNumeric: true,
    number: 15,
    suffix: "+",
  },
  {
    value: "1000+",
    label: "procese terapeutice susținute",
    icon: "/backgrounds/df-purple-down.png",
    iconClassName: "rotate-[-4deg]",
    isNumeric: true,
    number: 1000,
    suffix: "+",
  },
  {
    value: "Expertiză",
    label: "AF-EMDR",
    icon: "/backgrounds/dragonfly.png",
    iconClassName: "rotate-[8deg]",
  },
];

function useCountUp({
  target,
  start,
  duration = 1200,
}: {
  target: number;
  start: boolean;
  duration?: number;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let frameId: number;
    const startTime = performance.now();

    function tick(currentTime: number) {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setValue(Math.round(target * easedProgress));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    }

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [duration, start, target]);

  return value;
}

function StatValue({
  stat,
  shouldAnimate,
}: {
  stat: Stat;
  shouldAnimate: boolean;
}) {
  const animatedValue = useCountUp({
    target: stat.number ?? 0,
    start: shouldAnimate && Boolean(stat.isNumeric),
    duration: stat.number && stat.number >= 1000 ? 1500 : 1100,
  });

  if (!stat.isNumeric) {
    return <>{stat.value}</>;
  }

  return (
    <>
      {animatedValue}
      {stat.suffix}
    </>
  );
}

function StatCard({
  stat,
  index,
  shouldAnimate,
}: {
  stat: Stat;
  index: number;
  shouldAnimate: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative flex min-h-[12.5rem] flex-col items-center justify-center rounded-[1.75rem] border border-teal/70 bg-white/80 px-6 pb-7 pt-12 text-center  lg:min-h-[13.5rem]"
    >
      <div className="absolute left-1/2 top-0 flex h-[4.25rem] w-[4.25rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-purple/15 bg-white shadow-[0_10px_28px_rgba(44,44,44,0.08)]">
        <div className="relative h-11 w-11">
          <Image
            src={stat.icon}
            alt=""
            aria-hidden="true"
            fill
            sizes="44px"
            className={cn("object-contain opacity-90", stat.iconClassName)}
          />
        </div>
      </div>

      <p className="font-body text-3xl font-semibold leading-none text-charcoal lg:text-[2rem]">
        <StatValue stat={stat} shouldAnimate={shouldAnimate} />
      </p>

      <p className="mt-3 text-sm leading-6 text-charcoal/68">{stat.label}</p>

      <div aria-hidden="true" className="mt-5 h-px w-12 bg-teal/55" />
    </motion.article>
  );
}
function MobileStatsCarousel({ shouldAnimate }: { shouldAnimate: boolean }) {
  return (
    <div className="relative -mx-4 overflow-hidden pb-5 pt-12 lg:hidden">
      <Swiper
        modules={[Autoplay, EffectCoverflow]}
        effect="coverflow"
        centeredSlides
        loop
        grabCursor
        slidesPerView="auto"
        spaceBetween={18}
        speed={750}
        autoplay={{
          delay: 1800,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 90,
          modifier: 1.8,
          slideShadows: false,
        }}
        className="about-stats-swiper !overflow-visible"
      >
        {stats.map((stat, index) => (
          <SwiperSlide key={stat.label} className="about-stats-slide !h-auto">
            <StatCard stat={stat} index={index} shouldAnimate={shouldAnimate} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function DesktopStatsGrid({ shouldAnimate }: { shouldAnimate: boolean }) {
  return (
    <div className="hidden grid-cols-4 gap-8 pt-10 lg:grid">
      {stats.map((stat, index) => (
        <StatCard
          key={stat.label}
          stat={stat}
          index={index}
          shouldAnimate={shouldAnimate}
        />
      ))}
    </div>
  );
}

export default function AboutStatsStrip() {
  const statsRef = useRef<HTMLDivElement | null>(null);

  const isStatsInView = useInView(statsRef, {
    once: true,
    margin: "-20% 0px -20% 0px",
  });

  return (
    <Section
      background="cream"
      spacing="sm"
      aria-label="Statistici profesionale"
      className="relative overflow-hidden"
    >
      <div ref={statsRef} className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/25 blur-3xl"
        />

        <Container size="wide" className="relative z-10">
          <MobileStatsCarousel shouldAnimate={isStatsInView} />
          <DesktopStatsGrid shouldAnimate={isStatsInView} />
        </Container>
      </div>
    </Section>
  );
}
