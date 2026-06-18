import type { Metadata } from "next";

import LegalPage from "@/components/legal/LegalPage";
import { legalUpdatedAt, termsSections } from "@/lib/legal/legalContent";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Termeni și condiții",
  description:
    "Termeni privind utilizarea website-ului Cabinetului de psihoterapie individual Adriana Laszlo.",
  path: "/termeni-si-conditii",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Termeni și condiții"
      description="Informații despre utilizarea website-ului, caracterul informativ al conținutului și limitele responsabilității."
      updatedAt={legalUpdatedAt}
      sections={termsSections}
    />
  );
}
