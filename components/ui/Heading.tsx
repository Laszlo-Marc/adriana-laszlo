import { createElement, type ReactNode } from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingSize = "display" | "h1" | "h2" | "h3" | "h4" | "eyebrow";
type HeadingAlign = "left" | "center" | "right";
type HeadingColor = "charcoal" | "cream" | "muted" | "teal" | "purple" | "gold";
type HeadingCase = "upper" | "normal";

type HeadingProps = {
  children: ReactNode;
  as?: HeadingLevel;
  size?: HeadingSize;
  align?: HeadingAlign;
  color?: HeadingColor;
  case?: HeadingCase;
  className?: string;
};

const sizeStyles: Record<HeadingSize, string> = {
  display:
    "text-[2.5rem] leading-[1.1] md:text-6xl md:leading-[1.1] lg:text-7xl lg:leading-[1.05] tracking-[0.02em]",
  h1: "text-4xl leading-[1.15] md:text-5xl md:leading-[1.15] lg:text-[3.25rem] tracking-[0.02em]",
  h2: "text-2xl leading-[1.25] md:text-3xl md:leading-[1.25] lg:text-4xl tracking-[0.02em]",
  h3: "text-xl leading-[1.3] md:text-2xl md:leading-[1.3] tracking-[0.02em]",
  h4: "text-lg leading-[1.35] md:text-xl md:leading-[1.35] tracking-[0.02em]",
  eyebrow:
    "text-[0.6875rem] leading-[1.4] md:text-xs tracking-[0.2em] font-body font-medium",
};

const alignStyles: Record<HeadingAlign, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const colorStyles: Record<HeadingColor, string> = {
  charcoal: "text-charcoal",
  cream: "text-cream",
  muted: "text-muted",
  teal: "text-teal",
  purple: "text-purple",
  gold: "text-gold",
};

export default function Heading({
  children,
  as = "h2",
  size = "h2",
  align = "left",
  color = "charcoal",
  case: textCase = "upper",
  className = "",
}: HeadingProps) {
  const fontFamily = size === "eyebrow" ? "" : "font-display font-medium";
  const caseClass = textCase === "upper" ? "uppercase" : "";

  const classes = `
    ${fontFamily}
    ${sizeStyles[size]}
    ${alignStyles[align]}
    ${colorStyles[color]}
    ${caseClass}
    ${className}
  `;

  return createElement(as, { className: classes }, children);
}
