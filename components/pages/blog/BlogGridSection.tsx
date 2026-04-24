import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import { BlogPost } from "./blog-page-data";
import BlogCard from "./BlogPostCard";

type BlogGridSectionProps = {
  posts: BlogPost[];
};

export default function BlogGridSection({ posts }: BlogGridSectionProps) {
  if (!posts.length) return null;

  return (
    <Section
      background="white"
      spacing="md"
      aria-labelledby="blog-grid-heading"
    >
      <Container size="wide">
        <div className="mx-auto max-w-3xl text-center">
          <Heading as="h2" size="h2" align="center">
            Articole recente
          </Heading>

          <Text className="mt-4" align="center" color="muted">
            Ghiduri clare și practice despre traumă, relații, EMDR și reglare
            emoțională.
          </Text>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.href} {...post} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
