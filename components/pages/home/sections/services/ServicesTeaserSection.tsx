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
      src: "/services/individuala.webp",
      alt: "Ședință de psihoterapie individuală într-un cabinet calm și luminos",
    },
    accent: {
      overlayActive: "from-[#d6c894]/78 via-[#d6c894]/34 to-transparent",
      overlayInactive: "from-[#d6c894]/72 via-[#d6c894]/26 to-transparent",
      borderActive: "border-[#d6c894]/40",
      pillBg: "bg-[#d6c894]/70",
      pillText: "text-white",
      mobileRow: "bg-[#d6c894]/50",
      mobileRowActive: "bg-[#d6c894]",
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
      src: "/services/af-emdr.webp",
      alt: "Cadru terapeutic pentru procesarea traumelor prin AF-EMDR",
    },
    accent: {
      overlayActive: "from-[#b985c8]/78 via-[#b985c8]/32 to-transparent",
      overlayInactive: "from-[#b985c8]/72 via-[#b985c8]/24 to-transparent",
      borderActive: "border-[#b985c8]/45",
      pillBg: "bg-[#b985c8]/80",
      pillText: "text-white",
      mobileRow: "bg-[#b985c8]/50",
      mobileRowActive: "bg-[#b985c8]",
    },
  },
  {
    id: "online",
    title: "Psihoterapie online",
    subtitle: "Sprijin terapeutic flexibil, de oriunde te afli.",
    href: "/servicii#psihoterapie-online",
    label: "Online",
    image: {
      src: "/services/online.webp",
      alt: "Psihoterapie online într-un spațiu liniștit și profesionist",
    },
    accent: {
      overlayActive: "from-[#77c6b5]/72 via-[#77c6b5]/28 to-transparent",
      overlayInactive: "from-[#77c6b5]/66 via-[#77c6b5]/20 to-transparent",
      borderActive: "border-[#77c6b5]/45",
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
      src: "/events/ec-photo.webp",
      alt: "Evenimente și workshopuri de dezvoltare personală",
    },
    accent: {
      overlayActive: "from-[#77c6b5]/72 via-[#77c6b5]/28 to-transparent",
      overlayInactive: "from-[#77c6b5]/66 via-[#77c6b5]/20 to-transparent",
      borderActive: "border-[#77c6b5]/45",
      pillBg: "bg-[#94d6c8]/85",
      pillText: "text-charcoal",
      mobileRow: "bg-[#94d6c8]/50",
      mobileRowActive: "bg-[#94d6c8]",
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
