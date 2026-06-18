import type { Metadata } from "next";

import LegalPage from "@/components/legal/LegalPage";
import { cookieSections, legalUpdatedAt } from "@/lib/legal/legalContent";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Politica de cookies",
  description:
    "Informații despre cookies, instrumente analitice, servicii externe și opțiunile de consimțământ folosite pe website.",
  path: "/politica-cookies",
  noIndex: true,
});

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Politica de cookies"
      description="Află ce tipuri de cookies și tehnologii similare pot fi folosite pe website și cum îți poți modifica preferințele."
      updatedAt={legalUpdatedAt}
      sections={cookieSections}
    />
  );
}
