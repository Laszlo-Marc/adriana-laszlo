import Image from "next/image";

import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Container from "@/components/ui/Container";
import { afEmdrMethodContent } from "../afEmdrContent";

export default function AfEmdrMethodMobile() {
  const { chapter, eyebrow, title, lead, thesis, note, steps } =
    afEmdrMethodContent;

  return (
    <Section
      id="cum-functioneaza-mobile"
      background="cream"
      spacing="sm"
      className="relative overflow-hidden lg:hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 -translate-x-1/2 text-[34vw] font-semibold uppercase leading-none tracking-[-0.08em] text-charcoal/[0.035]"
      >
        ATAȘAMENT
      </div>

      <Container padding="default" className="relative z-10">
        <Heading
          as="h2"
          size="h2"
          className="mt-5 text-balance text-charcoal"
          align="center"
        >
          {eyebrow}
        </Heading>

        <Text className="mt-5 text-pretty text-charcoal/70" align="center">
          {lead}
        </Text>

        <div className="mt-8 border-l border-gold/45 pl-5">
          <p className="text-balance text-xl font-medium leading-snug text-charcoal">
            {thesis}
          </p>

          <Text size="sm" className="mt-4 text-charcoal/62">
            {note}
          </Text>
        </div>

        <div className="mt-11">
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Cum funcționează
            </p>

            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-charcoal/35">
              Glisează
            </p>
          </div>

          <div className="-mx-4 mt-6 flex snap-x gap-4 overflow-x-auto px-4 pb-5">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="min-w-[86%] snap-start  p-5 "
              >
                <div className="grid grid-cols-[4.75rem_1fr] gap-4">
                  <div className="relative mt-1 size-[4.75rem] overflow-hidden rounded-2xl bg-sand/20">
                    <Image
                      src={step.image}
                      alt=""
                      aria-hidden="true"
                      fill
                      sizes="76px"
                      className="object-cover object-center"
                    />

                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-charcoal/20"
                    />
                  </div>

                  <div>
                    <h3 className="mt-2 text-balance text-xl font-semibold leading-tight text-charcoal">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-pretty text-base font-medium leading-snug text-charcoal/78">
                      {step.subtitle}
                    </p>
                  </div>
                </div>

                <Text size="sm" className="mt-4 text-charcoal/62">
                  {step.description}
                </Text>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
