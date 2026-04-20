"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import DesktopNav from "./navbar/DesktopNav";
import MobileNav from "./navbar/MobileNav";

const SCROLL_OFFSET = 16;
const SCROLL_DELTA = 8;

export default function Navbar() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - lastScrollY;

      const nextScrolled = currentScrollY > SCROLL_OFFSET;
      setIsScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled));

      if (isMobileMenuOpen) {
        setIsVisible(true);
        lastScrollY = currentScrollY;
        return;
      }

      if (currentScrollY <= SCROLL_OFFSET) {
        setIsVisible(true);
        lastScrollY = currentScrollY;
        return;
      }

      if (Math.abs(scrollDifference) < SCROLL_DELTA) {
        return;
      }

      if (scrollDifference > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 w-full mb-10",
        "transition-[transform,opacity,background-color,border-color,box-shadow,backdrop-filter] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0",
        isScrolled
          ? "border-b border-border/70 bg-cream/95 shadow-[0_8px_30px_rgba(44,44,44,0.08)] backdrop-blur-xl"
          : "border-b border-transparent bg-cream/72 backdrop-blur-md",
      ].join(" ")}
    >
      <DesktopNav pathname={pathname} />
      <MobileNav
        key={pathname}
        pathname={pathname}
        open={isMobileMenuOpen}
        onOpenChange={setIsMobileMenuOpen}
      />
    </header>
  );
}
