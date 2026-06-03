"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MailCheck, MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { cn } from "@/lib/utils";
import { NavbarItem } from "../data";

type DesktopNavbarProps = {
  items: NavbarItem[];
  isActive: (url: string) => boolean;
  isSolidNavbar: boolean;
};

export default function DesktopNavbar({ items, isActive }: DesktopNavbarProps) {
  const [hoveredItem, setHoveredItem] = React.useState<number | null>(null);

  return (
    <div className="hidden h-20 grid-cols-[auto_1fr_auto] items-center gap-8 xl:grid lg:h-30">
      <div className="justify-self-start">
        <Logo size="sm" />
      </div>

      <div className="flex justify-center">
        <div className="flex items-center gap-2">
          {items.map((item) => {
            const active = isActive(item.url);
            const isServices = item.url === "/servicii";

            if (isServices) {
              return (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => {
                    setHoveredItem(item.id);
                  }}
                  onMouseLeave={() => {
                    setHoveredItem(null);
                  }}
                >
                  <Link
                    href={item.url}
                    className={cn(
                      "relative z-10 flex items-center px-3 py-2 font-body text-lg uppercase tracking-[0.16em] transition-colors",
                      active
                        ? "text-charcoal"
                        : "text-muted hover:text-charcoal",
                    )}
                  >
                    {item.title}
                  </Link>

                  {(active || hoveredItem === item.id) && (
                    <motion.span
                      layoutId="navbar-underline"
                      className="absolute -bottom-1 left-3 right-3 h-px bg-teal"
                      initial={{ opacity: 0, scaleX: 0.4 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      exit={{ opacity: 0, scaleX: 0.4 }}
                      transition={{
                        duration: 0.22,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    />
                  )}
                </div>
              );
            }

            return (
              <motion.div
                key={item.id}
                className="relative"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={item.url}
                  className={cn(
                    "relative z-10 flex items-center px-3 py-2 font-body text-lg uppercase tracking-[0.16em] transition-colors",
                    active ? "text-charcoal" : "text-muted hover:text-charcoal",
                  )}
                >
                  {item.title}
                </Link>

                {(active || hoveredItem === item.id) && (
                  <motion.span
                    layoutId="navbar-underline"
                    className="absolute -bottom-1 left-3 right-3 h-px bg-teal"
                    initial={{ opacity: 0, scaleX: 0.4 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    exit={{ opacity: 0, scaleX: 0.4 }}
                    transition={{
                      duration: 0.22,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-end gap-3">
        <Button
          href="/contact"
          variant="primary"
          size="lg"
          leftIcon={<Mail size={18} />}
        >
          Contact
        </Button>
        <Button
          href="/contact"
          variant="purple"
          size="lg"
          leftIcon={<MessageCircle size={18} />}
        >
          WhatsApp
        </Button>
      </div>
    </div>
  );
}
