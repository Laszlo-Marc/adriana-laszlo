import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "urgent"
  | "purple"
  | "cream";

type ButtonSize = "sm" | "md" | "lg" | "xl";

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  /**
   * Full width on mobile, auto from sm upward.
   * Use className="w-full" when you need full width at every breakpoint.
   */
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
};

type AnchorProps = BaseProps & {
  href: string;
  external?: boolean;
} & Omit<ComponentPropsWithoutRef<"a">, keyof BaseProps | "href">;

type ButtonElProps = BaseProps & {
  href?: undefined;
} & Omit<ComponentPropsWithoutRef<"button">, keyof BaseProps>;

type ButtonProps = AnchorProps | ButtonElProps;

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-soft font-body font-medium uppercase tracking-[0.12em] transition-[background-color,border-color,color,box-shadow,transform] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-teal text-charcoal shadow-[0_1px_0_rgba(44,44,44,0.04)] hover:-translate-y-[1px] hover:bg-[#7fc9b8] focus-visible:ring-teal",
  secondary:
    "bg-charcoal text-cream hover:-translate-y-[1px] hover:bg-[#1a1a1a] focus-visible:ring-charcoal",
  outline:
    "border border-[var(--color-border-strong)] bg-transparent text-charcoal hover:border-charcoal hover:bg-white focus-visible:ring-charcoal",
  ghost:
    "bg-transparent text-muted hover:bg-[var(--color-teal-soft)] hover:text-charcoal focus-visible:ring-teal",
  urgent:
    "bg-gold text-charcoal hover:-translate-y-[1px] hover:bg-[#c98a16] focus-visible:ring-gold",
  purple:
    "bg-purple text-charcoal hover:-translate-y-[1px] hover:bg-[#b87dc8] focus-visible:ring-purple",
  cream: "bg-cream text-charcoal hover:bg-white focus-visible:ring-cream",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
  xl: "px-10 py-5 text-lg",
};

function isExternalHref(href: string) {
  return /^(https?:)?\/\//.test(href);
}

export default function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    fullWidth = false,
    leftIcon,
    rightIcon,
    className,
    ...rest
  } = props;

  const classes = cn(
    base,
    variants[variant],
    sizes[size],
    fullWidth && "w-full sm:w-auto",
    className,
  );

  const inner = (
    <>
      {leftIcon ? <span className="shrink-0">{leftIcon}</span> : null}
      <span>{children}</span>
      {rightIcon ? <span className="shrink-0">{rightIcon}</span> : null}
    </>
  );

  if ("href" in rest && rest.href !== undefined) {
    const { href, external, target, rel, ...anchorRest } = rest;

    const shouldOpenNewTab =
      external === true || (external !== false && isExternalHref(href));

    const resolvedTarget = shouldOpenNewTab ? (target ?? "_blank") : target;
    const resolvedRel =
      resolvedTarget === "_blank" ? (rel ?? "noopener noreferrer") : rel;

    if (
      isExternalHref(href) ||
      href.startsWith("tel:") ||
      href.startsWith("mailto:")
    ) {
      return (
        <a
          href={href}
          className={classes}
          target={resolvedTarget}
          rel={resolvedRel}
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

  return (
    <button
      type="button"
      className={classes}
      {...(rest as ComponentPropsWithoutRef<"button">)}
    >
      {inner}
    </button>
  );
}
