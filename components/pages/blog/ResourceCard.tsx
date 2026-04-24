import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";

import { cn } from "@/lib/utils";

type ResourceCardProps = {
  title: string;
  description: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
  downloadHref: string;
  className?: string;
};

export default function ResourceCard({
  title,
  description,
  category,
  imageSrc,
  imageAlt,
  downloadHref,
  className,
}: ResourceCardProps) {
  return (
    <article
      className={cn(
        "group overflow-hidden rounded-[1.75rem] border border-purple/15 bg-cream shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md",
        className,
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-purple/10">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        />

        <div className="absolute right-4 top-4 rounded-full bg-purple px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-sm">
          {category}
        </div>
      </div>

      <div className="space-y-4 p-6 sm:p-7">
        <div className="space-y-2">
          <h2 className="font-display text-xl leading-snug text-purple sm:text-2xl">
            {title}
          </h2>

          <p className="text-sm leading-relaxed text-charcoal/70">
            {description}
          </p>
        </div>

        <Link
          href={downloadHref}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/40"
        >
          <Download className="size-4" />
          Descarcă gratuit
        </Link>
      </div>
    </article>
  );
}
