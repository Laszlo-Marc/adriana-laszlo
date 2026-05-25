export type NavbarItem = {
  id: number;
  title: string;
  url: string;
};

export type ServiceNavItem = {
  title: string;
  description: string;
  href: string;
};

export const navItems: NavbarItem[] = [
  {
    id: 1,
    title: "Acasă",
    url: "/",
  },
  {
    id: 2,
    title: "Despre",
    url: "/despre",
  },
  {
    id: 3,
    title: "Servicii",
    url: "/servicii",
  },
  {
    id: 4,
    title: "Evenimente",
    url: "/evenimente",
  },
  {
    id: 5,
    title: "Blog",
    url: "/blog",
  },
];

export const serviceNavItems: ServiceNavItem[] = [
  {
    title: "Terapia traumei",
    description:
      "Sprijin terapeutic pentru traumă, anxietate și reglare emoțională.",
    href: "/servicii/terapia-traumei",
  },
  {
    title: "AF-EMDR",
    description:
      "O abordare profundă pentru procesarea experiențelor dificile.",
    href: "/servicii/af-emdr",
  },
  {
    title: "Atașament",
    description:
      "Lucru terapeutic cu răni relaționale, apropiere și siguranță.",
    href: "/servicii/atasament",
  },
  {
    title: "Anxietate",
    description:
      "Sprijin pentru reacții intense, tensiune și sentimentul de alertă.",
    href: "/servicii/anxietate",
  },
];

export const PHONE_DISPLAY = "0744 473 869";
export const PHONE_HREF = "tel:+40744473869";
export const WHATSAPP_HREF = "https://wa.me/40744473869";
