// components/pages/about/approach-process/ApproachProcessMobile.tsx

import Image from "next/image";
import Link from "next/link";

import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import AccentText from "@/components/ui/AccentText";

import { approachProcessContent } from "./approachProcessContent";

export default function ApproachProcessMobile() {
  return (
    <Section
      background="cream"
      spacing="none"
      aria-labelledby="approach-process-mobile-heading"
      className="relative overflow-hidden lg:hidden"
    >
      <div className="relative">
        <div className="relative h-117.5 overflow-hidden">
          <Image
            src={approachProcessContent.image.src}
            alt={approachProcessContent.image.alt}
            fill
            sizes="100vw"
            className="object-cover object-top"
          />

          {/* top fade */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 z-10 h-30 bg-gradient-to-b from-cream via-cream/70 to-transparent"
          />

          {/* bottom fade */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-64 bg-gradient-to-t from-cream via-cream/85 to-transparent"
          />

          {/* soft atmosphere */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 left-1/2 z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cream/15 blur-3xl"
          />
        </div>

        <div className="relative z-20 -mt-28 px-4 pb-14">
          <div className="mx-auto max-w-md text-center">
            <AccentText>{approachProcessContent.eyebrow}</AccentText>

            <Heading
              id="approach-process-mobile-heading"
              as="h2"
              size="h3"
              align="center"
              className="mt-4"
            >
              O abordare profundă, dar atentă la ritmul tău
            </Heading>

            <div className="mt-7 space-y-5 text-left">
              <Text className="text-charcoal/76" align="center">
                Procesul terapeutic nu începe prin a forța povestea, ci prin a
                crea un cadru în care corpul, emoțiile și mintea pot începe să
                se simtă în siguranță.
              </Text>

              <Text className="text-charcoal/76" align="center">
                Lucrăm cu ceea ce este prezent acum — anxietate, blocaje,
                relații dificile, rușine, frică sau tipare care se repetă — fără
                să pierdem din vedere rădăcina lor.
              </Text>

              <div className="border-y border-border/70 py-5">
                <p className="text-sm leading-7 text-charcoal/68">
                  Ritmul este clar și atent:{" "}
                  <span className="font-semibold text-charcoal">
                    ne orientăm
                  </span>
                  , construim resurse, lucrăm cu experiențele profunde și
                  integrăm schimbarea în viața de zi cu zi.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3">
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
    </Section>
  );
}
