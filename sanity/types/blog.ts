// sanity/types/blog.ts

import type { PortableTextBlock } from "next-sanity";
import type { Image } from "sanity";

export type SanityImageWithAlt = Image & {
  alt?: string;
};

export type SanityBlogPostCard = {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  category: string;
  summary: string;
  readTime?: string;
  featured?: boolean;
  mainImage: SanityImageWithAlt;
  author?: {
    name?: string;
    role?: string;
  };
};

export type SanityBlogPost = SanityBlogPostCard & {
  updatedAt?: string;
  body: PortableTextBlock[];
  seo?: {
    title?: string;
    description?: string;
    image?: SanityImageWithAlt;
    noIndex?: boolean;
  };
  relatedPosts?: SanityBlogPostCard[];
};
