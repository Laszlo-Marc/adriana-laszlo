import HomeAboutTeaser from "@/components/sections/about/HomeAboutTeaser";
import BlogPostsSection from "@/components/sections/blog/BlogPostSection";
import FinalCTA from "@/components/sections/CTABanner";
import HomeProgramsAndCenterSection from "@/components/sections/events/HomeProgramsAndCenterSection";
import Hero from "@/components/sections/hero/Hero";
import HomeDesktopFlow from "@/components/sections/HomeDesktopFlow";
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
      <TestimonialsStack items={testimonialItems} />
      <BlogPostsSection />
      <FinalCTA />
    </main>
  );
}
