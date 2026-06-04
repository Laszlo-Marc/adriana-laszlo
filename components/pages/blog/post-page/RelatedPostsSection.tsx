import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

import BlogPostsCarouselClient from "../posts/BlogPostCarouselClient";
import { BlogPost, toBlogPostCard } from "./blogPosts";
import AccentText from "@/components/ui/AccentText";

type RelatedPostsSectionProps = {
  posts: BlogPost[];
  currentPost: BlogPost;
  limit?: number;
};

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
        <div className="mb-10  md:mb-12">
          <Heading
            id="related-posts-title"
            as="h2"
            size="h2"
            className="text-charcoal"
            align="center"
          >
            Poate vrei să citești și
          </Heading>
        </div>

        <BlogPostsCarouselClient posts={relatedPostCards} />
      </Container>
    </section>
  );
}
