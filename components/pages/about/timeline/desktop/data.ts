export type StoryItem = {
  year: string;
  title: string;
  description: string;
  side: "left" | "right";
};

export const pathD =
  "M210 0 C 90 150, 85 275, 210 375 C 335 475, 335 610, 210 705 C 85 805, 90 980, 210 1160";

export const storyItems: StoryItem[] = [
  {
    year: "2012",
    title: "Începutul drumului în psihoterapie",
    description:
      "Un parcurs profesional construit în jurul înțelegerii omului, a relației terapeutice și a modului în care experiențele dificile influențează prezentul.",
    side: "left",
  },
  {
    year: "2018",
    title: "Orientarea către traumă și atașament",
    description:
      "Practica s-a conturat tot mai clar în jurul lucrului cu trauma, reglarea emoțională, relațiile și siguranța interioară.",
    side: "right",
  },
  {
    year: "2020",
    title: "Specializare în Attachment-Focused EMDR",
    description:
      "Formarea în AF-EMDR a devenit un reper central în felul în care lucrează cu trauma, atașamentul și procesarea experiențelor dificile.",
    side: "left",
  },
  {
    year: "Astăzi",
    title: "O abordare calmă, structurată și profundă",
    description:
      "Procesul terapeutic este adaptat ritmului fiecărei persoane, cu atenție la siguranță, claritate și stabilitate emoțională.",
    side: "right",
  },
];
