export type DownloadResource = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  imageAlt: string;
  fileLabel: string;
  submitLabel: string;
  downloadHref: string;
  publicFileHref: string;
  downloadName: string;
  contentType: string;
  isNewsletterExclusive?: boolean;
};

export type DownloadableResourceConfig = DownloadResource;

export const downloadResources: DownloadResource[] = [
  {
    id: "ghid-resurse-pozitive",
    title: "Ghidul resurselor pozitive",
    eyebrow: "PDF gratuit",
    description:
      "Un ghid practic pentru descoperirea resurselor interioare de grijă, protecție, ghidaj și liniște.",
    image: "/blogs/resources/resurse-pozitive.webp",
    imageAlt: "Coperta PDF-ului Ghidul resurselor pozitive",
    fileLabel: "Ghidul resurselor pozitive",
    submitLabel: "Primește ghidul gratuit",
    downloadHref: "/downloadable-resources/ghid-resurse-pozitive.pdf",
    publicFileHref: "/downloadable-resources/ghid-resurse-pozitive.pdf",
    downloadName: "ghid-resurse-pozitive.pdf",
    contentType: "application/pdf",
    isNewsletterExclusive: true,
  },
  {
    id: "constientizare-emotionala",
    title: "Conștientizare emoțională",
    eyebrow: "PDF gratuit",
    description:
      "Un instrument practic pentru observarea emoțiilor, gândurilor și reacțiilor corporale fără critică sau presiune.",
    image: "/blogs/resources/emotionala.webp",
    imageAlt: "Coperta PDF-ului Jurnal de conștientizare emoțională",
    fileLabel: "Jurnal de conștientizare emoțională",
    submitLabel: "Descarcă jurnalul",
    downloadHref: "/downloadable-resources/constientizare-emotionala.pdf",
    publicFileHref: "/downloadable-resources/constientizare-emotionala.pdf",
    downloadName: "constientizare-emotionala.pdf",
    contentType: "application/pdf",
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
    downloadHref: "/downloadable-resources/constientizarea-corporala.pdf",
    publicFileHref: "/downloadable-resources/constientizarea-corporala.pdf",
    downloadName: "constientizarea-corporala.pdf",
    contentType: "application/pdf",
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
    downloadHref: "/downloadable-resources/infuzia-de-pozitiv.pdf",
    publicFileHref: "/downloadable-resources/infuzia-de-pozitiv.pdf",
    downloadName: "infuzia-de-pozitiv.pdf",
    contentType: "application/pdf",
  },
];

export const publicDownloadResources = downloadResources.filter(
  (resource) => !resource.isNewsletterExclusive,
);

export function getDownloadableResourceById(id: string) {
  return downloadResources.find((resource) => resource.id === id);
}
