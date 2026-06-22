export type DownloadResource = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  imageAlt: string;
  fileLabel: string;
  submitLabel: string;

  /** Route used by the app if you want to force an attachment download. */
  downloadHref: string;

  /** Direct public file URL. This must exist under /public. */
  publicFileHref: string;

  downloadName: string;
  contentType: string;

  /** Keep newsletter-only resources out of the visible resource section. */
  isNewsletterExclusive?: boolean;
};

/** Backwards-compatible alias for older resource email code. */
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
    downloadHref: "/api/resources/ghid-resurse-pozitive",
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
    downloadHref: "/api/resources/constientizare-emotionala",
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
    downloadHref: "/api/resources/constientizarea-corporala",
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
    downloadHref: "/api/resources/infuzia-de-pozitiv",
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
