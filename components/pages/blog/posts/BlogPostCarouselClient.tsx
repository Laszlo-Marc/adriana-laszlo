"use client";

import type { ReactNode } from "react";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import BlogPostImageCard from "./BlogPostImageCard";
import type { BlogPostCard } from "../post-page/blogPosts";
import { cn } from "@/lib/utils";

type BlogPostsCarouselClientProps = {
  posts: BlogPostCard[];
};

export default function BlogPostsCarouselClient({
  posts,
}: BlogPostsCarouselClientProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(posts.length > 1);

  const updateScrollButtons = useCallback(() => {
    if (!emblaApi) return;

    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("init", updateScrollButtons);
    emblaApi.on("select", updateScrollButtons);
    emblaApi.on("reInit", updateScrollButtons);

    queueMicrotask(updateScrollButtons);

    return () => {
      emblaApi.off("init", updateScrollButtons);
      emblaApi.off("select", updateScrollButtons);
      emblaApi.off("reInit", updateScrollButtons);
    };
  }, [emblaApi, updateScrollButtons]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi || !canScrollPrev) return;
    emblaApi.scrollPrev();
  }, [canScrollPrev, emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi || !canScrollNext) return;
    emblaApi.scrollNext();
  }, [canScrollNext, emblaApi]);

  if (!posts.length) return null;

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="-ml-4 flex touch-pan-y sm:-ml-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="min-w-0 flex-[0_0_86%] pl-4 sm:flex-[0_0_56%] sm:pl-6 lg:flex-[0_0_38%] xl:flex-[0_0_32%]"
            >
              <BlogPostImageCard post={post} />
            </div>
          ))}
        </div>
      </div>

      {posts.length > 1 ? (
        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="flex shrink-0 items-center gap-3">
            <CarouselButton
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              label="Articolul anterior"
              variant="light"
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            </CarouselButton>

            <CarouselButton
              onClick={scrollNext}
              disabled={!canScrollNext}
              label="Articolul următor"
              variant="dark"
            >
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </CarouselButton>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function CarouselButton({
  children,
  onClick,
  disabled,
  label,
  variant,
}: {
  children: ReactNode;
  onClick: () => void;
  disabled: boolean;
  label: string;
  variant: "light" | "dark";
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-full border shadow-sm",
        "transition-[background-color,border-color,color,opacity] duration-300 motion-reduce:transition-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-cream",
        disabled && "cursor-not-allowed opacity-35",
        variant === "light"
          ? "border-border bg-white text-charcoal hover:bg-surface"
          : "border-charcoal bg-charcoal text-white hover:bg-charcoal/90",
      )}
    >
      {children}
    </button>
  );
}
