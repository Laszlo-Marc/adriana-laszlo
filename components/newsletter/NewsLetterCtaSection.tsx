// components/newsletter/NewsletterCTASection.tsx

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";
import NewsletterForm from "./NewsLetterForm";


type NewsletterCTASectionProps = {
  source?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
};

export default function NewsletterCTASection({
  source = "Newsletter CTA section",
  eyebrow = "Newsletter",
  title = "Primește resurse și anunțuri utile, fără spam.",
  description = "Ocazional, trimitem materiale gratuite, articole și anunțuri despre evenimente sau programe noi.",
}: NewsletterCTASectionProps) {
  return (
    <Section background="cream" spacing="lg">
      <Container size="default">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/70 bg-white/75 p-6 text-center shadow-[0_18px_60px_rgba(44,44,44,0.06)] backdrop-blur-sm sm:p-10">
          <p className="mb-3 text-xs uppercase tracking-[0.24em] text-muted">
            {eyebrow}
          </p>

          <Heading as="h2" size="h2">
            {title}
          </Heading>

          <Text color="muted" className="mx-auto mt-4 max-w-xl">
            {description}
          </Text>

          <NewsletterForm
            source={source}
            className="mx-auto mt-7 max-w-xl text-left"
          />
        </div>
      </Container>
    </Section>
  );
}
