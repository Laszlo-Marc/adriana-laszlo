import { absoluteUrl } from "./metadata";
import { siteConfig } from "./siteConfig";

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: siteConfig.siteName,
    url: absoluteUrl("/"),
    inLanguage: siteConfig.language,
    publisher: {
      "@id": absoluteUrl("/#person"),
    },
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": absoluteUrl("/#person"),
    name: siteConfig.name,
    url: absoluteUrl("/"),
    jobTitle: "Psihoterapeut",
    worksFor: {
      "@id": absoluteUrl("/#business"),
    },
    knowsAbout: [
      "Psihoterapie",
      "EMDR",
      "AF-EMDR",
      "Traumă psihologică",
      "Terapie individuală",
      "Terapie de grup",
    ],
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };
}

export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": absoluteUrl("/#business"),
    name: siteConfig.siteName,
    url: absoluteUrl("/"),
    image: absoluteUrl(siteConfig.defaultOgImage),
    description: siteConfig.description,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Cluj-Napoca",
      },
      {
        "@type": "Country",
        name: "România",
      },
    ],
    founder: {
      "@id": absoluteUrl("/#person"),
    },
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };
}

export function breadcrumbSchema(
  items: {
    name: string;
    path: string;
  }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(
  items: {
    question: string;
    answer: string;
  }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function articleSchema({
  title,
  description,
  path,
  image,
  publishedAt,
  updatedAt,
}: {
  title: string;
  description: string;
  path: string;
  image: string;
  publishedAt: string;
  updatedAt?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: absoluteUrl(image),
    datePublished: publishedAt,
    dateModified: updatedAt ?? publishedAt,
    author: {
      "@id": absoluteUrl("/#person"),
    },
    publisher: {
      "@id": absoluteUrl("/#business"),
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(path),
    },
  };
}
