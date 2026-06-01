"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import BlogPostImageCard from "./BlogPostImageCard";
import type { BlogPostCard } from "./blogPostsContent";

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

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

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

      <div className="mt-8 flex items-center justify-end gap-4">
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={scrollPrev}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-charcoal shadow-sm transition hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-cream"
            aria-label="Articolul anterior"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={scrollNext}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-charcoal text-white shadow-sm transition hover:bg-charcoal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-cream"
            aria-label="Articolul următor"
          >
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
