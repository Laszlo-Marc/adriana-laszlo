import Image from "next/image";
import { Mail } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import AccentText from "@/components/ui/AccentText";
import Button from "@/components/ui/Button";

const afEmdrContent = {
  eyebrow: "Formare profesională specializată",
  title: "Specializare în traumă și AF-EMDR",
  lead: "O abordare blândă și structurată pentru procesarea traumelor, adaptată ritmului și siguranței fiecărei persoane.",
  body: "În cabinet, formarea profesională se traduce într-un cadru terapeutic atent, bazat pe reglare emoțională, relație și înțelegerea profundă a experiențelor dificile.",
  cta: "Programează o discuție",
};

function HomeAfEmdrMobile() {
  return (
    <div className="lg:hidden">
      <div className="px-6 pt-14 text-center">
        <AccentText className="justify-center text-center text-gold">
          {afEmdrContent.eyebrow}
        </AccentText>

        <Heading
          as="h2"
          size="h1"
          align="center"
          color="charcoal"
          className="mt-4 text-[2.15rem] leading-[1.05]"
        >
          {afEmdrContent.title}
        </Heading>
      </div>

      <div className="relative mt-12 pb-8">
        {/* colored editorial panel */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-12 h-[15.5rem] w-full bg-teal/45"
        />

        {/* image */}
        <div className="relative z-20 mx-auto aspect-[4/3] w-[82%] max-w-[22rem] overflow-hidden rounded-[2rem] bg-sand/20 shadow-[0_24px_70px_rgba(44,44,44,0.14)]">
          {" "}
          <Image
            src="/home-page/certifications.jpg"
            alt="Certificate și diplome profesionale în cabinetul Adrianei Laszlo"
            fill
            priority={false}
            className="object-cover object-center"
            sizes="72vw"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal/10"
          />
        </div>
      </div>

      <div className="px-6 pb-16 pt-10 text-center">
        <Text
          align="center"
          color="muted"
          className="mx-auto max-w-md text-sm leading-7 sm:text-base"
        >
          {afEmdrContent.body}
        </Text>

        <div className="mt-8">
          <Button
            href="/contact"
            leftIcon={<Mail className="h-4 w-4" />}
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
          >
            {afEmdrContent.cta}
          </Button>
        </div>
      </div>
    </div>
  );
}

function HomeAfEmdrDesktop() {
  return (
    <div className="hidden lg:block">
      <Container size="wider" padding="default">
        <div className="grid min-h-[680px] grid-cols-[0.9fr_1.1fr] items-center gap-16 py-28">
          <div className="relative z-10 max-w-xl">
            <AccentText className="justify-start text-left text-gold">
              {afEmdrContent.eyebrow}
            </AccentText>

            <Heading
              as="h2"
              size="h1"
              color="charcoal"
              className="mt-4 leading-[1.05]"
            >
              {afEmdrContent.title}
            </Heading>

            <Text size="lg" color="muted" className="mt-6 leading-8">
              {afEmdrContent.lead}
            </Text>

            <Text color="muted" className="mt-5 leading-7">
              {afEmdrContent.body}
            </Text>

            <div className="mt-9">
              <Button
                href="/contact"
                leftIcon={<Mail className="h-4 w-4" />}
                variant="primary"
                size="lg"
              >
                {afEmdrContent.cta}
              </Button>
            </div>
          </div>

          <div className="relative">
            {/* editorial teal panel */}
            <div
              aria-hidden="true"
              className="absolute left-[-5rem] top-1/2 h-[20rem] w-[calc(100%+8rem)] -translate-y-1/2 bg-teal/38"
            />

            {/* soft cream glow behind image */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cream/55 blur-3xl"
            />

            {/* brand element */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-[-2.5rem] top-1/2 z-10 h-80 w-44 -translate-y-1/2 opacity-28"
            >
              <Image
                src="/backgrounds/single.png"
                alt=""
                fill
                className="object-contain object-center"
                sizes="176px"
              />
            </div>

            {/* image frame */}
            <div className="relative z-20 mx-auto w-[78%] max-w-[34rem] overflow-hidden rounded-[2rem] bg-cream/70 p-3 shadow-[0_30px_90px_rgba(44,44,44,0.14)]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.55rem] bg-sand/20">
                <Image
                  src="/home-page/certifications.jpg"
                  alt="Certificate și diplome profesionale în cabinetul Adrianei Laszlo"
                  fill
                  priority={false}
                  className="object-cover object-center"
                  sizes="540px"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal/10"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default function HomeAfEmdrSection() {
  return (
    <Section
      background="cream"
      spacing="none"
      aria-labelledby="af-emdr-heading"
      className="relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-32 h-72 w-72 rounded-full bg-teal/10 blur-3xl"
      />

      <HomeAfEmdrMobile />
      <HomeAfEmdrDesktop />
    </Section>
  );
}
