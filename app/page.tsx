import FinalCTA from "@/components/pages/about/AboutCTA";
import HomeAboutTeaser from "@/components/pages/home/sections/about/HomeAboutTeaser";
import HomeAfEmdrSection from "@/components/pages/home/sections/af-emdr/HomeAfEmdrSection";

import HomeProgramsAndCenterSection from "@/components/pages/home/sections/events/HomeProgramsAndCenterSection";
import Hero from "@/components/pages/home/sections/hero/Hero";
import HomeValuesDividerSection from "@/components/pages/home/sections/HomeValueBanner";
import ServicesTeaserSection from "@/components/pages/home/sections/services/ServicesTeaserSection";
import HomeSocialSection from "@/components/pages/home/sections/social/HomeSocialSection";
import TestimonialsStack from "@/components/pages/home/sections/testimonials/Testimonials";
import { testimonialItems } from "@/components/pages/home/sections/testimonials/testimonials-data";
import UpcomingProgramsSection from "@/components/pages/home/sections/UpcomingProgramSection";

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
