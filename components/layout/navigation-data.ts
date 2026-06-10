// components/layout/navigation-data.ts

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
  { id: 1, title: "Acasă", url: "/" },
  { id: 2, title: "Despre", url: "/despre" },
  { id: 3, title: "Servicii", url: "/servicii" },
  {
    id: 4,
    title: "Evenimente",
    url: "/evenimente",
    children: [
      {
        id: "af-emdr-grup",
        title: "Grup AF-EMDR",
        url: "/evenimente/grup-af-emdr-anxietate-stres-perfectionism",
        description: "Program de lucru ghidat în grup",
      },
    ],
  },
  { id: 5, title: "Blog", url: "/blog" },
  { id: 6, title: "AF-EMDR", url: "/af-emdr" },
];

export const footerNavItems = navItems.map(({ title, url }) => ({
  label: title,
  href: url,
}));

export const PHONE_DISPLAY = "0744 473 869";
export const PHONE_HREF = "tel:+40744473869";

export const WHATSAPP_DISPLAY = "WhatsApp";
export const WHATSAPP_HREF = "https://wa.me/40775214338";

export const TRAUMA_EMAIL = "info@traumacenter.ro";
export const TRAUMA_EMAIL_HREF = `mailto:${TRAUMA_EMAIL}`;

export const LOCATION_LABEL = "Trauma Center Cluj";
export const LOCATION_TEXT = "Strada Artelor 35, Cluj-Napoca, România";
