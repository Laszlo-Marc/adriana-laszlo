"use client";

import Image from "next/image";

import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import { cn } from "@/lib/utils";

import type { StoryItem } from "./data";

type StoryCardProps = {
  item: StoryItem;
  index: number;
  compact?: boolean;
  isExpandable?: boolean;
  isActive?: boolean;
  onToggle?: () => void;
  className?: string;
};

export function StoryCard({
  item,
  index,
  compact = false,
  isExpandable = false,
  isActive = true,
  onToggle,
  className,
}: StoryCardProps) {
  const isFeatured = index === 2;

  const cardClasses = cn(
    "group/card relative isolate w-full overflow-hidden rounded-[2rem] text-left",
    "border border-white/20 bg-charcoal ",
    "transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
    !compact &&
      "hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_30px_90px_rgba(44,44,44,0.16)]",
    compact ? "min-h-[25rem]" : "min-h-80",
    isFeatured && "border-teal/35",
    className,
  );

  const content = (
    <>
      <Image
        src={item.image}
        alt=""
        fill
        sizes={compact ? "82vw" : "440px"}
        className={cn(
          "absolute inset-0 -z-30 object-cover object-center opacity-90 transition duration-700",
          !compact && "group-hover/card:scale-105",
          compact && isActive && "scale-100",
          compact && !isActive && "scale-105",
        )}
      />

      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 -z-20",
          isFeatured ? "bg-teal/20" : "bg-charcoal/20",
        )}
      />

      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 -z-10 bg-gradient-to-t transition duration-500",
          isFeatured
            ? "from-charcoal/94 via-charcoal/58 to-teal/10"
            : "from-charcoal/92 via-charcoal/48 to-cream/5",
          compact && !isActive && "from-charcoal/88 via-charcoal/36 to-cream/5",
        )}
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-charcoal/85 to-transparent"
      />

      <div
        className={cn(
          "absolute z-10 flex flex-wrap items-center gap-2",
          compact ? "left-4 top-4" : "left-5 top-5",
        )}
      >
        <span className="rounded-full border border-white/20 bg-white/12 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/85 backdrop-blur-md">
          {item.year}
        </span>

        {item.tag ? (
          <span
            className={cn(
              "rounded-full border px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] backdrop-blur-md",
              isFeatured
                ? "border-teal/35 bg-teal/18 text-teal"
                : "border-gold/35 bg-gold/15 text-gold",
            )}
          >
            {item.tag}
          </span>
        ) : null}
      </div>

      {isExpandable ? (
        <span
          aria-hidden="true"
          className={cn(
            "absolute right-4 top-4 z-20 flex size-9 items-center justify-center rounded-full",
            "border border-white/18 bg-white/10 text-xl leading-none text-white/76 backdrop-blur-md",
            "transition duration-300",
            isActive && "rotate-45 border-gold/45 bg-gold/15 text-gold",
          )}
        >
          +
        </span>
      ) : null}

      <span
        aria-hidden="true"
        className={cn(
          "absolute z-10 font-display font-semibold leading-none text-white/10",
          compact ? "bottom-5 right-5 text-6xl" : "bottom-5 right-5 text-7xl",
        )}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div
        className={cn(
          "relative z-10 flex flex-col justify-end",
          compact ? "min-h-[25rem] p-5" : "min-h-80 p-7",
        )}
      >
        <div>
          <Heading
            as="h3"
            size="h4"
            color="cream"
            className={cn(
              compact && "max-w-[15rem] text-[1.45rem] leading-tight",
            )}
          >
            {item.title}
          </Heading>

          <div
            className={cn(
              "grid transition-all duration-500 ease-out",
              isActive ? "mt-4 grid-rows-[1fr]" : "mt-0 grid-rows-[0fr]",
            )}
          >
            <div className="overflow-hidden">
              <Text
                size="sm"
                className={cn(
                  "text-white/74",
                  compact && "text-[0.92rem] leading-6",
                )}
              >
                {item.description}
              </Text>

              <div className="mt-5 flex items-center gap-4 border-t border-white/14 pt-4">
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/45">
                  Etapa {String(index + 1).padStart(2, "0")}
                </span>

                <span className="h-px flex-1 bg-gold/55" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  if (isExpandable) {
    return (
      <button
        type="button"
        aria-expanded={isActive}
        onClick={onToggle}
        className={cn(
          cardClasses,
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
        )}
      >
        {content}
      </button>
    );
  }

  return <article className={cardClasses}>{content}</article>;
}
