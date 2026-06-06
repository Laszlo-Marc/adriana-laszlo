import AfEmdrHero from "@/components/pages/af-emdr/AfEmdrHero";

export const metadata = {
  title: "Terapie AF-EMDR în Cluj-Napoca | Trauma de atașament și EMDR",
  description:
    "Află ce este terapia AF-EMDR, cum funcționează și când poate ajuta în trauma de atașament, anxietate, stres post-traumatic și dificultăți relaționale.",
};

export default function AfEmdrPage() {
  return (
    <main>
      <AfEmdrHero />

      {/* Next sections will come here:
        <AfEmdrIntro />
        <AfEmdrComparison />
        <AfEmdrUseCases />
        <AfEmdrProcess />
        <AfEmdrSafety />
        <AfEmdrTherapist />
        <AfEmdrBenefits />
        <AfEmdrFaq />
        <FinalCTA />
      */}
    </main>
  );
}
