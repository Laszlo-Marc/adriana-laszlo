"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import DesktopNav from "./navbar/DesktopNav";
import MobileNav from "./navbar/MobileNav";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nextScrolled = window.scrollY > 16;

      setIsScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 w-full transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 mb-10",
        isScrolled
          ? "border-b border-border/70 bg-cream/95 shadow-[0_8px_30px_rgba(44,44,44,0.08)] backdrop-blur-xl"
          : "border-b border-transparent bg-cream/72 backdrop-blur-md",
      ].join(" ")}
    >
      <DesktopNav pathname={pathname} />
      <MobileNav key={pathname} pathname={pathname} />
    </header>
  );
}
