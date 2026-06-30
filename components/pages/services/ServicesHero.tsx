import { ArrowDown } from "lucide-react";

import BackgroundVideo from "@/components/ui/BackgroundVideo";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Reveal from "@/components/ui/Reveal";
import Text from "@/components/ui/Text";
import { cn } from "@/lib/utils";

const bookingHref = "/contact";
const servicesListHref = "#servicii-intro";

export default function ServicesHero() {
  return (
    <section
      id="servicii"
      aria-labelledby="services-hero-heading"
      className="relative isolate min-h-svh overflow-hidden bg-charcoal text-cream"
    >
      <BackgroundVideo
        src="/services/services-hero-desktop.mp4"
        mobileSrc="/services/services-hero-mobile.mp4"
        posterSrc="/services/services-hero-poster.jpg"
        priority
        fetchPriority="high"
        sizes="100vw"
        objectPosition="center center"
        className="-z-30"
        decorative
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-charcoal/42"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_42%,rgba(255,250,242,0.20),rgba(44,44,44,0.24)_38%,rgba(44,44,44,0.74)_100%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 z-0 w-[72vw] bg-linear-to-r from-charcoal/68 via-charcoal/38 to-transparent"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 z-0 h-[34svh] bg-linear-to-t from-cream via-cream/38 to-transparent"
      />

      <Container
        size="full"
        padding="lg"
        className="relative z-10 min-h-svh pb-28 pt-28 md:pb-0 md:pt-0"
      >
        <div className="relative flex min-h-[calc(100svh-7rem)] flex-col justify-center md:min-h-svh md:block">
          <div className="max-w-5xl md:absolute md:left-0 md:top-[47%] md:-translate-y-1/2 lg:max-w-6xl">
            <Reveal preset="fade-down">
              <Heading
                as="h5"
                size="eyebrow"
                color="cream"
                className="mb-5 text-cream/78"
              >
                Servicii de psihoterapie în Cluj-Napoca
              </Heading>
            </Reveal>

            <Reveal delay="sm">
              <Heading
                id="services-hero-heading"
                as="h1"
                size="display"
                color="cream"
                className="max-w-5xl text-balance"
              >
                <span className="hidden lg:block">
                  Psihoterapie pentru traumă, relații și reglare emoțională.
                </span>

                <span className="block lg:hidden">Psihoterapia traumei</span>
              </Heading>
            </Reveal>

            <Reveal preset="fade-in" delay="md">
              <div className="mt-7 h-px w-32 bg-cream/60 md:mt-9 md:w-44" />
            </Reveal>
          </div>

          <Reveal
            delay="lg"
            className="mt-10 max-w-xl md:absolute md:bottom-[15svh] md:right-0 md:mt-0 lg:max-w-136"
          >
            <Text
              size="xl"
              color="cream"
              className="text-cream/86 md:text-right"
            >
              Un spațiu terapeutic în care poți lucra cu experiențe dificile,
              anxietate, atașament, blocaje emoționale și traume către o
              schimbare reală.
            </Text>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row md:justify-end">
              <Button
                href={bookingHref}
                variant="cream"
                size="lg"
                className="shrink-0 whitespace-nowrap"
              >
                Programează o discuție
              </Button>

              <Button
                href={servicesListHref}
                variant="outline"
                size="lg"
                className="border-cream/38 bg-cream/10 text-cream backdrop-blur-md hover:border-cream/65 hover:bg-cream/18"
              >
                Vezi serviciile
              </Button>
            </div>
          </Reveal>

          <Reveal preset="scale-in" delay="xl">
            <a
              href={servicesListHref}
              aria-label="Mergi la lista de servicii"
              className={cn(
                "group absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:flex",
                "size-28 items-center justify-center rounded-full",
                "border border-cream/50 bg-cream/14 text-teal",
                "shadow-[0_18px_48px_rgba(44,44,44,0.24)] backdrop-blur-md",
                "transition duration-300 hover:border-cream/80 hover:bg-cream/24 hover:text-teal",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/60 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent",
              )}
            >
              <ArrowDown
                className="size-8 transition duration-300 motion-safe:animate-hero-arrow group-hover:translate-y-1 group-hover:scale-110"
                aria-hidden="true"
              />
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
