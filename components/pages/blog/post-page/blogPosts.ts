export type BlogContentBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "quote";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    };

export type BlogPostCard = {
  id: string;

  title: string;
  excerpt: string;
  href: string;
  image: string;
  imageAlt: string;
  category: string;
  readingTime: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  author: string;
  category: string;
  publishedAt: string;
  readTime: string;
  image: string;
  imageAlt: string;
  content: BlogContentBlock[];
};

export function toBlogPostCard(post: BlogPost): BlogPostCard {
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
