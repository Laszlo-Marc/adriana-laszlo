// sanity/lib/queries.ts

import { groq } from "next-sanity";

export const blogPostCardFields = groq`
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  category,
  summary,
  featured,
  mainImage {
    ...,
    alt
  },
  author->{
    name,
    role
  }
`;

export const eventCardFields = groq`
  _id,
  title,
  "slug": slug.current,
  summary,
  status,
  registrationStatus,
  featured,
  schedule,
  details,
  mainImage {
    ...,
    alt
  }
`;

export const blogPostsQuery = groq`
  *[_type == "blogPost" && defined(slug.current)] | order(publishedAt desc) {
    ${blogPostCardFields}
  }
`;

export const eventsQuery = groq`
  *[_type == "event" && defined(slug.current)] | order(schedule.startDate asc) {
    ${eventCardFields}
  }
`;

export const blogPostBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    ${blogPostCardFields},
    updatedAt,
    body,
    seo,
    relatedPosts[]->{
      ${blogPostCardFields}
    }
  }
`;

export const eventBySlugQuery = groq`
  *[_type == "event" && slug.current == $slug][0] {
    ${eventCardFields},
    gallery,
    signup,
    storySections,
    faq,
    seo
  }
`;
