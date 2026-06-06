import BlogPostContent from "@/components/pages/blog/post-page/BlogPostContent";
import BlogPostHero from "@/components/pages/blog/post-page/BlogPostHero";
import { blogPosts } from "@/components/pages/blog/post-page/blogPosts";
import RelatedPostsSection from "@/components/pages/blog/post-page/RelatedPostsSection";
import FinalCTA from "@/components/sections/FinalCTA";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Articol negăsit",
    };
  }

  return {
    title: `${post.title} | Adriana Laszlo`,
    description: post.summary,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.publishedAt,
      images: [
        {
          url: post.image,
          alt: post.imageAlt,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <BlogPostHero post={post} />
      <BlogPostContent content={post.content} />

      {relatedPosts.length > 0 ? (
        <RelatedPostsSection posts={relatedPosts} currentPost={post} />
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
