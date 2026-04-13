import Link from "next/link";
import Image from "next/image";
import Heading from "./Heading";
type LogoProps = {
  /** Visual size — scales the wordmark proportionally */
  size?: "sm" | "md" | "lg";
  /** Color variant — use 'light' on dark backgrounds (footer, dark sections) */
  variant?: "dark" | "light";
  /** When true, renders as plain text (no link) — use inside footers or headers where the parent already links */
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
  className = "",
}: LogoProps) {
  const colorClass =
    variant === "light"
      ? "text-cream hover:text-teal"
      : "text-charcoal hover:text-teal";

  const content = (
    <Heading
      as="h1"
      size="h2"
      className={`${colorClass} ${sizeClasses[size]} ${className}`}
    >
      ADRIANA LASZLO
    </Heading>
  );

  if (asText) return content;

  return (
    <Link href="/" aria-label="Adriana Laszlo — Acasă" className="inline-block">
      {content}
    </Link>
  );
}
