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
  sm: "text-sm md:text-[0.9375rem]",
  md: "text-base md:text-lg",
  lg: "text-xl md:text-2xl",
};

const circleSizeClasses: Record<NonNullable<LogoProps["size"]>, string> = {
  sm: "h-12 w-12 md:h-14 md:w-14",
  md: "h-14 w-14 md:h-16 md:w-16",
  lg: "h-16 w-16 md:h-20 md:w-20",
};

const imageSizeClasses: Record<NonNullable<LogoProps["size"]>, string> = {
  sm: "h-9 w-9 md:h-10 md:w-10",
  md: "h-10 w-10 md:h-12 md:w-12",
  lg: "h-12 w-12 md:h-14 md:w-14",
};

export default function Logo({
  size = "md",
  variant = "dark",
  asText = false,
  className,
  priority = false,
  boxed = true,
}: LogoProps) {
  const colorClass =
    variant === "light"
      ? "text-cream hover:text-teal"
      : "text-charcoal hover:text-teal";

  const textContent = (
    <span
      className={cn(
        "font-display font-medium tracking-[0.02em] transition-colors",
        colorClass,
        textSizeClasses[size],
        className,
      )}
    >
      ADRIANA LASZLO
    </span>
  );

  const image = (
    <Image
      src="/adriana-laszlo-logo.png"
      alt="Adriana Laszlo"
      width={96}
      height={96}
      priority={priority}
      sizes="(min-width: 768px) 56px, 48px"
      className={cn("object-contain", imageSizeClasses[size])}
    />
  );

  const imageContent = boxed ? (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-white/85 shadow-sm ring-1 ring-charcoal/10 backdrop-blur-sm",
        circleSizeClasses[size],
        className,
      )}
    >
      {image}
    </span>
  ) : (
    <span className={cn("inline-flex items-center justify-center", className)}>
      {image}
    </span>
  );

  const content = asText ? textContent : imageContent;

  return (
    <Link
      href="/"
      aria-label="Adriana Laszlo — Acasă"
      className="inline-flex shrink-0 items-center justify-center"
    >
      {content}
    </Link>
  );
}
