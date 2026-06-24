import Image from "next/image";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import AccentText from "@/components/ui/AccentText";

export default function TherapistIntroSection() {
  return (
    <Section
      background="cream"
      spacing="none"
      aria-labelledby="therapist-intro-title"
      className="relative overflow-hidden"
    >
      <span id="therapist-intro-title" className="sr-only">
        Despre Adriana Laszlo
      </span>

      <div className="relative overflow-hidden py-16 lg:hidden">
        <Image
          src="/backgrounds/df-teal-down.png"
          alt=""
          aria-hidden="true"
          width={130}
          height={130}
          sizes="130px"
          className="pointer-events-none absolute -right-8 top-10 z-0 h-auto w-32.5 -rotate-12 opacity-20"
        />

        <Image
          src="/backgrounds/df-purple-up.png"
          alt=""
          aria-hidden="true"
          width={96}
          height={96}
          sizes="96px"
          className="pointer-events-none absolute -left-6 bottom-20 z-0 h-auto w-24 rotate-[8deg] opacity-20"
        />

        <Container size="full" padding="default">
          <div className="relative z-10 mx-auto max-w-md text-center">
            <div className="relative mx-auto w-full max-w-[18rem]">
              <div className="relative aspect-4/5 overflow-hidden">
                <Image
                  src="/adriana/adriana8.webp"
                  alt="Adriana Laszlo într-un spațiu calm și primitor"
                  fill
                  sizes="(max-width: 1023px) 288px, 1px"
                  className="object-cover object-top"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-b from-transparent via-cream/85 to-cream"
                />
              </div>
            </div>

            <div className="relative z-10 -mt-8">
              <div className="mb-5 flex items-center justify-center gap-3">
                <span aria-hidden="true" className="h-px w-12 bg-sand" />
                <AccentText>Despre mine</AccentText>
                <span aria-hidden="true" className="h-px w-12 bg-sand" />
              </div>

              <Heading
                as="h2"
                size="h2"
                align="center"
                className="mx-auto max-w-sm"
              >
                Hai să ne cunoaștem
              </Heading>

              <div className="mx-auto mt-6 max-w-sm space-y-4">
                <Text className="text-charcoal/80" align="center">
                  Munca mea este o pasiune. Cea mai mare satisfacție apare în
                  momentele în care văd un zâmbet regăsit, un licăr de speranță
                  în privire sau o răsuflare ușurată de povara durerii.
                </Text>

                <Text className="text-charcoal/75" align="center">
                  Şi, în special când apare conștientizarea: „Da, trauma nu
                  trebuie să mă mai definească. Este o experiență pe care o pot
                  integra.”
                </Text>
              </div>

              <div className="mt-8 flex flex-col items-center gap-3">
                <Button href="/contact" size="md" className="w-full max-w-xs">
                  Programează o ședință
                </Button>

                <Button
                  href="/despre"
                  variant="purple"
                  size="md"
                  className="w-full max-w-xs"
                >
                  Află mai multe
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="relative hidden lg:flex lg:min-h-screen lg:items-center">
        <Image
          src="/backgrounds/df-teal-down.png"
          alt=""
          aria-hidden="true"
          width={170}
          height={170}
          sizes="170px"
          className="pointer-events-none absolute left-[9%] top-[20%] z-0 hidden h-auto w-42.5 rotate-[-10deg] opacity-25 xl:block"
        />

        <Container size="wider" padding="default">
          <div className="relative z-10 overflow-hidden">
            <div className="grid min-h-svh grid-cols-[1fr_1fr] items-center">
              <div className="relative flex items-center px-14">
                <div className="relative max-w-180">
                  <div className="mb-8 flex items-center gap-4">
                    <span aria-hidden="true" className="h-px w-20 bg-sand" />
                    <AccentText>Despre mine</AccentText>
                  </div>

                  <Heading as="h2" size="h2" className="text-charcoal">
                    Un spațiu în care poți fi ascultat cu adevărat.
                  </Heading>

                  <div className="mt-8 max-w-120 space-y-5">
                    <Text size="lg" className="text-charcoal/80">
                      În terapie, ritmul tău contează. Lucrăm împreună cu
                      blândețe, claritate și respect pentru povestea ta, astfel
                      încât să poți înțelege mai bine ce trăiești și ce ai
                      nevoie să se schimbe.
                    </Text>

                    <Text className="text-charcoal/75">
                      Abordarea mea îmbină prezența umană, siguranța relației
                      terapeutice și metode orientate spre procesarea traumelor,
                      anxietății și dificultăților emoționale profunde.
                    </Text>
                  </div>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <Button href="/contact" size="lg">
                      Programează o ședință
                    </Button>

                    <Button href="/despre" variant="purple" size="lg">
                      Află mai multe
                    </Button>
                  </div>

                  <Image
                    src="/backgrounds/df-purple-up.png"
                    alt=""
                    aria-hidden="true"
                    width={96}
                    height={96}
                    sizes="96px"
                    className="pointer-events-none absolute -left-8 -top-12 h-auto w-24 rotate-[8deg] opacity-25"
                  />
                </div>
              </div>

              <div className="relative flex h-full items-center justify-center px-8 xl:px-12">
                <div className="relative h-[min(85vh,850px)] w-full max-w-130">
                  <Image
                    src="/adriana/adriana8.webp"
                    alt="Adriana Laszlo într-un spațiu calm și primitor"
                    fill
                    sizes="(max-width: 1023px) 1px, (min-width: 1536px) 34vw, 38vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
}
