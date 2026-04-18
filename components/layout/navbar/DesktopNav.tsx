"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { navLinks, PHONE_DISPLAY } from "./NavLinks";
import { FaWhatsapp } from "react-icons/fa";

type DesktopNavProps = {
  pathname: string;
};

export default function DesktopNav({ pathname }: DesktopNavProps) {
  return (
    <nav
      className="hidden xl:grid grid-cols-[auto_1fr_auto] items-center gap-8 px-8 py-6 2xl:px-10"
      aria-label="Navigație principală"
    >
      <div className="justify-self-start">
        <Logo size="md" />
      </div>

      <ul className="flex items-center justify-center gap-7 2xl:gap-9">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={[
                  "group relative py-1",
                  "font-body text-sm 2xl:text-base uppercase tracking-[0.14em]",
                  "transition-colors",
                  isActive ? "text-charcoal" : "text-muted hover:text-charcoal",
                ].join(" ")}
              >
                {link.label}

                <span
                  className={[
                    "pointer-events-none absolute left-0 -bottom-1 h-[1.5px] w-full rounded-full bg-teal",
                    "origin-left transition-transform duration-300 ease-out",
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100",
                  ].join(" ")}
                />
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="flex items-center justify-self-end gap-3">
        <Button
          href="https://wa.me/40775214338"
          variant="primary"
          size="lg"
          leftIcon={<FaWhatsapp size={18} strokeWidth={1.75} />}
          aria-label={`Sună la ${PHONE_DISPLAY}`}
        >
          WhatsApp
        </Button>

        <Button
          href="/contact"
          variant="purple"
          size="lg"
          leftIcon={<Mail size={18} />}
          aria-label="Programează o consultație"
        >
          Contact
        </Button>
      </div>
    </nav>
  );
}
