import AboutSection from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/services/ServicesSection";
import ValueBanner from "@/components/sections/value-banner/ValueBanner";
export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <ValueBanner />
      <AboutSection />
      <ServicesSection />
    </main>
  );
}
