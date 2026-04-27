import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import AccentText from "@/components/ui/AccentText";
import Button from "@/components/ui/Button";

export default function ServicesHero() {
  return (
    <Section
      background="cream"
      spacing="lg"
      aria-labelledby="services-hero-heading"
      className="mt-20 overflow-hidden block"
      backgroundImage={{
        src: "/backgrounds/nature-bg.jpg",
        priority: true,
        overlayClassName: "bg-cream/65",
      }}
    >
      <Image
        src="/backgrounds/double-df.png"
        alt=""
        width={420}
        height={420}
        aria-hidden="true"
        priority
        className="pointer-events-none absolute left-24 -top-20 hidden w-60 opacity-[0.6] lg:block"
      />
      <Image
        src="/backgrounds/double-df.png"
        alt=""
        width={420}
        height={420}
        aria-hidden="true"
        priority
        className="pointer-events-none absolute right-24 -top-20 hidden w-60 opacity-[0.6] rotate-180 lg:block"
      />

      <Image
        src="/backgrounds/df-purple-down.png"
        alt=""
        width={180}
        height={180}
        aria-hidden="true"
        className="pointer-events-none absolute left-80 top-10 hidden w-24 rotate-12 opacity-[0.6] lg:block"
      />

      <Container size="wide" className="relative z-10">
        <div className="mx-auto flex  flex-col items-center text-center">
          <AccentText className="text-8xl">Servicii de psihoterapie</AccentText>

          <Text
            className="mt-6 max-w-4xl text-charcoal/75"
            align="center"
            size="xl"
          >
            Psihoterapia poate deveni un spațiu sigur
          </Text>

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
            <Button variant="primary" size="lg" leftIcon={<Mail />}>
              <Link href="/contact">Programează o discuție</Link>
            </Button>
            <Button variant="purple" size="lg" rightIcon={<ArrowRight />}>
              <Link href="#af-emdr">Află despre AF-EMDR</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
