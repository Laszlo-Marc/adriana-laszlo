export type BlogPost = {
  title: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
};

export type FreeResource = {
  title: string;
  description: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
  downloadHref: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "Ce este trauma și cum se manifestă în viața de zi cu zi",
    category: "Traumă",
    imageSrc: "/blogs/blog1.webp",
    imageAlt: "Persoană într-un spațiu calm de reflecție",
    href: "/blog/ce-este-trauma",
  },
  {
    title: "EMDR: cum funcționează și când poate ajuta",
    category: "EMDR",
    imageSrc: "/blogs/blog2.webp",
    imageAlt: "Cabinet de psihoterapie calm și luminos",
    href: "/blog/emdr-cum-functioneaza",
  },
  {
    title: "Reglarea emoțională: pași simpli pentru momente dificile",
    category: "Reglare emoțională",
    imageSrc: "/blogs/blog3.webp",
    imageAlt: "Jurnal și cană de ceai pe o masă",
    href: "/blog/reglare-emotionala",
  },
];

export const freeResources: FreeResource[] = [
  {
    title: "Exercițiu de grounding",
    description:
      "Un exercițiu simplu pentru revenirea în prezent în momente de anxietate sau copleșire.",
    category: "PDF gratuit",
    imageSrc: "/blogs/ghid.webp",
    imageAlt: "Ilustrație calmă pentru exercițiu de grounding",
    downloadHref: "/downloads/ghid-de-resurse.pdf",
  },
  {
    title: "Jurnal de conștientizare emoțională",
    description:
      "Un instrument practic pentru observarea emoțiilor, gândurilor și reacțiilor corporale.",
    category: "PDF gratuit",
    imageSrc: "/blogs/emotionala.webp",
    imageAlt: "Jurnal deschis cu pix",
    downloadHref: "/downloads/constientizare-emotionala.pdf",
  },
  {
    title: "Exercițiu de grounding",
    description:
      "Un exercițiu simplu pentru revenirea în prezent în momente de anxietate sau copleșire.",
    category: "PDF gratuit",
    imageSrc: "/blogs/corporala.webp",
    imageAlt: "Ilustrație calmă pentru exercițiu de grounding",
    downloadHref: "/downloads/constientizare-corporala.pdf",
  },
  {
    title: "Jurnal de conștientizare emoțională",
    description:
      "Un instrument practic pentru observarea emoțiilor, gândurilor și reacțiilor corporale.",
    category: "PDF gratuit",
    imageSrc: "/blogs/infuzia.webp",
    imageAlt: "Jurnal deschis cu pix",
    downloadHref: "/downloads/infuzia-de-pozitiv.pdf",
  },
];
