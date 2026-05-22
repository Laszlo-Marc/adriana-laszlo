import type { ResourcePanel } from "./types";

export const resourcePanels: ResourcePanel[] = [
  {
    id: "blog",
    label: "Articole",
    title: "Articole pentru claritate",
    description:
      "Texte despre traumă, anxietate, atașament și procesul terapeutic — scrise într-un limbaj clar, fără presiune.",
    href: "/blog",
    cta: "Citește articolele",
    image: {
      src: "/home-page/resources/blog.jpg",
      alt: "Jurnal și carte deschisă, asociate cu resurse de psihoterapie",
    },
  },
  {
    id: "downloads",
    label: "Resurse gratuite",
    title: "Materiale descărcabile",
    description:
      "Exerciții și ghiduri simple pentru reflecție, reglare emoțională și pregătirea primilor pași în terapie.",
    href: "/resurse",
    cta: "Vezi resursele gratuite",
    image: {
      src: "/home-page/resources/ghid.webp",
      alt: "Materiale de lucru și exerciții pentru reflecție și reglare emoțională",
    },
  },
  {
    id: "social",
    label: "Social media",
    title: "Resurse scurte pe social media",
    description:
      "Fragmente educative, explicații și idei de reflecție despre traumă, atașament și reglare.",
    href: "https://www.instagram.com/",
    cta: "Urmărește pagina",
    image: {
      src: "/home-page/resources/social.jpg",
      alt: "Resurse video scurte despre traumă, atașament și reglare emoțională",
    },
  },
];
