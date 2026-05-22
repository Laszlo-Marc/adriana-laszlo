import Image from "next/image";
import { MessageCircle } from "lucide-react";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

const processSteps = [
  {
    number: "01",
    title: "Îmi scrii",
    description:
      "Un prim mesaj este suficient. Nu trebuie să știi exact ce formă de sprijin ți se potrivește.",
  },
  {
    number: "02",
    title: "Clarificăm ce ai nevoie",
    description:
      "Vorbim despre ce te aduce în terapie și despre ritmul în care putem începe fără presiune.",
  },
  {
    number: "03",
    title: "Începem procesul",
    description:
      "Lucrăm treptat cu emoțiile, reacțiile corpului și tiparele care au nevoie de înțelegere.",
  },
];

function ProcessImageBlock() {
  return (
    <div className="relative mt-11">
      {/* soft editorial panel */}
      <div
        aria-hidden="true"
        className="absolute left-[-1.5rem] top-10 h-[14rem] w-[calc(100%+3rem)] bg-sand/45"
      />

      {/* subtle gold atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-0 h-56 w-56 rounded-full bg-gold/12 blur-3xl"
      />

      {/* continuity brand element */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-14 top-2 z-10 w-[9rem] opacity-20"
      >
        <Image
          src="/backgrounds/single.png"
          alt=""
          width={700}
          height={1100}
          sizes="144px"
          className="h-auto w-full max-w-none"
        />
      </div>

      {/* image */}
      <div className="relative z-20 mx-auto aspect-[5/4] w-[86%] max-w-[22rem] overflow-hidden rounded-[2rem] bg-sand/20 shadow-[0_24px_70px_rgba(44,44,44,0.12)]">
        <Image
          src="/home-page/process2.jpg"
          alt="Spațiu calm de reflecție înainte de începerea procesului terapeutic"
          fill
          sizes="86vw"
          className="object-cover object-center"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal/10"
        />

        <div className="absolute bottom-4 left-4 rounded-full bg-cream/85 px-4 py-2 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-charcoal shadow-sm backdrop-blur-sm">
          01 — 03
        </div>
      </div>
    </div>
  );
}

function ProcessRows() {
  return (
    <div className="relative z-10 mx-auto mt-10 max-w-md">
      <div className="border-y border-gold/30">
        {processSteps.map((step, index) => (
          <div
            key={step.number}
            className="grid grid-cols-[3.25rem_minmax(0,1fr)] gap-4 py-5 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-gold/20"
          >
            <span className="font-display text-2xl leading-none text-gold/70">
              {step.number}
            </span>

            <div>
              <Heading as="h3" size="h4" className="text-balance text-charcoal">
                {step.title}
              </Heading>

              <Text size="sm" color="muted" className="mt-2 leading-6">
                {step.description}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HomeProcessMobile() {
  return (
    <div className="lg:hidden">
      <Container size="wider" padding="none">
        <div className="px-6 pb-20 pt-16">
          <div className="relative z-10 text-center">
            <Text
              as="p"
              size="xs"
              color="gold"
              weight="medium"
              transform="upper"
              align="center"
              className="mb-4 tracking-[0.16em]"
            >
              Primii pași
            </Text>

            <Heading
              as="h2"
              size="h1"
              align="center"
              className="mx-auto  text-balance text-charcoal"
            >
              Cum începem, fără presiune
            </Heading>
          </div>

          <ProcessImageBlock />

          <ProcessRows />

          <div className="relative z-10 mx-auto mt-9 max-w-md text-center">
            <Text
              size="sm"
              color="muted"
              align="center"
              className="text-pretty leading-7"
            >
              Procesul nu trebuie grăbit. Important este să existe un cadru în
              care te poți simți în siguranță să începi.
            </Text>

            <div className="mt-7">
              <Button
                href="/contact"
                size="lg"
                className="w-full"
                leftIcon={<MessageCircle className="h-4 w-4" />}
              >
                Programează o discuție
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

function HomeProcessDesktop() {
  return (
    <div className="hidden lg:block">
      <Container size="wider" padding="default">
        <div className="grid min-h-[680px] grid-cols-[1fr_0.95fr] items-center gap-16 py-28">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute left-[-4rem] top-1/2 h-[22rem] w-[calc(100%+6rem)] -translate-y-1/2 bg-sand/45"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-16 top-8 z-10 w-[11rem] opacity-20"
            >
              <Image
                src="/backgrounds/single.png"
                alt=""
                width={700}
                height={1100}
                sizes="176px"
                className="h-auto w-full max-w-none"
              />
            </div>

            <div className="relative z-20 mx-auto aspect-[5/4] w-[78%] max-w-[34rem] overflow-hidden rounded-[2.25rem] bg-sand/20 shadow-[0_30px_90px_rgba(44,44,44,0.14)]">
              <Image
                src="/home-page/process2.jpg"
                alt="Spațiu calm de reflecție înainte de începerea procesului terapeutic"
                fill
                sizes="520px"
                className="object-cover object-center"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal/10"
              />
            </div>
          </div>

          <div className="relative z-10 max-w-xl">
            <Text
              as="p"
              size="xs"
              color="gold"
              weight="medium"
              transform="upper"
              className="mb-4 tracking-[0.16em]"
            >
              Primii pași
            </Text>

            <Heading as="h2" size="h2" className="text-balance text-charcoal">
              Cum începem, fără presiune
            </Heading>

            <Text size="base" color="muted" className="mt-5 leading-7">
              Nu trebuie să vii cu toate răspunsurile pregătite. Începem prin a
              înțelege unde ești acum, ce ai nevoie și ce formă de sprijin ți se
              potrivește.
            </Text>

            <div className="mt-9 border-y border-gold/30">
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="grid grid-cols-[4rem_minmax(0,1fr)] gap-5 py-5 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-gold/20"
                >
                  <span className="font-display text-3xl leading-none text-gold/70">
                    {step.number}
                  </span>

                  <div>
                    <Heading as="h3" size="h4" className="text-charcoal">
                      {step.title}
                    </Heading>

                    <Text size="sm" color="muted" className="mt-2 leading-6">
                      {step.description}
                    </Text>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button
                href="/contact"
                size="lg"
                leftIcon={<MessageCircle className="h-4 w-4" />}
              >
                Programează o discuție
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default function HomeProcessSection() {
  return (
    <Section
      background="cream"
      spacing="none"
      className="relative overflow-hidden"
    >
      {/* soft continuity from previous section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 bottom-12 h-72 w-72 rounded-full bg-teal/8 blur-3xl"
      />

      <HomeProcessMobile />
      <HomeProcessDesktop />
    </Section>
  );
}
