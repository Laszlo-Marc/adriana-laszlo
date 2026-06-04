import FinalCTA from "@/components/pages/about/AboutCTA";
import BlogHero from "@/components/pages/blog/BlogHero";
import { featuredBlogPosts } from "@/components/pages/blog/post-page/blogPosts";
import BlogPostsCarousel from "@/components/pages/blog/posts/BlogPostCarousel";

import DownloadResourcesSection from "@/components/pages/blog/resources/DownloadResourcesSection";
import BlogSocialSection from "@/components/pages/blog/social/BlogSocialSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog și resurse gratuite | Adriana Laszlo",
  description:
    "Articole și resurse gratuite despre traumă, EMDR, reglare emoțională, relații și sănătate emoțională.",
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogPostsCarousel posts={featuredBlogPosts} />
      <DownloadResourcesSection />
      <BlogSocialSection />
      <FinalCTA />
    </>
  );
}
