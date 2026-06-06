import type { ServiceItem } from "./types";

export const services: ServiceItem[] = [
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
    mobile: {
      description:
        "Un spațiu terapeutic sigur în care poți înțelege ce se întâmplă în interiorul tău, poți lucra cu emoțiile dificile și poți construi mai multă claritate, echilibru și încredere.",
      ctaLabel: "Află mai multe",
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
    href: "/af-emdr",
    label: "AF-EMDR",
    image: {
      src: "/home-page/services/af-emdr.jpg",
      alt: "Cadru terapeutic pentru procesarea traumelor prin AF-EMDR",
    },
    mobile: {
      description:
        "O abordare specializată pentru lucrul cu trauma, atașamentul și experiențele care au rămas active în corp și emoții. Procesul urmărește reprocesarea în siguranță, nu doar gestionarea simptomelor.",
      ctaLabel: "Descoperă AF-EMDR",
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
    mobile: {
      description:
        "Sprijin terapeutic flexibil, într-un cadru confidențial și clar, atunci când ai nevoie de continuitate sau nu poți ajunge fizic la cabinet.",
      ctaLabel: "Află cum funcționează",
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
      src: "/home-page/services/events.jpg",
      alt: "Evenimente și workshopuri de dezvoltare personală",
    },
    mobile: {
      description:
        "Evenimente și workshopuri dedicate înțelegerii emoțiilor, relațiilor, traumei și dezvoltării personale într-un cadru ghidat și profesionist.",
      ctaLabel: "Vezi evenimentele",
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

export const therapyServices = services.filter(
  (service) => service.id !== "events",
);

export const eventsService = services.find(
  (service) => service.id === "events",
);
