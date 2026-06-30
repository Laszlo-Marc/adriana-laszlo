// components/pages/about/timeline/data.ts

export type StoryItem = {
  year: string;
  title: string;
  description: string;
  side: "left" | "right";
  image: string;
  tag?: string;
};

export const pathD =
  "M210 0 C 90 150, 85 275, 210 375 C 335 475, 335 610, 210 705 C 85 805, 90 980, 210 1160";

export const storyItems: StoryItem[] = [
  {
    year: "2007",
    title: "Începutul drumului în psihoterapie",
    description: "Primul training EMDR din România, cu Phd. Sophia Barna",
    side: "left",
    image: "/images/about/timeline-beginning.webp",
    tag: "Formare",
  },
  {
    year: "2008",
    title: "Formarea în psihoterapie integrativă",
    description:
      "Începutul formării în psihoterapie integrativă în cadrul Asociaţiei Române de Psihoterapie Integrativă (ARPI) şi a cursurilor de formare profesională",
    side: "right",
    image: "/images/about/timeline-trauma.webp",
    tag: "Traumă",
  },
  {
    year: "2017",
    title: "Specializare în Attachment-Focused EMDR",
    description:
      "Orientarea spre traumă şi tipare de ataşament prin cursurile de specializare: cursuri EFT, studiu, tabere şi workshopuri.",
    side: "left",
    image: "/services/af-emdr.webp",
    tag: "AF-EMDR",
  },
  {
    year: "Astăzi",
    title: "O abordare calmă, structurată și profundă",
    description:
      "Procesul terapeutic este adaptat ritmului fiecărei persoane, cu atenție la siguranță, claritate și stabilitate emoțională.",
    side: "right",
    image: "/images/about/timeline-present.webp",
    tag: "Prezent",
  },
];
