import type {
  BlogPost,
  BlogPostCard,
} from "@/components/pages/blog/post-page/blogPosts";
import { urlForImage } from "@/sanity/lib/image";
import type { SanityBlogPost, SanityBlogPostCard } from "@/sanity/types/blog";

const FALLBACK_BLOG_IMAGE = "/og/blog-og.jpg";

export function toSanityBlogPostCard(post: SanityBlogPostCard): BlogPostCard {
  return {
    id: post._id,
    title: post.title,
    excerpt: post.summary,
    href: `/blog/${post.slug}`,
    image: getSanityImageUrl(post.mainImage, {
      width: 900,
      height: 1200,
      fallback: FALLBACK_BLOG_IMAGE,
    }),
    imageAlt: post.mainImage?.alt ?? post.title,
    category: formatCategory(post.category),
    readingTime: post.readTime ?? "5 min",
  };
}

export function toSanityBlogPostCards(
  posts: SanityBlogPostCard[] = [],
): BlogPostCard[] {
  return posts.map(toSanityBlogPostCard);
}

export function toSanityBlogPost(post: SanityBlogPostCard): BlogPost {
  return {
    slug: post.slug,
    title: post.title,
    summary: post.summary,
    author: post.author?.name ?? "Psih. Adriana Laszlo",
    category: formatCategory(post.category),
    publishedAt: post.publishedAt,
    readTime: post.readTime ?? "5 min",
    image: getSanityImageUrl(post.mainImage, {
      width: 1600,
      height: 1000,
      fallback: FALLBACK_BLOG_IMAGE,
    }),
    imageAlt: post.mainImage?.alt ?? post.title,
    content: [],
  };
}

export function toSanityBlogPosts(
  posts: SanityBlogPostCard[] = [],
): BlogPost[] {
  return posts.map(toSanityBlogPost);
}

export function getSanityPostOgImage(post: SanityBlogPost) {
  const seoImage = post.seo?.image;

  if (seoImage) {
    return getSanityImageUrl(seoImage, {
      width: 1200,
      height: 630,
      fallback: FALLBACK_BLOG_IMAGE,
    });
  }

  return getSanityImageUrl(post.mainImage, {
    width: 1200,
    height: 630,
    fallback: FALLBACK_BLOG_IMAGE,
  });
}

function getSanityImageUrl(
  image: SanityBlogPostCard["mainImage"] | undefined,
  {
    width,
    height,
    fallback,
  }: {
    width: number;
    height: number;
    fallback: string;
  },
) {
  if (!image) return fallback;

  return urlForImage(image).width(width).height(height).fit("crop").url();
}

function formatCategory(category: string) {
  const categories: Record<string, string> = {
    psihoterapie: "Psihoterapie",
    trauma: "Traumă",
    "af-emdr": "AF-EMDR",
    relatii: "Relații",
    "reglare-emotionala": "Reglare emoțională",
  };

  return categories[category] ?? category;
}
