import type { ComponentType } from "react";
import { Mail, MapPin, Phone, Clock3 } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export type ContactItem = {
  title: string;
  value: string;
  href?: string;
  icon: ComponentType<{ className?: string }>;
  external?: boolean;
};

export const contactItems: ContactItem[] = [
  {
    title: "Telefon",
    value: "+40 775 214 338",
    href: "tel:+40775214338",
    icon: Phone,
  },
  {
    title: "Email",
    value: "info@traumacenter.ro",
    href: "mailto:info@traumacenter.ro",
    icon: Mail,
  },
  {
    title: "Locație",
    value: "Strada Artelor nr.35, Cluj-Napoca, România",
    href: "https://maps.app.goo.gl/6YtPLrd2G7VgNTQg6",
    icon: MapPin,
    external: true,
  },
];

export const scheduleItem = {
  title: "Program orientativ",
  value: "Luni – Vineri, 09:00 – 18:00",
  icon: Clock3,
};

export const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/",
    icon: FaInstagram,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/",
    icon: FaFacebook,
  },
];
