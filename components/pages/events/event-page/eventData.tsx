import { RichTextValue } from "@/sanity/types/portabletext";

export type EventStoryChapter = {
  eyebrow: string;
  title: string;
  description: RichTextValue;
  image: string;
  imageAlt: string;
};
export type EventDetail = {
  slug: string;
  title: string;
  summary: string;
  eyebrow: string;
  image: string;
  imageAlt: string;
  gallery: {
    src: string;
    alt: string;
  }[];

  storyChapters: EventStoryChapter[];

  quickInfo: {
    date: string;
    time: string;
    duration: string;
    location: string;
    format: string;
    cost: string;
    groupSize: string;
  };

  signup: {
    title: string;
    description: string;
    note: string;
    imageSrc?: string;
    imageAlt?: string;
    mapEmbedUrl: string;
    mapLink: string;
  };

  faq: {
    question: string;
    answer: string;
  }[];
};
