import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import ImageMarquee from "@/components/ui/ImageMarquee";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";

import { featuredEvent } from "../eventsContent";
import FeaturedEventSignupForm from "./SignUpForm";

export default function FeaturedEventSection() {
  return (
    <Section
      id="programe"
      background="cream"
      spacing="md"
      aria-labelledby="featured-event-title"
      className="relative overflow-hidden"
    >
      <Container size="wide" padding="default" className="relative z-10">
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
            {featuredEvent.eyebrow}
          </Text>

          <Heading
            id="featured-event-title"
            as="h2"
            size="h1"
            align="center"
            className="mt-5 text-charcoal"
          >
            {featuredEvent.title}
          </Heading>
        </div>
      </Container>

      <div className="relative z-10 mt-12">
        <ImageMarquee images={featuredEvent.images} speed="slow" />
      </div>

      <Container size="wide" padding="default" className="relative z-10 mt-14">
        <div className="grid min-w-0 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.82fr)] lg:items-start">
          <div className="relative min-w-0 px-1 py-4 text-center lg:py-8 lg:text-left">
            <div className="mx-auto max-w-2xl min-w-0 lg:mx-0">
              <div className="mb-8 flex items-center justify-center gap-4 lg:justify-start">
                <span
                  aria-hidden="true"
                  className="h-px w-12 shrink-0 bg-gold/70 sm:w-16"
                />

                <Text as="p" size="xl" className="font-accent text-charcoal/80">
                  Despre program
                </Text>

                <span
                  aria-hidden="true"
                  className="h-px w-12 shrink-0 bg-gold/70 sm:w-16 lg:hidden"
                />
              </div>

              <Heading
                as="h3"
                size="h2"
                align="center"
                className="max-w-2xl text-charcoal lg:text-left"
              >
                {featuredEvent.title}
              </Heading>

              <Text
                align="center"
                className="mx-auto mt-6 max-w-2xl text-charcoal/72 lg:mx-0 lg:text-left"
              >
                {featuredEvent.description}
              </Text>

              <div className="-mx-4 mt-9 overflow-x-auto px-4 pb-4 [scrollbar-width:none] sm:hidden [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                <div className="flex snap-x snap-mandatory gap-3">
                  {featuredEvent.facts.map((fact) => (
                    <article
                      key={fact.label}
                      className="min-h-[8.75rem] w-[72vw] max-w-[17rem] shrink-0 snap-center rounded-[1.5rem] border border-white/70 bg-white/55 px-5 py-5 text-center"
                    >
                      <Text
                        as="p"
                        size="xs"
                        weight="medium"
                        transform="upper"
                        color="gold"
                        align="center"
                        className="tracking-[0.22em]"
                      >
                        {fact.label}
                      </Text>

                      <Text
                        as="p"
                        size="base"
                        align="center"
                        className="mt-3 leading-relaxed text-charcoal/78"
                      >
                        {fact.value}
                      </Text>
                    </article>
                  ))}
                </div>
              </div>

              <div className="mt-10 hidden min-w-0 gap-6 sm:grid sm:grid-cols-2">
                {featuredEvent.facts.map((fact) => (
                  <article
                    key={fact.label}
                    className="min-w-0 border-t border-charcoal/12 pt-5"
                  >
                    <Text
                      as="p"
                      size="xs"
                      weight="medium"
                      transform="upper"
                      color="gold"
                      className="tracking-[0.22em]"
                    >
                      {fact.label}
                    </Text>

                    <Text
                      as="p"
                      size="base"
                      className="mt-3 max-w-full break-words leading-relaxed text-charcoal/78"
                    >
                      {fact.value}
                    </Text>
                  </article>
                ))}
              </div>

              <div className="mt-10 flex justify-center lg:justify-start">
                <Button
                  href={`/evenimente/${featuredEvent.slug}`}
                  variant="primary"
                  className="w-full max-w-full whitespace-normal text-center sm:w-auto"
                >
                  Află dacă ți se potrivește
                </Button>
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <FeaturedEventSignupForm eventTitle={featuredEvent.title} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
