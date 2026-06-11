export type ResourcePanel = {
  id: "blog" | "downloads" | "social";
  label: string;
  eyebrow?: string;
  title: string;
  desktopTitle?: string;
  description: string;
  desktopDescription?: string;
  href: string;
  cta: string;
  image: {
    src: string;
    alt: string;
  };
  tone: "teal" | "purple" | "gold";
};
