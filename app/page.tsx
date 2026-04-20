import HomeAboutTeaser from "@/components/sections/about/HomeAboutTeaser";
import BlogPostsSection from "@/components/sections/blog/BlogPostSection";
import FinalCTA from "@/components/sections/CTABanner";
import HomeEventsSection from "@/components/sections/events/EventsSection";
import Hero from "@/components/sections/hero/Hero";
import ServicesTeaserSection from "@/components/sections/services/ServicesTeaserSection";
import TestimonialsStack from "@/components/sections/testimonials/Testimonials";
import { testimonialItems } from "@/components/sections/testimonials/testimonials-data";
import TraumaCenterBanner from "@/components/sections/TraumaCenterBanner";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <HomeAboutTeaser />
      <ServicesTeaserSection />
      <HomeEventsSection />
      <TraumaCenterBanner />
      <TestimonialsStack items={testimonialItems} />
      <BlogPostsSection />
      <FinalCTA />
    </main>
  );
}
