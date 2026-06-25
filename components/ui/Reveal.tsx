// components/ui/Reveal.tsx

import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type RevealPreset = "fade-up" | "fade-in" | "fade-down" | "scale-in";

type RevealOwnProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  preset?: RevealPreset;
  delay?: "none" | "sm" | "md" | "lg" | "xl";
  className?: string;
};

type RevealProps<T extends ElementType> = RevealOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof RevealOwnProps<T>>;

const presetClasses: Record<RevealPreset, string> = {
  "fade-up":
    "motion-safe:animate-[revealFadeUp_700ms_cubic-bezier(0.25,0.46,0.45,0.94)_both]",
  "fade-in":
    "motion-safe:animate-[revealFadeIn_700ms_cubic-bezier(0.25,0.46,0.45,0.94)_both]",
  "fade-down":
    "motion-safe:animate-[revealFadeDown_700ms_cubic-bezier(0.25,0.46,0.45,0.94)_both]",
  "scale-in":
    "motion-safe:animate-[revealScaleIn_760ms_cubic-bezier(0.25,0.46,0.45,0.94)_both]",
};

const delayClasses: Record<
  NonNullable<RevealOwnProps<ElementType>["delay"]>,
  string
> = {
  none: "",
  sm: "motion-safe:[animation-delay:100ms]",
  md: "motion-safe:[animation-delay:200ms]",
  lg: "motion-safe:[animation-delay:300ms]",
  xl: "motion-safe:[animation-delay:420ms]",
};

export default function Reveal<T extends ElementType = "div">({
  as,
  children,
  preset = "fade-up",
  delay = "none",
  className,
  ...props
}: RevealProps<T>) {
  const Component = as || "div";

  return (
    <Component
      className={cn(presetClasses[preset], delayClasses[delay], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
