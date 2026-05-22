import Image from "next/image";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";
import Heading from "@/components/ui/Heading";

export default function HomeProblemsSection() {
  return (
    <Section
      background="cream"
      spacing="none"
      aria-labelledby="home-problems-title"
      className="relative overflow-hidden"
    >
      {/* Continuation brand element from hero */}
      <div
        aria-hidden="true"
        className="hidden lg:block pointer-events-none absolute left-35 -top-5 z-0 w-70 opacity-30 "
      >
        <Image
          src="/backgrounds/single.png"
          alt=""
          width={1000}
          height={1400}
          sizes="300px"
          className="h-auto w-full max-w-none"
        />
      </div>
      {/* Brand line over color panel */}
      <div
        aria-hidden="true"
        className="hidden lg:block pointer-events-none absolute right-0 top-20 z-10 w-[9rem] opacity-35 md:right-45 md:top-1/2 md:w-[13rem] md:-translate-y-1/2"
      >
        <Image
          src="/backgrounds/single.png"
          alt=""
          width={700}
          height={1100}
          sizes="180px"
          className="h-auto w-full max-w-none"
        />
      </div>

      {/* Soft atmosphere, not a background color block */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-24 h-72 w-72 rounded-full bg-teal/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 bottom-10 h-72 w-72 rounded-full bg-purple/8 blur-3xl"
      />

      <Container size="wider" padding="none" className="relative z-10">
        <div className="px-6 pb-16 pt-8 md:px-8 md:py-24">
          <div className="mx-auto max-w-2xl md:grid md:max-w-6xl md:grid-cols-[0.95fr_1.05fr] md:items-center md:gap-20">
            {/* Editorial visual */}
            <div className="relative mt-12 md:mt-0">
              {/* Colored panel */}
              <div
                aria-hidden="true"
                className="absolute left-[-1.5rem] top-12 h-[15rem] w-[calc(100%+3rem)] rounded-none bg-teal/45 md:left-[-4rem] md:top-1/2 md:h-[20rem] md:w-[calc(100%+8rem)] md:-translate-y-1/2"
              />

              {/* Image */}
              <div className="relative z-20 mx-auto aspect-[4/5] w-[78%] max-w-[21rem] overflow-hidden rounded-t-[10rem] rounded-b-[1.75rem] bg-sand/20 shadow-[0_24px_70px_rgba(44,44,44,0.14)] md:w-[70%] md:max-w-[28rem]">
                <Image
                  src="/home-page/problems.jpg"
                  alt="Moment de liniște și reflecție într-un proces terapeutic"
                  fill
                  sizes="(min-width: 768px) 420px, 78vw"
                  className="object-cover object-center"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal/10"
                />
              </div>
            </div>
            {/* Editorial copy */}
            <div className="relative z-10 mt-10 mx-8">
              <Text
                as="p"
                size="xs"
                color="gold"
                weight="medium"
                transform="upper"
                className="mb-4 tracking-[0.16em]"
                align="center"
              >
                Când trauma nu mai este doar trecut
              </Text>

              <Heading
                as="h2"
                size="h2"
                className="text-balance text-charcoal"
                align="center"
              >
                Poate te regăsești aici
              </Heading>

              <div className="mt-7 space-y-5">
                <Text
                  size="base"
                  color="muted"
                  className="leading-8"
                  align="center"
                >
                  Uneori, ceea ce ai trăit nu apare ca o amintire clară. Apare
                  ca tensiune în corp, reacții pe care nu le poți opri, frică în
                  relații sau senzația că trebuie să fii mereu pregătit/ă pentru
                  ceva.
                </Text>

                <Text
                  size="base"
                  color="muted"
                  className="leading-8"
                  align="center"
                >
                  Poate ai înțeles multe despre tine, dar ceva din interior
                  continuă să reacționeze ca și cum pericolul nu s-a terminat.
                </Text>
              </div>
            </div>
            {/* Closing bridge */}
            <div className="mt-10 md:col-span-2 md:mx-auto md:mt-16 md:max-w-3xl">
              <div className="relative border-l border-gold/50 pl-5 md:border-l-0 md:border-t md:pl-0 md:pt-6 md:text-center">
                <Text
                  size="base"
                  color="charcoal"
                  className="text-pretty leading-8 md:mx-auto md:max-w-2xl"
                  align="center"
                >
                  În terapie, nu forțăm răspunsuri. Începem cu siguranță, ritm
                  și înțelegerea felului în care corpul tău a învățat să te
                  protejeze.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
