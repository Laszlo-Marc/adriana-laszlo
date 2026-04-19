import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import { PHONE_HREF } from "@/components/layout/navbar/NavLinks";
import { Mail, MessageCircle } from "lucide-react";

export default function FinalCTA() {
  return (
    <Section
      background="teal-soft"
      spacing="sm"
      aria-labelledby="final-cta-heading"
    >
      <Container size="wide" className="text-center">
        <div className="mx-auto max-w-full space-y-6">
          {/* Headline */}
          <Heading as="h2" size="h2" align="center">
            Poți începe să lucrezi cu trauma ta, în siguranță.
          </Heading>

          {/* Supporting text */}
          <Text size="lg" className="text-muted-foreground" align="center">
            Îți ofer un spațiu sigur, ghidat, în care putem lucra împreună
            asupra traumelor și tiparelor care te blochează, în ritmul tău.
          </Text>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button size="lg" leftIcon={<MessageCircle />} variant="primary">
              Trimite un mesaj
            </Button>

            <Button
              size="lg"
              variant="purple"
              leftIcon={<Mail />}
              aria-label="Programează o discuție"
            >
              <a href={PHONE_HREF}>Programează o discuție</a>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
