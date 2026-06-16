import { SanityEvent, SanityEventCard } from "../types/event";
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

export async function getEvents(): Promise<SanityEventCard[]> {
  return sanityClient.fetch<SanityEventCard[]>(eventsQuery);
}

export async function getEventBySlug(
  slug: string,
): Promise<SanityEvent | null> {
  return sanityClient.fetch<SanityEvent | null>(eventBySlugQuery, { slug });
}
