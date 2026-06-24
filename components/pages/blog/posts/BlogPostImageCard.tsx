import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { BlogPostCard } from "../post-page/blogPosts";
import Heading from "@/components/ui/Heading";

type BlogPostImageCardProps = {
  post: BlogPostCard;
  sizes?: string;
};

export default function BlogPostImageCard({
  post,
  sizes = "(min-width: 1280px) 32vw, (min-width: 1024px) 38vw, (min-width: 640px) 56vw, 86vw",
}: BlogPostImageCardProps) {
  return (
    <article className="group relative h-104 min-w-0 overflow-hidden rounded-4xl bg-cream sm:h-112">
      <Link
        href={post.href}
        className="block relative h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-cream"
        aria-label={`Citește articolul: ${post.title}`}
      >
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-charcoal/60 via-charcoal/32 to-charcoal/8"
        />

        <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-7">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-cream/92 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-charcoal">
              {post.category}
            </span>

            {post.readingTime ? (
              <span className="rounded-full bg-white/16 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                {post.readingTime}
              </span>
            ) : null}
          </div>

          <Heading
            as="h4"
            size="h4"
            textCase="uppercase"
            color="cream"
            className="max-w-xl"
          >
            {post.title}
          </Heading>

          <p className="mt-4 line-clamp-3 max-w-88 text-sm leading-6 text-white/82">
            {post.excerpt}
          </p>

          <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
            Citește articolul
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
            />
          </div>
        </div>
      </Link>
    </article>
  );
}
