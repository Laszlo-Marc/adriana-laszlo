import Image from "next/image";
import { CalendarDays } from "lucide-react";

import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

import { educationCards } from "./aboutEducationWorkshopsData";

const revealDelays = ["none", "sm", "md", "lg"] as const;

export default function AboutEducationWorkshopsDesktop() {
  return (
    <div className="mt-12 hidden gap-6 lg:grid lg:grid-cols-[1.08fr_0.92fr]">
      <ScrollReveal preset="scale-in" className="min-h-[38rem]">
        <article className="group relative isolate min-h-[38rem] overflow-hidden rounded-[2.25rem] border border-white/20 bg-charcoal p-8 text-cream shadow-[0_28px_90px_rgba(44,44,44,0.14)]">
          <Image
            src="/events/events-hero.jpg"
            alt=""
            aria-hidden="true"
            fill
            sizes="54vw"
            className="absolute inset-0 -z-30 object-cover object-center opacity-80 transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20 bg-charcoal/40"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-linear-to-t from-charcoal/94 via-charcoal/62 to-charcoal/12"
          />

          <div className="flex min-h-[34rem] flex-col justify-end">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-teal/25 bg-teal/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal backdrop-blur-md">
              <CalendarDays className="size-4" aria-hidden="true" />
              Programe AF-EMDR
            </div>

            <Heading
              as="h3"
              size="h3"
              color="cream"
              textCase="uppercase"
              className="max-w-xl text-balance"
            >
              Programe de grup pentru reglaj emoțional, traumă și relații
            </Heading>

            <Text className="mt-5 max-w-2xl text-pretty leading-8 text-cream/78">
              Programele de grup creează un cadru structurat în care
              participanții pot lucra cu resurse pozitive, reglaj emoțional,
              tipare relaționale și teme precum anxietatea, perfecționismul,
              abandonul sau limitele în relații.
            </Text>

            <div className="mt-8 flex gap-3">
              <Button href="/evenimente" variant="primary">
                Vezi programele
              </Button>

              <Button
                href="/af-emdr"
                variant="outline"
                className="border-cream/30 text-cream hover:bg-cream hover:text-charcoal"
              >
                Despre AF-EMDR
              </Button>
            </div>
          </div>
        </article>
      </ScrollReveal>

      <div className="grid gap-4">
        {educationCards.map((card, index) => {
          const Icon = card.icon;
          const isWarm = card.tone === "warm";
          const delay = revealDelays[index % revealDelays.length];

          return (
            <ScrollReveal key={card.title} delay={delay}>
              <article
                className={cn(
                  "group rounded-[2rem] border p-7 transition duration-300 motion-reduce:transition-none",
                  "hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(44,44,44,0.08)]",
                  isWarm
                    ? "border-gold/20 bg-gold/8"
                    : "border-teal/16 bg-white/56",
                )}
              >
                <div className="flex items-start gap-5">
                  <span
                    className={cn(
                      "inline-flex size-12 shrink-0 items-center justify-center rounded-full border",
                      isWarm
                        ? "border-gold/30 bg-gold/12 text-gold"
                        : "border-teal/25 bg-teal/12 text-teal",
                    )}
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </span>

                  <div>
                    <h3 className="font-display text-2xl font-medium leading-tight text-charcoal">
                      {card.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-charcoal/68">
                      {card.description}
                    </p>

                    <Button
                      href={card.href}
                      variant="primary"
                      size="sm"
                      className="mt-5"
                    >
                      {card.cta}
                    </Button>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}
