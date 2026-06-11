import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

import type { BlogContentBlock } from "./blogPosts";

type BlogPostContentProps = {
  content: BlogContentBlock[];
};

export default function BlogPostContent({ content }: BlogPostContentProps) {
  if (!content.length) return null;

  return (
    <article className="bg-cream py-16 md:py-24">
      <Container size="wide" padding="default">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-7">
            {content.map((block, index) => (
              <BlogContentRenderer
                key={getBlockKey(block, index)}
                block={block}
              />
            ))}
          </div>
        </div>
      </Container>
    </article>
  );
}

function BlogContentRenderer({ block }: { block: BlogContentBlock }) {
  if (block.type === "heading") {
    return (
      <Heading as="h2" size="h3" className="pt-8 text-balance text-charcoal">
        {block.text}
      </Heading>
    );
  }

  if (block.type === "quote") {
    return (
      <blockquote className="rounded-r-3xl border-l-4 border-gold bg-white/55 px-6 py-5 shadow-sm">
        <Text
          as="p"
          size="xl"
          className="font-display leading-relaxed text-charcoal"
        >
          {block.text}
        </Text>
      </blockquote>
    );
  }

  if (block.type === "list") {
    return (
      <ul className="space-y-3">
        {block.items.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-base leading-8 text-muted md:text-lg"
          >
            <span
              aria-hidden="true"
              className="mt-[0.85rem] h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <Text size="lg" className="leading-8 text-muted">
      {block.text}
    </Text>
  );
}

function getBlockKey(block: BlogContentBlock, index: number) {
  if (block.type === "list") {
    return `${block.type}-${index}-${block.items[0] ?? "empty"}`;
  }

  return `${block.type}-${index}-${block.text.slice(0, 32)}`;
}
