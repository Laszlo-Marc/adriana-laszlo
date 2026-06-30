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
    title: "Primul contact cu EMDR",
    description:
      "Primul training EMDR din Româniacu PhD Sofia Barna mi-a oferit o structură nouă, clară și eficientă pentru lucrul cu trauma, o metodă care avea să-mi definească profund munca.",
    side: "left",
    image: "/about/timeline/timeline1.jpeg",
    tag: "EMDR",
  },
  {
    year: "2008",
    title: "Formarea în psihoterapie integrativă",
    description:
      "Formarea în cadrul ARPI și numeroasele cursuri de specialitate m-au ajutat să înțeleg psihoterapia ca pe o artă rafinată în relația terapeutică.",
    side: "right",
    image: "/home-page/certifications.jpg",
    tag: "Formare",
  },
  {
    year: "2013",
    title: "Deschiderea propriului cabinet",
    description:
      "După 10 ani ca profesor titular, am ales să mă dedic complet psihoterapiei și muncii independente în propriul cabinet.",
    side: "left",
    image: "/about/timeline/timeline3.jpeg",
    tag: "Cabinet",
  },
  {
    year: "2017–2022",
    title: "Orientarea spre traumă și atașament",
    description:
      "Prin formări EFT, studiu, tabere și workshopuri, munca mea s-a orientat tot mai clar spre trauma de atașament și tiparele relaționale profunde.",
    side: "right",
    image: "/about/timeline/timeline4.jpeg",
    tag: "Traumă",
  },
  {
    year: "2022",
    title: "Specializare în Attachment-Focused EMDR",
    description:
      "Trainingul AF-EMDR în cadrul Institutului Parnell a adus o schimbare profundă în modul meu de lucru și a stat la baza dezvoltării programelor de grup AF-EMDR.",
    side: "left",
    image: "/about/timeline/timeline5.jpeg",
    tag: "AF-EMDR",
  },
  {
    year: "2023–prezent",
    title: "Trauma Center, workshopuri și programe de grup",
    description:
      "Am fondat Trauma Center din dorința de a crea comunitate și de a aduce metoda AF-EMDR către un public mai larg, prin workshopuri și evenimente.",
    side: "right",
    image: "/about/timeline/timeline6.jpeg",
    tag: "Prezent",
  },
];
