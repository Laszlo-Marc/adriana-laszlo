import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type BlogPostCardProps = {
  post: {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    readTime: string;
    publishedAt: string;
    image: {
      src: string;
      alt: string;
    };
  };
  className?: string;
  variant?: "default" | "featured" | "compact";
};

export default function BlogPostCard({
  post,
  className,
  variant = "default",
}: BlogPostCardProps) {
  const isFeatured = variant === "featured";
  const isCompact = variant === "compact";

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-[30px] border border-border/60 bg-cream transition-all duration-300",
        "hover:-translate-y-1 hover:border-charcoal/15 hover:shadow-[0_18px_46px_rgba(0,0,0,0.06)]",
        className,
      )}
    >
      <Link
        href={post.slug}
        className="flex h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/40 focus-visible:ring-offset-2"
        aria-label={`Citește articolul: ${post.title}`}
      >
        <div
          className={cn(
            "relative overflow-hidden",
            isFeatured ? "aspect-[16/11] sm:aspect-[16/10]" : "aspect-[16/10]",
            isCompact && "lg:aspect-[16/8.5]",
          )}
        >
          <Image
            src={post.image.src}
            alt={post.image.alt}
            fill
            sizes={
              isFeatured
                ? "(max-width: 1023px) 88vw, 58vw"
                : "(max-width: 767px) 88vw, (max-width: 1023px) 44vw, 30vw"
            }
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/8 to-transparent" />

          {isFeatured && (
            <>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/35 to-transparent" />
              <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/12 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                Articol recomandat
              </div>
            </>
          )}
        </div>

        <div
          className={cn(
            "flex flex-1 flex-col",
            isFeatured ? "p-6 sm:p-7" : "p-5 sm:p-6",
            isCompact && "lg:p-5",
          )}
        >
          <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-medium uppercase tracking-[0.16em] text-charcoal/55">
            <span className="rounded-full bg-sand px-3 py-1 text-charcoal/72">
              {post.category}
            </span>
            <span>{post.readTime}</span>
            <span
              className="h-1 w-1 rounded-full bg-charcoal/30"
              aria-hidden="true"
            />
            <time dateTime={post.publishedAt}>{post.publishedAt}</time>
          </div>

          <h3
            className={cn(
              "text-charcoal",
              isFeatured
                ? "text-[1.55rem] font-semibold leading-[1.2] sm:text-[1.8rem]"
                : "text-lg font-semibold leading-snug sm:text-[1.32rem]",
              isCompact && "lg:text-[1.2rem]",
            )}
          >
            {post.title}
          </h3>

          <p
            className={cn(
              "mt-3 flex-1 text-charcoal/72",
              isFeatured
                ? "text-[0.98rem] leading-7 sm:text-[1.02rem]"
                : "text-sm leading-7 sm:text-[0.98rem]",
              isCompact && "lg:text-[0.95rem] lg:leading-7",
            )}
          >
            {post.excerpt}
          </p>

          <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-charcoal">
            <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-charcoal/40 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
              Citește articolul
            </span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </article>
  );
}
