import Link from "next/link";
import { motion } from "framer-motion";

import { serviceNavItems } from "../data";

export function ServicesDropdown() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.98 }}
      transition={{
        duration: 0.24,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="absolute left-1/2 top-full z-50 mt-5 w-[42rem] -translate-x-1/2 overflow-hidden rounded-[2rem] border border-border/80 bg-cream/96 shadow-[0_24px_80px_rgba(44,44,44,0.14)] backdrop-blur-xl"
    >
      <div className="grid grid-cols-[0.85fr_1.15fr]">
        <div className="bg-charcoal px-6 py-7 text-white">
          <p className="font-body text-xs uppercase tracking-[0.18em] text-teal">
            Servicii
          </p>

          <p className="mt-4 max-w-xs font-display text-2xl leading-tight">
            Sprijin terapeutic adaptat ritmului tău.
          </p>

          <p className="mt-4 text-sm leading-6 text-white/72">
            Alege zona care se potrivește cel mai bine cu ceea ce cauți acum.
          </p>

          <Link
            href="/servicii"
            className="mt-7 inline-flex text-sm font-medium text-teal transition hover:text-white"
          >
            Vezi toate serviciile
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-2 p-4">
          {serviceNavItems.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group rounded-2xl border border-transparent p-4 transition hover:border-border hover:bg-white/60"
            >
              <span className="block font-display text-base text-charcoal transition group-hover:text-gold">
                {service.title}
              </span>

              <span className="mt-2 block font-body text-xs leading-5 text-muted">
                {service.description}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
