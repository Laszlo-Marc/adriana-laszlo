import Image from "next/image";

import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import AccentText from "@/components/ui/AccentText";

import { afEmdrContent } from "./afEmdrContent";

export default function AfEmdrDesktop() {
  return (
    <div className="relative hidden lg:block">
      <div className="grid grid-cols-[1fr_1fr]">
        <div className="relative flex items-center pl-20">
          <div className="relative z-10 max-w-3xl">
            <AccentText>{afEmdrContent.eyebrow}</AccentText>

            <Heading as="h2" size="h2" className="mt-4">
              {afEmdrContent.title}
            </Heading>

            <div className="mt-8 space-y-5">
              {afEmdrContent.body.map((paragraph) => (
                <Text key={paragraph} size="lg" className="text-charcoal/76">
                  {paragraph}
                </Text>
              ))}
            </div>

            <div className="mt-10 flex gap-3">
              <Button href={afEmdrContent.primaryCta.href}>
                {afEmdrContent.primaryCta.label}
              </Button>

              <Button href={afEmdrContent.secondaryCta.href} variant="outline">
                {afEmdrContent.secondaryCta.label}
              </Button>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative w-full">
            <div
              aria-hidden="true"
              className="absolute bottom-0 right-0 h-75 w-full rounded-none bg-purple-soft/85"
            />

            <Image
              src="/backgrounds/dragonfly.png"
              alt=""
              width={300}
              height={260}
              sizes="300px"
              aria-hidden="true"
              className="pointer-events-none absolute bottom-14 right-0 z-10 h-auto w-75 object-contain opacity-45"
            />

            <div className="relative left-30 -top-20 z-20 w-[58%]">
              <div className="relative overflow-hidden rounded-sm shadow-[0_28px_70px_rgba(44,44,44,0.16)]">
                <Image
                  src={afEmdrContent.image.src}
                  alt={afEmdrContent.image.alt}
                  width={820}
                  height={500}
                  sizes="(max-width: 1023px) 1px, (min-width: 1280px) 26vw, 30vw"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
