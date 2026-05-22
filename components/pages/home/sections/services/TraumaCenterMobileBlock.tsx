import Image from "next/image";

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
      {/* soft background panel behind image only */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-14 h-[15rem] w-full bg-purple/18"
      />

      {/* subtle brand continuity */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 top-8 z-10 w-36 opacity-20"
      >
        <Image
          src="/backgrounds/single.png"
          alt=""
          width={700}
          height={1100}
          sizes="144px"
          className="h-auto w-full max-w-none"
        />
      </div>

      {/* image */}
      <div className="relative z-20 mx-auto h-100 overflow-hidden flex flex-col items-center bg-sand/20">
        <Image
          src={service.image.src}
          alt={service.image.alt}
          fill
          sizes="calc(100vw - 3rem)"
          className="object-cover object-center"
        />

        {/* top readability gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-charcoal/78 via-charcoal/34 to-transparent"
        />

        {/* bottom depth only */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-charcoal/30 to-transparent"
        />

        <div className="absolute left-5 right-5 top-5 flex flex-col items-center text-white">
          <Image
            src="/home-page/tc-banner.svg"
            alt="Trauma Center"
            width={180}
            height={44}
            sizes="180px"
            className="h-auto w-40"
          />

          <Heading
            as="h3"
            size="h2"
            className=" text-balance text-white"
            align="center"
          >
            Evenimente și programe de grup
          </Heading>
        </div>
      </div>

      {/* text + buttons outside image, directly on cream */}
      <div className="relative z-20 mx-auto max-w-md px-1 pt-7 text-center">
        <Text size="lg" color="muted" align="center" className="leading-7">
          Prin Trauma Center, Adriana coordonează programe, workshopuri și
          experiențe dedicate reglării emoționale, lucrului cu trauma și
          reconectării într-un cadru sigur.
        </Text>

        <div className="mt-7 grid gap-3">
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
  );
}
