import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Section from "@/components/ui/Section";
import AccentText from "@/components/ui/AccentText";

export default function EventsHero() {
  return (
    <Section
      aria-labelledby="events-hero-title"
      className="relative min-h-[100svh] overflow-hidden bg-cream"
      spacing="none"
    >
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/events/events-hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/events/events-bg.mp4" type="video/mp4" />
      </video>

      {/* Soft cream wash over video */}
      <div aria-hidden="true" className="absolute inset-0 bg-cream/40" />

      {/* Cream readability gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,250,242,0.82)_0%,rgba(255,250,242,0.68)_36%,rgba(255,250,242,0.42)_68%,rgba(255,250,242,0.24)_100%)]"
      />

      {/* Stronger bottom fade into next section */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-cream via-cream/80 to-transparent"
      />

      <Container
        size="wide"
        padding="default"
        className="relative z-10 flex min-h-[100svh] items-center justify-center py-28"
      >
        <div className="mx-auto flex flex-col items-center justify-center text-center">
          <Heading
            id="events-hero-title"
            as="h1"
            size="display"
            align="center"
            className="text-charcoal text-[clamp(4rem,8vw,4rem)] lg:text-[clamp(7rem,8vw,7rem)]"
          >
            <AccentText>Evenimente Grupuri Ateliere</AccentText>
          </Heading>

          <Text
            size="lg"
            align="center"
            className="mt-6 max-w-2xl text-charcoal/75"
          >
            Programe de grup, workshopuri și ateliere create pentru oameni care
            vor să lucreze cu trauma, anxietatea, stresul și relația cu sine
            într-un cadru sigur, cald și structurat.
          </Text>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
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
