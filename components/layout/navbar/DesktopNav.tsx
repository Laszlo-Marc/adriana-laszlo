"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { navLinks, PHONE_DISPLAY, PHONE_HREF } from "./NavLinks";
import { GiChatBubble } from "react-icons/gi";

type DesktopNavProps = {
  pathname: string;
};

export default function DesktopNav({ pathname }: DesktopNavProps) {
  return (
    <nav
      className="hidden md:grid grid-cols-3 items-center h-26 px-8 py-6"
      aria-label="Navigație principală"
    >
      {/* LEFT — Logo */}
      <div className="justify-self-start">
        <Logo size="md" />
      </div>

      {/* CENTER — Navigation */}
      <ul className="flex items-center gap-9 justify-self-center">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`
                  group relative py-1
                  font-body text-lg uppercase tracking-[0.14em]
                  transition-colors
                  ${
                    isActive
                      ? "text-charcoal"
                      : "text-muted hover:text-charcoal"
                  }
                `}
              >
                {link.label}

                {/* underline */}
                <span
                  className={`
                    pointer-events-none absolute left-0 -bottom-1 h-[1.5px] w-full bg-teal rounded-full
                    origin-left transition-transform duration-300 ease-out
                    ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }
                  `}
                />
              </Link>
            </li>
          );
        })}
      </ul>

      {/* RIGHT — Actions */}
      <div className="flex items-center gap-3 justify-self-end">
        <Button
          href={PHONE_HREF}
          variant="primary"
          size="lg"
          leftIcon={<Phone size={18} strokeWidth={1.75} />}
          aria-label={`Sună la ${PHONE_DISPLAY}`}
        >
          {PHONE_DISPLAY}
        </Button>

        <Button
          href="/contact"
          variant="purple"
          size="lg"
          leftIcon={<Mail size={18} />}
          aria-label="Programează o consultație"
        >
          Programează
        </Button>
      </div>
    </nav>
  );
}
