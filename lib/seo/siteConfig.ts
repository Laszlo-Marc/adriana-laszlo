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
    locality: "Cluj-Napoca",
    region: "Cluj",
    country: "RO",
  },
  contact: {
    email: "contact@example.ro",
    phone: "+40XXXXXXXXX",
  },
  social: {
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
  },
  defaultOgImage: "/og/default-og.jpg",
} as const;
