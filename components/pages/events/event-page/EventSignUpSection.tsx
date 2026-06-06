import Image from "next/image";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";
import { EventDetail } from "./eventData";
import FeaturedEventSignupForm from "../featured-event/SignUpForm";

type EventSignupSectionProps = {
  event: EventDetail;
};

export default function EventSignupSection({ event }: EventSignupSectionProps) {
  const imageSrc = event.signup.imageSrc ?? event.image;

  return (
    <Section
      id="inscriere"
      background="cream"
      spacing="none"
      aria-labelledby="event-signup-title"
      className="relative overflow-hidden"
    >
      {/* Full-section background image */}
      <Image
        src={imageSrc}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover"
      />

      {/* Global cream wash for readability */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-cream/72"
      />

      {/* Strong center bloom, makes the image feel blended into the page */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-[85%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cream/45 blur-3xl"
      />

      {/* Top fade into surrounding page */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-40 bg-gradient-to-b from-cream via-cream/90 to-transparent lg:h-56"
      />

      {/* Bottom fade into surrounding page */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-44 bg-gradient-to-t from-cream via-cream/90 to-transparent lg:h-64"
      />

      {/* Left readability wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-[58%] bg-gradient-to-r from-cream via-cream/88 to-transparent lg:block"
      />

      {/* Right soft wash behind form */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-[52%] bg-gradient-to-l from-cream/72 via-cream/40 to-transparent lg:block"
      />

      <Container
        size="wide"
        padding="default"
        className="relative z-20 flex min-h-screen items-center py-16 lg:py-24"
      >
        <div className="grid w-full gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          {/* Left editorial text column */}
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            <div className="mb-8 flex items-center justify-center gap-4 lg:justify-start">
              <span className="h-px w-12 bg-gold/70" />
              <p className="font-accent text-3xl leading-none text-charcoal/80 md:text-4xl">
                Înscriere
              </p>
              <span className="h-px w-12 bg-gold/70 lg:hidden" />
            </div>

            <Heading
              id="event-signup-title"
              as="h2"
              size="h2"
              className="text-charcoal"
            >
              {event.signup.title}
            </Heading>

            <Text
              size="lg"
              className="mx-auto mt-6 max-w-2xl text-charcoal/72 lg:mx-0"
            >
              {event.signup.description}
            </Text>

            <div className="mx-auto mt-8 max-w-xl border-t border-teal/60 pt-5 text-left lg:mx-0 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0">
              <Text className="text-charcoal/68">{event.signup.note}</Text>
            </div>

            <div className="mx-auto mt-10 max-w-2xl space-y-5 text-left lg:mx-0">
              <div className="border-t border-charcoal/12 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                  Ce urmează
                </p>
                <Text className="mt-3 text-charcoal/70">
                  După completarea formularului, vei fi contactat/ă pentru o
                  discuție scurtă de clarificare.
                </Text>
              </div>

              <div className="border-t border-charcoal/12 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                  Participare
                </p>
                <Text className="mt-3 text-charcoal/70">
                  Programul are loc într-un cadru restrâns, atent și
                  confidențial, cu locuri limitate.
                </Text>
              </div>

              <div className="border-t border-charcoal/12 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                  Locație
                </p>
                <Text className="mt-3 text-charcoal/70">
                  {event.quickInfo.location}
                </Text>
              </div>
            </div>
          </div>

          {/* Right form column */}
          <div className="mx-auto w-full max-w-xl lg:mx-0 lg:ml-auto">
            <FeaturedEventSignupForm />
          </div>
        </div>
      </Container>
    </Section>
  );
}
