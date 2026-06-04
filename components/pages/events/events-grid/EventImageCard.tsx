import Image from "next/image";
import { CalendarDays, MapPin, Users } from "lucide-react";

import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import { cn } from "@/lib/utils";
import { OtherEventItem } from "../eventsContent";

const toneStyles: Record<OtherEventItem["tone"], string> = {
  teal: "bg-teal/90 text-charcoal",
  purple: "bg-purple/90 text-charcoal",
  gold: "bg-gold/90 text-charcoal",
};

type EventImageCardProps = {
  item: OtherEventItem;
  index: number;
};

export default function EventImageCard({ item, index }: EventImageCardProps) {
  const isFeatured = index === 0;

  return (
    <article
      className={cn(
        "group relative flex shrink-0 snap-center overflow-hidden rounded-[2rem] border border-white/50 ",
        "h-[31rem] w-[82vw] max-w-[24rem] sm:w-[24rem]",
        isFeatured
          ? "lg:col-span-2 lg:h-[34rem] lg:w-auto lg:max-w-none"
          : "lg:h-[28rem] lg:w-auto lg:max-w-none",
      )}
    >
      <Image
        src={item.imageSrc}
        alt={item.imageAlt}
        fill
        sizes={
          isFeatured
            ? "(min-width: 1024px) 58vw, 82vw"
            : "(min-width: 1024px) 32vw, 82vw"
        }
        className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-charcoal/82 via-charcoal/34 to-transparent"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-charcoal/25 via-transparent to-transparent opacity-80"
      />

      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center p-6 text-center sm:p-7 xl:p-8">
        <span
          className={cn(
            "inline-flex rounded-full px-4 py-2 font-body text-[0.68rem] font-semibold uppercase tracking-[0.18em]",
            toneStyles[item.tone],
          )}
        >
          {item.eyebrow}
        </span>

        <Heading
          as="h3"
          size={isFeatured ? "h3" : "h4"}
          color="cream"
          textCase="none"
          align="center"
          className="mt-5"
        >
          {item.title}
        </Heading>

        <Text
          as="p"
          size="sm"
          color="cream"
          align="center"
          className="mt-4 max-w-md leading-7 text-cream/84"
        >
          {item.description}
        </Text>

        <div className="mt-5 grid w-full max-w-md gap-2 text-left text-xs text-cream/82 sm:grid-cols-3">
          <EventMeta icon={<CalendarDays size={15} />} label={item.dateLabel} />
          <EventMeta icon={<Users size={15} />} label={item.formatLabel} />
          <EventMeta icon={<MapPin size={15} />} label={item.locationLabel} />
        </div>

        <Button href={item.href} variant="cream" className="mt-6" size="sm">
          {item.ctaLabel}
        </Button>
      </div>
    </article>
  );
}

function EventMeta({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center justify-center gap-2 rounded-full border border-white/18 bg-white/10 px-3 py-2 backdrop-blur-sm">
      <span className="shrink-0 text-cream/80">{icon}</span>
      <span className="truncate">{label}</span>
    </div>
  );
}
