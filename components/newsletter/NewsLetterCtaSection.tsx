import Image from "next/image";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";
import ScrollReveal from "@/components/ui/ScrollReveal";
import NewsletterForm from "./NewsLetterForm";

type NewsletterCTASectionProps = {
  source?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  backgroundSrc?: string;
};

export default function NewsletterCTASection({
  source = "Newsletter CTA section",
  eyebrow = "Rămâi aproape",
  title = "Alătură-te comunității",
  description = "Primești ocazional anunțuri despre programe, grupuri și materiale utile pentru procesul tău.",
  backgroundSrc = "/events/events-hero.jpg",
}: NewsletterCTASectionProps) {
  return (
    <Section
      background="none"
      spacing="none"
      className="relative min-h-svh overflow-hidden"
      backgroundImage={{
        src: backgroundSrc,
        overlayClassName: "bg-cream/68 md:bg-cream/58",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,250,242,0.94)_0%,rgba(255,250,242,0.78)_42%,rgba(255,250,242,0.52)_100%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-40 bg-linear-to-b from-cream via-cream/80 to-transparent"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-44 bg-linear-to-t from-cream via-cream/80 to-transparent"
      />

      <Container
        size="wide"
        className="relative z-10 flex min-h-svh items-center justify-center py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto lg:w-1/2">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-charcoal/60">
                {eyebrow}
              </p>

              <Heading
                as="h2"
                size="h2"
                className="mt-4 text-balance text-charcoal"
                align="center"
                textCase="uppercase"
              >
                {title}
              </Heading>

              <Text
                color="charcoal"
                className="mx-auto mt-4 max-w-2xl text-pretty leading-7 text-charcoal/78"
                align="center"
              >
                {description}
              </Text>
            </div>
          </ScrollReveal>

          <div className="mt-8  lg:mt-10 flex items-center justify-center">
            <ScrollReveal delay="sm">
              <div className="rounded-4xl border border-white/80 bg-white/90 p-4 shadow-[0_22px_70px_rgba(44,44,44,0.14)] backdrop-blur-md sm:p-6">
                <NewsletterForm
                  className="mt-4 sm:mt-6"
                  source={source}
                  resourceId="ghid-resurse-pozitive"
                  submitLabel="Primește resursa gratuită"
                  successTitle="Resursa este pregătită."
                  successMessage="Ți-am trimis resursa gratuită pe email. O poți descărca și folosind butonul de mai jos."
                  downloadLabel="Descarcă resursa gratuită"
                  autoDownload={false}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
