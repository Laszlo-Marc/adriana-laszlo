export type BlogPostPreview = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  image: {
    src: string;
    alt: string;
  };
};

export const featuredBlogPosts: BlogPostPreview[] = [
  {
    slug: "/blog/cum-se-manifesta-trauma-in-relatii",
    title: "Cum se manifestă trauma în relații",
    excerpt:
      "Semnele mai puțin evidente prin care trauma influențează apropierea, limitele personale și siguranța emoțională.",
    category: "Traumă relațională",
    readTime: "5 min",
    publishedAt: "12 apr 2026",
    image: {
      src: "/blogs/blog1.webp",
      alt: "Femeie într-un cadru calm, sugerând reflecție și procesare emoțională",
    },
  },
  {
    slug: "/blog/ce-este-af-emdr",
    title: "Ce este AF-EMDR și cum diferă de EMDR clasic",
    excerpt:
      "O introducere clară în abordarea AF-EMDR și de ce poate fi utilă în lucrul cu trauma complexă și reglarea emoțională.",
    category: "AF-EMDR",
    readTime: "6 min",
    publishedAt: "5 apr 2026",
    image: {
      src: "/blogs/blog2.webp",
      alt: "Spațiu terapeutic luminos și liniștit",
    },
  },
  {
    slug: "/blog/de-ce-ramai-in-relatii-toxice",
    title: "De ce este atât de greu să ieși dintr-o relație toxică",
    excerpt:
      "Nu este lipsă de voință. De multe ori, trauma, atașamentul și frica de pierdere mențin un tipar greu de rupt.",
    category: "Relații toxice",
    readTime: "4 min",
    publishedAt: "28 mar 2026",
    image: {
      src: "/blogs/blog3.webp",
      alt: "Cadru simbolic despre distanță emoțională și relații dificile",
    },
  },
];
