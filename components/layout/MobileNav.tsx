"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { navLinks, PHONE_DISPLAY, PHONE_HREF } from "./NavLinks";

type MobileNavProps = {
  pathname: string;
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
};

export default function MobileNav({
  pathname,
  open,
  onToggle,
  onClose,
}: MobileNavProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);
  // Close on Escape for keyboard users
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const overlay = (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`
          md:hidden fixed inset-0 z-40 bg-charcoal/30 backdrop-blur-sm
          transition-opacity duration-300 ease-out
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* Drawer */}
      <aside
        id="mobile-nav-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Meniu principal"
        className={`
          fixed top-0 right-0 bottom-0 z-50
          w-screen bg-cream
          flex flex-col
          shadow-[-8px_0_40px_rgba(44,44,44,0.08)]
          transition-transform duration-700 
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Drawer header — mirrors the nav bar */}
        <div className="flex items-center justify-between h-(--nav-height) px-5 border-b border-border">
          <Logo size="md" />
          <button
            onClick={onClose}
            className="p-2 text-charcoal hover:text-teal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded-soft"
            aria-label="Închide meniul"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Links */}
        <nav
          className="flex-1 overflow-y-auto px-5 py-8"
          aria-label="Navigație principală"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <li
                  key={link.href}
                  style={{
                    transitionDelay: open ? `${120 + i * 40}ms` : "0ms",
                  }}
                  className={`
                    transition-all duration-500 ease-out
                    ${open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}
                  `}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    aria-current={isActive ? "page" : undefined}
                    className={`
                      block py-4 font-display text-lg uppercase tracking-[0.15em] transition-colors
                      border-b border-border/60
                      ${isActive ? "text-charcoal" : "text-muted hover:text-charcoal"}
                    `}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer CTAs */}
        <div className="px-5 pb-8 pt-6 border-t border-border flex flex-col gap-3">
          <Button
            href={PHONE_HREF}
            variant="purple"
            size="md"
            fullWidth
            leftIcon={<Phone size={16} strokeWidth={1.75} />}
          >
            {PHONE_DISPLAY}
          </Button>
          <Button href="/contact" variant="primary" size="md" fullWidth>
            Programează o ședință
          </Button>
        </div>
      </aside>
    </>
  );

  return (
    <>
      {/* Header bar — stays in the normal Navbar flow */}
      <div className="md:hidden flex items-center justify-between h-(--nav-height)">
        <Logo size="md" />

        <button
          onClick={onToggle}
          className="p-2 text-charcoal hover:text-teal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded-soft"
          aria-label={open ? "Închide meniul" : "Deschide meniul"}
          aria-expanded={open}
          aria-controls="mobile-nav-panel"
        >
          {open ? (
            <X size={24} strokeWidth={1.5} />
          ) : (
            <Menu size={24} strokeWidth={1.5} />
          )}
        </button>
      </div>

      {mounted && createPortal(overlay, document.body)}
    </>
  );
}
