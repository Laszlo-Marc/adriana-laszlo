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
      className="group relative h-90 w-[78vw] max-w-76 shrink-0 snap-center overflow-hidden rounded-4xl bg-sand/20 "
    >
      <Image
        src={service.image.src}
        alt={service.image.alt}
        fill
        sizes="78vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* brand color wash */}
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 bg-gradient-to-t",
          service.accent.overlayInactive,
        )}
      />

      {/* readability layer */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-charcoal/76 via-charcoal/28 to-charcoal/10"
      />

      {/* top label */}
      <div className="absolute inset-x-0 top-5 z-10 flex justify-center px-5">
        <span
          className={cn(
            "inline-flex rounded-full px-3.5 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] shadow-sm backdrop-blur-sm",
            service.accent.pillBg,
            service.accent.pillText,
          )}
        >
          {service.label}
        </span>
      </div>

      {/* centered content */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center px-5 pb-6 text-center text-white">
        <Heading
          as="h3"
          size="h4"
          className="mx-auto  text-balance  text-white"
          align="center"
        >
          {service.title}
        </Heading>

        <Text
          size="sm"
          className="mx-auto mt-3 max-w-62 text-pretty text-center leading-6 text-white/84"
          align="center"
        >
          {service.subtitle}
        </Text>

        <span
          className={cn(
            "mt-5 inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.14em] shadow-sm transition-transform duration-300 group-hover:scale-[1.03]",
            service.accent.pillBg,
            service.accent.pillText,
          )}
        >
          Află mai multe
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
