import { cn } from "@/lib/utils";
import { TestimonialContent, type TestimonialItem } from "./TestimonialContent";

type TestimonialsMobileCardProps = {
  item: TestimonialItem;
  isActive: boolean;
};

export function TestimonialsMobileCard({
  item,
  isActive,
}: TestimonialsMobileCardProps) {
  return (
    <article
      aria-hidden={!isActive}
      className={cn(
        "relative w-full shrink-0 rounded-[28px] rounded-tr-none border bg-white p-6 shadow-[0_18px_44px_-28px_rgba(0,0,0,0.22)]",
        "border-teal/15",
      )}
    >
      <TestimonialContent item={item} />
    </article>
  );
}
