import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type MarqueeImage = {
  src: string;
  alt: string;
  href?: string;
};

type ImageMarqueeProps = {
  images: MarqueeImage[];
  href?: string;
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  className?: string;
};

const speedClass = {
  slow: "animate-image-marquee-slow",
  normal: "animate-image-marquee",
  fast: "animate-image-marquee-fast",
};

const directionClass = {
  left: "",
  right: "[animation-direction:reverse]",
};

function ImageCard({
  image,
  href,
  duplicate = false,
}: {
  image: MarqueeImage;
  href?: string;
  duplicate?: boolean;
}) {
  const imageHref = image.href ?? href;

  const content = (
    <>
      <Image
        src={image.src}
        alt={duplicate ? "" : image.alt}
        fill
        sizes="(min-width: 1024px) 320px, (min-width: 640px) 256px, 208px"
        className="object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-105 motion-reduce:transition-none"
      />

      <div aria-hidden="true" className="absolute inset-0 bg-cream/5" />
    </>
  );

  const cardClassName =
    "group relative h-52 w-52 shrink-0 overflow-hidden rounded-[1.75rem] border border-white/70 bg-white sm:h-64 sm:w-64 lg:h-80 lg:w-80";

  if (!imageHref) {
    return <div className={cardClassName}>{content}</div>;
  }

  return (
    <Link
      href={imageHref}
      aria-label={duplicate ? undefined : `Vezi detalii despre ${image.alt}`}
      tabIndex={duplicate ? -1 : undefined}
      className={cn(
        cardClassName,
        "block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-4 focus-visible:ring-offset-cream",
      )}
    >
      {content}
    </Link>
  );
}

function ImageSet({
  images,
  href,
  duplicate = false,
}: {
  images: MarqueeImage[];
  href?: string;
  duplicate?: boolean;
}) {
  return (
    <div
      aria-hidden={duplicate ? "true" : undefined}
      className="flex items-center gap-4 sm:gap-5 lg:gap-6"
    >
      {images.map((image, index) => (
        <ImageCard
          key={`${duplicate ? "duplicate" : "original"}-${image.src}-${index}`}
          image={image}
          href={href}
          duplicate={duplicate}
        />
      ))}
    </div>
  );
}

export default function ImageMarquee({
  images,
  href,
  direction = "left",
  speed = "normal",
  className,
}: ImageMarqueeProps) {
  if (images.length === 0) return null;

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent_0%,black_10%,black_90%,transparent_100%)]",
        className,
      )}
    >
      <div
        className={cn(
          "flex w-max gap-4 will-change-transform motion-reduce:animate-none sm:gap-5 lg:gap-6",
          speedClass[speed],
          directionClass[direction],
        )}
      >
        <ImageSet images={images} href={href} />
        <ImageSet images={images} href={href} duplicate />
      </div>
    </div>
  );
}
