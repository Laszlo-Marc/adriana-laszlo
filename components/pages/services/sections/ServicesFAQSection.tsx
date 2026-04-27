"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import AccentText from "@/components/ui/AccentText";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Cum știu dacă AF-EMDR este potrivit pentru mine?",
    answer:
      "Putem clarifica acest lucru în primele întâlniri. Înainte de procesare, este important să existe siguranță, stabilizare și o înțelegere clară a obiectivelor terapeutice.",
  },
  {
    question: "Trebuie să vorbesc în detaliu despre traumă?",
    answer:
      "Nu întotdeauna. Ritmul este stabilit cu grijă, iar lucrul terapeutic nu presupune forțarea unor detalii pentru care nu există încă suficientă siguranță.",
  },
  {
    question: "Cât durează un proces terapeutic?",
    answer:
      "Durata diferă în funcție de obiective, istoricul personal și resursele disponibile. Unele persoane lucrează pe o temă punctuală, altele aleg un proces mai amplu.",
  },
  {
    question: "Se poate desfășura terapia online?",
    answer:
      "Da, în anumite situații terapia online poate fi potrivită. Vom discuta împreună dacă acest format susține suficient siguranța, continuitatea și obiectivele tale.",
  },
  {
    question: "Cum decurge prima ședință?",
    answer:
      "Prima întâlnire este orientată spre cunoaștere, clarificarea nevoilor și stabilirea unui cadru. Nu este nevoie să ai totul formulat perfect înainte să începi.",
  },
] as const;

export default function ServicesFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section
      background="white"
      spacing="lg"
      aria-labelledby="services-faq-heading"
    >
      <Container size="wide">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="relative w-full max-w-md">
            <div className="relative overflow-hidden rounded-[2rem] bg-sand/40 shadow-sm ring-1 ring-charcoal/10">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/services/faq.jpg"
                  alt="Cadru calm pentru proces terapeutic"
                  fill
                  sizes="(min-width: 1024px) 420px, 90vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="max-w-2xl lg:ml-auto">
            <AccentText>Întrebări frecvente</AccentText>

            <Heading as="h2" size="h2" className="mt-3">
              Întrebări care apar înainte de a începe terapia
            </Heading>

            <Text className="mt-5 text-charcoal/75">
              Este firesc să ai întrebări înainte de a începe. Iată câteva
              clarificări care te pot ajuta să înțelegi mai bine procesul.
            </Text>

            <div className="mt-8 divide-y divide-charcoal/10 rounded-[1.5rem] border border-charcoal/10 bg-cream/50">
              {faqs.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div key={item.question}>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm font-medium text-charcoal md:text-base">
                        {item.question}
                      </span>

                      <ChevronDown
                        className={cn(
                          "size-5 shrink-0 text-teal transition-transform duration-300",
                          isOpen && "rotate-180",
                        )}
                        aria-hidden="true"
                      />
                    </button>

                    <div
                      className={cn(
                        "grid transition-all duration-300 ease-out",
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 text-sm leading-7 text-charcoal/70">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
