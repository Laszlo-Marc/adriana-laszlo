import type {
  EventDetail,
  EventStoryChapter,
} from "@/components/pages/events/event-page/eventData";
import type {
  OtherEventItem,
  EventTone,
} from "@/components/pages/events/eventsContent";
import { urlForImage } from "@/sanity/lib/image";
import type {
  SanityEvent,
  SanityEventCard,
  SanityGalleryImage,
  SanityImageWithAlt,
} from "@/sanity/types/event";

import { RichTextValue } from "../types/portabletext";

const FALLBACK_EVENT_IMAGE = "/events/events-hero.jpg";

export type FeaturedEventViewModel = {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  description: string;
  detailsHref: string;
  detailsCtaLabel: string;
  facts: {
    label: string;
    value: string;
  }[];
  images: {
    src: string;
    alt: string;
  }[];
};

export function getFeaturedEvent(events: SanityEventCard[]) {
  return (
    events.find(
      (event) =>
        event.featured &&
        event.status !== "past" &&
        event.status !== "cancelled",
    ) ?? events.find((event) => event.status === "upcoming")
  );
}

export function toFeaturedEvent(
  event: SanityEventCard,
): FeaturedEventViewModel {
  return {
    slug: event.slug,
    eyebrow: getEyebrow(event),
    title: event.title,
    intro: event.summary,
    description: event.summary,
    detailsHref: `/evenimente/${event.slug}`,
    detailsCtaLabel: "Vezi pagina completă a programului",
    facts: [
      {
        label: "Format",
        value: formatEventFormat(event),
      },
      {
        label: "Locație",
        value: event.details?.location ?? "Cluj-Napoca",
      },
      {
        label: "Grup",
        value: event.details?.groupSize ?? getRegistrationLabel(event),
      },
      {
        label: "Durată",
        value: event.schedule?.duration ?? "Detalii anunțate în curând",
      },
    ],
    images: getEventGalleryImages(event),
  };
}

export function toOtherEventItem(
  event: SanityEventCard,
  index: number,
): OtherEventItem {
  return {
    slug: event.slug,
    eyebrow: getEyebrow(event),
    title: event.title,
    description: event.summary,
    href: `/evenimente/${event.slug}`,
    ctaLabel: "Vezi detalii",
    tone: getEventTone(index),
    dateLabel: getDateLabel(event),
    formatLabel: formatEventFormat(event),
    locationLabel: event.details?.location ?? "Cluj-Napoca",
    imageSrc: getEventImageUrl(event.mainImage, {
      width: 1200,
      height: 1400,
    }),
    imageAlt: event.mainImage?.alt ?? event.title,
  };
}

export function toOtherEventItems(
  events: SanityEventCard[],
  featuredSlug?: string,
): OtherEventItem[] {
  return events
    .filter((event) => event.slug !== featuredSlug)
    .filter((event) => event.status !== "draft")
    .filter((event) => event.status !== "cancelled")
    .map(toOtherEventItem);
}

export function toEventDetail(event: SanityEvent): EventDetail {
  return {
    slug: event.slug,
    title: event.title,
    summary: event.summary,
    eyebrow: getEyebrow(event),
    image: getEventImageUrl(event.mainImage, {
      width: 1600,
      height: 1000,
    }),
    imageAlt: event.mainImage?.alt ?? event.title,
    gallery: getEventGalleryImages(event),
    storyChapters: toEventStoryChapters(event),
    quickInfo: {
      date: getDateLabel(event),
      time: event.schedule?.timeLabel ?? "Ora va fi comunicată participanților",
      duration: event.schedule?.duration ?? "Detalii anunțate în curând",
      location: event.details?.location ?? "Cluj-Napoca",
      format: formatEventFormat(event),
      cost:
        event.details?.price ?? "Costul va fi comunicat înainte de confirmare",
      groupSize: event.details?.groupSize ?? getRegistrationLabel(event),
    },
    signup: {
      title:
        event.signup?.title ?? "Vrei să afli dacă programul ți se potrivește?",
      description:
        event.signup?.description ??
        "Completează formularul, iar următorul pas este o discuție scurtă pentru a clarifica dacă acest cadru este potrivit pentru tine.",
      note:
        event.signup?.note ??
        "Trimiterea formularului nu confirmă automat participarea.",
      imageSrc: getEventImageUrl(event.mainImage, {
        width: 1000,
        height: 800,
      }),
      imageAlt: event.mainImage?.alt ?? event.title,
      mapEmbedUrl:
        event.signup?.mapEmbedUrl ??
        "https://www.google.com/maps?q=Cluj-Napoca&output=embed",
      mapLink:
        event.signup?.mapLink ??
        "https://www.google.com/maps/search/?api=1&query=Cluj-Napoca",
    },
    faq: event.faq ?? [],
  };
}

export function getSanityEventOgImage(event: SanityEvent) {
  if (event.seo?.image) {
    return getEventImageUrl(event.seo.image, {
      width: 1200,
      height: 630,
    });
  }

  return getEventImageUrl(event.mainImage, {
    width: 1200,
    height: 630,
  });
}

function hasPortableText(
  value: RichTextValue | undefined | null,
): value is RichTextValue {
  return Array.isArray(value) && value.length > 0;
}
function toEventStoryChapters(event: SanityEvent): EventStoryChapter[] {
  return (event.storySections ?? []).flatMap((section, index) => {
    const description = section.description;

    if (!section.title || !hasPortableText(description)) {
      return [];
    }

    const chapterImage = section.image?.asset?._ref
      ? section.image
      : event.mainImage;

    return [
      {
        eyebrow:
          section.eyebrow ?? `${String(index + 1).padStart(2, "0")} — Program`,
        title: section.title,
        description,
        image: getEventImageUrl(chapterImage, {
          width: 1600,
          height: 1000,
        }),
        imageAlt: chapterImage?.alt ?? section.title,
      },
    ];
  });
}
function getEventGalleryImages(event: SanityEventCard) {
  const gallery = event.gallery?.length
    ? event.gallery
    : event.mainImage
      ? [event.mainImage]
      : [];

  const images = gallery.map((image) => toGalleryImage(image));

  if (images.length > 0) return images;

  return [
    {
      src: FALLBACK_EVENT_IMAGE,
      alt: event.title,
    },
  ];
}

function toGalleryImage(image: SanityGalleryImage) {
  return {
    src: getEventImageUrl(image, {
      width: 1200,
      height: 800,
    }),
    alt: image.alt ?? "Imagine din eveniment",
  };
}

function getEventImageUrl(
  image: SanityImageWithAlt | undefined,
  {
    width,
    height,
  }: {
    width: number;
    height: number;
  },
) {
  if (!image?.asset?._ref) return FALLBACK_EVENT_IMAGE;

  return urlForImage(image).width(width).height(height).fit("crop").url();
}

function getEyebrow(event: SanityEventCard) {
  if (event.status === "soldOut") return "Locuri ocupate";
  if (event.registrationStatus === "limited") return "Locuri limitate";
  if (event.registrationStatus === "waitlist") return "Listă de așteptare";
  if (event.featured) return "Program recomandat";

  return "Eveniment terapeutic";
}

function getRegistrationLabel(event: SanityEventCard) {
  const labels: Record<string, string> = {
    open: "Înscrieri deschise",
    limited: "Locuri limitate",
    waitlist: "Listă de așteptare",
    closed: "Înscrieri închise",
  };

  return labels[event.registrationStatus] ?? "Detalii anunțate în curând";
}

function formatEventFormat(event: SanityEventCard) {
  const format = event.details?.format;

  const labels: Record<string, string> = {
    fizic: "Fizic",
    online: "Online",
    hibrid: "Hibrid",
  };

  const formatLabel = format ? labels[format] : "Format anunțat în curând";

  if (event.schedule?.duration) {
    return `${formatLabel} · ${event.schedule.duration}`;
  }

  return formatLabel;
}

function getDateLabel(event: SanityEventCard) {
  if (!event.schedule?.startDate) return "Dată anunțată în curând";

  return new Intl.DateTimeFormat("ro-RO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(event.schedule.startDate));
}

function getEventTone(index: number): EventTone {
  const tones: EventTone[] = ["teal", "purple", "gold"];

  return tones[index % tones.length];
}
