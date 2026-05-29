import FinalCTA from "@/components/pages/about/AboutCTA";
import HomeAboutTeaser from "@/components/pages/home/sections/about/HomeAboutTeaser";
import HomeAfEmdrSection from "@/components/pages/home/sections/af-emdr/HomeAfEmdrSection";
import Hero from "@/components/pages/home/sections/hero/Hero";
import HomeProblemsSection from "@/components/pages/home/sections/problems/HomeProblemsSection";
import HomeProcessSection from "@/components/pages/home/sections/process/HomeProcessSection";
import HomeResourcesSection from "@/components/pages/home/sections/resources/HomeResourcesSection";
import { eventsService } from "@/components/pages/home/sections/services/data";
import ServicesTeaserSection from "@/components/pages/home/sections/services/ServicesTeaserSection";
import TraumaCenterMobileBlock from "@/components/pages/home/sections/services/TraumaCenterMobileBlock";
import TestimonialsStack from "@/components/pages/home/sections/testimonials/Testimonials";
import { testimonialItems } from "@/components/pages/home/sections/testimonials/testimonials-data";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <HomeProblemsSection />
      <HomeAboutTeaser />
      <ServicesTeaserSection />

      <HomeProcessSection />
      <TestimonialsStack items={testimonialItems} />
      <HomeResourcesSection />
      <FinalCTA />
    </main>
  );
}
