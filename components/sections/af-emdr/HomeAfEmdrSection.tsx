import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

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
    description:
      "Formare completă în AF-EMDR, incluzând părțile 1, 2 și 3, plus ore de consultare clinică.",
  },
  {
    id: "arpi",
    logoSrc: "/logos/arpi.jpg",
    logoAlt: "Asociația Română de Psihoterapie Integrativă",
    title: "Psihoterapeut autonom în psihoterapie integrativă",
    issuer: "ARPI",
    description:
      "Formare profesională recunoscută, baza din care Adriana își construiește practica relațională și orientată spre vindecarea traumei.",
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
      <Container size="full" padding="default">
        <div className="relative   px-6 py-14 text-center  sm:px-8 sm:py-16 lg:px-14 lg:py-20">
          {/* background brand elements */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 hidden h-full w-28 opacity-60 md:block lg:w-45"
          >
            <Image
              src="/backgrounds/single.png"
              alt=""
              fill
              className="object-contain object-left-top"
              sizes="(min-width: 1024px) 144px, 112px"
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
              sizes="(min-width: 1024px) 144px, 112px"
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

          <div className="relative mx-auto ">
            <AccentText className="justify-center text-center text-white/90">
              Specializare în AF-EMDR
            </AccentText>

            <Heading
              as="h2"
              size="h2"
              align="center"
              className="mt-6"
              color="cream"
            >
              O abordare atentă pentru trauma care are rădăcini mai adânci
            </Heading>

            <Text
              size="lg"
              align="center"
              className="mx-auto mt-4 "
              color="cream"
            >
              AF-EMDR este o formă de lucru orientată spre traumă și atașament,
              folosită într-un mod blând, structurat și adaptat ritmului
              fiecărei persoane.
            </Text>

            <Text
              align="center"
              color="cream"
              className="mx-auto max-w-6xl mt-5  text-charcoal/72"
            >
              În practica Adrianei, această metodă susține procesarea
              experiențelor dificile într-un cadru care pune accent pe
              siguranță, reglare emoțională, relație terapeutică și integrare
              profundă — nu doar pe reducerea simptomelor pe termen scurt.
            </Text>
          </div>

          <div className="relative mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
            {certifications.map((item) => (
              <article
                key={item.id}
                className="rounded-[1.75rem] bg-white/88 p-5 text-left shadow-[0_12px_30px_rgba(44,44,44,0.06)] ring-1 ring-white/40 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl bg-sand/50 ring-1 ring-charcoal/8">
                    <Image
                      src={item.logoSrc}
                      alt={item.logoAlt}
                      fill
                      className="object-contain p-2"
                      sizes="56px"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-charcoal/50">
                      {item.issuer}
                    </p>

                    <h3 className="mt-2 text-lg font-semibold leading-snug text-charcoal">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-charcoal/72">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="relative mx-auto mt-8 flex max-w-3xl  items-center gap-4 sm:flex-row sm:justify-center">
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
