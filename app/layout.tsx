import type { Metadata } from "next";
import { Cinzel, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

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
  title: {
    default: "Adriana Laszlo — Psiholog Psihoterapeut Cluj-Napoca",
    template: "%s | Adriana Laszlo",
  },
  description:
    "Psiholog-psihoterapeut cu peste 15 ani de experiență. Specializare în EMDR și EFT pentru tratarea traumelor. Cabinet în Cluj-Napoca și ședințe online.",
  keywords: [
    "psiholog Cluj",
    "psihoterapeut Cluj-Napoca",
    "EMDR Cluj",
    "terapie traume",
    "psihoterapie online",
    "Adriana Laszlo",
    "cabinet psihologic Cluj",
  ],
  authors: [{ name: "Adriana Laszlo" }],
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://adrianalaszlo.ro",
    siteName: "Adriana Laszlo — Psiholog Psihoterapeut",
    title: "Adriana Laszlo — Psiholog Psihoterapeut Cluj-Napoca",
    description:
      "Psiholog-psihoterapeut cu peste 15 ani de experiență. Specializare în EMDR și EFT.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={`${cinzel.variable} ${poppins.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
