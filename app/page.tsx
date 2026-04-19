import AboutSection from "@/components/sections/About";
import BlogPostsSection from "@/components/sections/blog/BlogPostSection";
import FinalCTA from "@/components/sections/CTABanner";
import HomeEventsSection from "@/components/sections/events/EventsSection";
import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/services/ServicesSection";
import TestimonialsStack from "@/components/sections/testimonials/Testimonials";
import { testimonialItems } from "@/components/sections/testimonials/testimonials-data";
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
      <TestimonialsStack items={testimonialItems} />
      <BlogPostsSection />
      <FinalCTA />
    </main>
  );
}
