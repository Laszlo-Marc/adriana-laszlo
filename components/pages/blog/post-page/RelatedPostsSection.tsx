import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

import type { BlogPost } from "./types";
import { BlogPostCard } from "../posts/blogPostsContent";
import BlogPostsCarouselClient from "../posts/BlogPostCarouselClient";

type RelatedPostsSectionProps = {
  posts: BlogPost[];
  currentPost: BlogPost;
  limit?: number;
};

function toBlogPostCard(post: BlogPost): BlogPostCard {
  return {
    id: post.slug,
    title: post.title,
    excerpt: post.summary,
    href: `/blog/${post.slug}`,
    image: post.image,
    imageAlt: post.imageAlt,
    category: post.category,
    readingTime: post.readTime,
  };
}

function getRelatedPosts({
  posts,
  currentPost,
  limit = 6,
}: {
  posts: BlogPost[];
  currentPost: BlogPost;
  limit?: number;
}) {
  const otherPosts = posts.filter((post) => post.slug !== currentPost.slug);

  const sameCategoryPosts = otherPosts.filter(
    (post) => post.category === currentPost.category,
  );

  const fallbackPosts = otherPosts.filter(
    (post) => post.category !== currentPost.category,
  );

  return [...sameCategoryPosts, ...fallbackPosts].slice(0, limit);
}

export default function RelatedPostsSection({
  posts,
  currentPost,
  limit = 6,
}: RelatedPostsSectionProps) {
  const relatedPosts = getRelatedPosts({
    posts,
    currentPost,
    limit,
  });

  if (!relatedPosts.length) return null;

  const relatedPostCards = relatedPosts.map(toBlogPostCard);

  return (
    <section
      aria-labelledby="related-posts-title"
      className="overflow-hidden bg-cream py-16 md:py-24"
    >
      <Container size="wide" padding="default">
        <div className="mb-10 max-w-2xl md:mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-gold">
            Articole recomandate
          </p>

          <Heading
            id="related-posts-title"
            as="h2"
            size="h2"
            className="text-charcoal"
          >
            Poate vrei să citești și
          </Heading>

          <Text size="base" className="mt-4 text-muted">
            Alte articole care continuă tema și te pot ajuta să înțelegi mai
            clar ce se întâmplă în interiorul tău.
          </Text>
        </div>

        <BlogPostsCarouselClient posts={relatedPostCards} />
      </Container>
    </section>
  );
}
