import { cn } from "@/lib/utils";
import { TestimonialContent, type TestimonialItem } from "./TestimonialContent";

type DesktopCardProps = {
  item: TestimonialItem;
  position: number;
  isActive: boolean;
  onMove: (steps: number) => void;
};

const VISIBLE_RANGE = 2;

export function TestimonialsDesktopCard({
  item,
  position,
  isActive,
  onMove,
}: DesktopCardProps) {
  const abs = Math.abs(position);
  const isHidden = abs > VISIBLE_RANGE;

  return (
    <article
      aria-hidden={isHidden}
      onClick={() => {
        if (!isHidden && !isActive) onMove(position);
      }}
      className={cn(
        "absolute left-1/2 top-1/2 w-[min(88vw,24rem)] sm:w-[24rem]",
        "select-none rounded-[28px] rounded-tr-none border p-6 sm:p-7",
        "transition-[transform,opacity,border-color,box-shadow] duration-500 ease-out motion-reduce:transition-none",
        isHidden ? "pointer-events-none" : "cursor-pointer",
        isActive
          ? "z-30 border-teal/20 bg-white shadow-[0_24px_70px_-24px_rgba(0,0,0,0.22)]"
          : "z-10 border-charcoal/10 bg-cream/95 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.22)] hover:border-teal/25",
      )}
      style={{
        opacity: isHidden ? 0 : isActive ? 1 : 0.72 - abs * 0.12,
        transform: `
          translate(-50%, -50%)
          translateX(${position * 17}rem)
          translateY(${isActive ? 0 : position % 2 === 0 ? -10 : 12}px)
          scale(${isActive ? 1 : 1 - abs * 0.06})
          rotate(${isActive ? 0 : position < 0 ? -3 : 3}deg)
        `,
      }}
    >
      <TestimonialContent item={item} />
    </article>
  );
}
