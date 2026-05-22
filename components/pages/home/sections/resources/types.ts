export type ResourcePanel = {
  id: "blog" | "downloads" | "social";
  label: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  image: {
    src: string;
    alt: string;
  };
};
