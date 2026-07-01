import { EventDetail } from "../eventData";
import EventStoryDesktopStoryScroll from "./desktop/EventStoryScrollSection";
import EventStoryMobileAccordion from "./mobile/EventStoryMoileAccordion";

type EventStoryScrollSectionProps = {
  event: EventDetail;
};

export default function EventChaptersSection({
  event,
}: EventStoryScrollSectionProps) {
  const chapters = event.storyChapters;

  if (!chapters.length) return null;

  return (
    <section
      id="structura"
      aria-labelledby="event-story-scroll-title"
      className="relative overflow-visible bg-cream"
    >
      <h2 id="event-story-scroll-title" className="sr-only">
        Ce conține programul
      </h2>

      <EventStoryDesktopStoryScroll chapters={chapters} />

      <EventStoryMobileAccordion chapters={chapters} />
    </section>
  );
}
