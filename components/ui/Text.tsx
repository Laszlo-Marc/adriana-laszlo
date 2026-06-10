import {
  createElement,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

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
  | "gold"
  | "inherit";

type TextWeight = "regular" | "medium" | "semibold";
type TextTransform = "none" | "upper";

type TextOwnProps<T extends ElementType = "p"> = {
  children: ReactNode;
  as?: T;
  size?: TextSize;
  align?: TextAlign;
  color?: TextColor;
  weight?: TextWeight;
  transform?: TextTransform;
  balance?: boolean;
  clamp?: 1 | 2 | 3 | 4;
  className?: string;
};

type TextProps<T extends ElementType = "p"> = TextOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof TextOwnProps<T> | "color">;

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
  inherit: "text-inherit",
};

const weightStyles: Record<TextWeight, string> = {
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
};

const clampStyles: Record<NonNullable<TextOwnProps["clamp"]>, string> = {
  1: "line-clamp-1",
  2: "line-clamp-2",
  3: "line-clamp-3",
  4: "line-clamp-4",
};

export default function Text<T extends TextTag = "p">({
  children,
  as,
  size = "base",
  align = "left",
  color = "charcoal",
  weight = "regular",
  transform = "none",
  balance = false,
  clamp,
  className,
  ...props
}: TextProps<T>) {
  const Component = (as ?? "p") as TextTag;

  return createElement(
    Component,
    {
      className: cn(
        "font-body",
        sizeStyles[size],
        alignStyles[align],
        colorStyles[color],
        weightStyles[weight],
        transform === "upper" && "uppercase tracking-[0.1em]",
        balance && "text-balance",
        clamp && clampStyles[clamp],
        className,
      ),
      ...props,
    },
    children,
  );
}
