import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type MarqueeAnimationProps = {
  children: ReactNode;
  className?: string;
  trackClassName?: string;
  itemClassName?: string;
  direction?: "left" | "right";
  duration?: number;
};

export function MarqueeAnimation({
  children,
  className,
  trackClassName,
  itemClassName,
  direction = "left",
  duration = 28,
}: MarqueeAnimationProps) {
  return (
    <div className={cn("w-full overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max select-none motion-reduce:animate-none",
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right",
          trackClassName,
        )}
        style={
          {
            "--marquee-duration": `${duration}s`,
          } as React.CSSProperties
        }
      >
        <div className={cn("flex items-center gap-10 pr-10", itemClassName)}>
          {children}
        </div>

        <div
          aria-hidden="true"
          className={cn("flex items-center gap-10 pr-10", itemClassName)}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
