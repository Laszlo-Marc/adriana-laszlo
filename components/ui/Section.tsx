import type { ElementType, ReactNode, ComponentPropsWithoutRef } from "react";

type SectionBg =
  | "cream"
  | "white"
  | "charcoal"
  | "sand"
  | "teal-soft"
  | "purple-soft";
type SectionSpacing = "none" | "sm" | "md" | "lg" | "xl";

type SectionOwnProps = {
  background?: SectionBg;
  spacing?: SectionSpacing;
  spacingTop?: SectionSpacing;
  spacingBottom?: SectionSpacing;
  children: ReactNode;
  className?: string;
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
  children,
  className = "",
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
        relative
        ${bgStyles[background]}
        ${spacingClass}
        ${className}
      `}
      {...rest}
    >
      {children}
    </Component>
  );
}
