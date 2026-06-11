import type { ResourcePanel } from "./types";

export const resourcePanels: ResourcePanel[] = [
  {
    id: "blog",
    label: "Articole",
    eyebrow: "Articole",
    title: "Articole pentru claritate",
    desktopTitle: "Texte pentru claritate",
    description:
      "Texte despre traumă, anxietate, atașament și procesul terapeutic — scrise într-un limbaj clar, fără presiune.",
    desktopDescription:
      "Articole despre traumă, atașament, anxietate, relații și procesul de vindecare emoțională.",
    href: "/blog",
    cta: "Citește articolele",
    image: {
      src: "/home-page/resources/blog.jpg",
      alt: "Jurnal și carte deschisă, asociate cu resurse de psihoterapie",
    },
    tone: "teal",
  },
  {
    id: "downloads",
    label: "Resurse gratuite",
    eyebrow: "Resurse gratuite",
    title: "Materiale descărcabile",
    desktopTitle: "Exerciții și materiale utile",
    description:
      "Exerciții și ghiduri simple pentru reflecție, reglare emoțională și pregătirea primilor pași în terapie.",
    desktopDescription:
      "Resurse descărcabile pentru reflecție, reglare emoțională și pași mici de reconectare cu tine.",
    href: "/af-emdr#resurse",
    cta: "Vezi resursele gratuite",
    image: {
      src: "/home-page/resources/resurse2.jpg",
      alt: "Materiale de lucru și exerciții pentru reflecție și reglare emoțională",
    },
    tone: "purple",
  },
  {
    id: "social",
    label: "Social media",
    eyebrow: "Social media",
    title: "Resurse scurte pe social media",
    desktopTitle: "Conținut educațional scurt",
    description:
      "Fragmente educative, explicații și idei de reflecție despre traumă, atașament și reglare.",
    desktopDescription:
      "Idei, explicații și mesaje despre relații, traumă, limite, anxietate și atașament.",
    href: "https://www.instagram.com/",
    cta: "Urmărește pagina",
    image: {
      src: "/home-page/resources/social.jpg",
      alt: "Resurse video scurte despre traumă, atașament și reglare emoțională",
    },
    tone: "gold",
  },
];
