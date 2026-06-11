import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

import BlogPostImageCard from "../posts/BlogPostImageCard";
import { toBlogPostCard } from "./blogPosts";
import type { BlogPost } from "./blogPosts";

type RelatedPostsSectionProps = {
  posts: BlogPost[];
  currentPost: BlogPost;
  limit?: number;
};

function getRelatedPosts({
  posts,
  currentPost,
  limit = 3,
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
  limit = 3,
}: RelatedPostsSectionProps) {
  const relatedPosts = getRelatedPosts({
    posts,
    currentPost,
    limit,
  });

  if (!relatedPosts.length) return null;

  const relatedPostCards = relatedPosts.map(toBlogPostCard);

  return (
    <Section
      background="cream"
      spacing="sm"
      aria-labelledby="related-posts-title"
      className="relative overflow-hidden"
    >
      <Container size="wide" padding="default">
        <div className="mb-10 md:mb-12">
          <Heading
            id="related-posts-title"
            as="h2"
            size="h2"
            align="center"
            className="text-charcoal"
          >
            Poate vrei să citești și
          </Heading>
        </div>

        <div className="-mx-4 overflow-x-auto px-4 [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:mx-0 lg:overflow-visible lg:px-0 [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex snap-x snap-mandatory gap-5 lg:grid lg:grid-cols-3 lg:gap-6">
            {relatedPostCards.map((post) => (
              <div
                key={post.id}
                className="min-w-0 flex-[0_0_86%] snap-start sm:flex-[0_0_58%] lg:flex-none lg:snap-none"
              >
                <BlogPostImageCard
                  post={post}
                  sizes="(min-width: 1280px) 384px, (min-width: 1024px) 31vw, (min-width: 640px) 58vw, 86vw"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
