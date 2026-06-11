import Image from "next/image";
import { Quote } from "lucide-react";

import Text from "@/components/ui/Text";
import { cn } from "@/lib/utils";

export type TestimonialItem = {
  id: string;
  quote: string;
  name: string;
  role?: string;
  imageSrc: string;
  imageAlt?: string;
};

type TestimonialContentProps = {
  item: TestimonialItem;
};

export function TestimonialContent({ item }: TestimonialContentProps) {
  return (
    <>
      <div className="mb-5 flex items-center gap-4">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-charcoal/10 bg-sand/30">
          <Image
            src={item.imageSrc}
            alt={item.imageAlt ?? item.name}
            width={100}
            height={100}
            sizes="64px"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="min-w-0">
          <Text
            as="p"
            size="lg"
            color="charcoal"
            weight="medium"
            className="font-display leading-tight"
          >
            {item.name}
          </Text>
        </div>
      </div>

      <Quote className="mb-4 h-5 w-5 text-teal/70" aria-hidden="true" />

      <blockquote className="pr-2 text-[15px] leading-7 text-charcoal sm:text-base">
        “{item.quote}”
      </blockquote>

      <div
        className={cn(
          "pointer-events-none absolute right-0 top-0 h-14 w-14 rounded-bl-2xl border-b border-l",
          "border-teal/15 bg-teal/5",
        )}
        aria-hidden="true"
      />
    </>
  );
}
