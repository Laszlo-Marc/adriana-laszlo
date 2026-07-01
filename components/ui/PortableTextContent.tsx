// components/ui/PortableTextContent.tsx

import Link from "next/link";
import { PortableText, type PortableTextComponents } from "@portabletext/react";

import { cn } from "@/lib/utils";

type PortableTextContentProps = {
  value: unknown;
  className?: string;
  paragraphClassName?: string;
  listClassName?: string;
};

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-lg leading-8 text-charcoal md:text-xl md:leading-8">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-5 list-disc space-y-2 pl-5 text-base leading-8 text-muted md:text-lg md:leading-8">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="my-5 list-decimal space-y-2 pl-5 text-base leading-8 text-muted md:text-lg md:leading-8">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="pl-1">{children}</li>,
    number: ({ children }) => <li className="pl-1">{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-charcoal">{children}</strong>
    ),
    em: ({ children }) => <em>{children}</em>,
    link: ({ children, value }) => {
      const href = typeof value?.href === "string" ? value.href : "";

      if (!href) return <>{children}</>;

      const isExternal = href.startsWith("http");

      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-charcoal underline decoration-gold/50 underline-offset-4 transition hover:text-gold"
          >
            {children}
          </a>
        );
      }

      return (
        <Link
          href={href}
          className="font-medium text-charcoal underline decoration-gold/50 underline-offset-4 transition hover:text-gold"
        >
          {children}
        </Link>
      );
    },
  },
};

export default function PortableTextContent({
  value,
  className,
}: PortableTextContentProps) {
  if (!Array.isArray(value) || value.length === 0) return null;

  return (
    <div className={cn("space-y-4", className)}>
      <PortableText value={value} components={components} />
    </div>
  );
}
