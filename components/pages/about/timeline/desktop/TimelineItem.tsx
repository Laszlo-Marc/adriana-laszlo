import type { StoryItem } from "./data";
import { StoryCard } from "./StoryCard";

export function StoryTimelineItem({
  item,
  index,
}: {
  item: StoryItem;
  index: number;
}) {
  const isLeft = item.side === "left";

  return (
    <article className="relative z-10 grid grid-cols-[1fr_120px_1fr] items-center gap-6">
      <div aria-hidden={!isLeft}>
        {isLeft ? <StoryCard item={item} index={index} /> : null}
      </div>

      <div className="flex justify-center" aria-hidden="true">
        <div className="flex size-11 items-center justify-center rounded-full border border-teal/25 bg-white shadow-sm">
          <span className="size-3 rounded-full bg-teal" />
        </div>
      </div>

      <div aria-hidden={isLeft}>
        {!isLeft ? <StoryCard item={item} index={index} /> : null}
      </div>
    </article>
  );
}
