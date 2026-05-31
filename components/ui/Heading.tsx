import {
  createElement,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingSize = "display" | "h1" | "h2" | "h3" | "h4" | "h5" | "eyebrow";

type HeadingAlign = "left" | "center" | "right";
type HeadingColor =
  | "charcoal"
  | "cream"
  | "muted"
  | "teal"
  | "purple"
  | "gold"
  | "inherit";

type HeadingCase = "none" | "uppercase" | "capitalize" | "lowercase";
type HeadingFont = "display" | "body" | "accent" | "inherit";
type HeadingWeight = "normal" | "medium" | "semibold" | "bold" | "inherit";
type HeadingTracking = "none" | "tight" | "normal" | "wide" | "wider";

type NativeHeadingProps = Omit<
  ComponentPropsWithoutRef<HeadingLevel>,
  "children" | "className" | "color"
>;

type HeadingProps = NativeHeadingProps & {
  children: ReactNode;
  as?: HeadingLevel;
  size?: HeadingSize;
  align?: HeadingAlign;
  color?: HeadingColor;
  textCase?: HeadingCase;
  font?: HeadingFont;
  weight?: HeadingWeight;
  tracking?: HeadingTracking;
  className?: string;
};

const sizeStyles: Record<HeadingSize, string> = {
  display:
    "text-[2.75rem] leading-[1.05] md:text-6xl md:leading-[1.05] lg:text-7xl lg:leading-[1]",
  h1: "text-4xl leading-[1.12] md:text-5xl md:leading-[1.1] lg:text-[3.5rem] lg:leading-[1.05]",
  h2: "text-3xl leading-[1.18] md:text-4xl md:leading-[1.15] lg:text-5xl lg:leading-[1.1]",
  h3: "text-2xl leading-[1.22] md:text-3xl md:leading-[1.18] lg:text-4xl lg:leading-[1.12]",
  h4: "text-xl leading-[1.3] md:text-2xl md:leading-[1.25]",
  h5: "text-lg leading-[1.35] md:text-xl md:leading-[1.3]",
  eyebrow: "text-[0.6875rem] leading-[1.4] md:text-xs",
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
  inherit: "text-inherit",
};

const caseStyles: Record<HeadingCase, string> = {
  none: "normal-case",
  uppercase: "uppercase",
  capitalize: "capitalize",
  lowercase: "lowercase",
};

const fontStyles: Record<HeadingFont, string> = {
  display: "font-display",
  body: "font-body",
  accent: "font-accent",
  inherit: "font-inherit",
};

const weightStyles: Record<HeadingWeight, string> = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  inherit: "font-inherit",
};

const trackingStyles: Record<HeadingTracking, string> = {
  none: "tracking-normal",
  tight: "tracking-tight",
  normal: "tracking-[0.02em]",
  wide: "tracking-[0.08em]",
  wider: "tracking-[0.18em]",
};

export default function Heading({
  children,
  as = "h2",
  size = "h2",
  align = "left",
  color = "charcoal",
  textCase,
  font,
  weight,
  tracking,
  className,
  ...props
}: HeadingProps) {
  const resolvedFont: HeadingFont =
    font ?? (size === "eyebrow" ? "body" : "display");

  const resolvedWeight: HeadingWeight =
    weight ?? (size === "eyebrow" ? "medium" : "medium");

  const resolvedCase: HeadingCase =
    textCase ?? (size === "eyebrow" ? "uppercase" : "none");

  const resolvedTracking: HeadingTracking =
    tracking ?? (size === "eyebrow" ? "wider" : "normal");

  return createElement(
    as,
    {
      className: cn(
        fontStyles[resolvedFont],
        weightStyles[resolvedWeight],
        sizeStyles[size],
        alignStyles[align],
        colorStyles[color],
        caseStyles[resolvedCase],
        trackingStyles[resolvedTracking],
        className,
      ),
      ...props,
    },
    children,
  );
}
