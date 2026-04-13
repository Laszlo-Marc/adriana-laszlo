import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";
import { PHONE_DISPLAY, PHONE_HREF } from "../layout/navbar/NavLinks";
const trustItems = [
  "Specializare AF-EMDR",
  "15+ ani experiență",
  "Fondator Trauma Center",
] as const;

export default function Hero() {
  return (
    <Section
      background="cream"
      spacing="sm"
      aria-labelledby="hero-heading"
      className="overflow-hidden"
    >
      <Container size="wide" padding="default">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">
          {/* Left: content */}
          <div className="order-2 max-w-4xl lg:order-1">
            <Text
              as="p"
              size="sm"
              color="muted-teal"
              weight="medium"
              transform="upper"
              className="mb-5 tracking-[0.18em]"
            >
              Psiholog · Psihoterapeut · Specialist AF-EMDR · Cluj-Napoca
            </Text>

            <Heading as="h1" size="h2" case="normal">
              Psihoterapie specializată în traumă, cu focus pe AF-EMDR
            </Heading>

            <Text size="lg" color="muted" balance className="mt-6 max-w-xl">
              Sprijin psihoterapeutic pentru trauma de atașament, traume majore
              din viața adultă, anxietate și blocaje emoționale, într-un spațiu
              sigur, atent și orientat spre vindecare profundă.
            </Text>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/contact" variant="urgent" size="lg">
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

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {trustItems.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-teal"
                  />
                  <Text
                    as="span"
                    size="sm"
                    color="muted"
                    weight="medium"
                    transform="upper"
                    className="tracking-[0.12em]"
                  >
                    {item}
                  </Text>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: portrait */}
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative  aspect-4/5 overflow-hidden rounded-softer border border-border/80 bg-sand shadow-[0_20px_60px_rgba(44,44,44,0.08)]">
                <Image
                  src="/adriana.jpg"
                  alt="Adriana Laszlo, psiholog și psihoterapeut specializat în AF-EMDR"
                  fill
                  priority
                  sizes="(min-width: 1280px) 35vw, (min-width: 1024px) 46vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div
                aria-hidden="true"
                className="absolute -right-4 -bottom-4 -z-10 hidden h-40 w-40 rounded-full bg-teal-soft blur-2xl lg:block"
              />

              <div className="absolute inset-x-4 bottom-4 sm:inset-x-auto sm:right-4 sm:bottom-4 sm:max-w-[18rem]">
                <div className="rounded-softer border border-white/60 bg-white/88 p-4 shadow-[0_12px_30px_rgba(44,44,44,0.10)] backdrop-blur-md">
                  <Text
                    as="p"
                    size="xs"
                    color="muted-teal"
                    weight="semibold"
                    transform="upper"
                    className="tracking-[0.16em]"
                  >
                    Specializare
                  </Text>

                  <Heading as="h2" size="h4" case="normal" className="mt-2">
                    AF-EMDR pentru traumă și atașament
                  </Heading>

                  <Text size="sm" color="muted" className="mt-2">
                    Abordare integrativă orientată spre reglare emoțională,
                    siguranță relațională și vindecare în profunzime.
                  </Text>

                  <div className="mt-4 inline-flex items-center gap-2 text-charcoal">
                    <Text as="span" size="sm" weight="medium">
                      Despre abordare
                    </Text>
                    <ArrowRight size={15} strokeWidth={1.75} />
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
