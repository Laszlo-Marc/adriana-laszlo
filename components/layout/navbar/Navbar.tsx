"use client";

import * as React from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import DesktopNavbar from "./desktop/DesktopNavbar";
import { navItems } from "./data";
import MobileNavbar from "./mobile/MobileNavbar";

type NavbarProps = {
  className?: string;
};

export default function Navbar({ className }: NavbarProps) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isHidden, setIsHidden] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = React.useState(false);

  const previousScrollY = React.useRef(0);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = previousScrollY.current;
    const scrollingDown = latest > previous;

    setIsScrolled(latest > 40);

    if (isMobileMenuOpen || isDesktopMenuOpen) {
      setIsHidden(false);
      previousScrollY.current = latest;
      return;
    }

    setIsHidden(scrollingDown && latest > 140);
    previousScrollY.current = latest;
  });

  React.useEffect(() => {
    if (isMobileMenuOpen || isDesktopMenuOpen) {
      setIsHidden(false);
    }
  }, [isMobileMenuOpen, isDesktopMenuOpen]);

  React.useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previousTouchAction = document.body.style.touchAction;

    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.touchAction = previousTouchAction;
    };
  }, [isMobileMenuOpen]);

  const isActive = React.useCallback(
    (url: string) => {
      if (url === "/") return pathname === "/";
      return pathname.startsWith(url);
    },
    [pathname],
  );

  const shouldHideNavbar = isHidden && !isMobileMenuOpen && !isDesktopMenuOpen;

  const isSolidNavbar = isScrolled || isMobileMenuOpen || isDesktopMenuOpen;

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: shouldHideNavbar ? "-100%" : "0%" }}
        transition={{
          duration: 0.42,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={cn(
          "fixed inset-x-0 top-0 z-[110] transition-colors duration-500",
          isSolidNavbar
            ? "border-b border-border/70 bg-cream/92 shadow-[0_14px_46px_rgba(44,44,44,0.08)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
          className,
        )}
      >
        <div className="mx-auto w-full max-w-full px-4 sm:px-6 lg:px-8">
          <DesktopNavbar
            isOpen={isDesktopMenuOpen}
            onOpenChange={setIsDesktopMenuOpen}
          />

          <MobileNavbar
            isSolidNavbar={isSolidNavbar}
            isOpen={isMobileMenuOpen}
            onOpenChange={setIsMobileMenuOpen}
          />
        </div>
      </motion.nav>

      <DesktopNavbar.FullscreenPanel
        items={navItems}
        isActive={isActive}
        isOpen={isDesktopMenuOpen}
        onClose={() => setIsDesktopMenuOpen(false)}
      />

      <MobileNavbar.FullscreenPanel
        items={navItems}
        isActive={isActive}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
