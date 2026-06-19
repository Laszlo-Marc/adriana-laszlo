"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import {
  NavbarItem,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_HREF,
} from "../../navigation-data";

const panelVariants: Variants = {
  closed: {
    opacity: 0,
    y: "-100%",
    transition: {
      duration: 0.34,
      ease: [0.16, 1, 0.3, 1],
      when: "afterChildren",
      staggerChildren: 0.025,
      staggerDirection: -1,
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: [0.16, 1, 0.3, 1],
      when: "beforeChildren",
      staggerChildren: 0.055,
    },
  },
};

const itemVariants: Variants = {
  closed: {
    opacity: 0,
    y: 14,
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.28,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const dropdownVariants: Variants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.24,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.28,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

type FullscreenPanelProps = {
  items: NavbarItem[];
  isActive: (url: string) => boolean;
  isOpen: boolean;
  onClose: () => void;
};

export function FullscreenPanel({
  items,
  isActive,
  isOpen,
  onClose,
}: FullscreenPanelProps) {
  const [openDropdownId, setOpenDropdownId] = React.useState<number | null>(
    null,
  );

  const handleClose = React.useCallback(() => {
    setOpenDropdownId(null);
    onClose();
  }, [onClose]);
  const activeDropdownId = isOpen ? openDropdownId : null;
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={panelVariants}
          initial="closed"
          animate="open"
          exit="closed"
          className="fixed inset-0 z-40 overflow-y-auto bg-cream text-charcoal xl:hidden"
        >
          <div className="flex min-h-svh flex-col px-5 pb-6 pt-24">
            <nav aria-label="Meniu principal" className="mt-6">
              {items.map((item) => {
                const hasChildren = Boolean(item.children?.length);
                const childIsActive = item.children?.some((child) =>
                  isActive(child.url),
                );
                const active = isActive(item.url) || childIsActive;
                const isDropdownOpen = activeDropdownId === item.id;

                if (hasChildren) {
                  const dropdownId = `mobile-dropdown-${item.id}`;

                  return (
                    <motion.div
                      key={item.id}
                      variants={itemVariants}
                      className="border-b border-border"
                    >
                      <div
                        className={cn(
                          "group flex min-h-18 w-full items-center justify-between gap-4 transition-colors",
                          active ? "text-gold" : "text-charcoal",
                        )}
                      >
                        <Link
                          href={item.url}
                          onClick={handleClose}
                          className="flex min-h-18 flex-1 items-center font-display text-2xl uppercase tracking-wide focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                        >
                          {item.title}
                        </Link>

                        <button
                          type="button"
                          aria-label={
                            isDropdownOpen
                              ? `Închide submeniul ${item.title}`
                              : `Deschide submeniul ${item.title}`
                          }
                          aria-expanded={isDropdownOpen}
                          aria-controls={dropdownId}
                          onClick={() =>
                            setOpenDropdownId((current) =>
                              current === item.id ? null : item.id,
                            )
                          }
                          className="flex size-12 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-white/50 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-gold"
                        >
                          <ChevronDown
                            aria-hidden="true"
                            className={cn(
                              "size-5 transition-transform duration-300",
                              isDropdownOpen && "rotate-180",
                            )}
                          />
                        </button>
                      </div>

                      <AnimatePresence initial={false}>
                        {isDropdownOpen && (
                          <motion.div
                            id={dropdownId}
                            variants={dropdownVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="overflow-hidden"
                          >
                            <div className="grid gap-2 pb-5">
                              {item.children?.map((child) => (
                                <Link
                                  key={child.id}
                                  href={child.url}
                                  onClick={handleClose}
                                  className={cn(
                                    "rounded-2xl bg-white/45 px-4 py-3 transition-colors hover:bg-white/70 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-gold",
                                    isActive(child.url)
                                      ? "text-gold"
                                      : "text-charcoal",
                                  )}
                                >
                                  <span className="block font-body text-sm uppercase tracking-[0.16em]">
                                    {child.title}
                                  </span>

                                  {child.description && (
                                    <span className="mt-1 block font-body text-sm leading-relaxed text-muted">
                                      {child.description}
                                    </span>
                                  )}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    className="border-b border-border"
                  >
                    <Link
                      href={item.url}
                      onClick={handleClose}
                      className={cn(
                        "group flex min-h-18 items-center justify-between gap-4 font-display text-2xl uppercase tracking-wide transition-colors",
                        active ? "text-gold" : "text-charcoal",
                      )}
                    >
                      <span>{item.title}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="flex-1" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
