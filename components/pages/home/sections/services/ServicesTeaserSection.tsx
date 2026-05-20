import Image from "next/image";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import { ServicesAccordion } from "./ServicesAccordion";

const services = [
  {
    id: "individuala",
    title: "Psihoterapie individuală",
    subtitle: "Spațiu sigur pentru claritate, echilibru și schimbare reală.",
    href: "/servicii#psihoterapie-individuala",
    label: "Individual",
    image: {
      src: "/home-page/services/individual.jpg",
      alt: "Ședință de psihoterapie individuală într-un cabinet calm și luminos",
    },
    accent: {
      overlayActive: "from-teal/78 via-teal/34 to-transparent",
      overlayInactive: "from-teal/72 via-teal/26 to-transparent",
      borderActive: "border-teal/40",
      pillBg: "bg-teal/70",
      pillText: "text-white",
      mobileRow: "bg-teal/50",
      mobileRowActive: "bg-teal",
    },
  },
  {
    id: "af-emdr",
    title: "Terapie AF-EMDR",
    subtitle:
      "Abordare specializată pentru procesarea traumelor și blocajelor emoționale.",
    href: "/servicii#af-emdr",
    label: "AF-EMDR",
    image: {
      src: "/home-page/services/af-emdr.jpg",
      alt: "Cadru terapeutic pentru procesarea traumelor prin AF-EMDR",
    },
    accent: {
      overlayActive: "from-purple/78 via-purple/32 to-transparent",
      overlayInactive: "from-purple/72 via-purple/24 to-transparent",
      borderActive: "border-purple/45",
      pillBg: "bg-purple/80",
      pillText: "text-white",
      mobileRow: "bg-purple/50",
      mobileRowActive: "bg-purple",
    },
  },
  {
    id: "online",
    title: "Psihoterapie online",
    subtitle: "Sprijin terapeutic flexibil, de oriunde te afli.",
    href: "/servicii#psihoterapie-online",
    label: "Online",
    image: {
      src: "/home-page/services/online.jpg",
      alt: "Psihoterapie online într-un spațiu liniștit și profesionist",
    },
    accent: {
      overlayActive: "from-teal/72 via-teal/28 to-transparent",
      overlayInactive: "from-teal/66 via-teal/20 to-transparent",
      borderActive: "border-teal/45",
      pillBg: "bg-[#94d6c8]/85",
      pillText: "text-charcoal",
      mobileRow: "bg-[#94d6c8]/50",
      mobileRowActive: "bg-[#94d6c8]",
    },
  },
  {
    id: "events",
    title: "Evenimente și workshopuri",
    subtitle: "Oportunități de învățare și dezvoltare personală.",
    href: "/servicii#evenimente",
    label: "Evenimente",
    image: {
      src: "/home-page/services/evenimente.jpg",
      alt: "Evenimente și workshopuri de dezvoltare personală",
    },
    accent: {
      overlayActive: "from-purple/72 via-purple/28 to-transparent",
      overlayInactive: "from-purple/66 via-purple/20 to-transparent",
      borderActive: "border-purple/45",
      pillBg: "bg-purple/85",
      pillText: "text-charcoal",
      mobileRow: "bg-purple/50",
      mobileRowActive: "bg-purple",
    },
  },
];

export default function ServicesTeaserSection() {
  return (
    <Section
      id="servicii"
      background="cream"
      spacing="md"
      aria-labelledby="services-teaser-heading"
      className="relative overflow-hidden"
    >
      <Container size="wide" padding="default" className="relative z-10">
        <div className="mx-auto max-w-none text-center">
          <Heading
            as="h2"
            size="h2"
            className="mt-3 text-charcoal"
            align="center"
          >
            Forme de lucru gândite pentru nevoi diferite
          </Heading>
        </div>

        <div className="mt-10">
          <ServicesAccordion items={services} />
        </div>
      </Container>
    </Section>
  );
}
