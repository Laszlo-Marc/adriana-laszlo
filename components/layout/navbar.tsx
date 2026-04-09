"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  // Close mobile menu when the route changes — handled during render
  // per React's guidance for "reset state on prop change".
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md ">
      <div className="section-container">
        <DesktopNav pathname={pathname} />
        <MobileNav
          pathname={pathname}
          open={mobileOpen}
          onToggle={() => setMobileOpen((v) => !v)}
          onClose={() => setMobileOpen(false)}
        />
      </div>
    </header>
  );
}
