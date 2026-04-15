import Button from "@/components/ui/Button";
import { navLinks, PHONE_DISPLAY, PHONE_HREF } from "./NavLinks";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
const HEADER_HEIGHT_TABLET = "5rem";

type SharedPanelProps = {
  id: string;
  open: boolean;
  pathname: string;
  onClose: () => void;
};

export function TabletDropdownPanel({
  id,
  open,
  pathname,
  onClose,
}: SharedPanelProps) {
  return (
    <div
      className={[
        "fixed inset-x-0 top-20 z-50 hidden md:block xl:hidden px-6 lg:px-8",
        "transition-all duration-300 ease-out",
        open
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-2 opacity-0",
      ].join(" ")}
    >
      <div
        id={id}
        role="dialog"
        aria-modal="true"
        aria-label="Meniu principal"
        className={[
          "mx-auto w-full max-w-3xl overflow-hidden rounded-[28px] border border-border/60 bg-cream",
          "shadow-[0_24px_80px_rgba(44,44,44,0.16)]",
        ].join(" ")}
        style={{
          maxHeight: `calc(100dvh - ${HEADER_HEIGHT_TABLET} - 2rem)`,
        }}
      >
        <div className="flex max-h-full flex-col">
          <nav
            aria-label="Navigație principală"
            className="overflow-y-auto px-8 pt-8 pb-6"
          >
            <ul className="flex flex-col">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;

                return (
                  <li
                    key={link.href}
                    style={{
                      transitionDelay: open ? `${60 + index * 30}ms` : "0ms",
                    }}
                    className={[
                      "transition-all duration-300 ease-out",
                      open
                        ? "translate-y-0 opacity-100"
                        : "translate-y-2 opacity-0",
                    ].join(" ")}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      aria-current={isActive ? "page" : undefined}
                      className={[
                        "flex items-center justify-between border-b border-border/50 py-5",
                        "font-display text-xl uppercase tracking-[0.12em] transition-colors",
                        isActive
                          ? "text-gold"
                          : "text-charcoal hover:text-gold",
                      ].join(" ")}
                    >
                      <span>{link.label}</span>
                      <ArrowRight size={16} strokeWidth={1.5} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div
            className={[
              "grid grid-cols-2 gap-3 border-t border-border/50 px-8 py-6",
              "transition-all duration-300 ease-out delay-100",
              open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
            ].join(" ")}
          >
            <Button
              href={PHONE_HREF}
              variant="purple"
              size="lg"
              leftIcon={<Phone size={16} strokeWidth={1.75} />}
            >
              {PHONE_DISPLAY}
            </Button>

            <Button href="/contact" variant="primary" size="lg">
              Programează
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
