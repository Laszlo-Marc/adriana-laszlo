// sanity/lib/fetchers.ts

import { sanityClient } from "./client";
import {
  blogPostBySlugQuery,
  blogPostsQuery,
  eventBySlugQuery,
  eventsQuery,
} from "./queries";
import type { SanityBlogPost, SanityBlogPostCard } from "@/sanity/types/blog";

export async function getBlogPosts(): Promise<SanityBlogPostCard[]> {
  return sanityClient.fetch<SanityBlogPostCard[]>(blogPostsQuery);
}

export async function getBlogPostBySlug(
  slug: string,
): Promise<SanityBlogPost | null> {
  return sanityClient.fetch<SanityBlogPost | null>(blogPostBySlugQuery, {
    slug,
  });
}

// Temporary until events are typed properly
export async function getEvents() {
  return sanityClient.fetch(eventsQuery);
}

export async function getEventBySlug(slug: string) {
  return sanityClient.fetch(eventBySlugQuery, { slug });
}
