import Image from "next/image";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

import { methodSteps } from "../data";

export default function EducationMethodDesktopSection() {
  return (
    <section className="relative hidden overflow-hidden bg-cream py-24 lg:block xl:py-32">
      <div className="absolute inset-0">
        <Image
          src="/home-page/method.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-20"
        />

        <div aria-hidden="true" className="absolute inset-0 bg-cream/88" />

        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-cream via-cream/80 to-transparent"
        />

        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-cream via-cream/85 to-transparent"
        />
      </div>

      <Image
        src="/backgrounds/df-teal-down.png"
        alt=""
        aria-hidden="true"
        width={150}
        height={150}
        sizes="150px"
        className="pointer-events-none absolute right-[7%] top-20 h-auto w-37.5 rotate-[-10deg] opacity-20"
      />

      <Container size="wider" padding="default" className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            Formare, metodă și programe
          </p>

          <Heading
            as="h2"
            size="h2"
            align="center"
            textCase="uppercase"
            className="mt-4 text-balance text-charcoal"
          >
            Un parcurs terapeutic construit cu grijă
          </Heading>
        </div>

        <div className="mt-14 grid grid-cols-3 gap-5 xl:gap-7">
          {methodSteps.map((step, index) => (
            <article
              key={step.title}
              className="group relative min-h-152 overflow-hidden rounded-[2.25rem] bg-charcoal shadow-[0_26px_90px_rgba(44,44,44,0.13)]"
            >
              <Image
                src={step.imageSrc}
                alt={step.imageAlt}
                fill
                sizes="(max-width: 1023px) 1px, (min-width: 1536px) 28vw, 31vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-charcoal/22"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-charcoal/92 via-charcoal/58 via-55% to-charcoal/14"
              />

              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-4/5 bg-linear-to-t from-charcoal via-charcoal/72 to-transparent"
              />

              <div className="relative z-10 flex min-h-[38rem] flex-col justify-end p-7 text-white xl:p-8">
                <div className="mb-auto flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/65">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <span className="h-px w-12 bg-gold/70" />
                </div>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {step.imageTitle}
                </p>

                <Heading
                  align="left"
                  color="cream"
                  as="h2"
                  size="h3"
                  textCase="uppercase"
                  className="mt-5 max-w-xl"
                >
                  {step.title}
                </Heading>

                <Text
                  as="p"
                  size="sm"
                  className="mt-5 max-w-md text-pretty leading-6 text-white/76"
                >
                  {step.body}
                </Text>

                <ul className="mt-6 space-y-3">
                  {step.points.slice(0, 3).map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />

                      <Text
                        as="span"
                        size="sm"
                        className="text-pretty leading-6 text-white/78"
                      >
                        {point}
                      </Text>
                    </li>
                  ))}
                </ul>

                {step.cta ? (
                  <Button
                    href={step.cta.href}
                    variant="urgent"
                    size="md"
                    className="mt-7 w-fit"
                  >
                    {step.cta.label}
                  </Button>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
