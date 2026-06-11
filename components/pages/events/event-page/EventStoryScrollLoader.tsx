"use client";

import dynamic from "next/dynamic";
import type { EventDetail } from "./eventData";

const EventStoryScrollSection = dynamic(
  () => import("./EventStoryScrollSection"),
  {
    ssr: false,
    loading: () => (
      <section aria-hidden="true" className="min-h-[100svh] bg-cream" />
    ),
  },
);

type EventStoryScrollLoaderProps = {
  event: EventDetail;
};

export default function EventStoryScrollLoader({
  event,
}: EventStoryScrollLoaderProps) {
  return <EventStoryScrollSection event={event} />;
}
