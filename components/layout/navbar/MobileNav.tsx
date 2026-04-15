"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { navLinks, PHONE_DISPLAY, PHONE_HREF } from "./NavLinks";
import { MobileNavToggle } from "./MobileNavToggle";

type MobileNavProps = {
  pathname: string;
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
};

const MOBILE_NAV_HEIGHT = "5rem";

export default function MobileNav({
  pathname,
  open,
  onToggle,
  onClose,
}: MobileNavProps) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    const originalTouchAction = document.body.style.touchAction;

    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.touchAction = originalTouchAction;
    };
  }, [open]);

  return (
    <div className="xl:hidden">
      <div className="relative z-50 flex h-20 items-center justify-between px-6 py-6">
        <Logo size="lg" />
        <MobileNavToggle open={open} onClick={onToggle} />
      </div>

      <div
        aria-hidden="true"
        onClick={onClose}
        className={[
          "fixed inset-0 z-40  backdrop-blur-md",
          "transition-opacity duration-400 ease-out",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        ].join(" ")}
      />

      <div
        id="mobile-nav-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Meniu principal"
        className={[
          "fixed inset-x-0 bottom-0 z-50 bg-cream",
          "shadow-[0_18px_60px_rgba(44,44,44,0.12)]",
          "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ",
          "transform-gpu will-change-transform",
          open
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 opacity-0 pointer-events-none",
        ].join(" ")}
        style={{
          top: MOBILE_NAV_HEIGHT,
          height: `calc(100dvh - ${MOBILE_NAV_HEIGHT})`,
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
                      "transition-all duration-400 ease-out ",
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
                        "flex items-center justify-between py-4",
                        "font-display text-lg uppercase tracking-[0.14em]",
                        "transition-colors",
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
              " px-6 pb-8 pt-6",
              "flex flex-col gap-3",
              "transition-all duration-500 ease-out delay-150 ",
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
    </div>
  );
}
