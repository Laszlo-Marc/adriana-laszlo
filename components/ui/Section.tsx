import Image, { type StaticImageData } from "next/image";
import type { ElementType, ReactNode, ComponentPropsWithoutRef } from "react";

type SectionBg =
  | "cream"
  | "white"
  | "charcoal"
  | "sand"
  | "teal-soft"
  | "purple-soft"
  | "teal-muted"
  | "purple"
  | "none";

type SectionSpacing = "none" | "sm" | "md" | "lg" | "xl";

type BackgroundImage = {
  src: string | StaticImageData;
  alt?: string;
  priority?: boolean;
  className?: string;
  overlayClassName?: string;
};

type SectionOwnProps = {
  background?: SectionBg;
  spacing?: SectionSpacing;
  spacingTop?: SectionSpacing;
  spacingBottom?: SectionSpacing;
  backgroundImage?: BackgroundImage;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
};

type SectionProps<T extends ElementType = "section"> = SectionOwnProps & {
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, keyof SectionOwnProps | "as">;

const bgStyles: Record<SectionBg, string> = {
  cream: "bg-cream text-charcoal",
  white: "bg-white text-charcoal",
  charcoal: "bg-charcoal text-cream",
  sand: "bg-sand text-charcoal",
  "teal-soft": "bg-teal-soft text-charcoal",
  "purple-soft": "bg-purple-soft text-charcoal",
  "teal-muted": "bg-muted-teal text-charcoal",
  purple: "bg-purple text-cream",
  none: "",
};

const spacingY: Record<SectionSpacing, string> = {
  none: "py-0",
  sm: "py-10 md:py-14",
  md: "py-14 md:py-20",
  lg: "py-20 md:py-28",
  xl: "py-24 md:py-36",
};

const spacingT: Record<SectionSpacing, string> = {
  none: "pt-0",
  sm: "pt-10 md:pt-14",
  md: "pt-14 md:pt-20",
  lg: "pt-20 md:pt-28",
  xl: "pt-24 md:pt-36",
};

const spacingB: Record<SectionSpacing, string> = {
  none: "pb-0",
  sm: "pb-10 md:pb-14",
  md: "pb-14 md:pb-20",
  lg: "pb-20 md:pb-28",
  xl: "pb-24 md:pb-36",
};

export default function Section<T extends ElementType = "section">({
  as,
  background = "cream",
  spacing = "md",
  spacingTop,
  spacingBottom,
  backgroundImage,
  children,
  className = "",
  innerClassName = "",
  ...rest
}: SectionProps<T>) {
  const Component = (as ?? "section") as ElementType;

  const spacingClass =
    spacingTop || spacingBottom
      ? `${spacingT[spacingTop ?? spacing]} ${spacingB[spacingBottom ?? spacing]}`
      : spacingY[spacing];

  return (
    <Component
      className={`
        relative isolate overflow-hidden
        ${bgStyles[background]}
        ${spacingClass}
        ${className}
      `}
      {...rest}
    >
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage.src}
            alt={backgroundImage.alt ?? ""}
            fill
            priority={backgroundImage.priority}
            sizes="100vw"
            aria-hidden={backgroundImage.alt ? undefined : true}
            className={`
              pointer-events-none absolute inset-0 -z-20 object-cover
              ${backgroundImage.className ?? ""}
            `}
          />

          <div
            aria-hidden="true"
            className={`
              pointer-events-none absolute inset-0 -z-10
              ${backgroundImage.overlayClassName ?? "bg-cream/70"}
            `}
          />
        </>
      )}

      <div className={`relative z-10 ${innerClassName}`}>{children}</div>
    </Component>
  );
}
