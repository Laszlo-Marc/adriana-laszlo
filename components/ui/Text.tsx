import { createElement, type ReactNode } from "react";

type TextTag = "p" | "span" | "div" | "li" | "small";
type TextSize = "xs" | "sm" | "base" | "lg" | "xl";
type TextAlign = "left" | "center" | "right";
type TextColor =
  | "charcoal"
  | "cream"
  | "muted"
  | "muted-teal"
  | "teal"
  | "purple"
  | "gold";
type TextWeight = "regular" | "medium" | "semibold";
type TextTransform = "none" | "upper";

type TextProps = {
  children: ReactNode;
  as?: TextTag;
  size?: TextSize;
  align?: TextAlign;
  color?: TextColor;
  weight?: TextWeight;
  transform?: TextTransform;
  balance?: boolean;
  clamp?: 1 | 2 | 3 | 4;
  className?: string;
};

const sizeStyles: Record<TextSize, string> = {
  xs: "text-[0.6875rem] leading-[1.5] md:text-xs",
  sm: "text-[0.8125rem] leading-[1.6] md:text-sm",
  base: "text-[0.9375rem] leading-[1.7] md:text-base md:leading-[1.7]",
  lg: "text-base leading-[1.7] md:text-[1.0625rem] md:leading-[1.75]",
  xl: "text-lg leading-[1.6] md:text-xl md:leading-[1.6]",
};

const alignStyles: Record<TextAlign, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const colorStyles: Record<TextColor, string> = {
  charcoal: "text-charcoal",
  cream: "text-cream",
  muted: "text-muted",
  "muted-teal": "text-muted-teal",
  teal: "text-teal",
  purple: "text-purple",
  gold: "text-gold",
};

const weightStyles: Record<TextWeight, string> = {
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
};

const clampStyles: Record<NonNullable<TextProps["clamp"]>, string> = {
  1: "line-clamp-1",
  2: "line-clamp-2",
  3: "line-clamp-3",
  4: "line-clamp-4",
};

export default function Text({
  children,
  as = "p",
  size = "base",
  align = "left",
  color = "charcoal",
  weight = "regular",
  transform = "none",
  balance = false,
  clamp,
  className = "",
}: TextProps) {
  const transformClass =
    transform === "upper" ? "uppercase tracking-[0.1em]" : "";

  const wrapClass = balance ? "text-balance" : "";

  const clampClass = clamp ? clampStyles[clamp] : "";

  const classes = `
    font-body
    ${sizeStyles[size]}
    ${alignStyles[align]}
    ${colorStyles[color]}
    ${weightStyles[weight]}
    ${transformClass}
    ${wrapClass}
    ${clampClass}
    ${className}
  `;

  return createElement(as, { className: classes }, children);
}
