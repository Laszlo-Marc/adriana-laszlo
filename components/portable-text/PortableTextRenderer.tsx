import {
  PortableText,
  PortableTextBlock,
  type PortableTextComponents,
} from "@portabletext/react";
import Image from "next/image";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import { urlForImage } from "@/sanity/lib/image";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <Text size="lg" className="leading-8 text-muted">
        {children}
      </Text>
    ),
    h2: ({ children }) => (
      <Heading as="h2" size="h3" className="pt-8 text-balance text-charcoal">
        {children}
      </Heading>
    ),
    h3: ({ children }) => (
      <Heading as="h3" size="h4" className="pt-6 text-balance text-charcoal">
        {children}
      </Heading>
    ),
    blockquote: ({ children }) => (
      <blockquote className="rounded-r-3xl border-l-4 border-gold bg-white/55 px-6 py-5 shadow-sm">
        <Text
          as="p"
          size="xl"
          className="font-display leading-relaxed text-charcoal"
        >
          {children}
        </Text>
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="space-y-3">{children}</ul>,
    number: ({ children }) => (
      <ol className="list-decimal space-y-3 pl-5 text-muted">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex gap-3 text-base leading-8 text-muted md:text-lg">
        <span
          aria-hidden="true"
          className="mt-[0.85rem] h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
        />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li className="text-base leading-8 text-muted md:text-lg">{children}</li>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;

      return (
        <figure className="my-10 overflow-hidden rounded-4xl bg-white/50">
          <div className="relative aspect-[4/3]">
            <Image
              src={urlForImage(value).width(1200).height(900).fit("crop").url()}
              alt={value.alt ?? ""}
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
            />
          </div>

          {value.alt ? (
            <figcaption className="px-5 py-3 text-sm text-muted">
              {value.alt}
            </figcaption>
          ) : null}
        </figure>
      );
    },
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href;
      const openInNewTab = value?.openInNewTab;

      if (!href) return <>{children}</>;

      return (
        <a
          href={href}
          target={openInNewTab ? "_blank" : undefined}
          rel={openInNewTab ? "noreferrer" : undefined}
          className="font-medium text-charcoal underline decoration-gold decoration-2 underline-offset-4 transition hover:text-gold"
        >
          {children}
        </a>
      );
    },
  },
};
export default function PortableTextRenderer({
  value,
}: {
  value?: PortableTextBlock[];
}) {
  if (!value || value.length === 0) return null;

  return (
    <article className="bg-cream py-16 md:py-24">
      <Container size="wide" padding="default">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-7">
            <PortableText value={value} components={components} />
          </div>
        </div>
      </Container>
    </article>
  );
}
