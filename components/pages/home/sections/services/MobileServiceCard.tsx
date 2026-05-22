import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import { cn } from "@/lib/utils";
import type { ServiceItem } from "./types";

type MobileServiceCardProps = {
  service: ServiceItem;
};

export default function MobileServiceCard({ service }: MobileServiceCardProps) {
  return (
    <Link
      href={service.href}
      className="group relative h-[21rem] w-[78vw] max-w-[19rem] shrink-0 snap-center overflow-hidden rounded-[2rem] bg-sand/20 "
    >
      <Image
        src={service.image.src}
        alt={service.image.alt}
        fill
        sizes="78vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 bg-gradient-to-t",
          service.accent.overlayInactive,
        )}
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal/70 via-charcoal/30 to-transparent"
      />

      <div className="absolute inset-x-0 bottom-0 z-10 p-5 text-white">
        <span
          className={cn(
            "inline-flex rounded-full px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.16em]",
            service.accent.pillBg,
            service.accent.pillText,
          )}
        >
          {service.label}
        </span>

        <Heading
          as="h3"
          size="h4"
          className="mt-4 max-w-[13rem] text-balance text-white"
        >
          {service.title}
        </Heading>

        <Text size="sm" className="mt-3 leading-6 text-white/84">
          {service.subtitle}
        </Text>

        <div className="mt-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-white">
          Află mai multe
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
