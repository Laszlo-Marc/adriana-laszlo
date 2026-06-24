import Image from "next/image";

import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

import { afEmdrContent } from "./afEmdrContent";

export default function AfEmdrMobile() {
  return (
    <div className="relative overflow-hidden lg:hidden  pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-10 top-90 z-20 w-30 opacity-30"
      >
        <Image
          src="/backgrounds/df-purple-down.png"
          alt=""
          width={48}
          height={48}
          sizes="120px"
          className="h-auto w-full object-contain"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-40 left-10 z-20 w-30 opacity-30"
      >
        <Image
          src="/backgrounds/df-teal-down.png"
          alt=""
          width={48}
          height={48}
          sizes="120px"
          className="h-auto w-full object-contain"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-50 z-0 w-80 -translate-x-1/2 opacity-30"
      >
        <Image
          src="/backgrounds/double-split.png"
          alt=""
          width={160}
          height={500}
          sizes="320px"
          className="h-auto w-full object-contain"
        />
      </div>

      <div className="relative">
        <div className="relative mx-auto max-w-md">
          <div className="relative h-50">
            <div
              aria-hidden="true"
              className="absolute top-0 h-40 w-full bg-purple-soft/85"
            />

            <Image
              src="/backgrounds/dragonfly.png"
              alt=""
              width={220}
              height={220}
              sizes="140px"
              aria-hidden="true"
              className="pointer-events-none absolute right-1 top-7 z-10 h-auto w-35 opacity-35"
            />

            <div className="relative z-20 mx-auto w-[80%] pt-10">
              <div className="relative overflow-hidden shadow-[0_24px_70px_rgba(44,44,44,0.12)]">
                <Image
                  src={afEmdrContent.image.src}
                  alt={afEmdrContent.image.alt}
                  width={680}
                  height={520}
                  sizes="(max-width: 1023px) 80vw, 1px"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="relative z-20 mt-20 px-6 text-center">
            <Heading
              as="h2"
              size="h3"
              textCase="uppercase"
              align="center"
              className="mt-4"
            >
              {afEmdrContent.title}
            </Heading>

            <div className="mt-7 space-y-5">
              {afEmdrContent.body.map((paragraph) => (
                <Text
                  key={paragraph}
                  className="text-charcoal/76"
                  align="center"
                >
                  {paragraph}
                </Text>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <Button href={afEmdrContent.primaryCta.href}>
                {afEmdrContent.primaryCta.label}
              </Button>

              <Button href={afEmdrContent.secondaryCta.href} variant="outline">
                {afEmdrContent.secondaryCta.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
