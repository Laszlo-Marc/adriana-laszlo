"use client";

import { usePathname } from "next/navigation";
import DesktopNav from "./navbar/DesktopNav";
import MobileNav from "./navbar/MobileNav";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md">
      <DesktopNav pathname={pathname} />
      <MobileNav key={pathname} pathname={pathname} />
    </header>
  );
}
