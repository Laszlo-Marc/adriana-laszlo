import Image from "next/image";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import { afEmdrMethodContent } from "../afEmdrContent";
import Section from "@/components/ui/Section";

export default function AfEmdrMethodDesktop() {
  const { eyebrow, lead, thesis, note, steps } = afEmdrMethodContent;

  if (!steps.length) return null;

  return (
    <Section
      className="relative hidden overflow-hidden  lg:block "
      background="cream"
      spacing="sm"
    >
      <div className="absolute inset-0">
        <Image
          src="/af-emdr/method/af-emdr-method.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-20"
        />

        <div aria-hidden="true" className="absolute inset-0 bg-cream/84" />

        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-1/2 bg-linear-to-r from-cream via-cream/95 to-transparent"
        />

        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 w-1/2 bg-linear-to-l from-cream via-cream/92 to-transparent"
        />

        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-cream via-cream/80 to-transparent"
        />

        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-cream via-cream/85 to-transparent"
        />
      </div>

      <Container size="wider" padding="default" className="relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-[0.78fr_1.22fr] xl:gap-24">
          <div className="max-w-2xl">
            <Heading
              as="h2"
              size="h2"
              textCase="uppercase"
              className="text-balance text-charcoal"
            >
              {eyebrow}
            </Heading>

            <Text className="mt-6 max-w-xl text-pretty text-charcoal/70">
              {lead}
            </Text>

            <div className="mt-10 border-l border-gold/45 pl-6">
              <p className="text-balance text-2xl font-medium leading-snug text-charcoal xl:text-3xl">
                {thesis}
              </p>

              <Text size="sm" className="mt-5 max-w-lg text-charcoal/62">
                {note}
              </Text>
            </div>
          </div>

          <div className="grid gap-5 xl:gap-6">
            <div className="grid grid-cols-2 gap-5 xl:gap-6">
              {steps.map((step, index) => (
                <article
                  key={step.title}
                  className="group relative min-h-84 overflow-hidden rounded-4xl bg-charcoal "
                >
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    sizes="(max-width: 1023px) 1px, (min-width: 1280px) 24vw, 28vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-linear-to-t from-charcoal/78 via-charcoal/32 to-charcoal/8"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-charcoal/82 via-charcoal/38 to-transparent"
                  />

                  <div className="relative z-10 flex h-full min-h-[21rem] flex-col justify-end p-6 xl:p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/62">
                      {step.label}
                    </p>

                    <h3 className="mt-3 text-balance text-3xl font-semibold leading-none text-white xl:text-4xl">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-pretty text-base leading-relaxed text-white/82 xl:text-lg">
                      {step.subtitle}
                    </p>

                    <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-white/68">
                      {step.description}
                    </p>

                    <div className="mt-6 flex items-center gap-3">
                      <span className="h-px w-10 bg-gold" />
                      <span className="text-xs font-medium uppercase tracking-[0.22em] text-white/58">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
