import Image from "next/image";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";
import { TraumaCenterCard } from "./TraumaCenterCard";
import { CertificationBadges } from "./CertificationBadges";
import { PHONE_DISPLAY, PHONE_HREF } from "@/components/layout/navbar/NavLinks";
import { Phone } from "lucide-react";

export default function Hero() {
  return (
    <Section
      background="cream"
      spacing="lg"
      aria-labelledby="hero-heading"
      className="mt-20"
    >
      <Container size="wider" padding="default">
        <div className="grid items-start gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:gap-12 xl:gap-16">
          {/* Left column */}
          <div className="order-1 lg:pt-4 xl:pt-6">
            <div className="max-w-full bg-cream px-0 py-1 sm:py-2 lg:py-10 text-center lg:text-left">
              <Text
                as="p"
                size="sm"
                color="muted-teal"
                weight="medium"
                transform="upper"
                align="center"
                className="mb-4 tracking-[0.14em] sm:mb-6 lg:text-left "
              >
                AF-EMDR · Traumă · Atașament
              </Text>

              <Heading
                as="h1"
                size="h1"
                case="normal"
                align="center"
                className="max-w-none sm:max-w-none sm:text-[2.7rem]  lg:leading-[0.98] lg:text-left"
              >
                Terapie pentru traumă
              </Heading>

              <Text
                size="lg"
                color="muted"
                balance
                align="center"
                className="mt-4 max-w-full text-base leading-7 sm:mt-8 sm:text-lg lg:text-left"
              >
                Sprijin psihoterapeutic pentru experiențe dificile de viață,
                traumă de atașament, anxietate și blocaje emoționale, într-un
                cadru sigur, profesionist și orientat spre schimbare profundă.
              </Text>

              {/* Mobile image */}
              <div className="mt-6 lg:hidden">
                <div className="relative mx-auto w-full max-w-md">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-[9%] top-[10%] h-[78%] rounded-[28px] bg-teal-soft"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute right-[8%] top-[12%] h-40 w-40 rounded-full bg-teal-soft/70 blur-2xl"
                  />

                  <div className="relative z-10 overflow-hidden rounded-[28px] bg-sand/30">
                    <Image
                      src="/adriana8.webp"
                      alt="Adriana Laszlo, psiholog și psihoterapeut specializat în AF-EMDR"
                      width={800}
                      height={900}
                      priority
                      sizes="92vw"
                      className="h-85 w-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 lg:flex lg:flex-wrap">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="w-full lg:w-auto"
                >
                  Programează
                </Button>

                <Button
                  href={PHONE_HREF}
                  variant="outline"
                  size="lg"
                  leftIcon={<Phone size={16} strokeWidth={1.75} />}
                  aria-label={`Sună la ${PHONE_DISPLAY}`}
                  className="w-full lg:w-auto"
                >
                  {PHONE_DISPLAY}
                </Button>
              </div>

              {/* Mobile Trauma Center */}
              <div className="mt-4 lg:hidden">
                <TraumaCenterCard compact />
              </div>

              {/* Mobile certification logos */}
              <div className="lg:hidden">
                <CertificationBadges />
              </div>

              {/* Desktop certification logos */}
              <div className="hidden lg:block mt-8">
                <CertificationBadges />
              </div>
            </div>
          </div>

          {/* Right column desktop only */}
          <div className="order-2 hidden lg:block">
            <div className="relative mx-auto flex w-full max-w-2xl items-end justify-center xl:max-w-180">
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-[14%] h-[90%] w-[80%] -translate-x-1/2 rounded-full bg-teal-soft"
              />

              <div
                aria-hidden="true"
                className="absolute right-[8%] top-[16%] h-30 w-30 rounded-full bg-teal-soft/70 blur-2xl"
              />

              <div className="relative z-10 w-full max-w-120 xl:max-w-lg">
                <div className="overflow-hidden rounded-[30px] bg-sand/30">
                  <Image
                    src="/adriana8.webp"
                    alt="Adriana Laszlo, psiholog și psihoterapeut specializat în AF-EMDR"
                    width={800}
                    height={980}
                    priority
                    sizes="(min-width: 1280px) 32rem, (min-width: 1024px) 30rem, 42vw"
                    className="h-152 w-full object-cover object-top xl:h-160"
                  />
                </div>
              </div>

              <div className="absolute bottom-2 left-0 z-20 max-w-84 xl:max-w-92">
                <TraumaCenterCard />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
