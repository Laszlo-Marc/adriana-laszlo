import FinalCTA from "@/components/pages/about/AboutCTA";
import HomeAboutTeaser from "@/components/pages/home/sections/about/HomeAboutTeaser";
import EducationMethodMobileSection from "@/components/pages/home/sections/EducationMethodMobileSection";
import Hero from "@/components/pages/home/sections/hero/Hero";
import HomeProblemsSection from "@/components/pages/home/sections/problems/HomeProblemsSection";
import HomeResourcesSection from "@/components/pages/home/sections/resources/HomeResourcesSection";
import ServicesTeaserSection from "@/components/pages/home/sections/services/ServicesTeaserSection";
import TestimonialsStack from "@/components/pages/home/sections/testimonials/Testimonials";
import { testimonialItems } from "@/components/pages/home/sections/testimonials/testimonials-data";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <HomeProblemsSection />
      <HomeAboutTeaser />
      <ServicesTeaserSection />
      <TestimonialsStack items={testimonialItems} />
      <EducationMethodMobileSection />
      <HomeResourcesSection />
      <FinalCTA />
    </main>
  );
}
