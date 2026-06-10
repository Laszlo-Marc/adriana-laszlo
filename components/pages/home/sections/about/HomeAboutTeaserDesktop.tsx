import Image from "next/image";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import AccentText from "@/components/ui/AccentText";

export default function HomeAboutTeaserDesktop() {
  return (
    <div className="relative hidden overflow-hidden lg:flex lg:min-h-screen lg:items-center">
      <Image
        src="/backgrounds/df-teal-down.png"
        alt=""
        aria-hidden="true"
        width={170}
        height={170}
        sizes="170px"
        className="pointer-events-none absolute right-[9%] top-[20%] z-0 hidden h-auto w-42.5 rotate-[-10deg] opacity-25 xl:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[18%] top-1/2 z-0 h-80 w-80 -translate-y-1/2 rounded-full bg-teal/10 blur-3xl"
      />

      <Container size="wider" padding="default">
        <div className="relative z-10 overflow-hidden">
          <div className="grid min-h-svh grid-cols-[0.82fr_1.18fr] items-center">
            <div className="relative flex h-full items-center justify-center px-8 xl:px-12">
              <div className="relative h-[min(85vh,850px)] w-full max-w-130">
                <Image
                  src="/adriana/adriana8.webp"
                  alt="Adriana Laszlo într-un spațiu calm și primitor"
                  fill
                  sizes="(max-width: 1023px) 1px, (min-width: 1536px) 34vw, 38vw"
                  className="object-cover object-top"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-cream/80 via-cream/30 to-transparent"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-cream/70 via-cream/20 to-transparent"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-cream/80 via-cream/25 to-transparent"
                />
              </div>
            </div>

            <div className="relative flex items-center px-14 xl:px-20 2xl:px-24">
              <div className="relative max-w-180">
                <Image
                  src="/backgrounds/df-purple-up.png"
                  alt=""
                  aria-hidden="true"
                  width={96}
                  height={96}
                  sizes="96px"
                  className="pointer-events-none absolute -right-8 -top-12 h-auto w-24 rotate-[8deg] opacity-25"
                />

                <div className="mb-8 flex items-center gap-4">
                  <span aria-hidden="true" className="h-px w-20 bg-sand" />
                  <AccentText>Despre mine</AccentText>
                </div>

                <Heading
                  id="home-about-title"
                  as="h2"
                  size="h2"
                  className="text-charcoal"
                >
                  Un spațiu în care poți fi ascultat cu adevărat.
                </Heading>

                <div className="mt-8 max-w-120 space-y-5">
                  <Text size="lg" className="text-charcoal/80">
                    În terapie, ritmul tău contează. Lucrăm împreună cu
                    blândețe, claritate și respect pentru povestea ta, astfel
                    încât să poți înțelege mai bine ce trăiești și ce ai nevoie
                    să se schimbe.
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
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
