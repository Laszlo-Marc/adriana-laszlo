import FinalCTA from "@/components/pages/about/AboutCTA";
import {
  blogPosts,
  freeResources,
} from "@/components/pages/blog/blog-page-data";
import BlogGridSection from "@/components/pages/blog/BlogGridSection";
import BlogHero from "@/components/pages/blog/BlogHero";
import ResourcesGridSection from "@/components/pages/blog/ResourceGridSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog și resurse gratuite | Adriana Laszlo",
  description:
    "Articole și resurse gratuite despre traumă, EMDR, reglare emoțională, relații și sănătate emoțională.",
};

export default function BlogPage() {
  return (
    <main>
      <BlogHero />
      <BlogGridSection posts={blogPosts} />
      <ResourcesGridSection resources={freeResources} />
      <FinalCTA />
    </main>
  );
}
