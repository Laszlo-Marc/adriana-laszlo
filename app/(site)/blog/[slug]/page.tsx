import PortableTextRenderer from "@/components/portable-text/PortableTextRenderer";
import BlogPostHero from "@/components/pages/blog/post-page/BlogPostHero";
import RelatedPostsSection from "@/components/pages/blog/post-page/RelatedPostsSection";
import FinalCTA from "@/components/sections/FinalCTA";
import { buildMetadata } from "@/lib/seo/metadata";
import {
  getSanityPostOgImage,
  toSanityBlogPost,
  toSanityBlogPosts,
} from "@/sanity/adapters/blog";
import { getBlogPostBySlug, getBlogPosts } from "@/sanity/lib/fetchers";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  articleSchema,
  breadcrumbSchema,
  webPageSchema,
} from "@/lib/seo/schema";
import { JsonLd } from "@/lib/seo/JsonLd";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const posts = await getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return buildMetadata({
      title: "Articol negăsit | Adriana Laszlo",
      description: "Articolul căutat nu este disponibil.",
      path: `/blog/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: post.seo?.title ?? `${post.title} | Adriana Laszlo`,
    description: post.seo?.description ?? post.summary,
    path: `/blog/${post.slug}`,
    image: getSanityPostOgImage(post),
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
    noIndex: post.seo?.noIndex ?? false,
    keywords: [post.category],
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  const [post, allPosts] = await Promise.all([
    getBlogPostBySlug(slug),
    getBlogPosts(),
  ]);

  if (!post) {
    notFound();
  }

  const adaptedPost = toSanityBlogPost(post);
  const relatedPosts = toSanityBlogPosts(
    allPosts.filter((item) => item.slug !== post.slug),
  );

  const postPath = `/blog/${post.slug}`;

  const jsonLdData = [
    webPageSchema({
      title: post.title,
      description: post.summary,
      path: postPath,
    }),
    breadcrumbSchema([
      { name: "Acasă", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.title, path: postPath },
    ]),
    articleSchema({
      title: post.title,
      description: post.summary,
      path: postPath,
      image: getSanityPostOgImage(post),
      publishedAt: post.publishedAt,
      updatedAt: post.updatedAt,
    }),
  ];

  return (
    <>
      <JsonLd data={jsonLdData} />

      <BlogPostHero post={adaptedPost} />

      <PortableTextRenderer value={post.body} />

      {relatedPosts.length > 0 ? (
        <RelatedPostsSection posts={relatedPosts} currentPost={adaptedPost} />
      ) : null}

      <FinalCTA
        title="Te regăsești în acest articol?"
        description="Poți începe cu o conversație simplă despre ce trăiești, ce te blochează și ce fel de sprijin ți se potrivește."
        primaryLabel="Următorul pas"
        primaryButton={{
          label: "Programează o discuție",
          href: "/contact",
          variant: "urgent",
          size: "lg",
        }}
        secondaryLabel="Mai multe resurse"
        secondaryButtons={[
          {
            label: "Vezi serviciile",
            href: "/servicii",
            variant: "primary",
          },
          {
            label: "Înapoi la blog",
            href: "/blog",
            variant: "purple",
          },
        ]}
      />
    </>
  );
}
