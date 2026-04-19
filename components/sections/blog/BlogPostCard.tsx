import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

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
};

export default function BlogPostCard({ post, className }: BlogPostCardProps) {
  return (
    <article
      className={cn(
        "group h-full overflow-hidden rounded-[28px] border border-border/60 bg-cream transition-all duration-300",
        "hover:-translate-y-1 hover:border-charcoal/15 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)]",
        className,
      )}
    >
      <Link
        href={post.slug}
        className="flex h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/40 focus-visible:ring-offset-2"
        aria-label={`Citește articolul: ${post.title}`}
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.image.src}
            alt={post.image.alt}
            fill
            sizes="(max-width: 767px) 88vw, (max-width: 1023px) 44vw, 30vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-medium uppercase tracking-[0.16em] text-charcoal/60">
            <span>{post.category}</span>
          </div>

          <h3 className="text-lg font-semibold leading-snug text-charcoal sm:text-[1.35rem]">
            {post.title}
          </h3>

          <p className="mt-3 flex-1 text-sm leading-7 text-charcoal/72 sm:text-[0.98rem]">
            {post.excerpt}
          </p>

          <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-charcoal">
            <Button
              variant="urgent"
              size="sm"
              rightIcon={<ArrowRight className="h-4 w-4" />}
            >
              Citeste articolul
            </Button>
          </div>
        </div>
      </Link>
    </article>
  );
}
