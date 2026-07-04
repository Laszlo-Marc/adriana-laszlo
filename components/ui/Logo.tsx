import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoProps = {
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "light";
  asText?: boolean;
  className?: string;
  priority?: boolean;
  boxed?: boolean;
};

const textSizeClasses: Record<NonNullable<LogoProps["size"]>, string> = {
  sm: "text-xs md:text-sm",
  md: "text-sm md:text-base",
  lg: "text-lg md:text-2xl",
};

const circleSizeClasses: Record<NonNullable<LogoProps["size"]>, string> = {
  sm: "h-10 w-10 md:h-11 md:w-11",
  md: "h-12 w-12 md:h-14 md:w-14",
  lg: "h-16 w-16 md:h-20 md:w-20",
};

const imageSizeClasses: Record<NonNullable<LogoProps["size"]>, string> = {
  sm: "h-8 w-8 md:h-9 md:w-9",
  md: "h-10 w-10 md:h-12 md:w-12",
  lg: "h-14 w-14 md:h-16 md:w-16",
};

const gapClasses: Record<NonNullable<LogoProps["size"]>, string> = {
  sm: "gap-2.5",
  md: "gap-3",
  lg: "gap-4",
};

export default function Logo({
  size = "md",
  variant = "dark",
  asText = false,
  className,
  priority = false,
  boxed = true,
}: LogoProps) {
  const textColorClass =
    variant === "light"
      ? "text-cream group-hover/logo:text-teal"
      : "text-charcoal group-hover/logo:text-teal";

  const ringClass =
    variant === "light"
      ? "ring-cream/25 bg-white/90"
      : "ring-charcoal/10 bg-white/85";

  const textContent = (
    <span
      className={cn(
        "font-display font-medium uppercase  transition-colors",
        textColorClass,
        textSizeClasses[size],
      )}
    >
      ADRIANA LASZLO
    </span>
  );

  const image = (
    <Image
      src="/logo2.png"
      alt=""
      width={96}
      height={96}
      priority={priority}
      sizes={
        size === "lg"
          ? "(min-width: 768px) 80px, 64px"
          : size === "md"
            ? "(min-width: 768px) 56px, 48px"
            : "(min-width: 768px) 44px, 40px"
      }
      className={cn("object-contain", imageSizeClasses[size])}
    />
  );

  const imageContent = (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full transition-transform duration-300 group-hover/logo:scale-[1.03]",
        boxed && "shadow-sm ring-1 backdrop-blur-sm",
        boxed && ringClass,
        circleSizeClasses[size],
      )}
    >
      {image}
    </span>
  );

  return (
    <Link
      href="/"
      aria-label="Adriana Laszlo — Acasă"
      className={cn(
        "group/logo inline-flex shrink-0 items-center justify-center transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-4 focus-visible:ring-offset-cream",
        !asText && gapClasses[size],
        className,
      )}
    >
      {asText ? (
        textContent
      ) : (
        <>
          {imageContent}
          {textContent}
        </>
      )}
    </Link>
  );
}
