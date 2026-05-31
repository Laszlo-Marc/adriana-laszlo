import FinalCTA from "@/components/pages/about/AboutCTA";
import HomeAboutTeaser from "@/components/pages/home/sections/about/HomeAboutTeaser";
import EducationMethodMobileSection from "@/components/pages/home/sections/education-method/EducationMethodMobileSection";
import EducationMethodSection from "@/components/pages/home/sections/education-method/EducationMethodSection";
import Hero from "@/components/pages/home/sections/hero/Hero";
import HomeTrustStrip from "@/components/pages/home/sections/HomeTrustStrip";
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
      <HomeTrustStrip />
      <HomeAboutTeaser />
      <ServicesTeaserSection />
      <TestimonialsStack items={testimonialItems} />
      <EducationMethodSection />
      <HomeResourcesSection />
      <FinalCTA />
    </main>
  );
}
