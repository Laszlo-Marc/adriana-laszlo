import { afEmdrFinalCtaContent } from "@/components/pages/af-emdr/afEmdrContent";
import AfEmdrHero from "@/components/pages/af-emdr/AfEmdrHero";
import AfEmdrComparisonSection from "@/components/pages/af-emdr/comparison/AfEmdrComparisonSection";
import AfEmdrMethodSection from "@/components/pages/af-emdr/method-explanation/AfEmdrMethodIntro";
import AfEmdrSpecialistSection from "@/components/pages/af-emdr/specialist/AfEmdrSpecialistSection";
import AfEmdrSuitabilitySection from "@/components/pages/af-emdr/suitability/AfEmdrSuitabilitySection";
import DownloadResourcesSection from "@/components/pages/af-emdr/resources/DownloadResourcesSection";
import { afEmdrFaqContent } from "@/components/sections/faq-data";
import FaqSection from "@/components/sections/FaqSection";
import FinalCTA from "@/components/sections/FinalCTA";
import { buildMetadata } from "@/lib/seo/metadata";
import { Metadata } from "next";
import { JsonLd } from "@/lib/seo/JsonLd";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seo/schema";

export const metadata: Metadata = buildMetadata({
  title: "AF-EMDR în Cluj-Napoca | Terapie pentru traumă",
  description:
    "Descoperă ce este AF-EMDR, cum funcționează și când poate fi potrivit pentru procesarea traumei, anxietății și blocajelor emoționale.",
  path: "/af-emdr",
  image: "/og/af-emdr-og.jpg",
  keywords: [
    "AF-EMDR Cluj",
    "AF-EMDR România",
    "terapie EMDR Cluj",
    "terapie traumă Cluj-Napoca",
  ],
});
export default function AfEmdrPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "AF-EMDR în Cluj-Napoca | Terapie pentru traumă",
            description:
              "Descoperă ce este AF-EMDR, cum funcționează și când poate fi potrivit pentru procesarea traumei, anxietății și blocajelor emoționale.",
            path: "/af-emdr",
          }),
          breadcrumbSchema([
            { name: "Acasă", path: "/" },
            { name: "AF-EMDR", path: "/af-emdr" },
          ]),
          faqSchema(afEmdrFaqContent),
        ]}
      />
      <AfEmdrHero />
      <AfEmdrMethodSection />
      <AfEmdrComparisonSection />
      <AfEmdrSuitabilitySection />
      <AfEmdrSpecialistSection />
      <DownloadResourcesSection />
      <FaqSection
        id="af-emdr-faq"
        items={afEmdrFaqContent}
        title="Întrebări frecvente"
        tone="charcoal"
        background="cream"
        spacing="md"
      />

      <FinalCTA
        title={afEmdrFinalCtaContent.title}
        description={afEmdrFinalCtaContent.description}
        primaryLabel={afEmdrFinalCtaContent.primaryLabel}
        primaryButton={afEmdrFinalCtaContent.primaryButton}
        secondaryLabel={afEmdrFinalCtaContent.secondaryLabel}
        secondaryButtons={afEmdrFinalCtaContent.secondaryButtons}
      />
    </>
  );
}
