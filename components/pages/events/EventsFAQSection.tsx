import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";
import Heading from "@/components/ui/Heading";
import AccentText from "@/components/ui/AccentText";

const eventsFaqItems = [
  {
    question: "Trebuie să vorbesc în fața grupului?",
    answer:
      "Nu. Participarea se face în ritmul tău. Poți asculta, poți observa și poți împărtăși doar atât cât simți că este potrivit pentru tine.",
  },
  {
    question: "Este confidențial ce se discută în grup?",
    answer:
      "Da. Confidențialitatea este o condiție de bază pentru participare. Grupul are reguli clare, astfel încât spațiul să rămână sigur și respectuos.",
  },
  {
    question: "Cum știu dacă un program de grup mi se potrivește?",
    answer:
      "Înainte de înscriere, este recomandată o discuție scurtă pentru a clarifica tema programului, nevoile tale și dacă formatul de grup este potrivit în acest moment.",
  },
  {
    question: "Pot combina terapia individuală cu un program de grup?",
    answer:
      "Da. Pentru multe persoane, terapia individuală oferă profunzime și atenție personalizată, iar grupul poate aduce susținere, perspectivă și experiență relațională.",
  },
  {
    question: "Workshopurile sunt același lucru cu terapia de grup?",
    answer:
      "Nu neapărat. Un workshop este de obicei mai scurt, mai educațional sau practic. Un program de grup are o structură mai amplă și poate include mai mult proces terapeutic.",
  },
];

export default function EventsFaqSection() {
  return (
    <Section
      background="cream"
      spacing="sm"
      aria-labelledby="events-faq-heading"
      className="relative overflow-hidden"
    >
      <Container size="narrow" padding="default" className="relative z-10">
        <div className="mx-auto max-w-3xl ">
          <Heading
            id="events-faq-heading"
            as="h2"
            size="h2"
            align="center"
            font="accent"
            color="charcoal"
          >
            <AccentText>Întrebări frecvente</AccentText>
          </Heading>

          <Text size="lg" align="center" color="charcoal" className="mt-5">
            Câteva clarificări utile înainte să alegi un program, workshop sau
            atelier.
          </Text>

          <div className="mt-10 border-t border-charcoal/35">
            {eventsFaqItems.map((item) => (
              <details
                key={item.question}
                className="group border-b border-charcoal/30 py-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left marker:hidden [&::-webkit-details-marker]:hidden">
                  <span className="font-body text-base font-medium leading-6 text-charcoal md:text-lg">
                    {item.question}
                  </span>

                  <span
                    aria-hidden="true"
                    className="relative flex size-8 shrink-0 items-center justify-center text-charcoal/80 transition duration-300 group-open:rotate-45"
                  >
                    <span className="absolute h-px w-5 bg-charcoal" />
                    <span className="absolute h-5 w-px bg-charcoal" />
                  </span>
                </summary>

                <div className="grid grid-rows-[0fr] transition-all duration-500 group-open:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <Text className="max-w-2xl pt-4 text-charcoal/72">
                      {item.answer}
                    </Text>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
