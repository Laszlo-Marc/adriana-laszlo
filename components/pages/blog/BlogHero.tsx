import Image from "next/image";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import AccentText from "@/components/ui/AccentText";

export default function BlogHero() {
  return (
    <Section
      background="cream"
      spacing="none"
      aria-labelledby="blog-hero-heading"
      className="relative overflow-hidden"
    >
      <div className="relative min-h-[65svh] overflow-hidden lg:min-h-[78svh]">
        <Image
          src="/blogs/blog-mobile.jpg"
          alt="Spațiu calm de reflecție, cu lumină naturală"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center md:object-right"
        />

        <div aria-hidden="true" className="absolute inset-0 bg-cream/50" />

        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-[50%] bg-linear-to-t from-cream/82 via-cream/42 to-transparent"
        />

        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-b from-transparent to-cream"
        />

        <Container
          size="wide"
          padding="default"
          className="relative z-10 flex min-h-[65svh] items-center justify-center pb-16 pt-20 lg:min-h-[78svh] lg:pb-20"
        >
          <div className="mx-auto max-w-4xl mt-20 text-center">
            <Heading
              id="blog-hero-heading"
              as="h1"
              size="display"
              align="center"
              className="text-balance text-[4rem]"
            >
              ARTICOLE & RESURSE
            </Heading>
          </div>
        </Container>
      </div>
    </Section>
  );
}
