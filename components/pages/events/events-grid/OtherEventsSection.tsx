import Link from "next/link";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

import EventImageCard from "./EventImageCard";
import type { OtherEventItem } from "../eventsContent";

type OtherEventsSectionProps = {
  events: OtherEventItem[];
};

export default function OtherEventsSection({
  events,
}: OtherEventsSectionProps) {
  const hasEvents = events.length > 0;

  return (
    <Section
      id="evenimente"
      background="cream"
      spacing="sm"
      aria-labelledby="other-events-title"
      className="relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-24 h-96 w-96 rounded-full bg-purple/14 blur-3xl"
      />

      <Container size="wide" padding="lg" className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <Text
            as="p"
            size="sm"
            weight="medium"
            transform="upper"
            color="gold"
            align="center"
            className="tracking-[0.28em]"
          >
            Alte programe și ateliere
          </Text>

          <Heading
            id="other-events-title"
            as="h2"
            size="h2"
            align="center"
            className="mt-5 text-charcoal"
          >
            Workshopuri & ateliere tematice
          </Heading>
        </div>

        {hasEvents ? (
          <>
            <div className="-mx-4 mt-12 flex snap-x gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:hidden [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {events.map((event, index) => (
                <EventImageCard key={event.slug} item={event} index={index} />
              ))}
            </div>

            <div className="mt-14 hidden grid-cols-2 gap-6 lg:grid">
              {events.map((event, index) => (
                <EventImageCard key={event.slug} item={event} index={index} />
              ))}
            </div>
          </>
        ) : (
          <div className="mx-auto mt-12 max-w-3xl">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/55 px-6 py-10 text-center shadow-sm backdrop-blur md:px-10 md:py-12">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-teal/18 blur-2xl"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 -right-16 h-44 w-44 rounded-full bg-purple/16 blur-2xl"
              />

              <div className="relative z-10">
                <Text
                  as="p"
                  size="sm"
                  weight="medium"
                  transform="upper"
                  color="gold"
                  align="center"
                  className="tracking-[0.22em]"
                >
                  În pregătire
                </Text>

                <Heading
                  as="h3"
                  size="h3"
                  align="center"
                  className="mt-4 text-charcoal"
                >
                  Mai multe evenimente vor fi anunțate în curând
                </Heading>

                <Text
                  align="center"
                  className="mx-auto mt-5 max-w-2xl text-charcoal/72"
                >
                  Programele și atelierele noi vor apărea aici pe măsură ce sunt
                  stabilite. Dacă vrei să afli din timp despre următoarele
                  evenimente, poți trimite un mesaj.
                </Text>

                <div className="mt-8 flex justify-center">
                  <Button href="/contact" variant="primary">
                    Întreabă despre programe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}
