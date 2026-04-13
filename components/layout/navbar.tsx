"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import DesktopNav from "./navbar/DesktopNav";
import MobileNav from "./navbar/MobileNav";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md ">
      <DesktopNav pathname={pathname} />
      <MobileNav
        pathname={pathname}
        open={mobileOpen}
        onToggle={() => setMobileOpen((v) => !v)}
        onClose={() => setMobileOpen(false)}
      />
    </header>
  );
}
