import Image from "next/image";
import { CalendarDays } from "lucide-react";

import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import type { ServiceItem } from "./types";

type TraumaCenterMobileBlockProps = {
  service?: ServiceItem;
};

export default function TraumaCenterMobileBlock({
  service,
}: TraumaCenterMobileBlockProps) {
  if (!service) return null;

  return (
    <div className="relative mt-14 px-6">
      <div
        aria-hidden="true"
        className="absolute left-0 top-12 h-[16rem] w-full bg-purple/20"
      />

      <div className="relative z-20 overflow-hidden rounded-[2rem] bg-cream shadow-[0_24px_80px_rgba(44,44,44,0.12)]">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={service.image.src}
            alt={service.image.alt}
            fill
            sizes="100vw"
            className="object-cover"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-charcoal/65 via-charcoal/18 to-transparent"
          />

          <div className="absolute bottom-5 left-5 right-5 text-white">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/18 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.16em] backdrop-blur-sm">
              <CalendarDays className="h-3.5 w-3.5" />
              Trauma Center
            </div>

            <Heading as="h3" size="h3" className="mt-4 text-balance text-white">
              Evenimente și programe de grup
            </Heading>
          </div>
        </div>

        <div className="px-5 pb-6 pt-5">
          <Text size="sm" color="muted" className="leading-7">
            Prin Trauma Center, Adriana coordonează programe, workshopuri și
            experiențe dedicate reglării emoționale, lucrului cu trauma și
            reconectării într-un cadru sigur.
          </Text>

          <div className="mt-6 grid gap-3">
            <Button href="/evenimente" size="lg" className="w-full">
              Vezi toate evenimentele
            </Button>

            <Button
              href="/trauma-center"
              variant="outline"
              size="lg"
              className="w-full bg-cream/70"
            >
              Descoperă Trauma Center
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
