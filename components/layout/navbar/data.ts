export type NavbarChildItem = {
  id: string;
  title: string;
  url: string;
  description?: string;
};

export type NavbarItem = {
  id: number;
  title: string;
  url: string;
  children?: NavbarChildItem[];
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
    children: [
      {
        id: "af-emdr-grup",
        title: "Grup AF-EMDR",
        url: "/evenimente/grup-af-emdr",
        description: "Program de lucru ghidat în grup",
      },
    ],
  },
  {
    id: 5,
    title: "Blog",
    url: "/blog",
  },
  { id: 6, url: "/af-emdr", title: "AF-EMDR" },
];

export const WHATSAPP_DISPLAY = "WhatsApp";
export const PHONE_DISPLAY = "0744 473 869";
export const PHONE_HREF = "tel:+40744473869";
export const WHATSAPP_HREF = "https://wa.me/40744473869";
