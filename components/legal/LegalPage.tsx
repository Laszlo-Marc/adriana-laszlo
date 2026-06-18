import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";
import { cn } from "@/lib/utils";

export type LegalContentBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    }
  | {
      type: "table";
      rows: {
        label: string;
        value: string;
      }[];
    };

export type LegalSection = {
  title: string;
  blocks: LegalContentBlock[];
};

type LegalPageProps = {
  eyebrow?: string;
  title: string;
  description: string;
  updatedAt: string;
  sections: LegalSection[];
};

export default function LegalPage({
  eyebrow = "Informații legale",
  title,
  description,
  updatedAt,
  sections,
}: LegalPageProps) {
  return (
    <main>
      <Section
        background="cream"
        spacing="lg"
        className="relative overflow-hidden "
      >
        <Container size="default">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-gold">
              {eyebrow}
            </p>

            <Heading
              as="h1"
              size="h1"
              align="center"
              font="display"
              className="mt-5"
            >
              {title}
            </Heading>

            <Text
              as="p"
              size="lg"
              color="muted"
              align="center"
              className="mx-auto mt-6 max-w-2xl"
            >
              {description}
            </Text>

            <p className="mt-5 text-sm text-muted">
              Ultima actualizare: {updatedAt}
            </p>
          </div>
        </Container>
      </Section>

      <Section background="cream" spacing="sm" className="pt-0">
        <Container size="default">
          <article className="mx-auto max-w-4xl rounded-4xl border border-charcoal/8 bg-white/70 px-5 py-8 shadow-[0_24px_80px_rgba(44,44,44,0.06)] backdrop-blur-sm sm:px-8 sm:py-10 lg:px-12 lg:py-14">
            <div className="space-y-10">
              {sections.map((section, index) => (
                <section
                  key={section.title}
                  aria-labelledby={`legal-section-${index}`}
                  className={cn(
                    index > 0 ? "border-t border-charcoal/8 pt-10" : undefined,
                  )}
                >
                  <Heading
                    id={`legal-section-${index}`}
                    as="h2"
                    size="h3"
                    font="display"
                    className="mb-5"
                  >
                    {section.title}
                  </Heading>

                  <div className="space-y-4 text-[15px] leading-7 text-muted sm:text-base sm:leading-8">
                    {section.blocks.map((block, blockIndex) => {
                      if (block.type === "paragraph") {
                        return <p key={blockIndex}>{block.text}</p>;
                      }

                      if (block.type === "list") {
                        return (
                          <ul
                            key={blockIndex}
                            className="list-disc space-y-2 pl-5 marker:text-gold"
                          >
                            {block.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        );
                      }

                      return (
                        <div
                          key={blockIndex}
                          className="overflow-hidden rounded-2xl border border-charcoal/8 bg-cream/55"
                        >
                          <dl className="divide-y divide-charcoal/8">
                            {block.rows.map((row) => (
                              <div
                                key={row.label}
                                className="grid gap-1 px-4 py-3 sm:grid-cols-[13rem_1fr] sm:gap-4 sm:px-5"
                              >
                                <dt className="font-medium text-charcoal">
                                  {row.label}
                                </dt>
                                <dd>{row.value}</dd>
                              </div>
                            ))}
                          </dl>
                        </div>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </Container>
      </Section>
    </main>
  );
}
