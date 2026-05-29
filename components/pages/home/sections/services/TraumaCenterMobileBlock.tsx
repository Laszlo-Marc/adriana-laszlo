import Image from "next/image";

import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import AccentText from "@/components/ui/AccentText";
import type { ServiceItem } from "./types";

type TraumaCenterMobileBlockProps = {
  service?: ServiceItem;
};

export default function TraumaCenterMobileBlock({
  service,
}: TraumaCenterMobileBlockProps) {
  if (!service) return null;

  return (
    <section className="relative mt-10 min-h-svh overflow-hidden bg-cream lg:hidden">
      {/* Background image */}
      <Image
        src={service.image.src}
        alt={service.image.alt}
        fill
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Very light cream wash - keep image visible */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cream/8"
      />

      {/* Top fade into previous cream section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-1 h-20 bg-gradient-to-b from-cream via-cream/82 to-transparent"
      />

      {/* Bottom fade into next cream section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-1 h-26 bg-gradient-to-b from-transparent via-cream/78 to-cream"
      />

      {/* Slight vignette so the image has depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,250,242,0.48)_0%,rgba(255,250,242,0.28)_36%,rgba(255,250,242,0.08)_62%,rgba(255,250,242,0)_100%)]"
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-svh items-center px-6 py-24">
        <div className="mx-auto w-full max-w-sm text-center">
          <div className="mx-auto mb-9 flex justify-center">
            <Image
              src="/home-page/tc-banner.svg"
              alt="Trauma Center"
              width={220}
              height={54}
              sizes="220px"
              className="h-auto w-44"
            />
          </div>

          <Heading
            as="h3"
            size="h1"
            color="charcoal"
            align="center"
            case="upper"
            className="mx-auto max-w-sm text-balance leading-[1.02]"
          >
            Evenimente și workshopuri
          </Heading>

          <Text
            as="p"
            size="lg"
            color="charcoal"
            align="center"
            className=" mt-6  text-pretty leading-7"
          >
            Prin Trauma Center, Adriana coordonează programe, workshopuri și
            experiențe dedicate reglării emoționale, lucrului cu trauma și
            reconectării într-un cadru sigur.
          </Text>

          <div className="mt-12 grid gap-3">
            <Button href="/evenimente" size="lg" className="w-full">
              Vezi toate evenimentele
            </Button>

            <Button href="/trauma-center" variant="purple" size="lg">
              Descoperă Trauma Center
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
