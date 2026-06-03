import BlogPostContent from "@/components/pages/blog/post-page/BlogPostContent";
import BlogPostCTA from "@/components/pages/blog/post-page/BlogPostCta";
import BlogPostHero from "@/components/pages/blog/post-page/BlogPostHero";
import {
  blogPosts,
  getBlogPostBySlug,
  getRelatedPosts,
} from "@/components/pages/blog/post-page/blogPosts";
import RelatedPostsSection from "@/components/pages/blog/post-page/RelatedPostsSection";
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
  const post = getBlogPostBySlug(slug);

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
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug);

  return (
    <>
      <BlogPostHero post={post} />
      <BlogPostContent content={post.content} />
      <BlogPostCTA />

      {relatedPosts.length > 0 ? (
        <RelatedPostsSection posts={relatedPosts} currentPost={post} />
      ) : null}
    </>
  );
}
