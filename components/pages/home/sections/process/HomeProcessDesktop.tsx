import Image from "next/image";
import { MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import { processSteps } from "./data";

export function HomeProcessDesktop() {
  return (
    <div className="hidden lg:block">
      <Container size="wider" padding="default">
        <div className="grid min-h-170 grid-cols-[1fr_0.95fr] items-center gap-16 py-28">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -left-16 top-1/2 h-88 w-[calc(100%+6rem)] -translate-y-1/2 bg-sand/45"
            />

            <div className="relative z-20 mx-auto aspect-5/4 w-[78%] max-w-136 overflow-hidden rounded-[2.25rem] bg-sand/20 shadow-[0_30px_90px_rgba(44,44,44,0.14)]">
              <Image
                src="/home-page/process2.jpg"
                alt="Spațiu calm de reflecție înainte de începerea procesului terapeutic"
                fill
                sizes="520px"
                className="object-cover object-center"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-transparent to-charcoal/10"
              />
            </div>
          </div>

          <div className="relative z-10 max-w-xl">
            <Text
              as="p"
              size="xs"
              color="gold"
              weight="medium"
              transform="upper"
              className="mb-4 tracking-[0.16em]"
            >
              Primii pași
            </Text>

            <Heading as="h2" size="h2" className="text-balance text-charcoal">
              Cum începem, fără presiune
            </Heading>

            <Text size="base" color="muted" className="mt-5 leading-7">
              Nu trebuie să vii cu toate răspunsurile pregătite. Începem prin a
              înțelege unde ești acum, ce ai nevoie și ce formă de sprijin ți se
              potrivește.
            </Text>

            <div className="mt-9 border-y border-gold/30">
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="grid grid-cols-[4rem_minmax(0,1fr)] gap-5 py-5 not-last:border-b not-last:border-gold/20"
                >
                  <span className="font-display text-3xl leading-none text-gold/70">
                    {step.number}
                  </span>

                  <div>
                    <Heading as="h3" size="h4" className="text-charcoal">
                      {step.title}
                    </Heading>

                    <Text size="sm" color="muted" className="mt-2 leading-6">
                      {step.description}
                    </Text>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button
                href="/contact"
                size="lg"
                leftIcon={<MessageCircle className="h-4 w-4" />}
              >
                Programează o discuție
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
