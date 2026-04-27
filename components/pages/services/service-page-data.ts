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
    href: "#af-emdr",
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
