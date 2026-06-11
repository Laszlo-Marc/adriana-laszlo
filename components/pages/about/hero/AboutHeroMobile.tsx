import Image from "next/image";

import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import AccentText from "@/components/ui/AccentText";

import { aboutHeroContent } from "./data";

export default function AboutHeroMobile() {
  return (
    <div className="relative overflow-hidden lg:hidden">
      <div className="relative">
        <div className="relative h-125 overflow-hidden">
          <Image
            src={aboutHeroContent.mobileImage.src}
            alt={aboutHeroContent.mobileImage.alt}
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 1023px) 100vw, 1px"
            className="object-cover object-[50%_18%]"
          />

          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-56 bg-linear-to-t from-cream via-cream/90 to-transparent"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-teal/20 blur-3xl"
          />
        </div>

        <div className="relative z-10 -mt-20 px-4 pb-12">
          <div className="mx-auto max-w-md text-center">
            <AccentText>{aboutHeroContent.eyebrow}</AccentText>

            <Heading as="h1" size="h3" align="center" className="mt-4">
              Psihoterapeut specializat în traumă și{" "}
              <span className="text-teal">
                {aboutHeroContent.highlightedTitle}
              </span>
            </Heading>

            <Text size="base" align="center" className="mt-6 text-charcoal/75">
              {aboutHeroContent.description}
            </Text>

            <div className="mt-7 flex flex-col gap-3">
              <Button href={aboutHeroContent.primaryCta.href}>
                {aboutHeroContent.primaryCta.label}
              </Button>

              <Button
                href={aboutHeroContent.secondaryCta.href}
                variant="outline"
              >
                {aboutHeroContent.secondaryCta.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
