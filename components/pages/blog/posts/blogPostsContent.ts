export type BlogPostCard = {
  id: string;
  title: string;
  excerpt: string;
  href: string;
  image: string;
  imageAlt: string;
  category: string;
  readingTime?: string;
};

export const featuredBlogPosts: BlogPostCard[] = [
  {
    id: "trauma-relationala",
    title: "Cum se simte trauma relațională în viața de zi cu zi",
    excerpt:
      "Semnele discrete prin care trecutul continuă să influențeze siguranța, apropierea și felul în care reacționezi în relații.",
    href: "/blog/trauma-relationala",
    image: "/blogs/blog1.webp",
    imageAlt: "Femeie privind pe fereastră într-un moment de reflecție",
    category: "Traumă relațională",
    readingTime: "6 min",
  },
  {
    id: "atasament-anxios",
    title: "Atașamentul anxios: când apropierea vine cu frică",
    excerpt:
      "De ce apare teama de abandon, cum se activează în cuplu și ce înseamnă să lucrezi cu ea în terapie.",
    href: "/blog/atasament-anxios",
    image: "/blogs/blog2.webp",
    imageAlt: "Detaliu calm cu mâini și lumină naturală",
    category: "Relații",
    readingTime: "7 min",
  },
  {
    id: "emdr-trauma",
    title: "Ce este EMDR și cum ajută în lucrul cu trauma",
    excerpt:
      "O explicație clară, fără limbaj complicat, despre procesarea amintirilor dureroase și reducerea intensității emoționale.",
    href: "/blog/emdr-trauma",
    image: "/blogs/blog3.webp",
    imageAlt: "Spațiu terapeutic calm cu lumină caldă",
    category: "EMDR",
    readingTime: "8 min",
  },
  {
    id: "limite-sanatoase",
    title: "Limite sănătoase fără vinovăție",
    excerpt:
      "Cum începi să spui nu fără să simți că rănești, dezamăgești sau pierzi conexiunea cu ceilalți.",
    href: "/blog/limite-sanatoase",
    image: "/blogs/blog1.webp",
    imageAlt: "Peisaj calm cu potecă și vegetație",
    category: "Vindecare emoțională",
    readingTime: "5 min",
  },
  {
    id: "narcisism-relatii",
    title: "După o relație cu dinamică narcisică",
    excerpt:
      "Ce se întâmplă cu încrederea în sine, corpul și alegerile relaționale după o relație epuizantă emoțional.",
    href: "/blog/relatie-narcisica",
    image: "/blogs/blog2.webp",
    imageAlt: "Femeie mergând singură într-un cadru natural liniștit",
    category: "Relații dificile",
    readingTime: "9 min",
  },
];
