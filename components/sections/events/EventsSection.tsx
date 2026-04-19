import Link from "next/link";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

import { homeEventItems } from "./events-data";
import HomeEventsAccordion from "./EventsAccordion";
import { Mail } from "lucide-react";

export default function HomeEventsSection() {
  return (
    <Section
      background="cream"
      spacing="lg"
      aria-labelledby="home-events-heading"
    >
      <Container size="wide" padding="default">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
          <div className="max-w-full">
            <Text
              as="p"
              className="text-sm font-medium uppercase tracking-[0.18em] "
            >
              Evenimente & programe
            </Text>

            <Heading as="h2" size="h2" className="mt-4 max-w-4xl">
              Spații create pentru vindecare, claritate și reconectare
            </Heading>

            <Text className="mt-5 max-w-[58ch] text-base leading-7 text-muted-foreground">
              Workshopuri, programe de grup și ateliere experiențiale gândite
              pentru oameni care își doresc mai multă înțelegere, siguranță
              emoțională și instrumente reale de transformare.
            </Text>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button variant="urgent">
                <Link href="/evenimente">Vezi toate evenimentele</Link>
              </Button>

              <Button
                variant="outline"
                leftIcon={<Mail size={16} strokeWidth={1.75} />}
              >
                <Link href="/contact">Inscrie-te aici</Link>
              </Button>
            </div>
          </div>

          <HomeEventsAccordion items={homeEventItems} />
        </div>
      </Container>
    </Section>
  );
}
