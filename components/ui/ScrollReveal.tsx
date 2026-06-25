"use client";

import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { cn } from "@/lib/utils";

type ScrollRevealPreset = "fade-up" | "fade-in" | "fade-down" | "scale-in";

type ScrollRevealOwnProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  preset?: ScrollRevealPreset;
  delay?: "none" | "sm" | "md" | "lg" | "xl";
  once?: boolean;
  className?: string;
};

type ScrollRevealProps<T extends ElementType> = ScrollRevealOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ScrollRevealOwnProps<T>>;

const baseClasses =
  "motion-safe:opacity-0 motion-safe:will-change-[opacity,transform] motion-reduce:opacity-100";

const visibleClasses =
  "motion-safe:opacity-100 motion-safe:translate-y-0 motion-safe:translate-x-0 motion-safe:scale-100";

const presetClasses: Record<ScrollRevealPreset, string> = {
  "fade-up":
    "motion-safe:translate-y-3 motion-safe:transition-[opacity,transform] motion-safe:duration-700 motion-safe:ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
  "fade-in":
    "motion-safe:transition-opacity motion-safe:duration-700 motion-safe:ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
  "fade-down":
    "motion-safe:-translate-y-2 motion-safe:transition-[opacity,transform] motion-safe:duration-700 motion-safe:ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
  "scale-in":
    "motion-safe:scale-[0.99] motion-safe:transition-[opacity,transform] motion-safe:duration-700 motion-safe:ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
};

const delayClasses: Record<
  NonNullable<ScrollRevealOwnProps<ElementType>["delay"]>,
  string
> = {
  none: "",
  sm: "motion-safe:delay-100",
  md: "motion-safe:delay-200",
  lg: "motion-safe:delay-300",
  xl: "motion-safe:delay-[420ms]",
};

export default function ScrollReveal<T extends ElementType = "div">({
  as,
  children,
  preset = "fade-up",
  delay = "none",
  once = true,
  className,
  ...props
}: ScrollRevealProps<T>) {
  const Component = as || "div";
  const elementRef = useRef<Element | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const setElementRef = useCallback((node: Element | null) => {
    elementRef.current = node;
  }, []);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;

        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(entry.target);
          }

          return;
        }

        if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -8% 0px",
      },
    );
    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [once]);

  return (
    <Component
      ref={setElementRef}
      className={cn(
        baseClasses,
        presetClasses[preset],
        delayClasses[delay],
        isVisible && visibleClasses,
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
