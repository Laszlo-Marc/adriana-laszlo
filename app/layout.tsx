import type { Metadata } from "next";
import { Cinzel, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/footer";
import { Allura } from "next/font/google";
import Navbar from "@/components/layout/navbar/Navbar";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/lib/seo/JsonLd";
import {
  personSchema,
  professionalServiceSchema,
  websiteSchema,
} from "@/lib/seo/schema";

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

export const metadata: Metadata = buildMetadata({
  title: "Adriana Laszlo | Psihoterapie și AF-EMDR în Cluj-Napoca",
  description:
    "Psihoterapie individuală, AF-EMDR și evenimente terapeutice în Cluj-Napoca, într-un cadru profesionist, calm și sigur.",
  path: "/",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ro"
      className={`${cinzel.variable} ${poppins.variable} ${allura.variable}`}
    >
      <body>
        <JsonLd data={websiteSchema()} />
        <JsonLd data={personSchema()} />
        <JsonLd data={professionalServiceSchema()} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
