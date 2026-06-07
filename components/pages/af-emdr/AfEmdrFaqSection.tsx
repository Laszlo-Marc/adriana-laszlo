import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";

import { afEmdrFaqContent } from "./afEmdrContent";

export default function AfEmdrFaqSection() {
  const { items } = afEmdrFaqContent;

  if (items.length === 0) {
    return null;
  }

  return (
    <Section
      background="cream"
      spacing="md"
      aria-labelledby="af-emdr-faq-heading"
      className="relative overflow-hidden"
    >
      <Container size="narrow" padding="default" className="relative z-10">
        <div className="mx-auto max-w-3xl">
          <h2
            id="af-emdr-faq-heading"
            className="text-center font-accent text-5xl leading-none text-charcoal md:text-7xl"
          >
            Întrebări frecvente
          </h2>

          <div className="mt-10 border-t border-charcoal/35">
            {items.map((item) => (
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
                    <span className="absolute h-px w-5 bg-current" />
                    <span className="absolute h-5 w-px bg-current" />
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
