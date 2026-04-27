import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import AccentText from "@/components/ui/AccentText";

const quickLinks = [
  {
    title: "AF-EMDR",
    href: "#af-emdr",
    imageSrc: "/services/af-emdr.jpg",
    imageAlt: "Detaliu calm de natură pentru terapia AF-EMDR",
  },
  {
    title: "Psihoterapie individuală",
    href: "#psihoterapie-individuala",
    imageSrc: "/services/individuala.jpg",
    imageAlt: "Spațiu cald și liniștit pentru psihoterapie individuală",
  },
  {
    title: "Terapie online",
    href: "#terapie-online",
    imageSrc: "/services/online.jpg",
    imageAlt: "Laptop într-un spațiu calm pentru terapie online",
  },
  {
    title: "Evenimente",
    href: "#evenimente",
    imageSrc: "/services/evenimente.jpg",
    imageAlt: "Cadru primitor pentru evenimente și workshopuri terapeutice",
  },
] as const;

export default function ServicesQuickLinks() {
  return (
    <Section
      background="cream"
      spacing="md"
      aria-labelledby="services-quick-links-heading"
    >
      <Container size="wide">
        <div className="mx-auto text-center mb-10">
          <AccentText className="text-4xl">Servicii</AccentText>

          <Heading as="h2" size="h2" align="center" className="mt-3 mb-10">
            Explorează formele de sprijin disponibile
          </Heading>
        </div>

        <nav
          aria-label="Navigare rapidă servicii"
          className="mx-auto mt-20 grid max-w-5xl grid-cols-2 gap-6 md:grid-cols-4"
        >
          {quickLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative size-32 overflow-hidden rounded-full border border-charcoal/10 bg-white shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-md md:size-44">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width: 768px) 144px, 128px"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-4 flex items-center gap-2 text-md font-medium tracking-wide text-charcoal">
                {item.title}
                <ArrowDown
                  className="size-4 text-teal transition group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
              </div>
            </Link>
          ))}
        </nav>
      </Container>
    </Section>
  );
}
