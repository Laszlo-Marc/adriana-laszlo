import ConditionMarqueeSection from "@/components/pages/services/ConditionsTreatedMarquee";
import FeesSection from "@/components/pages/services/FeesSection";
import ServicesHero from "@/components/pages/services/ServicesHero";
import ServicesQuickLinks from "@/components/pages/services/ServicesQuickLinks";
import TherapistIntroSection from "@/components/pages/services/TherapistIntroSection";
import ServicesDetails from "@/components/pages/services/service-details/ServiceDetails";
import FinalCTA from "@/components/sections/FinalCTA";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Servicii de psihoterapie în Cluj-Napoca | Adriana Laszlo",
  description:
    "Servicii de psihoterapie individuală, AF-EMDR, terapie online și evenimente terapeutice în Cluj-Napoca, într-un cadru profesionist și sigur.",
  path: "/servicii",
  image: "/og/services-og.jpg",
  keywords: [
    "servicii psihoterapie Cluj",
    "psihoterapie individuală Cluj",
    "terapie online Cluj",
    "terapie traumă Cluj",
  ],
});
export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesQuickLinks />
      <ServicesDetails />
      <ConditionMarqueeSection />
      <TherapistIntroSection />
      <FeesSection />
      <FinalCTA
        title="Nu trebuie să știi exact de unde să începi."
        description="Putem clarifica împreună ce tip de sprijin se potrivește pentru tine, în funcție de ce trăiești acum și de ritmul în care te simți pregătit/ă să lucrezi."
        primaryLabel="Clarifică următorul pas"
        primaryButton={{
          label: "Programează o discuție",
          href: "/contact",
          variant: "urgent",
          size: "lg",
        }}
        secondaryLabel="Explorează opțiunile"
        secondaryButtons={[
          {
            label: "Despre AF-EMDR",
            href: "/servicii",
            variant: "primary",
          },
          {
            label: "Programe & evenimente",
            href: "/evenimente",
            variant: "purple",
          },
        ]}
      />
    </>
  );
}
