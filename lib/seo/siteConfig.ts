export const siteConfig = {
  name: "Adriana Laszlo",
  legalName: "Adriana Laszlo",
  siteName: "Adriana Laszlo | Psihoterapie și AF-EMDR în Cluj-Napoca",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://adrianalaszlo.ro",
  defaultLocale: "ro_RO",
  language: "ro",
  description:
    "Psihoterapie individuală, AF-EMDR și evenimente terapeutice în Cluj-Napoca, cu o abordare calmă, profesionistă și orientată spre siguranță emoțională.",
  keywords: [
    "psihoterapie Cluj",
    "psihoterapeut Cluj-Napoca",
    "terapie EMDR Cluj",
    "AF-EMDR România",
    "terapie traumă Cluj",
    "psihoterapie individuală Cluj",
  ],
  address: {
    locality: "Strada Artelor nr.35, Cluj-Napoca, Romania",
    region: "Cluj",
    country: "RO",
  },
  contact: {
    email: "adrianalaszlo@gmail.com",
  },
  social: {
    instagram: "https://www.instagram.com/adrianalaszlo/",
    facebook: "https://www.facebook.com/psiholg",
  },
  defaultOgImage: "/og/default-og.jpg",
} as const;
const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://adrianalaszlo.ro";

export const SITE_URL = rawSiteUrl.replace(/\/+$/, "");
export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return new URL(normalizedPath, `${SITE_URL}/`).toString();
}
