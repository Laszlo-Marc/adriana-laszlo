import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";
import { PHONE_DISPLAY, PHONE_HREF } from "../layout/navbar/NavLinks";

export default function Hero() {
  return (
    <Section
      background="cream"
      spacing="sm"
      aria-labelledby="hero-heading"
      className="mt-20"
    >
      <Container size="wide" padding="default">
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 xl:gap-18">
          <div className="order-2 lg:order-1">
            <div className="max-w-4xl bg-cream px-0 py-2 sm:py-4 lg:pt-0 lg:pb-4">
              <Text
                as="p"
                size="sm"
                color="muted-teal"
                weight="medium"
                transform="upper"
                className="mb-4 tracking-[0.14em]"
              >
                AF-EMDR · Traumă · Atașament · Cluj-Napoca
              </Text>

              <Heading as="h1" size="h1" case="normal">
                Terapie pentru traumă și atașament
              </Heading>

              <Text size="lg" color="muted" balance className="mt-5 max-w-xl">
                Sprijin psihoterapeutic pentru experiențe dificile de viață,
                traumă de atașament, anxietate și blocaje emoționale, într-un
                cadru sigur, profesionist și orientat spre schimbare profundă.
              </Text>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href="/contact" variant="primary" size="lg">
                  Programează o ședință
                </Button>

                <Button
                  href={PHONE_HREF}
                  variant="outline"
                  size="lg"
                  leftIcon={<Phone size={16} strokeWidth={1.75} />}
                  aria-label={`Sună la ${PHONE_DISPLAY}`}
                >
                  {PHONE_DISPLAY}
                </Button>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto flex w-full max-w-136 items-end justify-center lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-[12%] h-[78%] w-[78%] -translate-x-1/2 rounded-full bg-teal-soft"
              />

              <div
                aria-hidden="true"
                className="absolute right-[8%] top-[16%] h-28 w-28 rounded-full bg-teal-soft/70 blur-2xl"
              />

              <div className="relative z-10 aspect-4/5 w-full max-w-140 overflow-hidden rounded-4xl">
                <Image
                  src="/adriana8.webp"
                  alt="Adriana Laszlo, psiholog și psihoterapeut specializat în AF-EMDR"
                  fill
                  priority
                  sizes="(min-width: 1280px) 34vw, (min-width: 1024px) 42vw, 90vw"
                  className="object-contain object-bottom"
                />
              </div>

              <div className="absolute bottom-0 left-0 z-20 max-w-80 sm:max-w-76 lg:left-[0%]">
                <div className="rounded-[22px] border border-white/70 bg-white/90 p-4 shadow-[0_12px_30px_rgba(44,44,44,0.10)] backdrop-blur-md sm:p-5">
                  <div className="mt-3 flex items-center gap-3">
                    <Image
                      src="/tc-logo.svg"
                      alt="Trauma Center"
                      width={48}
                      height={48}
                      className="h-14 w-14 shrink-0 object-contain"
                    />

                    <Heading as="h2" size="h4" case="normal">
                      Trauma Center
                    </Heading>
                  </div>

                  <Text size="sm" color="muted" className="mt-3">
                    Un spațiu dedicat lucrului terapeutic cu trauma, atașamentul
                    și reglarea emoțională, fondat pentru intervenție
                    specializată și siguranță relațională.
                  </Text>

                  <Button
                    href="https://traumacenter.ro"
                    variant="purple"
                    size="sm"
                    className="mt-4"
                  >
                    <div className="inline-flex items-center gap-2 text-charcoal">
                      <Text as="span" size="sm" weight="medium">
                        Descoperă Centrul
                      </Text>
                      <ArrowRight size={15} strokeWidth={1.75} />
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
