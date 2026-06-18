import BlogHero from "@/components/pages/blog/BlogHero";
import BlogPostsCarousel from "@/components/pages/blog/posts/BlogPostCarousel";
import BlogSocialSection from "@/components/pages/blog/social/BlogSocialSection";
import FinalCTA from "@/components/sections/FinalCTA";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { getBlogPosts } from "@/sanity/lib/fetchers";
import { toSanityBlogPostCards } from "@/sanity/adapters/blog";
import { JsonLd } from "@/lib/seo/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";

export const metadata: Metadata = buildMetadata({
  title: "Blog despre psihoterapie, traumă și vindecare emoțională",
  description:
    "Articole despre psihoterapie, traumă, relații, reglare emoțională și procese terapeutice, scrise pentru claritate, siguranță și înțelegere.",
  path: "/blog",
  image: "/og/blog-og.jpg",
  keywords: [
    "blog psihoterapie",
    "articole traumă psihologică",
    "blog terapie Cluj",
    "vindecare emoțională",
  ],
});

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const postCards = toSanityBlogPostCards(posts);

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Blog despre psihoterapie, traumă și vindecare emoțională",
            description:
              "Articole despre psihoterapie, traumă, relații, reglare emoțională și procese terapeutice, scrise pentru claritate, siguranță și înțelegere.",
            path: "/blog",
          }),
          breadcrumbSchema([
            { name: "Acasă", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        ]}
      />
      <BlogHero />
      <BlogPostsCarousel posts={postCards} />
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
