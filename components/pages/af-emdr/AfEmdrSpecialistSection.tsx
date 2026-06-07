import Image from "next/image";
import Link from "next/link";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

import { afEmdrSpecialistContent } from "./afEmdrContent";

export default function AfEmdrSpecialistSection() {
  const {
    chapter,
    eyebrow,
    title,
    description,
    images,
    credentials,
    quote,
    cta,
    secondaryCta,
  } = afEmdrSpecialistContent;

  return (
    <Section
      aria-labelledby="af-emdr-specialist-title"
      background="cream"
      spacing="xl"
      className="relative overflow-hidden"
    >
      <Container size="wider" padding="default">
        <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-20 xl:gap-24">
          {/* Image composition */}
          <div className="relative min-h-[34rem] lg:min-h-[42rem]">
            <div className="relative h-[30rem] overflow-hidden rounded-[1.75rem] sm:h-[36rem] lg:h-[42rem]">
              <Image
                src={images.atmosphere.src}
                alt={images.atmosphere.alt}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover object-center"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-cream/10"
              />

              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-cream/45 to-transparent"
              />
            </div>

            <div className="absolute bottom-8 right-4 w-[58%] max-w-[21rem] overflow-hidden rounded-[0.75rem] shadow-[0_24px_80px_rgba(44,44,44,0.18)] sm:right-10 lg:-right-10 lg:bottom-16">
              <div className="relative aspect-3/4">
                <Image
                  src={images.portrait.src}
                  alt={images.portrait.alt}
                  fill
                  sizes="(min-width: 1024px) 22vw, 58vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div
              aria-hidden="true"
              className="absolute bottom-20 right-[38%] hidden size-24 items-center justify-center rounded-full bg-cream text-5xl font-semibold text-charcoal shadow-[0_18px_50px_rgba(44,44,44,0.08)] lg:flex"
            >
              <span className="font-accent text-gold">A</span>
            </div>
          </div>

          {/* Text */}
          <div className=" lg:pl-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-charcoal/45">
              {chapter}
            </p>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              {eyebrow}
            </p>

            <Heading
              id="af-emdr-specialist-title"
              as="h2"
              size="h3"
              className="mt-5 text-balance text-charcoal"
            >
              {title}
            </Heading>

            <Text className="mt-7 max-w-lg text-pretty text-charcoal/70">
              {description}
            </Text>

            <div className="mt-8 space-y-4 border-y border-charcoal/10 py-6">
              {credentials.map((credential) => (
                <div
                  key={credential}
                  className="flex items-center gap-4 text-sm font-medium uppercase tracking-[0.16em] text-charcoal/58"
                >
                  <span className="h-px w-8 bg-gold/60" />
                  <span>{credential}</span>
                </div>
              ))}
            </div>

            <blockquote className="mt-8">
              <p className="text-pretty text-xl font-medium leading-relaxed text-charcoal">
                „{quote}”
              </p>
            </blockquote>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button variant="primary">
                <Link href={cta.href}>{cta.label}</Link>
              </Button>

              <Button variant="outline">
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
