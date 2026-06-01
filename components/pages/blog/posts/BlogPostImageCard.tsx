import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { BlogPostCard } from "./blogPostsContent";

type BlogPostImageCardProps = {
  post: BlogPostCard;
};

export default function BlogPostImageCard({ post }: BlogPostImageCardProps) {
  return (
    <article className="group relative h-[28rem] min-w-0 overflow-hidden rounded-[2rem] bg-charcoal ">
      <Link
        href={post.href}
        className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-cream"
        aria-label={`Citește articolul: ${post.title}`}
      >
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 86vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/42 to-charcoal/8"
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

          <h3 className="max-w-[19rem] text-balance font-display text-2xl leading-tight text-white sm:text-3xl">
            {post.title}
          </h3>

          <p className="mt-4 line-clamp-3 max-w-[22rem] text-sm leading-6 text-white/82">
            {post.excerpt}
          </p>

          <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
            Citește articolul
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </div>
        </div>
      </Link>
    </article>
  );
}
