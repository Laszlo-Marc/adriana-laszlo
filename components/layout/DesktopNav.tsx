"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { navLinks, PHONE_DISPLAY, PHONE_HREF } from "./NavLinks";

type DesktopNavProps = {
  pathname: string;
};

export default function DesktopNav({ pathname }: DesktopNavProps) {
  return (
    <nav
      className="hidden md:flex items-center justify-between h-(--nav-height-md)"
      aria-label="Navigație principală"
    >
      <Logo size="md" />

      <ul className="flex items-center gap-9">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`
                  relative py-1 font-body text-lg uppercase tracking-[0.12em] transition-colors
                  ${isActive ? "text-charcoal font-medium" : "text-muted hover:text-charcoal"}
                `}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-teal rounded-full" />
                )}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="flex items-center gap-3">
        <Button
          href={PHONE_HREF}
          variant="ghost"
          size="lg"
          leftIcon={<Phone size={14} strokeWidth={1.75} />}
          aria-label={`Sună la ${PHONE_DISPLAY}`}
        >
          {PHONE_DISPLAY}
        </Button>
        <Button href="/contact" variant="primary" size="lg">
          Programează
        </Button>
      </div>
    </nav>
  );
}
