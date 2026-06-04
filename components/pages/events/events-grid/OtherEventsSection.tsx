import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";

import EventImageCard from "./EventImageCard";
import { otherEvents } from "../eventsContent";

export default function OtherEventsSection() {
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
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-gold">
            Alte programe și ateliere
          </p>

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

        {/* Mobile/tablet snap carousel */}
        <div className="-mx-4 mt-12 flex snap-x gap-4 overflow-x-auto px-4 pb-4 scrollbar-hide sm:-mx-6 sm:px-6 lg:hidden">
          {otherEvents.map((event, index) => (
            <EventImageCard key={event.slug} item={event} index={index} />
          ))}
        </div>

        {/* Desktop editorial grid */}
        <div className="mt-14 hidden grid-cols-2 gap-6 lg:grid">
          {otherEvents.map((event, index) => (
            <EventImageCard key={event.slug} item={event} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
