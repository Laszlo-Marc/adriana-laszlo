import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import Heading from "@/components/ui/Heading";

type BlogCardProps = {
  title: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  className?: string;
};

export default function BlogCard({
  title,
  category,
  imageSrc,
  imageAlt,
  href,
  className,
}: BlogCardProps) {
  return (
    <article
      className={cn(
        "group overflow-hidden rounded-[1.75rem] border border-border/60 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md",
        className,
      )}
    >
      <Link href={href} className="block focus-visible:outline-none">
        <div className="relative aspect-[4/3] overflow-hidden bg-sand/30">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />

          <div className="absolute right-4 top-4 rounded-full bg-teal px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-sm">
            {category}
          </div>
        </div>

        <div className="space-y-4 p-6 sm:p-7">
          <Heading
            as="h2"
            size="h4"
            className="transition group-hover:text-purple sm:text-2xl"
            case="normal"
          >
            {title}
          </Heading>

          <div className="inline-flex items-center gap-2 text-sm font-semibold text-purple">
            Citește articolul
            <ArrowRight className="size-4 transition group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </article>
  );
}
