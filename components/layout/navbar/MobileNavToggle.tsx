"use client";

type MobileNavToggleProps = {
  open: boolean;
  onClick: () => void;
  ariaControls?: string;
};

export function MobileNavToggle({
  open,
  onClick,
  ariaControls,
}: MobileNavToggleProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? "Închide meniul" : "Deschide meniul"}
      aria-expanded={open}
      aria-controls={ariaControls}
      className={[
        "relative inline-flex h-12 w-12 items-center justify-center rounded-full",
        "border border-border/70 bg-cream text-charcoal transition-colors",
        "hover:border-charcoal/30 hover:bg-surface focus:outline-none focus:ring-2 focus:ring-teal/40",
      ].join(" ")}
    >
      <span className="sr-only">
        {open ? "Închide meniul" : "Deschide meniul"}
      </span>

      <span className="relative block h-4 w-5">
        <span
          className={[
            "absolute left-0 top-0 h-[1.5px] w-5 rounded-full bg-current transition-all duration-300",
            open ? "translate-y-[7px] rotate-45" : "translate-y-0",
          ].join(" ")}
        />
        <span
          className={[
            "absolute left-0 top-[7px] h-[1.5px] w-5 rounded-full bg-current transition-all duration-300",
            open ? "opacity-0" : "opacity-100",
          ].join(" ")}
        />
        <span
          className={[
            "absolute left-0 top-[14px] h-[1.5px] w-5 rounded-full bg-current transition-all duration-300",
            open ? "-translate-y-[7px] -rotate-45" : "translate-y-0",
          ].join(" ")}
        />
      </span>
    </button>
  );
}
