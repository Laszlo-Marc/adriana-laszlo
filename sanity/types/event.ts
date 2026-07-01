import type { Image } from "sanity";
import { RichTextValue } from "./portabletext";

export type SanityImageWithAlt = Image & {
  alt?: string;
};

export type SanityGalleryImage = SanityImageWithAlt;

export type SanityEventStatus =
  | "draft"
  | "upcoming"
  | "soldOut"
  | "past"
  | "cancelled";

export type SanityEventRegistrationStatus =
  | "open"
  | "limited"
  | "waitlist"
  | "closed";

export type SanityEventFormat = "fizic" | "online" | "hibrid";

export type SanityEventCard = {
  _id: string;
  title: string;
  slug: string;
  summary: string;
  status: SanityEventStatus;
  registrationStatus: SanityEventRegistrationStatus;
  featured?: boolean;
  mainImage?: SanityImageWithAlt;
  gallery?: SanityGalleryImage[];
  schedule?: {
    startDate?: string;
    endDate?: string;
    timeLabel?: string;
    duration?: string;
  };
  details?: {
    location?: string;
    format?: SanityEventFormat;
    price?: string;
    groupSize?: string;
  };
};
export type SanityEventStorySection = {
  eyebrow?: string;
  title: string;
  description?: RichTextValue;
  image?: SanityImageWithAlt;
};
export type SanityEventFaqItem = {
  question: string;
  answer: string;
};

export type SanityEvent = SanityEventCard & {
  signup?: {
    title?: string;

    description?: string;
    ctaLabel?: string;
    formUrl?: string;
    mapEmbedUrl?: string;
    mapLink?: string;
    note?: string;
  };
  storySections?: SanityEventStorySection[];
  faq?: SanityEventFaqItem[];
  seo?: {
    title?: string;
    description?: string;
    image?: SanityImageWithAlt;
    noIndex?: boolean;
  };
};
