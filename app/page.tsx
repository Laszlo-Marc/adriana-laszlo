import HomeAboutTeaser from "@/components/pages/home/sections/about/HomeAboutTeaser";
import EducationMethodSection from "@/components/pages/home/sections/education-method/EducationMethodSection";
import Hero from "@/components/pages/home/sections/hero/Hero";
import HomeProblemsSection from "@/components/pages/home/sections/problems/HomeProblemsSection";
import HomeResourcesSection from "@/components/pages/home/sections/resources/HomeResourcesSection";
import ServicesTeaserSection from "@/components/pages/home/sections/services/ServicesTeaserSection";
import TestimonialsStack from "@/components/pages/home/sections/testimonials/Testimonials";
import { testimonialItems } from "@/components/pages/home/sections/testimonials/testimonials-data";
import FinalCTA from "@/components/sections/FinalCTA";
import { buildMetadata } from "@/lib/seo/metadata";
import { Metadata } from "next";
export const metadata: Metadata = buildMetadata({
  title: "Psihoterapie în Cluj-Napoca | Adriana Laszlo",
  description:
    "Psihoterapie individuală, AF-EMDR și evenimente terapeutice în Cluj-Napoca, pentru persoane care caută claritate, siguranță emoțională și sprijin profesionist.",
  path: "/",
  image: "/og/home-og.jpg",
  keywords: [
    "psihoterapie Cluj-Napoca",
    "psihoterapeut Cluj",
    "terapie traumă Cluj",
  ],
});
export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <HomeProblemsSection />
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
    </main>
  );
}
