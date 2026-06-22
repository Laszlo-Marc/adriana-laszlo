import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";

import Section from "@/components/ui/Section";
import AccentText from "@/components/ui/AccentText";
import BackgroundVideo from "@/components/ui/BackgroundVideo";

export default function EventsHero() {
  return (
    <Section
      background="cream"
      spacing="none"
      aria-labelledby="events-hero-title"
      className="relative min-h-svh"
    >
      <BackgroundVideo
        src="/events/events-bg.mp4"
        posterSrc="/events/events-hero-poster.jpg"
        priority
        fetchPriority="high"
        className="z-0"
        imageClassName="object-cover object-center"
        videoClassName="object-cover object-center"
      />

      <div aria-hidden="true" className="absolute inset-0 bg-cream/40" />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,250,242,0.82)_0%,rgba(255,250,242,0.68)_36%,rgba(255,250,242,0.42)_68%,rgba(255,250,242,0.24)_100%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-56 bg-linear-to-t from-cream via-cream/80 to-transparent"
      />

      <Container
        size="wide"
        padding="default"
        className="relative z-10 flex min-h-svh items-center justify-center py-18"
      >
        <div className="mx-auto flex  flex-col items-center justify-center text-center">
          <Heading
            id="events-hero-title"
            as="h1"
            size="display"
            align="center"
            className="text-[clamp(3.75rem,16vw,5.2rem)] mb-10 lg:text-[clamp(6rem,8vw,6rem)]"
          >
            <AccentText>Evenimente. Grupuri. Ateliere.</AccentText>
          </Heading>

          <div className="mt-8 flex w-full max-w-xs flex-col justify-center gap-3 sm:max-w-none sm:flex-row sm:items-center">
            <Button href="#programe" variant="primary">
              Vezi programele
            </Button>

            <Button href="/contact" variant="secondary">
              Întreabă despre următorul grup
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
