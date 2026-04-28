import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import AccentText from "@/components/ui/AccentText";
import Button from "@/components/ui/Button";

export default function TherapistIntroSection() {
  return (
    <Section
      background="white"
      spacing="lg"
      aria-labelledby="therapist-intro-heading"
    >
      <Container size="wide">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative w-full max-w-md lg:max-w-lg">
            <div className="relative overflow-hidden rounded-4xl bg-sand/40 shadow-sm ring-1 ring-charcoal/10">
              <div className="relative aspect-4/5">
                <Image
                  src="/adriana8.PNG"
                  alt="Adriana Laszlo, psihoterapeut"
                  fill
                  sizes="(min-width: 1024px) 520px, 90vw"
                  className="object-cover object-[center_20%]"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-xl lg:ml-auto">
            <AccentText>Despre terapeut</AccentText>

            <Heading as="h2" size="h2" className="mt-3">
              Un spațiu terapeutic construit cu atenție și claritate
            </Heading>

            <Text className="mt-5 text-charcoal/75">
              Sunt Adriana Laszlo, psihoterapeut, iar lucrul meu este centrat pe
              înțelegerea experiențelor care continuă să influențeze prezentul.
              Integrez abordarea AF-EMDR într-un proces atent, orientat către
              siguranță, stabilizare și integrare.
            </Text>

            <Text className="mt-4 text-charcoal/75">
              Fiecare proces este diferit și este construit în ritmul tău, cu
              respect pentru ceea ce ai nevoie și pentru momentul în care te
              afli.
            </Text>

            <div className="mt-7">
              <Button variant="outline">
                <Link href="/despre">
                  Află mai multe despre mine
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
