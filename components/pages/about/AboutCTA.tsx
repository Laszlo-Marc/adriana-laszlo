"use client";
import Link from "next/link";
import Image from "next/image";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <Section background="white" spacing="xl" className="relative text-center">
      {/* subtle brand decoration */}
      <Image
        src="/backgrounds/df-purple-up.png"
        alt=""
        width={140}
        height={140}
        aria-hidden="true"
        className="pointer-events-none absolute left-10 top-10 opacity-30"
      />

      <Image
        src="/backgrounds/df-teal-down.png"
        alt=""
        width={120}
        height={120}
        aria-hidden="true"
        className="pointer-events-none absolute right-12 bottom-10 opacity-30"
      />

      <Container size="narrow">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-6">
          {/* Script-style headline */}
          <p className="font-accent text-4xl text-charcoal/80 md:text-5xl">
            Fă primul pas.
          </p>

          {/* Optional supporting text */}
          <Text className="max-w-md " align="center">
            Dacă simți că este momentul potrivit, poți începe cu o conversație
            simplă.
          </Text>

          {/* CTA group */}
          <div className="mt-6 flex w-full flex-col items-center gap-4">
            <Text
              size="sm"
              className="uppercase tracking-wide text-charcoal/50"
            >
              Lucrează cu mine
            </Text>

            <Button size="lg" variant="urgent">
              <Link href="/contact">Programează o ședință</Link>
            </Button>

            <Text
              size="sm"
              className="mt-2 uppercase tracking-wide text-charcoal/50"
            >
              Explorează serviciile
            </Text>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button variant="primary">
                <Link href="/servicii">Servicii de terapie</Link>
              </Button>

              <Button variant="purple">
                <Link href="/evenimente">Programe & evenimente</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
