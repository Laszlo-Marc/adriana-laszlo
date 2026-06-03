import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import type { BlogContentBlock } from "./types";

type BlogPostContentProps = {
  content: BlogContentBlock[];
};

export default function BlogPostContent({ content }: BlogPostContentProps) {
  return (
    <article className="bg-cream py-16 md:py-24">
      <Container size="wide" padding="lg">
        <div className="mx-auto max-w-6xl">
          <div className="space-y-7">
            {content.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <Heading
                    key={`${block.type}-${index}`}
                    as="h2"
                    size="h2"
                    className="pt-8 text-charcoal"
                  >
                    {block.text}
                  </Heading>
                );
              }

              if (block.type === "quote") {
                return (
                  <blockquote
                    key={`${block.type}-${index}`}
                    className="border-l-4 border-gold bg-white/55 px-6 py-5 text-xl leading-relaxed text-charcoal shadow-sm"
                  >
                    <p>{block.text}</p>
                  </blockquote>
                );
              }

              if (block.type === "list") {
                return (
                  <ul
                    key={`${block.type}-${index}`}
                    className="space-y-3 pl-5 text-base leading-8 text-muted md:text-lg"
                  >
                    {block.items.map((item) => (
                      <li key={item} className="list-disc pl-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }

              return (
                <Text
                  key={`${block.type}-${index}`}
                  size="lg"
                  className="leading-8 text-muted"
                >
                  {block.text}
                </Text>
              );
            })}
          </div>
        </div>
      </Container>
    </article>
  );
}
