"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, MessageCircleHeart } from "lucide-react";

export function AboutSectionCta() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="mt-10 rounded-4xl border border-charcoal/10 bg-charcoal px-6 py-8 text-white shadow-[0_20px_60px_rgba(31,31,31,0.14)] md:px-8 md:py-10"
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white/72">
            <MessageCircleHeart className="h-3.5 w-3.5 text-teal" />
            Primul pas spre schimbare
          </div>

          <h3 className="font-display text-3xl leading-tight text-white md:text-4xl">
            Vindecarea începe atunci când nu mai trebuie să duci totul singur
          </h3>

          <p className="mt-4 max-w-xl text-base leading-7 text-white/78">
            Dacă simți că trauma, anxietatea sau relațiile dureroase continuă să
            îți influențeze viața, terapia poate deveni un spațiu sigur în care
            să înțelegi, să reglezi și să schimbi profund ceea ce te blochează.
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col xl:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-6 py-3.5 text-sm font-medium text-charcoal transition-transform duration-200 hover:-translate-y-0.5"
          >
            Programează o discuție
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/evenimente"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/8 px-6 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-white/12"
          >
            <CalendarDays className="h-4 w-4" />
            Vezi evenimentele
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
