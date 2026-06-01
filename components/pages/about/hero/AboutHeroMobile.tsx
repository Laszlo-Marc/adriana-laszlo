// components/pages/about/hero/AboutHeroMobile.tsx

import Image from "next/image";
import Link from "next/link";

import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import AccentText from "@/components/ui/AccentText";

import { aboutHeroContent } from "./data";

export default function AboutHeroMobile() {
  return (
    <Section
      background="cream"
      spacing="none"
      aria-labelledby="about-hero-mobile-heading"
      className="relative overflow-hidden lg:hidden"
    >
      <div className="relative">
        <div className="relative h-125 overflow-hidden">
          <Image
            src={aboutHeroContent.mobileImage.src}
            alt={aboutHeroContent.mobileImage.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_18%]"
          />

          {/* bottom fade into content */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-cream via-cream/90 to-transparent"
          />

          {/* subtle brand glow */}
          <div
            aria-hidden="true"
            className="absolute -bottom-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-teal/20 blur-3xl"
          />
        </div>

        <div className="relative z-10 -mt-20 px-4 pb-12">
          <div className="mx-auto max-w-md text-center">
            <AccentText>{aboutHeroContent.eyebrow}</AccentText>

            <Heading
              id="about-hero-mobile-heading"
              as="h1"
              size="h3"
              align="center"
              className="mt-4"
            >
              Psihoterapeut specializat în traumă și{" "}
              <span className="text-teal">
                {aboutHeroContent.highlightedTitle}
              </span>
            </Heading>

            <Text size="base" align="center" className="mt-6 text-charcoal/75">
              {aboutHeroContent.description}
            </Text>

            <div className="mt-7 flex flex-col gap-3">
              <Button>
                <Link href={aboutHeroContent.primaryCta.href}>
                  {aboutHeroContent.primaryCta.label}
                </Link>
              </Button>

              <Button variant="outline">
                <Link href={aboutHeroContent.secondaryCta.href}>
                  {aboutHeroContent.secondaryCta.label}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
