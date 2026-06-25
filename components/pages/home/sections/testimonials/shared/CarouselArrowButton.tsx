"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

type CarouselArrowButtonProps = {
  direction: "previous" | "next";
  size: "mobile" | "desktop";
  onClick: () => void;
};

export default function CarouselArrowButton({
  direction,
  size,
  onClick,
}: CarouselArrowButtonProps) {
  const Icon = direction === "previous" ? ChevronLeft : ChevronRight;

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center rounded-full border",
        "border-charcoal/10 bg-white text-charcoal transition-[background-color,border-color,color] motion-reduce:transition-none",
        "hover:border-teal/20 hover:bg-teal hover:text-white",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/40 focus-visible:ring-offset-2",
        size === "mobile" ? "h-11 w-11" : "h-12 w-12",
      )}
      aria-label={
        direction === "previous"
          ? "Testimonial anterior"
          : "Testimonial următor"
      }
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
