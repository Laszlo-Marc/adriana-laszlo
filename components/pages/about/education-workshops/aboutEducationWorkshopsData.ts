import {
  BookOpenText,
  GraduationCap,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

export type EducationCard = {
  title: string;
  description: string;
  href: string;
  cta: string;
  icon: LucideIcon;
  tone?: "default" | "warm";
};

export const educationCards: EducationCard[] = [
  {
    title: "Workshopuri EMDR",
    description:
      "Întâlniri practice în care participanții pot înțelege metoda, pot experimenta exerciții de reglare și pot primi claritate despre procesul terapeutic.",
    href: "/evenimente",
    cta: "Vezi workshopurile",
    icon: GraduationCap,
  },
  {
    title: "Articole și educație terapeutică",
    description:
      "Resurse despre traumă, atașament, relații, EMDR și felul în care experiențele vechi pot rămâne active în prezent.",
    href: "/blog",
    cta: "Citește articolele",
    icon: BookOpenText,
    tone: "warm",
  },
  {
    title: "Trauma Center",
    description:
      "Un spațiu construit pentru oameni care caută terapie, claritate și sprijin profesionist în lucrul cu trauma și vindecarea relațională.",
    href: "https://traumacenter.ro/",
    cta: "Descoperă centrul",
    icon: UsersRound,
  },
];
