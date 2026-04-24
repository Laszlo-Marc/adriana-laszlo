import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";
import Image from "next/image";
type BaseCardProps = {
  item: TestimonialItem;
  priority?: boolean;
};
export type TestimonialItem = {
  id: string;
  quote: string;
  name: string;
  role?: string;
  imageSrc: string;
  imageAlt?: string;
};

export function TestimonialContent({ item, priority = false }: BaseCardProps) {
  return (
    <>
      <div className="mb-5 flex items-center gap-4">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-charcoal/10 bg-sand/30">
          <Image
            src={item.imageSrc}
            alt={item.imageAlt ?? item.name}
            className="h-full w-full object-cover"
            loading={priority ? "eager" : "lazy"}
            width={100}
            height={100}
          />
        </div>

        <div className="min-w-0">
          <p className="font-heading text-lg leading-tight text-charcoal">
            {item.name}
          </p>
          {item.role ? (
            <p className="mt-1 text-sm leading-snug text-charcoal/70">
              {item.role}
            </p>
          ) : null}
        </div>
      </div>

      <Quote className="mb-4 h-5 w-5 text-teal/70" aria-hidden="true" />

      <blockquote className="pr-2 text-[15px] leading-7 text-charcoal sm:text-base">
        “{item.quote}”
      </blockquote>

      <div
        className={cn(
          "pointer-events-none absolute right-0 top-0 h-14 w-14 rounded-bl-2xl border-l border-b",
          "border-teal/15 bg-teal/5",
        )}
        aria-hidden="true"
      />
    </>
  );
}
