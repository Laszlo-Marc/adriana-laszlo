import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandOrnamentVariant =
  | "single"
  | "double-simple"
  | "double-split"
  | "double-df"
  | "dragonfly"
  | "df-teal-down"
  | "df-purple-up"
  | "df-purple-down";

type BrandOrnamentProps = {
  variant: BrandOrnamentVariant;
  className?: string;
  sizes?: string;
};

const ornamentMap: Record<
  BrandOrnamentVariant,
  {
    src: string;
    width: number;
    height: number;
  }
> = {
  single: {
    src: "/backgrounds/single.png",
    width: 700,
    height: 1100,
  },
  "double-simple": {
    src: "/backgrounds/double-simple.png",
    width: 700,
    height: 1100,
  },
  "double-split": {
    src: "/backgrounds/double-split.png",
    width: 700,
    height: 1100,
  },
  "double-df": {
    src: "/backgrounds/double-df.png",
    width: 1000,
    height: 1400,
  },
  dragonfly: {
    src: "/backgrounds/dragonfly.png",
    width: 300,
    height: 300,
  },
  "df-teal-down": {
    src: "/backgrounds/df-teal-down.png",
    width: 300,
    height: 300,
  },
  "df-purple-up": {
    src: "/backgrounds/df-purple-up.png",
    width: 300,
    height: 300,
  },
  "df-purple-down": {
    src: "/backgrounds/df-purple-down.png",
    width: 300,
    height: 300,
  },
};

export default function BrandOrnament({
  variant,
  className,
  sizes = "280px",
}: BrandOrnamentProps) {
  const ornament = ornamentMap[variant];

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute z-0", className)}
    >
      <Image
        src={ornament.src}
        alt=""
        width={ornament.width}
        height={ornament.height}
        sizes={sizes}
        className="h-auto w-full max-w-none"
      />
    </div>
  );
}
