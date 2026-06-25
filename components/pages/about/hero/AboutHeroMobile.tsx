import Image from "next/image";

import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import AccentText from "@/components/ui/AccentText";
import Reveal from "@/components/ui/Reveal";

import { aboutHeroContent } from "./data";

export default function AboutHeroMobile() {
  return (
    <div className="relative overflow-hidden lg:hidden">
      <div className="relative">
        <div className="relative h-125 overflow-hidden">
          <Reveal preset="fade-in" className="relative h-full">
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
          </Reveal>
        </div>

        <div className="relative z-10 -mt-30 px-4 pb-12">
          <Reveal delay="sm" className="mx-auto max-w-md text-center">
            <AccentText>{aboutHeroContent.eyebrow}</AccentText>

            <Heading as="h1" size="h3" align="center" className="mt-4">
              Psihoterapeut integrativ specializat în traumă și{" "}
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
          </Reveal>
        </div>
      </div>
    </div>
  );
}
