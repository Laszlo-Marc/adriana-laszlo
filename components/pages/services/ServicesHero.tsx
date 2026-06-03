import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import Heading from "@/components/ui/Heading";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";
import AccentText from "@/components/ui/AccentText";
import Button from "@/components/ui/Button";

export default function ServicesHero() {
  return (
    <Section
      id="servicii"
      background="cream"
      spacing="none"
      aria-labelledby="services-hero-heading"
      className="relative block min-h-[72svh] overflow-hidden lg:flex lg:min-h-[80svh] lg:items-center lg:justify-center lg:py-28"
      backgroundImage={{
        src: "/services/servicii-bg.jpg",
        priority: true,
        overlayClassName: "bg-cream/45 lg:bg-cream/35",
      }}
    >
      <Container size="wide" className="relative z-10">
        <div className="mx-auto flex min-h-[72svh] max-w-xl flex-col items-center justify-center px-1 py-16 text-center lg:min-h-0 lg:max-w-none lg:py-0">
          <Heading id="services-hero-heading" as="h1" align="center" size="h1">
            <AccentText className="max-w-[20rem] text-[4.6rem] leading-[0.9] text-charcoal sm:max-w-2xl sm:text-8xl lg:max-w-none lg:text-8xl">
              Servicii de psihoterapie
            </AccentText>
          </Heading>

          <Text
            className="mt-7 max-w-xs text-charcoal/75 sm:max-w-xl lg:mt-6 lg:max-w-4xl"
            align="center"
            size="xl"
          >
            Psihoterapia poate deveni un spațiu sigur
          </Text>

          <div className="mt-10 flex w-full max-w-xs flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center lg:mt-12 lg:gap-4">
            <Button variant="primary" size="lg" leftIcon={<Mail />}>
              <Link href="/contact">Programează o discuție</Link>
            </Button>

            <Button variant="purple" size="lg">
              <Link href="#af-emdr">Află despre AF-EMDR</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
