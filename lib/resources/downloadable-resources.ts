// lib/resources/downloadable-resources.ts

export type DownloadableResourceConfig = {
  id: string;
  title: string;
  downloadHref: string;
};

export const downloadableResources: DownloadableResourceConfig[] = [
  {
    id: "ghid-resurse-pozitive",
    title: "Ghid de Resurse Pozitive",
    downloadHref: "/resources/ghid-resurse-pozitive.pdf",
  },
  {
    id: "constientizarea-corporala",
    title: "Constientizare Corporala",
    downloadHref: "/resources/constientizarea-corporala.pdf",
  },
  {
    id: "infuzia-de-pozitiv",
    title: "Infuzia de pozitiv",
    downloadHref: "/resources/infuzia-de-pozitiv.pdf",
  },
  {
    id: "constientizare-emotionala",
    title: "Constientizare emotionala",
    downloadHref: "/resources/jurnal-de-terapie.pdf",
  },
];

export function getDownloadableResourceById(resourceId: string) {
  return downloadableResources.find((resource) => resource.id === resourceId);
}
