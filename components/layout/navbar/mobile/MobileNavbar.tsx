"use client";

import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

import Logo from "@/components/ui/Logo";
import { cn } from "@/lib/utils";
import { FullscreenPanel } from "./FullScreenPanel";

type MobileNavbarProps = {
  isSolidNavbar: boolean;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

function MobileNavbar({
  isSolidNavbar,
  isOpen,
  onOpenChange,
}: MobileNavbarProps) {
  return (
    <div className="grid h-20 grid-cols-2 items-center xl:hidden">
      <div className="flex justify-start">
        <Logo size="lg" />
      </div>

      <div className="flex justify-end">
        <motion.button
          type="button"
          onClick={() => onOpenChange(!isOpen)}
          className={cn(
            "inline-flex size-11 items-center justify-center rounded-full text-charcoal transition",
            isSolidNavbar ? "bg-white/35" : "bg-transparent",
          )}
          whileTap={{ scale: 0.94 }}
          aria-label={isOpen ? "Închide meniul" : "Deschide meniul"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </motion.button>
      </div>
    </div>
  );
}

MobileNavbar.FullscreenPanel = FullscreenPanel;

export default MobileNavbar;
