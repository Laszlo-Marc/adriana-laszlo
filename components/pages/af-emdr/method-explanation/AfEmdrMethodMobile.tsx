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
      spacing="lg"
      className="relative overflow-hidden lg:hidden"
    >
      <Container padding="default">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-charcoal/45">
          {chapter}
        </p>

        <Heading as="h2" size="h2" className="mt-5 text-balance text-charcoal">
          {eyebrow}
        </Heading>

        <p className="mt-4 text-balance font-display text-3xl leading-[1.05] text-charcoal">
          {title}
        </p>

        <Text className="mt-5 text-pretty text-charcoal/70">{lead}</Text>

        <div className="mt-8 rounded-[2rem] border border-white/70 bg-teal/15 p-6">
          <p className="text-balance text-2xl font-medium leading-snug text-charcoal">
            {thesis}
          </p>

          <Text size="sm" className="mt-4 text-charcoal/65">
            {note}
          </Text>
        </div>

        <div className="mt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            Cum funcționează
          </p>

          <div className="-mx-4 mt-5 flex snap-x gap-4 overflow-x-auto px-4 pb-4">
            {steps.map((step) => (
              <article
                key={step.title}
                className="min-w-[84%] snap-start overflow-hidden rounded-[2rem] border border-white/70 bg-white/60 shadow-[0_18px_55px_rgba(44,44,44,0.06)]"
              >
                <div className="relative h-72">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    sizes="85vw"
                    className="object-cover object-center"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/15 to-transparent"
                  />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                      {step.label}
                    </p>

                    <h3 className="mt-2 text-3xl font-semibold leading-none text-white">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-lg font-medium leading-snug text-charcoal">
                    {step.subtitle}
                  </p>

                  <Text size="sm" className="mt-3 text-charcoal/65">
                    {step.description}
                  </Text>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
