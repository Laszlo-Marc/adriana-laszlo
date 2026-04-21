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
            transform: translate3d(-8%, 0, 0);
          }
          to {
            transform: translate3d(-58%, 0, 0);
          }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-cream to-transparent sm:w-24 lg:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-cream to-transparent sm:w-24 lg:w-32" />

      <div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="group flex w-max gap-5 sm:gap-6 lg:gap-8 [animation:programs-marquee_28s_linear_infinite] hover:[animation-play-state:paused]">
          {duplicatedImages.map((image, index) => {
            const offsetClass =
              index % 3 === 0
                ? "mt-0"
                : index % 3 === 1
                  ? "mt-6 sm:mt-8"
                  : "mt-3 sm:mt-4";

            const content = (
              <div
                className={cn(
                  "relative h-[260px] w-[190px] sm:h-[320px] sm:w-[230px] lg:h-[420px] lg:w-[300px] shrink-0 overflow-hidden rounded-[22px] bg-sand/30 ring-1 ring-charcoal/6 transition-transform duration-300 ease-out hover:scale-[1.02]",
                  offsetClass,
                )}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 160px, (max-width: 1024px) 200px, 240px"
                  className="object-cover"
                />
              </div>
            );

            return image.href ? (
              <Link
                key={`${image.id}-${index}`}
                href={image.href}
                className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/60 focus-visible:ring-offset-2"
                aria-label={image.alt}
              >
                {content}
              </Link>
            ) : (
              <div key={`${image.id}-${index}`}>{content}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
