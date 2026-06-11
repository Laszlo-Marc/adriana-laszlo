import { afEmdrFinalCtaContent } from "@/components/pages/af-emdr/afEmdrContent";
import AfEmdrHero from "@/components/pages/af-emdr/AfEmdrHero";
import AfEmdrComparisonSection from "@/components/pages/af-emdr/comparison/AfEmdrComparisonSection";
import AfEmdrMethodSection from "@/components/pages/af-emdr/method-explanation/AfEmdrMethodIntro";
import AfEmdrSpecialistSection from "@/components/pages/af-emdr/specialist/AfEmdrSpecialistSection";
import AfEmdrSuitabilitySection from "@/components/pages/af-emdr/suitability/AfEmdrSuitabilitySection";
import DownloadResourcesSection from "@/components/pages/blog/resources/DownloadResourcesSection";
import { afEmdrFaqContent } from "@/components/sections/faq-data";
import FaqSection from "@/components/sections/FaqSection";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata = {
  title: "Terapie AF-EMDR în Cluj-Napoca | Trauma de atașament și EMDR",
  description:
    "Află ce este terapia AF-EMDR, cum funcționează și când poate ajuta în trauma de atașament, anxietate, stres post-traumatic și dificultăți relaționale.",
};

export default function AfEmdrPage() {
  return (
    <main>
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
    </main>
  );
}
