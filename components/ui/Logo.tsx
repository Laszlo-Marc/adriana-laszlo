import Link from "next/link";
import Image from "next/image";
import Heading from "./Heading";
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
