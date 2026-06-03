"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { NavbarItem, PHONE_DISPLAY, PHONE_HREF, WHATSAPP_HREF } from "../data";
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

export function FullscreenPanel({
  items,
  isActive,
  isOpen,
  onClose,
}: {
  items: NavbarItem[];
  isActive: (url: string) => boolean;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [servicesExpanded, setServicesExpanded] = React.useState(false);

  const handleClose = () => {
    setServicesExpanded(false);
    onClose();
  };

  React.useEffect(() => {
    if (!isOpen) {
      setServicesExpanded(false);
    }
  }, [isOpen]);

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
            <div className="mt-6">
              {items.map((item) => {
                const active = isActive(item.url);

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
            </div>

            <div className="flex-1" />

            <motion.div variants={itemVariants} className="mt-10 grid gap-3">
              <Button
                variant="primary"
                href={WHATSAPP_HREF}
                onClick={handleClose}
                leftIcon={<FaWhatsapp size={18} />}
              >
                WhatsApp
              </Button>

              <Button variant="outline" href={PHONE_HREF} onClick={handleClose}>
                {PHONE_DISPLAY}
              </Button>

              <Button variant="purple" href="/contact" onClick={handleClose}>
                Contact
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
