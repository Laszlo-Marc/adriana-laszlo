import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "urgent"
  | "purple";
type ButtonSize = "sm" | "md" | "lg" | "xl";

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Full width on mobile, auto on desktop */
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
};

// Discriminated union: either an anchor (href) or a button (onClick / type)
type AnchorProps = BaseProps & {
  href: string;
  external?: boolean;
} & Omit<ComponentPropsWithoutRef<"a">, keyof BaseProps | "href">;

type ButtonElProps = BaseProps & {
  href?: undefined;
} & Omit<ComponentPropsWithoutRef<"button">, keyof BaseProps>;

type ButtonProps = AnchorProps | ButtonElProps;

const base = `
  inline-flex items-center justify-center gap-2
  font-body font-medium uppercase tracking-[0.12em]
  rounded-soft transition-all duration-200
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-cream
  disabled:opacity-50 disabled:pointer-events-none
  whitespace-nowrap
`;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-teal text-charcoal hover:bg-[#7fc9b8] hover:-translate-y-[1px] focus-visible:ring-teal shadow-[0_1px_0_rgba(44,44,44,0.04)]",
  secondary:
    "bg-charcoal text-cream hover:bg-[#1a1a1a] hover:-translate-y-[1px] focus-visible:ring-charcoal",
  outline:
    "bg-transparent text-charcoal border border-[var(--color-border-strong)] hover:border-charcoal hover:bg-white focus-visible:ring-charcoal",
  ghost:
    "bg-transparent text-muted hover:text-charcoal hover:bg-[var(--color-teal-soft)] focus-visible:ring-teal",
  urgent:
    "bg-gold text-charcoal hover:bg-[#c98a16] hover:-translate-y-[1px] focus-visible:ring-gold",
  purple:
    "bg-purple text-charcoal hover:bg-[#b87dc8] hover:-translate-y-[1px] focus-visible:ring-purple",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-md",
  xl: "px-10 py-5 text-lg",
};

export default function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    fullWidth = false,
    leftIcon,
    rightIcon,
    className = "",
    ...rest
  } = props;

  const classes = `
    ${base}
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? "w-full" : ""}
    ${className}
  `;

  const inner = (
    <>
      {leftIcon}
      <span>{children}</span>
      {rightIcon}
    </>
  );

  // Anchor variant (internal or external link)
  if ("href" in rest && rest.href !== undefined) {
    const { href, external, ...anchorRest } = rest as {
      href: string;
      external?: boolean;
    } & ComponentPropsWithoutRef<"a">;

    const isExternal =
      external ||
      href.startsWith("http") ||
      href.startsWith("tel:") ||
      href.startsWith("mailto:");

    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          {...anchorRest}
        >
          {inner}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...anchorRest}>
        {inner}
      </Link>
    );
  }

  // Native button
  return (
    <button
      className={classes}
      {...(rest as ComponentPropsWithoutRef<"button">)}
    >
      {inner}
    </button>
  );
}
