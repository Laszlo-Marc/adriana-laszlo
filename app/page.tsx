import HomeAboutTeaser from "@/components/sections/about/HomeAboutTeaser";
import HomeAfEmdrSection from "@/components/sections/af-emdr/HomeAfEmdrSection";
import FinalCTA from "@/components/sections/CTABanner";
import HomeProgramsAndCenterSection from "@/components/sections/events/HomeProgramsAndCenterSection";
import Hero from "@/components/sections/hero/Hero";
import HomeValuesDividerSection from "@/components/sections/HomeValueBanner";
import ServicesTeaserSection from "@/components/sections/services/ServicesTeaserSection";
import HomeSocialSection from "@/components/sections/social/HomeSocialSection";
import TestimonialsStack from "@/components/sections/testimonials/Testimonials";
import { testimonialItems } from "@/components/sections/testimonials/testimonials-data";
import UpcomingProgramsSection from "@/components/sections/UpcomingProgramSection";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <HomeAboutTeaser />
      <ServicesTeaserSection />
      <HomeAfEmdrSection />
      <TestimonialsStack items={testimonialItems} />
      <HomeValuesDividerSection />
      <HomeProgramsAndCenterSection />
      <UpcomingProgramsSection />
      <HomeSocialSection />
      <FinalCTA />
    </main>
  );
}
