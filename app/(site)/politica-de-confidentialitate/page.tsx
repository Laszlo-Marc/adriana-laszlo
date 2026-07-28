import type { Metadata } from "next";

import LegalPage from "@/components/legal/LegalPage";
import { legalUpdatedAt, privacySections } from "@/lib/legal/legalContent";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Politica de confidențialitate",
  description:
    "Informații despre modul în care Cabinetul de psihoterapie individual Adriana Laszlo colectează, utilizează și protejează datele personale.",
  path: "/politica-de-confidentialitate",
  noIndex: true,
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Politica de confidențialitate"
      description="Află cum sunt colectate, utilizate și protejate datele personale atunci când folosești website-ul sau formularele disponibile."
      updatedAt={legalUpdatedAt}
      sections={privacySections}
    />
  );
}
