export const navLinks = [
  { href: "/", label: "Acasă" },
  { href: "/servicii", label: "Servicii" },
  { href: "/blog", label: "Blog" },
  { href: "/evenimente", label: "Evenimente" },
  { href: "/contact", label: "Contact" },
] as const;

export const PHONE_DISPLAY = "0744 473 869";
export const PHONE_HREF = "tel:+40744473869";

export type NavLink = (typeof navLinks)[number];
