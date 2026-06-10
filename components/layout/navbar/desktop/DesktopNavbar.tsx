"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Mail, Menu, MessageCircle, X } from "lucide-react";

import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { cn } from "@/lib/utils";
import { NavbarItem, WHATSAPP_HREF } from "../../navigation-data";

type DesktopNavbarProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
};

type DesktopNavbarPanelProps = {
  items: NavbarItem[];
  isActive: (url: string) => boolean;
  isOpen: boolean;
  onClose: () => void;
};

type DesktopNavbarComponent = React.FC<DesktopNavbarProps> & {
  FullscreenPanel: React.FC<DesktopNavbarPanelProps>;
};

const overlayVariants = {
  hidden: {
    opacity: 0,
    y: -16,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -16,
  },
};

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const DesktopNavbar = function DesktopNavbar({
  isOpen,
  onOpenChange,
}: DesktopNavbarProps) {
  return (
    <div className="hidden h-20 items-center justify-between xl:flex lg:h-30">
      <div className="relative z-131">
        <Logo size="lg" />
      </div>

      <button
        type="button"
        aria-label={isOpen ? "Închide meniul" : "Deschide meniul"}
        aria-expanded={isOpen}
        aria-controls="desktop-fullscreen-menu"
        onClick={() => onOpenChange(!isOpen)}
        className="relative z-131 inline-flex h-12 w-12 items-center justify-center rounded-full text-charcoal transition-colors hover:bg-charcoal/5 focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-gold"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ opacity: 0, rotate: -45, scale: 0.92 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 45, scale: 0.92 }}
              transition={{ duration: 0.18 }}
              className="inline-flex"
            >
              <X size={40} strokeWidth={1.5} />
            </motion.span>
          ) : (
            <motion.span
              key="menu"
              initial={{ opacity: 0, rotate: 45, scale: 0.92 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -45, scale: 0.92 }}
              transition={{ duration: 0.18 }}
              className="inline-flex"
            >
              <Menu size={40} strokeWidth={1.4} />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
} as DesktopNavbarComponent;

function DesktopFullscreenPanel({
  items,
  isActive,
  isOpen,
  onClose,
}: DesktopNavbarPanelProps) {
  const [openDropdownId, setOpenDropdownId] = React.useState<number | null>(
    null,
  );

  React.useEffect(() => {
    if (!isOpen) {
      setOpenDropdownId(null);
      return;
    }

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyTouchAction = document.body.style.touchAction;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.touchAction = previousBodyTouchAction;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="desktop-fullscreen-menu"
          key="desktop-fullscreen-menu"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{
            duration: 0.35,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="fixed inset-0 z-100 hidden overflow-y-auto bg-cream text-charcoal xl:block"
        >
          <div className="relative flex min-h-svh flex-col px-8 pb-12 pt-28 lg:px-16 lg:pt-36">
            <motion.nav
              aria-label="Meniu principal"
              variants={listVariants}
              initial="hidden"
              animate="visible"
              className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center gap-8 text-center"
            >
              {items.map((item) => {
                const hasChildren = Boolean(item.children?.length);
                const childIsActive = item.children?.some((child) =>
                  isActive(child.url),
                );
                const active = isActive(item.url) || childIsActive;
                if (hasChildren) {
                  const isDropdownOpen = openDropdownId === item.id;
                  const dropdownId = `desktop-dropdown-${item.id}`;

                  return (
                    <motion.div
                      key={item.id}
                      variants={itemVariants}
                      className="w-full"
                    >
                      <div className="mx-auto inline-flex items-center justify-center gap-4">
                        <Link
                          href={item.url}
                          onClick={onClose}
                          className={cn(
                            "font-display text-4xl uppercase tracking-[0.16em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-gold lg:text-6xl",
                            active
                              ? "text-charcoal"
                              : "text-charcoal/70 hover:text-charcoal",
                          )}
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
                          className="inline-flex h-12 w-12 items-center justify-center rounded-full text-charcoal/80 transition-colors hover:bg-charcoal/5 hover:text-charcoal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                        >
                          <ChevronDown
                            size={34}
                            strokeWidth={1.3}
                            className={cn(
                              "transition-transform duration-300",
                              isDropdownOpen && "rotate-180",
                            )}
                          />
                        </button>
                      </div>

                      <AnimatePresence initial={false}>
                        {isDropdownOpen && (
                          <motion.div
                            id={dropdownId}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.28,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <div className="mx-auto mt-6 grid max-w-2xl gap-3 border-y border-charcoal/10 py-6">
                              {item.children?.map((child) => (
                                <Link
                                  key={child.id}
                                  href={child.url}
                                  onClick={onClose}
                                  className={cn(
                                    "group block rounded-2xl px-5 py-4 transition-colors hover:bg-white/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold",
                                    isActive(child.url) && "bg-white/70",
                                  )}
                                >
                                  <span className="block font-body text-xl uppercase tracking-[0.22em] text-charcoal">
                                    {child.title}
                                  </span>

                                  {child.description && (
                                    <span className="mt-1 block font-body text-xl leading-relaxed text-muted">
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
                  <motion.div key={item.id} variants={itemVariants}>
                    <Link
                      href={item.url}
                      onClick={onClose}
                      className={cn(
                        "font-display text-4xl uppercase tracking-[0.16em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-gold lg:text-6xl",
                        active
                          ? "text-charcoal"
                          : "text-charcoal/70 hover:text-charcoal",
                      )}
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.28,
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mx-auto mt-12 flex w-full max-w-xl flex-col items-center justify-center gap-3 border-t border-charcoal/10 pt-8 sm:flex-row"
            >
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                leftIcon={<Mail size={18} />}
                onClick={onClose}
              >
                Contact
              </Button>

              <Button
                href={WHATSAPP_HREF}
                variant="purple"
                size="lg"
                leftIcon={<MessageCircle size={18} />}
                onClick={onClose}
              >
                WhatsApp
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

DesktopNavbar.FullscreenPanel = DesktopFullscreenPanel;

export default DesktopNavbar;
