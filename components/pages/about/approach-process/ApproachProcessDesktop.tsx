import Image from "next/image";
import Link from "next/link";

import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import AccentText from "@/components/ui/AccentText";

import { approachProcessContent } from "./approachProcessContent";

export default function ApproachProcessDesktop() {
  return (
    <Section
      background="cream"
      spacing="none"
      aria-labelledby="approach-process-heading"
      className="relative hidden min-h-screen overflow-hidden lg:block"
    >
      <div className="grid min-h-screen grid-cols-[1fr_1fr]">
        <div className="relative min-h-screen overflow-hidden">
          <Image
            src={approachProcessContent.image.src}
            alt={approachProcessContent.image.alt}
            fill
            sizes="50vw"
            className="object-cover object-top"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-cream to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 z-10 h-35 bg-gradient-to-b from-cream via-cream/75 to-transparent"
          />

          <div
            aria-hidden="true"
            className="absolute right-0 top-0 h-full w-64 bg-gradient-to-l from-cream to-transparent"
          />
        </div>

        <div className="relative flex min-h-screen items-center px-16 py-24 xl:px-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-16 top-24 h-80 w-80 rounded-full bg-teal/10 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-20 right-0 h-96 w-96 rounded-full bg-purple/10 blur-3xl"
          />

          <div className="relative z-10 max-w-3xl">
            <AccentText>{approachProcessContent.eyebrow}</AccentText>

            <Heading
              id="approach-process-heading"
              as="h2"
              size="h2"
              className="mt-4"
            >
              O abordare profundă, dar atentă la ritmul tău
            </Heading>

            <div className="mt-8 space-y-5">
              <Text size="lg" className="text-charcoal/76">
                Procesul terapeutic nu începe prin a forța povestea, ci prin a
                crea un cadru în care corpul, emoțiile și mintea pot începe să
                se simtă în siguranță.
              </Text>

              <Text size="lg" className="text-charcoal/76">
                Lucrăm cu ceea ce este prezent acum — anxietate, blocaje,
                relații dificile, rușine, frică sau tipare care se repetă — dar
                fără să pierdem din vedere rădăcina lor.
              </Text>

              <Text size="lg" className="text-charcoal/76">
                Ritmul este clar și atent: ne orientăm, construim resurse,
                lucrăm cu experiențele profunde și integrăm schimbarea în viața
                de zi cu zi.
              </Text>
            </div>

            <div className="mt-10 grid grid-cols-4 gap-3 border-y border-border/70 py-5">
              {approachProcessContent.steps.map((step) => (
                <div key={step.label}>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
                    {step.label}
                  </p>
                  <p className="mt-2 text-sm leading-5 text-charcoal/62">
                    {step.title}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex gap-3">
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
