import Image from "next/image";
import Link from "next/link";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

import { afEmdrSpecialistContent } from "../afEmdrContent";
import { MarqueeAnimation } from "@/components/ui/MarqueeAnimation";

export default function AfEmdrSpecialistMobile() {
  const { chapter, eyebrow, title, images, credentials, testimonial, cta } =
    afEmdrSpecialistContent;

  return (
    <Section
      aria-labelledby="af-emdr-specialist-title-mobile"
      background="cream"
      spacing="lg"
      className="relative overflow-hidden lg:hidden"
    >
      <Container padding="default">
        {/* Image composition */}
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={images.atmosphere.src}
              alt={images.atmosphere.alt}
              fill
              sizes="100vw"
              className="object-cover object-center"
            />

            <div aria-hidden="true" className="absolute inset-0 bg-cream/10" />

            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-cream/45 to-transparent"
            />
          </div>

          <div className="absolute bottom-4 right-4 w-[52%] max-w-[15rem] overflow-hidden rounded-[0.75rem] shadow-[0_20px_60px_rgba(44,44,44,0.16)]">
            <div className="relative aspect-3/4">
              <Image
                src={images.portrait.src}
                alt={images.portrait.alt}
                fill
                sizes="52vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="mt-9 text-center">
          <Heading
            id="af-emdr-specialist-title-mobile"
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
            Adriana integrează formarea în AF-EMDR cu experiența în lucrul cu
            trauma de atașament, într-un cadru blând, clar și sigur.
          </Text>
        </div>
      </Container>

      {/* Moving credentials strip */}
      <div className="mt-8 border-y border-charcoal/10 py-3">
        <MarqueeAnimation baseVelocity={28} className="text-charcoal/55">
          {credentials.map((credential) => (
            <span
              key={credential}
              className="flex items-center gap-6 text-sm font-semibold uppercase tracking-[0.22em]"
            >
              {credential}
              <span className="size-1.5 rounded-full bg-gold/70" />
            </span>
          ))}
        </MarqueeAnimation>
      </div>

      <Container padding="default">
        {/* Testimonial card */}
        <blockquote className="mt-8 rounded-[1.75rem] border border-gold/20 bg-sand/20 p-6 text-center shadow-[0_18px_55px_rgba(44,44,44,0.04)]">
          <p className="text-pretty text-base font-medium leading-relaxed text-charcoal">
            „{testimonial.quote}”
          </p>

          <footer className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal/40">
            {testimonial.author}
          </footer>
        </blockquote>

        <div className="mt-8 flex justify-center">
          <Button variant="primary">
            <Link href={cta.href}>{cta.label}</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
