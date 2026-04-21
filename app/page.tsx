import HomeAboutTeaser from "@/components/sections/about/HomeAboutTeaser";
import BlogPostsSection from "@/components/sections/blog/BlogPostSection";
import FinalCTA from "@/components/sections/CTABanner";
import HomeProgramsAndCenterSection from "@/components/sections/events/HomeProgramsAndCenterSection";
import Hero from "@/components/sections/hero/Hero";
import HomeValuesDividerSection from "@/components/sections/HomeValueBanner";
import ServicesTeaserSection from "@/components/sections/services/ServicesTeaserSection";
import TestimonialsStack from "@/components/sections/testimonials/Testimonials";
import { testimonialItems } from "@/components/sections/testimonials/testimonials-data";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <HomeAboutTeaser />
      <ServicesTeaserSection />
      <HomeProgramsAndCenterSection />
      <HomeValuesDividerSection />
      <TestimonialsStack items={testimonialItems} />
      <BlogPostsSection />
      <FinalCTA />
    </main>
  );
}
