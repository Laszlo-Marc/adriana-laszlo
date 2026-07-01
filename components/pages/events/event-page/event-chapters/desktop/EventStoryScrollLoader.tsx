"use client";

import dynamic from "next/dynamic";

import type { EventDetail } from "../../eventData";

const EventStoryScrollSection = dynamic(
  () => import("./EventStoryScrollSection"),
  {
    ssr: false,
    loading: () => (
      <section
        aria-hidden="true"
        className="hidden min-h-[100svh] bg-cream lg:block"
      />
    ),
  },
);

type EventStoryScrollLoaderProps = {
  event: EventDetail;
};

export default function EventStoryScrollLoader({
  event,
}: EventStoryScrollLoaderProps) {
  return <EventStoryScrollSection chapters={event.storyChapters} />;
}
