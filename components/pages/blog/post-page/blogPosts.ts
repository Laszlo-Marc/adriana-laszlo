import type { BlogPost } from "./types";

export const blogPosts: BlogPost[] = [
  {
    slug: "trauma-relationala",
    title: "Cum se simte trauma în corp",
    summary:
      "Trauma nu rămâne doar în amintiri. Uneori se simte în corp, în reacții, în tensiune și în felul în care ne raportăm la siguranță.",
    category: "Traumă",
    publishedAt: "2026-06-03",
    readTime: "6 min",
    image: "/blogs/blog1.webp",
    imageAlt: "Femeie într-un moment de liniște și reflecție",
    content: [
      {
        type: "paragraph",
        text: "Trauma nu este întotdeauna o amintire clară sau un eveniment la care te gândești zilnic. De multe ori, ea apare în felul în care corpul tău reacționează înainte ca mintea să poată explica ce se întâmplă.",
      },
      {
        type: "paragraph",
        text: "Poate observi o stare constantă de alertă, tensiune în piept, dificultăți de relaxare sau reacții intense în situații care, la suprafață, par minore.",
      },
      {
        type: "heading",
        text: "Corpul poate păstra urmele experiențelor dificile",
      },
      {
        type: "paragraph",
        text: "Atunci când ai trecut prin experiențe copleșitoare, sistemul nervos poate învăța să rămână pregătit pentru pericol. Chiar și după ce pericolul a trecut, corpul poate continua să reacționeze ca și cum ar trebui să te protejeze.",
      },
      {
        type: "quote",
        text: "Vindecarea nu înseamnă să uiți ce s-a întâmplat, ci să nu mai trăiești prezentul prin reacțiile trecutului.",
      },
      {
        type: "heading",
        text: "Semne care pot indica o traumă nerezolvată",
      },
      {
        type: "list",
        items: [
          "te simți frecvent în alertă, chiar și când ești în siguranță",
          "ai reacții emoționale intense în relații",
          "îți este greu să te relaxezi sau să ai încredere",
          "simți tensiune, oboseală sau blocaj fără o cauză evidentă",
        ],
      },
      {
        type: "paragraph",
        text: "Psihoterapia poate ajuta la înțelegerea acestor reacții și la reconstruirea unui sentiment de siguranță în corp, în relații și în viața de zi cu zi.",
      },
    ],
  },
  {
    slug: "ce-este-af-emdr",
    title: "Ce este terapia AF-EMDR",
    summary:
      "O introducere clară în terapia AF-EMDR și în felul în care această abordare poate susține procesarea traumelor.",
    category: "AF-EMDR",
    publishedAt: "2026-05-22",
    readTime: "7 min",
    image: "/images/blog/af-emdr.jpg",
    imageAlt: "Spațiu calm de terapie",
    content: [
      {
        type: "paragraph",
        text: "AF-EMDR este o abordare terapeutică folosită în lucrul cu trauma, blocajele emoționale și reacțiile care se reactivează în prezent, deși își au originea în experiențe trecute.",
      },
    ],
  },
  {
    slug: "relatiile-si-ranile-de-atasament",
    title: "Relațiile și rănile de atașament",
    summary:
      "De ce anumite relații reactivează frici vechi și cum poate psihoterapia să aducă mai multă claritate și siguranță.",
    category: "Relații",
    publishedAt: "2026-05-10",
    readTime: "5 min",
    image: "/images/blog/atasament.jpg",
    imageAlt: "Persoană privind pe fereastră într-un moment de reflecție",
    content: [
      {
        type: "paragraph",
        text: "Rănile de atașament pot influența felul în care iubim, cerem apropiere, ne retragem sau reacționăm la distanță emoțională.",
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(currentSlug: string, limit = 3) {
  return blogPosts.filter((post) => post.slug !== currentSlug).slice(0, limit);
}
