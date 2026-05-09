import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import AccentText from "@/components/ui/AccentText";

export default function AboutHeroSection() {
  return (
    <Section
      background="cream"
      spacingTop="lg"
      spacing="none"
      aria-labelledby="about-hero-heading"
      className="relative overflow-hidden"
    >
      <Container size="full" padding="default">
        <div className="relative min-h-[calc(100svh-5rem)] py-10 lg:py-0">
          {/* soft background atmosphere */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-136 w-136 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 blur-2xl"
          />
          <div
            aria-hidden="true"
            className="absolute right-8 top-24 h-52 w-52 rounded-full bg-purple/10 blur-3xl"
          />

          <div className="relative grid min-h-[calc(100svh-5rem)] items-center gap-20 lg:grid-cols-[0.95fr_1fr_0.95fr]">
            {/* Left editorial text */}
            <div className="relative z-20 order-2 text-center lg:order-3 lg:text-left">
              <p className="font-script text-3xl leading-tight text-charcoal/80 sm:text-5xl lg:text-4xl">
                This space is for healing.
              </p>
            </div>

            <div className="relative z-10 order-1 flex min-h-105 items-end justify-center lg:order-2 lg:min-h-[620px]">
              <div
                aria-hidden="true"
                className="absolute bottom-16 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-teal/25 sm:h-96 sm:w-96 lg:h-[460px] lg:w-[460px]"
              />

              <Image
                src="/adriana-hero.png"
                alt="Adriana Laszlo, psihoterapeut specializat în traumă și Attachment-Focused EMDR"
                width={620}
                height={820}
                priority
                sizes="(min-width: 1024px) 32vw, 80vw"
                className="relative z-10 h-auto w-[70vw] max-w-[380px] object-contain drop-shadow-2xl sm:max-w-[440px] lg:max-w-[500px]"
              />
            </div>

            {/* Right content */}
            <div className="relative z-20 order-3 max-w-3xl text-center lg:order-1 lg:text-left">
              <AccentText>Despre Adriana Laszlo</AccentText>

              <Heading as="h1" size="h3" className="mt-4">
                Psihoterapeut specializat în traumă și{" "}
                <span className="text-teal">Attachment-Focused EMDR</span>
              </Heading>

              <Text size="lg" className="mt-6 text-charcoal/75">
                Lucrez cu persoane care trec prin anxietate, traumă, dificultăți
                relaționale sau blocaje emoționale, folosind o abordare
                terapeutică profundă, structurată și atent adaptată ritmului
                fiecărei persoane.
              </Text>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                <Button>
                  <Link href="/contact">Programează o discuție</Link>
                </Button>

                <Button variant="outline">
                  <Link href="/servicii">Vezi serviciile</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
