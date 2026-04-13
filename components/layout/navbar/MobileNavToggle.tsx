type MobileNavToggleProps = {
  open: boolean;
  onClick: () => void;
};

export function MobileNavToggle({ open, onClick }: MobileNavToggleProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? "Închide meniul" : "Deschide meniul"}
      aria-expanded={open}
      aria-controls="mobile-nav-panel"
      className="relative inline-flex h-11 w-11 items-center justify-center rounded-soft text-charcoal transition-colors hover:text-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
    >
      <span className="sr-only">
        {open ? "Închide meniul" : "Deschide meniul"}
      </span>

      <span className="relative block h-5 w-6">
        <span
          className={[
            "absolute left-0 top-0 h-[1.5px] w-6 origin-center rounded-full bg-current",
            "transition-transform duration-300 ease-out",
            open ? "translate-y-2.25 rotate-45" : "translate-y-0 rotate-0",
          ].join(" ")}
        />
        <span
          className={[
            "absolute left-0 top-2.25 h-[1.5px] w-6 rounded-full bg-current",
            "transition-opacity duration-200 ease-out",
            open ? "opacity-0" : "opacity-100",
          ].join(" ")}
        />
        <span
          className={[
            "absolute left-0 top-4.5 h-[1.5px] w-6 origin-center rounded-full bg-current",
            "transition-transform duration-300 ease-out",
            open ? "-translate-y-2.25 -rotate-45" : "translate-y-0 rotate-0",
          ].join(" ")}
        />
      </span>
    </button>
  );
}
