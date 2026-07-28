import type { Metadata } from "next";
import { Allura, Cinzel, Poppins } from "next/font/google";

import "./globals.css";

import { siteConfig } from "@/lib/seo/siteConfig";

const allura = Allura({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-allura",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin", "latin-ext"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Adriana Laszlo | Psihoterapeut în Cluj-Napoca",
    template: "%s | Adriana Laszlo",
  },
  description: siteConfig.description,
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="ro"
      data-scroll-behavior="smooth"
      className={`${cinzel.variable} ${poppins.variable} ${allura.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
