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
  /** Full-bleed background color. Alternate cream/white between sections for rhythm. */
  background?: SectionBg;
  /** Vertical padding preset. Controls the breathing room above and below content. */
  spacing?: SectionSpacing;
  /** Top-only spacing — useful when stacking sections that should touch. */
  spacingTop?: SectionSpacing;
  /** Bottom-only spacing — same use case, opposite edge. */
  spacingBottom?: SectionSpacing;
  children: ReactNode;
  className?: string;
};

type SectionProps<T extends ElementType = "section"> = SectionOwnProps & {
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, keyof SectionOwnProps | "as">;

// Background colors — text color paired automatically for contrast.
// Charcoal background flips the default text color so children inherit correctly.
const bgStyles: Record<SectionBg, string> = {
  cream: "bg-cream text-charcoal",
  white: "bg-white text-charcoal",
  charcoal: "bg-charcoal text-cream",
  sand: "bg-sand text-charcoal",
  "teal-soft": "bg-teal-soft text-charcoal",
  "purple-soft": "bg-purple-soft text-charcoal",
};

// Vertical rhythm — mobile first, comfortable on desktop.
// Keep the scale intentional; resist the urge to add more options.
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

  // If spacingTop or spacingBottom are explicitly set, they override `spacing`
  // on that side. This lets you "break" the symmetry when two sections should
  // touch (e.g., a CTA band flowing straight into a footer).
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
