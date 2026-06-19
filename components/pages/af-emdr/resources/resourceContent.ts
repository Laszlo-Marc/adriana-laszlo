export type DownloadResource = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  imageAlt: string;
  fileLabel: string;
  submitLabel: string;
  downloadHref?: string;
};

export const downloadResources: DownloadResource[] = [
  {
    id: "constientizare-emotionala",
    title: "Constientizare emotionala",
    eyebrow: "PDF gratuit",
    description:
      "Un instrument practic pentru observarea emoțiilor, gândurilor și reacțiilor corporale fără critică sau presiune.",
    image: "/blogs/resources/emotionala.webp",
    imageAlt: "Coperta PDF-ului Jurnal de conștientizare emoțională",
    fileLabel: "Jurnal de conștientizare emoțională",
    submitLabel: "Descarcă jurnalul",
  },
  {
    id: "constientizarea-corporala",
    title: "Conștientizarea corporală",
    eyebrow: "PDF gratuit",
    description:
      "Un ghid scurt pentru a observa semnalele corpului și a înțelege mai clar cum se manifestă stresul sau trauma.",
    image: "/blogs/resources/corporala.webp",
    imageAlt: "Coperta PDF-ului Conștientizarea corporală",
    fileLabel: "Conștientizarea corporală",
    submitLabel: "Descarcă ghidul",
  },
  {
    id: "infuzia-de-pozitiv",
    title: "Infuzia de pozitiv pentru cupluri",
    eyebrow: "PDF gratuit",
    description:
      "Un material blând pentru conectare, apreciere și comunicare mai prezentă în relația de cuplu.",
    image: "/blogs/resources/infuzia.webp",
    imageAlt: "Coperta PDF-ului Infuzia de pozitiv pentru cupluri",
    fileLabel: "Infuzia de pozitiv pentru cupluri",
    submitLabel: "Descarcă materialul",
  },
];
