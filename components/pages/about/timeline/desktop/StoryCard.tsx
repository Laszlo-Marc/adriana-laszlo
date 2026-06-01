import Heading from "@/components/ui/Heading";
import { StoryItem } from "./data";
import Text from "@/components/ui/Text";
import { cn } from "@/lib/utils";
export function StoryCard({ item, index }: { item: StoryItem; index: number }) {
  const isFeatured = index === 2;

  return (
    <div
      className={cn(
        "relative rounded-[1.75rem] border border-border/70 bg-cream/80 p-7 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md",
        isFeatured && "border-teal/30 bg-teal/8",
      )}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal">
        {item.year}
      </p>

      <Heading as="h3" size="h4" className="mt-3">
        {item.title}
      </Heading>

      <Text className="mt-4 text-charcoal/70">{item.description}</Text>
    </div>
  );
}
