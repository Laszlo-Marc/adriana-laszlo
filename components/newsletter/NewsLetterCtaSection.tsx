// components/newsletter/NewsletterCTASection.tsx

import Image from "next/image";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";
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
  title = "Alătură-te comunității.",
  description = "Primești ocazional anunțuri despre programe, grupuri și materiale utile pentru procesul tău.",
  backgroundSrc = "/events/events-hero.jpg",
}: NewsletterCTASectionProps) {
  return (
    <Section
      background="none"
      spacing="lg"
      className="relative overflow-hidden"
      backgroundImage={{
        src: backgroundSrc,
        overlayClassName: "bg-cream/50 md:bg-cream/60",
      }}
    >
      <Container size="wide" className="relative z-10">
        <div className="mx-auto max-w-5xl">
          {/* Top centered intro */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.26em] text-muted">
              {eyebrow}
            </p>

            <Heading as="h2" size="h2" className="mt-4" align="center">
              {title}
            </Heading>

            <Text
              color="charcoal"
              className="mx-auto mt-4 max-w-2xl"
              align="center"
            >
              {description}
            </Text>
          </div>

          {/* Bottom split area */}
          <div className="mt-8 grid gap-5 lg:mt-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-6">
            {/* Left: form only */}
            <div className="rounded-4xl border border-white/70 bg-white/82 p-4 shadow-[0_18px_60px_rgba(44,44,44,0.08)] backdrop-blur-sm sm:p-6">
              <NewsletterForm
                className="mt-4 sm:mt-6"
                source="Newsletter popup"
                resourceKey="exclusive-downloadable-resource"
                submitLabel="Primește resursa gratuită"
                successTitle="Verifică-ți emailul."
                successMessage="Ți-am trimis resursa gratuită pe email. Dacă nu o vezi în câteva minute, verifică și folderul Spam sau Promotions."
              />
            </div>

            {/* Right: helper content + decoration */}
            <div className="relative hidden overflow-hidden rounded-4xl border border-white/50 bg-charcoal px-5 py-6 text-cream shadow-[0_18px_60px_rgba(44,44,44,0.10)] sm:px-7 sm:py-8 md:block">
              {/* decorations */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(148,214,200,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(201,148,214,0.16),transparent_34%)]" />

                <Image
                  src="/backgrounds/double-split.png"
                  alt=""
                  width={300}
                  height={300}
                  className="absolute -left-12 -top-10 w-40 rotate-[-8deg] opacity-[0.10] sm:w-52"
                />

                <Image
                  src="/backgrounds/df-purple-up.png"
                  alt=""
                  width={180}
                  height={180}
                  className="absolute right-5 top-5 w-16 opacity-20 sm:w-20"
                />

                <Image
                  src="/backgrounds/dragonfly.png"
                  alt=""
                  width={160}
                  height={160}
                  className="absolute bottom-4 right-6 w-14 opacity-15 sm:w-16"
                />
              </div>

              <div className="relative">
                <Heading as="h3" size="h3" className="text-cream">
                  Un mod simplu de a rămâne la curent.
                </Heading>

                <Text className="mt-4 text-cream/72">
                  Vei primi doar actualizări ocazionale despre evenimente,
                  resurse gratuite și materiale utile. Fără spam, fără ritm
                  obositor.
                </Text>

                <div className="mt-6 grid gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3">
                    <p className="text-sm font-medium text-cream">
                      Evenimente noi
                    </p>
                    <p className="mt-1 text-sm leading-6 text-cream/62">
                      Află când apar grupuri, workshopuri sau întâlniri noi.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3">
                    <p className="text-sm font-medium text-cream">
                      Resurse gratuite
                    </p>
                    <p className="mt-1 text-sm leading-6 text-cream/62">
                      Primești materiale utile atunci când sunt publicate.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3">
                    <p className="text-sm font-medium text-cream">
                      Comunicare discretă
                    </p>
                    <p className="mt-1 text-sm leading-6 text-cream/62">
                      Mesaje rare, clare și relevante, în ritmul potrivit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
