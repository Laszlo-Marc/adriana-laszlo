import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "light";
  asText?: boolean;
  className?: string;
};

const sizeClasses: Record<NonNullable<LogoProps["size"]>, string> = {
  sm: "text-sm md:text-[0.9375rem]",
  md: "text-base md:text-lg",
  lg: "text-xl md:text-2xl",
};

export default function Logo({
  size = "md",
  variant = "dark",
  asText = false,
  className,
}: LogoProps) {
  const colorClass =
    variant === "light"
      ? "text-cream hover:text-teal"
      : "text-charcoal hover:text-teal";

  const content = (
    <span
      className={cn(
        "font-display font-medium tracking-[0.02em] transition-colors",
        colorClass,
        sizeClasses[size],
        className,
      )}
    >
      ADRIANA LASZLO
    </span>
  );

  if (asText) return content;

  return (
    <Link href="/" aria-label="Adriana Laszlo — Acasă" className="inline-block">
      {content}
    </Link>
  );
}
