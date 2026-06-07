import { afEmdrFinalCtaContent } from "@/components/pages/af-emdr/afEmdrContent";
import AfEmdrFaqSection from "@/components/pages/af-emdr/AfEmdrFaqSection";
import AfEmdrHero from "@/components/pages/af-emdr/AfEmdrHero";
import AfEmdrSpecialistSection from "@/components/pages/af-emdr/AfEmdrSpecialistSection";
import AfEmdrComparisonSection from "@/components/pages/af-emdr/comparison/AfEmdrComparisonSection";
import AfEmdrMethodSection from "@/components/pages/af-emdr/method-explanation/AfEmdrMethodIntro";
import AfEmdrSuitabilitySection from "@/components/pages/af-emdr/suitability/AfEmdrSuitabilitySection";
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
      <AfEmdrFaqSection />

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
