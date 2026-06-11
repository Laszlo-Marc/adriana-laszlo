import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";

import EventImageCard from "./EventImageCard";
import { otherEvents } from "../eventsContent";

export default function OtherEventsSection() {
  if (!otherEvents.length) return null;

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

        <div className="-mx-4 mt-12 flex snap-x gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:hidden [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {otherEvents.map((event, index) => (
            <EventImageCard key={event.slug} item={event} index={index} />
          ))}
        </div>

        <div className="mt-14 hidden grid-cols-2 gap-6 lg:grid">
          {otherEvents.map((event, index) => (
            <EventImageCard key={event.slug} item={event} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
