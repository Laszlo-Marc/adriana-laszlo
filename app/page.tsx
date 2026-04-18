import AboutSection from "@/components/sections/About";
import HomeEventsSection from "@/components/sections/events/EventsSection";
import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/services/ServicesSection";
import TraumaCenterBanner from "@/components/sections/TraumaCenterBanner";
import ValueBanner from "@/components/sections/value-banner/ValueBanner";
export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <ValueBanner />
      <AboutSection />

      <ServicesSection />
      <TraumaCenterBanner />
      <HomeEventsSection />
    </main>
  );
}
