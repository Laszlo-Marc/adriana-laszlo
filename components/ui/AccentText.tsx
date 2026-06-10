import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type AccentTextTag = "span" | "div" | "p";

type AccentTextOwnProps<T extends ElementType = "span"> = {
  children: ReactNode;
  as?: T;
  className?: string;
};

type AccentTextProps<T extends ElementType = "span"> = AccentTextOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof AccentTextOwnProps<T>>;

export default function AccentText<T extends AccentTextTag = "span">({
  children,
  className,
  as,
  ...props
}: AccentTextProps<T>) {
  const Component = (as ?? "span") as AccentTextTag;

  return (
    <Component
      className={cn(
        "font-accent text-[1.2em] leading-none tracking-wide",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
