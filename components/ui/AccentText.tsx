import { cn } from "@/lib/utils";

type AccentTextProps = {
  children: React.ReactNode;
  className?: string;
};

export default function AccentText({
  children,
  className,
  as: Component = "span",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "div" | "p";
}) {
  return (
    <Component
      className={cn(
        "font-accent text-[1.2em] leading-none tracking-wide",
        className,
      )}
    >
      {children}
    </Component>
  );
}
