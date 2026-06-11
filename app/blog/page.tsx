import BlogHero from "@/components/pages/blog/BlogHero";
import { featuredBlogPosts } from "@/components/pages/blog/post-page/blogPosts";
import BlogPostsCarousel from "@/components/pages/blog/posts/BlogPostCarousel";

import DownloadResourcesSection from "@/components/pages/blog/resources/DownloadResourcesSection";
import BlogSocialSection from "@/components/pages/blog/social/BlogSocialSection";
import FinalCTA from "@/components/sections/FinalCTA";

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
      <BlogSocialSection />
      <FinalCTA
        title="Uneori, un articol deschide o întrebare mai profundă."
        description="Dacă te regăsești în ceea ce citești, poți face următorul pas într-un spațiu sigur, ghidat și adaptat nevoilor tale."
        primaryLabel="Pentru sprijin personal"
        primaryButton={{
          label: "Programează o ședință",
          href: "/contact",
          variant: "urgent",
          size: "lg",
        }}
        secondaryLabel="Continuă să explorezi"
        secondaryButtons={[
          {
            label: "Vezi serviciile",
            href: "/servicii",
            variant: "primary",
          },
          {
            label: "Despre mine",
            href: "/despre",
            variant: "purple",
          },
        ]}
      />
    </>
  );
}
