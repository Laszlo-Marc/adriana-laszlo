import Link from "next/link";

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
    <span
      className={`
        font-display font-medium uppercase tracking-[0.18em] leading-none
        transition-colors duration-200
        ${sizeClasses[size]}
        ${colorClass}
        ${className}
      `}
    >
      Adriana Laszlo
    </span>
  );

  if (asText) return content;

  return (
    <Link href="/" aria-label="Adriana Laszlo — Acasă" className="inline-block">
      {content}
    </Link>
  );
}
