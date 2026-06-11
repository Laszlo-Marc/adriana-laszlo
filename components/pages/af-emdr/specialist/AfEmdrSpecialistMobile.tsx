import Image from "next/image";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import { MarqueeAnimation } from "@/components/ui/MarqueeAnimation";

import { afEmdrSpecialistContent } from "../afEmdrContent";

export default function AfEmdrSpecialistMobile() {
  const { title, description, images, credentials, testimonial, cta } =
    afEmdrSpecialistContent;

  return (
    <div className="relative overflow-hidden lg:hidden">
      <Container padding="default">
        <div className="relative">
          <div className="relative aspect-4/5 overflow-hidden">
            <Image
              src={images.atmosphere.src}
              alt={images.atmosphere.alt}
              fill
              sizes="(max-width: 1023px) 100vw, 1px"
              className="object-cover object-center"
            />

            <div aria-hidden="true" className="absolute inset-0 bg-cream/10" />

            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-cream/45 to-transparent"
            />
          </div>

          <div className="absolute bottom-4 right-4 w-[52%] max-w-60 overflow-hidden rounded-xl shadow-[0_20px_60px_rgba(44,44,44,0.16)]">
            <div className="relative aspect-3/4">
              <Image
                src={images.portrait.src}
                alt={images.portrait.alt}
                fill
                sizes="(max-width: 1023px) 52vw, 1px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        <div className="mt-9 text-center">
          <Heading
            as="h2"
            size="h3"
            align="center"
            className="mx-auto mt-4 max-w-sm text-balance text-charcoal"
          >
            {title}
          </Heading>

          <Text
            align="center"
            className="mx-auto mt-5 max-w-sm text-pretty text-charcoal/70"
          >
            {description}
          </Text>
        </div>
      </Container>

      <div className="mt-8 border-y border-charcoal/10 py-3">
        <MarqueeAnimation className="text-charcoal/55">
          {credentials.map((credential) => (
            <span
              key={credential}
              className="flex items-center gap-6 text-sm font-semibold uppercase tracking-[0.22em]"
            >
              {credential}
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-gold/70"
              />
            </span>
          ))}
        </MarqueeAnimation>
      </div>

      <Container padding="default">
        <blockquote className="mt-8 rounded-[1.75rem] border border-gold/20 bg-sand/20 p-6 text-center shadow-[0_18px_55px_rgba(44,44,44,0.04)]">
          <p className="text-pretty text-base font-medium leading-relaxed text-charcoal">
            „{testimonial.quote}”
          </p>

          <footer className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal/40">
            {testimonial.author}
          </footer>
        </blockquote>

        <div className="mt-8 flex justify-center">
          <Button href={cta.href} variant="primary">
            {cta.label}
          </Button>
        </div>
      </Container>
    </div>
  );
}
