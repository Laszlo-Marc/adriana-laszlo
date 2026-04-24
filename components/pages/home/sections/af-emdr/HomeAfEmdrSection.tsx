import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import AccentText from "@/components/ui/AccentText";
import Button from "@/components/ui/Button";

const certifications = [
  {
    id: "parnell",
    logoSrc: "/logos/parnell.png",
    logoAlt: "Parnell Institute",
    title: "Attachment-Focused EMDR Basic Training",
    issuer: "Parnell Institute",
    imageSrc: "/certifications/parnell.JPG",
    imageAlt: "Certificat Attachment-Focused EMDR Basic Training",
  },
  {
    id: "arpi",
    logoSrc: "/logos/arpi.jpg",
    logoAlt: "Asociația Română de Psihoterapie Integrativă",
    title: "Psihoterapeut autonom în psihoterapie integrativă",
    issuer: "ARPI",
    imageSrc: "/certifications/arpi-diploma.jpeg",
    imageAlt: "Diplomă psihoterapie integrativă",
  },
] as const;

export default function HomeAfEmdrBannerSection() {
  return (
    <Section
      background="teal-muted"
      spacing="none"
      aria-labelledby="af-emdr-heading"
      className="relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-20 z-0 w-70 top-0 opacity-[0.4] md:hidden"
      >
        <Image
          src="/backgrounds/double-simple.png"
          alt=""
          fill
          className="object-contain object-center"
          sizes="300px"
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-60 z-0 w-50  -top-50 opacity-[0.4] md:hidden"
      >
        <Image
          src="/backgrounds/df-purple-up.png"
          alt=""
          fill
          className="object-contain object-center"
          sizes="300px"
        />
      </div>
      <Container size="full" padding="default">
        <div className="relative px-5 py-12 text-center sm:px-8 sm:py-16 lg:px-14 lg:py-20">
          {/* desktop decorative elements */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 hidden h-full w-28 opacity-60 md:block lg:w-45"
          >
            <Image
              src="/backgrounds/single.png"
              alt=""
              fill
              className="object-contain object-top-left"
              sizes="(min-width: 1024px) 180px, 112px"
            />
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 hidden h-full w-40 opacity-60 md:block lg:w-45"
          >
            <Image
              src="/backgrounds/double-simple.png"
              alt=""
              fill
              className="object-contain object-top-right"
              sizes="(min-width: 1024px) 180px, 160px"
            />
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-6 top-10 hidden lg:block opacity-60"
          >
            <Image
              src="/backgrounds/df-purple-down.png"
              alt=""
              width={200}
              height={200}
              className="object-contain"
            />
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-6 bottom-8 hidden lg:block opacity-60"
          >
            <Image
              src="/backgrounds/df-purple-up.png"
              alt=""
              width={200}
              height={200}
              className="object-contain"
            />
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-4 top-6 hidden lg:block opacity-60"
          >
            <Image
              src="/backgrounds/dragonfly.png"
              alt=""
              width={200}
              height={200}
              className="object-contain"
            />
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-4 bottom-6 hidden lg:block opacity-60"
          >
            <Image
              src="/backgrounds/df-teal-down.png"
              alt=""
              width={200}
              height={200}
              className="object-contain"
            />
          </div>

          <div className="relative z-10 mx-auto ">
            <AccentText className="justify-center text-center text-white/90">
              Specializare în AF-EMDR
            </AccentText>

            <Heading
              as="h2"
              size="h2"
              align="center"
              className="mt-4 text-[2rem] leading-[1.12] sm:mt-6 text-white"
              color="cream"
            >
              O abordare atentă pentru trauma profundă
            </Heading>

            <Text
              size="lg"
              align="center"
              className="mx-auto mt-4 text-white/95"
              color="cream"
            >
              AF-EMDR este o abordare orientată spre traumă și atașament,
              folosită într-un mod blând, structurat și adaptat ritmului
              fiecărei persoane.
            </Text>

            <Text
              align="center"
              color="cream"
              className="mx-auto mt-4  text-sm leading-7 text-white/85 sm:text-base"
            >
              În practica Adrianei, această metodă susține procesarea
              experiențelor dificile într-un cadru bazat pe siguranță, reglare
              emoțională și relație terapeutică.
            </Text>
          </div>

          <div className="relative z-10 mx-auto mt-8 grid max-w-4xl gap-4 sm:mt-10 sm:gap-6 md:grid-cols-2">
            {certifications.map((item) => (
              <article key={item.id} className="text-left">
                <div className="relative aspect-[1.4/1] w-full overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/15 sm:rounded-2xl">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    className="rounded-[20px] object-fill object-center sm:rounded-lg"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
              </article>
            ))}
          </div>

          <div className="relative z-10 mx-auto mt-6 flex max-w-3xl items-center justify-center gap-4 sm:mt-8">
            <Button
              leftIcon={<Mail className="h-4 w-4" />}
              variant="primary"
              size="lg"
            >
              <Link href="/contact">Programează o discuție</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
