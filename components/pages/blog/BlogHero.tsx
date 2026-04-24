import Image from "next/image";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import AccentText from "@/components/ui/AccentText";

export default function BlogHero() {
  return (
    <Section
      background="cream"
      spacing="lg"
      aria-labelledby="blog-hero-heading"
      className="relative overflow-hidden mt-20"
    >
      {/* Background brand elements */}
      <Image
        src="/backgrounds/single.png"
        alt=""
        width={220}
        height={680}
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-10 hidden h-auto w-40 opacity-35 lg:block"
      />
      <Image
        src="/backgrounds/df-purple-down.png"
        alt=""
        width={260}
        height={260}
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] top-12 hidden h-auto w-32 rotate-12 opacity-45 md:block lg:w-40"
      />
      <Image
        src="/backgrounds/dragonfly.png"
        alt=""
        width={260}
        height={260}
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-12 hidden h-auto w-32 rotate-12 opacity-45 md:block lg:w-40"
      />

      <Image
        src="/backgrounds/double-simple.png"
        alt=""
        width={260}
        height={760}
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-0 hidden h-auto w-44 opacity-30 lg:block"
      />

      <Container size="wide" className="relative" padding="default">
        <div className="mx-auto  text-center">
          <AccentText className="mb-4 block text-purple">
            Resurse pentru claritate și echilibru
          </AccentText>

          <Heading as="h1" size="h1" align="center">
            Articole și resurse gratuite
          </Heading>

          <Text
            className="mx-auto max-w-4xl mt-6 "
            align="center"
            color="muted"
          >
            Ghiduri simple, exerciții practice și materiale create pentru a te
            ajuta să înțelegi mai bine emoțiile, relațiile, trauma și pașii mici
            prin care poți reveni la mai multă siguranță interioară.
          </Text>
        </div>
      </Container>
    </Section>
  );
}
