"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ProgramsCarouselImage } from "./events-data";

type ProgramsImageMarqueeProps = {
  images: ProgramsCarouselImage[];
  className?: string;
};

export default function ProgramsImageMarquee({
  images,
  className,
}: ProgramsImageMarqueeProps) {
  if (!images.length) return null;

  const duplicatedImages = [...images, ...images];

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <style jsx>{`
        @keyframes programs-marquee {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-cream to-transparent sm:w-20 lg:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-cream to-transparent sm:w-20 lg:w-28" />

      <div className="mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="group flex w-max items-start gap-5 px-5 animate-[programs-marquee_32s_linear_infinite] hover:[animation-play-state:paused] sm:gap-6 sm:px-8 lg:gap-8 lg:px-10">
          {duplicatedImages.map((image, index) => {
            const offsetClass =
              index % 3 === 0
                ? "mt-0"
                : index % 3 === 1
                  ? "mt-6 sm:mt-8 lg:mt-10"
                  : "mt-3 sm:mt-4 lg:mt-5";

            const card = (
              <div
                className={cn(
                  "relative h-65 w-47.5 shrink-0 overflow-hidden rounded-3xl bg-sand/30 ring-1 ring-charcoal/6 shadow-[0_14px_36px_rgba(44,44,44,0.08)] transition-transform duration-300 ease-out group-hover:not-[&:hover]:scale-[0.985] hover:z-10 hover:scale-[1.02] sm:h-80 sm:w-57.5 lg:h-105 lg:w-75",
                  offsetClass,
                )}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 190px, (max-width: 1024px) 230px, 300px"
                  className="object-cover"
                />
              </div>
            );

            return image.href ? (
              <Link
                key={`${image.id}-${index}`}
                href={image.href}
                className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/60 focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
                aria-label={image.alt}
              >
                {card}
              </Link>
            ) : (
              <div key={`${image.id}-${index}`}>{card}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
