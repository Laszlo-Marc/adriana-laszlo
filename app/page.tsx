import HomeAboutTeaser from "@/components/pages/home/sections/about/HomeAboutTeaser";
import EducationMethodSection from "@/components/pages/home/sections/education-method/EducationMethodSection";
import Hero from "@/components/pages/home/sections/hero/Hero";
import HomeTrustStrip from "@/components/pages/home/sections/HomeTrustStrip";
import HomeProblemsSection from "@/components/pages/home/sections/problems/HomeProblemsSection";
import HomeResourcesSection from "@/components/pages/home/sections/resources/HomeResourcesSection";
import ServicesTeaserSection from "@/components/pages/home/sections/services/ServicesTeaserSection";
import TestimonialsStack from "@/components/pages/home/sections/testimonials/Testimonials";
import { testimonialItems } from "@/components/pages/home/sections/testimonials/testimonials-data";
import FinalCTA from "@/components/sections/FinalCTA";

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
