import HomeAboutTeaser from "@/components/pages/home/sections/about/HomeAboutTeaser";
import EducationMethodSection from "@/components/pages/home/sections/education-method/EducationMethodSection";
import Hero from "@/components/pages/home/sections/hero/Hero";
import HomeStatsStrip from "@/components/pages/home/sections/HomeStatsStrip";
import HomeProblemsSection from "@/components/pages/home/sections/problems/HomeProblemsSection";
import HomeResourcesSection from "@/components/pages/home/sections/resources/HomeResourcesSection";
import ServicesTeaserSection from "@/components/pages/home/sections/services/ServicesTeaserSection";
import { testimonialItems } from "@/components/pages/home/sections/testimonials/shared/testimonials-data";
import TestimonialsStack from "@/components/pages/home/sections/testimonials/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";
import { JsonLd } from "@/lib/seo/JsonLd";
import { webPageSchema } from "@/lib/seo/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psihoterapie în Cluj-Napoca",
  description:
    "Psihoterapie integrativă și AF-EMDR în Cluj-Napoca, cu accent pe traumă, atașament și reglare emoțională.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
  },
};
export default function HomePage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Psihoterapie în Cluj-Napoca",
          description:
            "Psihoterapie integrativă și AF-EMDR în Cluj-Napoca, cu accent pe traumă, atașament și reglare emoțională.",
          path: "/",
        })}
      />
      <Hero />
      <HomeProblemsSection />
      <HomeStatsStrip />
      <HomeAboutTeaser />
      <ServicesTeaserSection />
      <TestimonialsStack items={testimonialItems} />
      <EducationMethodSection />
      <HomeResourcesSection />
      <FinalCTA
        title="Fă primul pas."
        description="Dacă simți că este momentul potrivit, putem începe cu o conversație simplă despre ce trăiești și ce ai nevoie să se schimbe."
        primaryLabel="Lucrează cu mine"
        primaryButton={{
          label: "Programează o ședință",
          href: "/contact",
          variant: "urgent",
          size: "lg",
        }}
        secondaryLabel="Explorează mai întâi"
        secondaryButtons={[
          {
            label: "Vezi serviciile",
            href: "/servicii",
            variant: "primary",
          },
          {
            label: "Despre mine",
            href: "/despre",
            variant: "purple",
          },
        ]}
      />
    </>
  );
}
