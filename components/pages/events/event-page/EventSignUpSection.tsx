import Image from "next/image";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";
import { EventDetail } from "./eventData";
import FeaturedEventSignupForm from "../featured-event/SignUpForm";
import { featuredEvent } from "../eventsContent";

type EventSignupSectionProps = {
  event: EventDetail;
};

const signupSteps = [
  {
    label: "Ce urmează",
    text: "După completarea formularului, vei fi contactat/ă pentru o discuție scurtă de clarificare.",
  },
  {
    label: "Participare",
    text: "Programul are loc într-un cadru restrâns, atent și confidențial, cu locuri limitate.",
  },
];

export default function EventSignupSection({ event }: EventSignupSectionProps) {
  const imageSrc = event.signup.imageSrc ?? event.image;

  const steps = [
    ...signupSteps,
    {
      label: "Locație",
      text: event.quickInfo.location,
    },
  ];

  return (
    <Section
      id="inscriere"
      background="cream"
      spacing="none"
      aria-labelledby="event-signup-title"
      className="relative overflow-hidden"
    >
      <Image
        src={imageSrc}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-cream/72"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-[85%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cream/45 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-40 bg-linear-to-b from-cream via-cream/90 to-transparent lg:h-56"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-44 bg-linear-to-t from-cream via-cream/90 to-transparent lg:h-64"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-[58%] bg-linear-to-r from-cream via-cream/88 to-transparent lg:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-[52%] bg-linear-to-l from-cream/72 via-cream/40 to-transparent lg:block"
      />

      <Container
        size="wide"
        padding="default"
        className="relative z-20 flex min-h-screen items-center py-16 lg:py-24"
      >
        <div className="grid w-full min-w-0 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-12">
          {/* Left editorial text column */}
          <div className="mx-auto w-full min-w-0 max-w-2xl text-center lg:mx-0 lg:text-left">
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
              size="h3"
              className="text-charcoal lg:text-left"
              align="center"
            >
              {event.signup.title}
            </Heading>

            <Text
              size="lg"
              className="mx-auto mt-6 max-w-2xl text-charcoal/72 lg:text-left"
              align="center"
            >
              {event.signup.description}
            </Text>

            <div className="mx-auto mt-10 w-full min-w-0 max-w-full overflow-hidden px-0 lg:hidden">
              <FeaturedEventSignupForm eventTitle={featuredEvent.title} />
            </div>
            {/* Mobile snap carousel */}
            <div className="-mx-4 mt-8 min-w-0 overflow-hidden lg:hidden">
              <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-5 scrollbar-hide">
                {steps.map((step, index) => (
                  <article
                    key={step.label}
                    className="min-h-42 w-[78vw] max-w-74 shrink-0 snap-start rounded-3xl border border-white/70 bg-white/68 p-5 text-left shadow-[0_16px_50px_rgba(44,44,44,0.08)] backdrop-blur-md"
                  >
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-gold">
                      {String(index + 1).padStart(2, "0")} · {step.label}
                    </p>

                    <Text className="mt-4 text-charcoal/70">{step.text}</Text>
                  </article>
                ))}

                <div aria-hidden="true" className="w-4 shrink-0" />
              </div>
            </div>
            {/* Desktop steps stay in the left column */}
            <div className="mt-10 hidden max-w-2xl space-y-5 text-left lg:block">
              {steps.map((step) => (
                <div
                  key={step.label}
                  className="border-t border-charcoal/12 pt-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                    {step.label}
                  </p>
                  <Text className="mt-3 text-charcoal/70">{step.text}</Text>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop form column */}
          <div className="mx-auto hidden w-full max-w-xl lg:mx-0 lg:ml-auto lg:block">
            <FeaturedEventSignupForm eventTitle={featuredEvent.title} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
