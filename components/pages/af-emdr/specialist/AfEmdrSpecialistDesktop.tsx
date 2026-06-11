import Image from "next/image";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

import { afEmdrSpecialistContent } from "../afEmdrContent";

export default function AfEmdrSpecialistDesktop() {
  const { title, description, images, testimonial, cta, secondaryCta } =
    afEmdrSpecialistContent;

  return (
    <div className="relative hidden lg:block">
      <Container size="wider" padding="default">
        <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-20 xl:gap-24">
          <div className="relative min-h-168">
            <div className="relative h-168 overflow-hidden">
              <Image
                src={images.atmosphere.src}
                alt={images.atmosphere.alt}
                fill
                sizes="(max-width: 1023px) 1px, (min-width: 1280px) 58vw, 62vw"
                className="object-cover object-center"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-cream/10"
              />

              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-cream/45 to-transparent"
              />
            </div>

            <div className="absolute -right-10 bottom-16 w-[58%] max-w-84 overflow-hidden rounded-xl shadow-[0_24px_80px_rgba(44,44,44,0.18)]">
              <div className="relative aspect-3/4">
                <Image
                  src={images.portrait.src}
                  alt={images.portrait.alt}
                  fill
                  sizes="(max-width: 1023px) 1px, 21rem"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div
              aria-hidden="true"
              className="absolute bottom-20 right-[38%] flex size-24 items-center justify-center rounded-full bg-cream text-5xl font-semibold text-charcoal shadow-[0_18px_50px_rgba(44,44,44,0.08)]"
            >
              <span className="font-accent text-teal">A</span>
            </div>
          </div>

          <div className="lg:pl-6">
            <Heading
              as="h2"
              size="h3"
              className="mt-5 text-balance text-charcoal"
            >
              {title}
            </Heading>

            <Text className="mt-7 max-w-lg text-pretty text-charcoal/70">
              {description}
            </Text>

            <blockquote className="mt-8 rounded-[1.75rem] border border-gold/20 bg-sand/20 p-6 text-center shadow-[0_18px_55px_rgba(44,44,44,0.04)]">
              <p className="text-pretty text-base font-medium leading-relaxed text-charcoal">
                „{testimonial.quote}”
              </p>

              <footer className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal/40">
                {testimonial.author}
              </footer>
            </blockquote>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={cta.href} variant="primary">
                {cta.label}
              </Button>

              <Button href={secondaryCta.href} variant="outline">
                {secondaryCta.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
