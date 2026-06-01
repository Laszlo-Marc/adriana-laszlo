import { StoryItem } from "./data";
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
      <div className={isLeft ? "col-start-1" : "col-start-1"} is="">
        {isLeft ? <StoryCard item={item} index={index} /> : null}
      </div>

      <div className="col-start-2 flex justify-center">
        <div className="flex size-11 items-center justify-center rounded-full border border-teal/25 bg-white shadow-sm">
          <span className="size-3 rounded-full bg-teal" />
        </div>
      </div>

      <div className={!isLeft ? "col-start-3" : "col-start-3"}>
        {!isLeft ? <StoryCard item={item} index={index} /> : null}
      </div>
    </article>
  );
}
