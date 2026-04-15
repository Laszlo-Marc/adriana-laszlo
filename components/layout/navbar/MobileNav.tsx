"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { navLinks, PHONE_DISPLAY, PHONE_HREF } from "./NavLinks";
import { MobileNavToggle } from "./MobileNavToggle";
import { MobileDrawerPanel } from "./MobileDrawerPanel";
import { TabletDropdownPanel } from "./TabletDropdownPanel";

type MobileNavProps = {
  pathname: string;
};

const HEADER_HEIGHT_MOBILE = "5rem";
const HEADER_HEIGHT_TABLET = "5rem";

export default function MobileNav({ pathname }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  const closeMenu = () => setOpen(false);
  const toggleMenu = () => setOpen((prev) => !prev);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    const originalOverflow = document.body.style.overflow;
    const originalTouchAction = document.body.style.touchAction;

    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.touchAction = originalTouchAction;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="xl:hidden">
      <div className="relative z-50 flex h-20 items-center justify-between px-5 py-4 md:px-6 lg:px-8">
        <div className="md:hidden">
          <Logo size="lg" />
        </div>

        <div className="hidden md:block">
          <Logo size="md" />
        </div>

        <div className="flex items-center gap-3">
          <div
            className={[
              "hidden md:block transition-all duration-200",
              open ? "pointer-events-none opacity-0" : "opacity-100",
            ].join(" ")}
          >
            <Button
              href={PHONE_HREF}
              variant="primary"
              size="lg"
              leftIcon={<Phone size={16} strokeWidth={1.75} />}
              aria-label={`Sună la ${PHONE_DISPLAY}`}
            >
              Sună
            </Button>
          </div>

          <MobileNavToggle
            open={open}
            onClick={toggleMenu}
            ariaControls={panelId}
          />
        </div>
      </div>

      <div
        aria-hidden="true"
        onClick={closeMenu}
        className={[
          "fixed inset-0 z-40 bg-charcoal/10 backdrop-blur-sm transition-opacity duration-300 ease-out",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        ].join(" ")}
      />

      <MobileDrawerPanel
        id={panelId}
        open={open}
        pathname={pathname}
        onClose={closeMenu}
      />

      <TabletDropdownPanel
        id={panelId}
        open={open}
        pathname={pathname}
        onClose={closeMenu}
      />
    </div>
  );
}
