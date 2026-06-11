import { Brain, Heart, Laptop, CalendarHeart } from "lucide-react";

export const servicesOverviewItems = [
  {
    title: "Psihoterapie individuală",
    description:
      "Un spațiu sigur pentru a explora dificultățile personale, relaționale sau emoționale, în ritmul tău.",
    href: "#psihoterapie-individuala",
    icon: Heart,
    tone: "teal",
    featured: false,
  },
  {
    title: "AF-EMDR",
    description:
      "Abordare specializată pentru traumă, atașament și experiențe emoționale care rămân active în prezent.",
    href: "/af-emdr",
    icon: Brain,
    tone: "purple",
    featured: true,
  },
  {
    title: "Terapie online",
    description:
      "Ședințe de psihoterapie desfășurate online, cu flexibilitate și continuitate terapeutică.",
    href: "#terapie-online",
    icon: Laptop,
    tone: "sand",
    featured: false,
  },
  {
    title: "Evenimente și programe",
    description:
      "Workshopuri, grupuri și programe tematice pentru dezvoltare personală și vindecare relațională.",
    href: "#evenimente",
    icon: CalendarHeart,
    tone: "gold",
    featured: false,
  },
] as const;

export const serviceDetails = [
  {
    id: "af-emdr",
    title: "Terapie AF-EMDR",
    description:
      "AF-EMDR este o abordare terapeutică orientată către procesarea experiențelor dificile care continuă să influențeze prezentul. Lucrul se desfășoară într-un ritm atent, cu accent pe siguranță, stabilizare și integrare.",
    imageSrc: "/services/af-emdr.jpg",
    imageAlt: "Imagine calmă asociată terapiei AF-EMDR",
    imageSide: "left",
    tone: "purple",
    imagePosition: "object-center",

    cta: {
      label: "Programează o discuție",
      href: "/contact",
      variant: "primary",
    },
  },
  {
    id: "psihoterapie-individuala",

    title: "Psihoterapie individuală",
    description:
      "Psihoterapia individuală oferă un cadru calm și confidențial în care poți explora emoții, relații, tipare și experiențe care îți influențează viața de zi cu zi.",
    imageSrc: "/services/individual.jpg",
    imageAlt: "Spațiu calm pentru psihoterapie individuală",
    imageSide: "right",
    tone: "teal",
    imagePosition: "object-center",

    cta: {
      label: "Programează o discuție",
      href: "/contact",
      variant: "purple",
    },
  },
  {
    id: "terapie-online",
    title: "Terapie Online",
    description:
      "Terapia online poate fi o opțiune potrivită atunci când ai nevoie de flexibilitate, continuitate și un spațiu terapeutic pe care îl poți accesa dintr-un loc în care te simți confortabil.",
    imageSrc: "/services/online.jpg",
    imageAlt: "Laptop într-un spațiu calm pentru terapie online",
    imageSide: "left",
    tone: "white",
    imagePosition: "object-center",

    cta: {
      label: "Întreabă despre terapia online",
      href: "/contact",
      variant: "primary",
    },
  },
  {
    id: "evenimente",
    title: "Workshopuri & programe",
    description:
      "Evenimentele și programele tematice creează contexte ghidate pentru explorare personală, dezvoltarea resurselor interioare și înțelegerea unor teme importante precum trauma, relațiile, atașamentul sau reglarea emoțională.",
    imageSrc: "/services/events.jpg",
    imageAlt: "Spațiu pregătit pentru un workshop terapeutic",
    imageSide: "right",
    tone: "cream",
    imagePosition: "object-center",

    cta: {
      label: "Vezi evenimentele",
      href: "/evenimente",
      variant: "urgent",
    },
  },
] as const;
