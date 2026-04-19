import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";
import Button from "../ui/Button";

export default function TraumaCenterBanner() {
  return (
    <Section
      spacing="sm"
      aria-labelledby="trauma-center-heading"
      background="purple-soft"
    >
      <Container size="full">
        <Link
          href="https://traumacenter.ro"
          target="_blank"
          rel="noreferrer"
          className="group block"
          aria-label="Descoperă mai mult despre Trauma Center"
        >
          <div className="mx-auto flex max-w-full flex-col items-center text-center">
            <div className="relative  h-24 w-55 sm:h-28 sm:w-65  lg:h-40 lg:w-75">
              <Image
                src="/home-page/tc-banner.svg"
                alt="Trauma Center"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 220px, (max-width: 1024px) 260px, 300px"
              />
            </div>
            <Heading as="h3" size="h2" align="center">
              Un spațiu dedicat vindecării traumelor profunde
            </Heading>

            <Text
              className="mt-5 max-w-4xl text-base leading-relaxed text-charcoal/80 sm:text-lg"
              align="center"
            >
              Fondat de Adriana László, Trauma Center este primul centru din
              România specializat în terapia EMDR și abordări integrate pentru
              traumă.
            </Text>

            <Button
              variant="primary"
              size="lg"
              className="mt-6"
              rightIcon={<ArrowRight size={15} />}
            >
              Descoperă Centrul
            </Button>
          </div>
        </Link>
      </Container>
    </Section>
  );
}
