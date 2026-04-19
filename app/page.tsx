import AboutSignatureSection from "@/components/sections/about/AboutSection";
import BlogPostsSection from "@/components/sections/blog/BlogPostSection";
import FinalCTA from "@/components/sections/CTABanner";
import HomeEventsSection from "@/components/sections/events/EventsSection";
import Hero from "@/components/sections/hero/HeroSection";
import ServicesSection from "@/components/sections/services/ServicesSection";
import TestimonialsStack from "@/components/sections/testimonials/Testimonials";
import { testimonialItems } from "@/components/sections/testimonials/testimonials-data";
import TraumaCenterBanner from "@/components/sections/TraumaCenterBanner";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <AboutSignatureSection />
      <ServicesSection />
      <HomeEventsSection />
      <TraumaCenterBanner />
      <TestimonialsStack items={testimonialItems} />
      <BlogPostsSection />
      <FinalCTA />
    </main>
  );
}
