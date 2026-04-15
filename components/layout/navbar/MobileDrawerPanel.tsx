import Button from "@/components/ui/Button";
import { navLinks, PHONE_DISPLAY, PHONE_HREF } from "./NavLinks";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
const HEADER_HEIGHT_MOBILE = "5rem";

type SharedPanelProps = {
  id: string;
  open: boolean;
  pathname: string;
  onClose: () => void;
};

export function MobileDrawerPanel({
  id,
  open,
  pathname,
  onClose,
}: SharedPanelProps) {
  return (
    <div
      id={id}
      role="dialog"
      aria-modal="true"
      aria-label="Meniu principal"
      className={[
        "fixed inset-x-0 bottom-0 z-50 md:hidden bg-cream",
        "shadow-[0_18px_60px_rgba(44,44,44,0.12)]",
        "transform-gpu transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        open
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-4 opacity-0",
      ].join(" ")}
      style={{
        top: HEADER_HEIGHT_MOBILE,
        height: `calc(100dvh - ${HEADER_HEIGHT_MOBILE})`,
      }}
    >
      <div className="flex h-full flex-col">
        <nav
          aria-label="Navigație principală"
          className="flex-1 overflow-y-auto px-6 pt-8 pb-6"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;

              return (
                <li
                  key={link.href}
                  style={{
                    transitionDelay: open ? `${70 + index * 35}ms` : "0ms",
                  }}
                  className={[
                    "transition-all duration-400 ease-out",
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
                      "flex items-center justify-between border-b border-border/50 py-4",
                      "font-display text-lg uppercase tracking-[0.14em]",
                      "transition-colors",
                      isActive ? "text-gold" : "text-charcoal hover:text-gold",
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
            "flex flex-col gap-3 px-6 pb-8 pt-6",
            "transition-all duration-500 ease-out delay-150",
            open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
          ].join(" ")}
        >
          <Button
            href={PHONE_HREF}
            variant="purple"
            size="lg"
            fullWidth
            leftIcon={<Phone size={16} strokeWidth={1.75} />}
          >
            {PHONE_DISPLAY}
          </Button>

          <Button href="/contact" variant="primary" size="lg" fullWidth>
            Programează o ședință
          </Button>
        </div>
      </div>
    </div>
  );
}
