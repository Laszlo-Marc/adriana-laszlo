"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { X } from "lucide-react";

import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import NewsletterForm from "./NewsLetterForm";

const STORAGE_KEY = "newsletter-popup-dismissed-at";
const DISMISS_DAYS = 21;

function wasRecentlyDismissed() {
  if (typeof window === "undefined") return true;

  const value = window.localStorage.getItem(STORAGE_KEY);
  if (!value) return false;

  const dismissedAt = Number(value);
  if (Number.isNaN(dismissedAt)) return false;

  const daysSinceDismiss = (Date.now() - dismissedAt) / (1000 * 60 * 60 * 24);

  return daysSinceDismiss < DISMISS_DAYS;
}

export default function NewsletterPopup() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (pathname === "/contact") return;
    if (pathname.startsWith("/studio")) return;
    if (wasRecentlyDismissed()) return;

    const timeout = window.setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => window.clearTimeout(timeout);
  }, [pathname]);

  function dismiss() {
    window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
    setIsVisible(false);
  }

  useEffect(() => {
    if (!isVisible) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        dismiss();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="newsletter-popup-title"
      className="fixed inset-0 z-160 bg-charcoal/60 backdrop-blur-[6px]"
    >
      <div className="flex min-h-svh items-center justify-center p-2 sm:p-6">
        <div className="relative h-[calc(100svh-1rem)] w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-charcoal text-cream shadow-[0_40px_120px_rgba(20,20,20,0.35)] sm:h-auto sm:max-h-[calc(100svh-3rem)] sm:rounded-4xl lg:min-h-[min(82svh,760px)]">
          {/* Decorative layer */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,148,214,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(148,214,200,0.14),transparent_32%)]" />

            <Image
              src="/backgrounds/double-split.png"
              alt=""
              width={320}
              height={320}
              className="absolute -left-12 -top-8 w-40 rotate-[-8deg] opacity-[0.11] sm:w-56 lg:w-72"
            />

            <Image
              src="/backgrounds/df-purple-up.png"
              alt=""
              width={220}
              height={220}
              className="absolute right-4 top-20 w-20 opacity-15 sm:w-24 lg:right-[18%] lg:top-[8%] lg:w-28 lg:opacity-20"
            />

            <Image
              src="/backgrounds/df-teal-down.png"
              alt=""
              width={220}
              height={220}
              className="absolute bottom-[12%] left-[6%] hidden w-24 rotate-10 opacity-20 lg:block"
            />

            <Image
              src="/backgrounds/dragonfly.png"
              alt=""
              width={180}
              height={180}
              className="absolute bottom-[8%] right-[10%] hidden w-20 opacity-15 lg:block"
            />
          </div>

          <button
            type="button"
            aria-label="Închide"
            onClick={dismiss}
            className="absolute right-3 top-3 z-30 inline-flex size-10 items-center justify-center rounded-full border border-charcoal/10 bg-cream text-charcoal shadow-[0_12px_35px_rgba(0,0,0,0.22)] transition hover:scale-[1.03] hover:bg-white focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-gold sm:right-5 sm:top-5 sm:size-11"
          >
            <X aria-hidden="true" className="h-5 w-5" strokeWidth={1.9} />
          </button>

          <div className="relative hidden h-full  lg:grid-cols-[1.05fr_0.95fr] lg:grid-rows-none">
            {/* Left editorial panel */}
            <div className="relative min-h-0 overflow-hidden px-5 pb-4 pt-6 sm:px-10 sm:py-10 lg:min-h-[min(82svh,760px)] lg:px-14 lg:py-14">
              <p className="text-[10px] uppercase tracking-[0.28em] text-cream/60 sm:text-xs">
                Newsletter
              </p>

              <Heading
                id="newsletter-popup-title"
                as="h2"
                size="h1"
                className="mt-3 max-w-[12ch] text-[2.35rem] leading-[0.95] text-cream sm:mt-4 sm:text-[3.6rem] lg:max-w-[10ch]"
              >
                Evenimente, articole și resurse
              </Heading>

              <Text className="mt-4 max-w-xl text-sm leading-6 text-cream/72 sm:mt-6 sm:text-base">
                Primești ocazional materiale gratuite, articole și anunțuri
                despre evenimente noi. Fără mesaje dese, fără presiune.
              </Text>

              {/* Desktop-only detail cards. Too much for mobile. */}
              <div className="mt-8 hidden gap-3 sm:max-w-lg lg:grid">
                <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3">
                  <p className="text-sm font-medium text-cream">
                    Evenimente și grupuri noi
                  </p>
                  <p className="mt-1 text-sm text-cream/65">
                    Află primele detalii despre programe, workshopuri și
                    întâlniri viitoare.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3">
                  <p className="text-sm font-medium text-cream">
                    Resurse gratuite
                  </p>
                  <p className="mt-1 text-sm text-cream/65">
                    Primești ghiduri, exerciții și materiale utile atunci când
                    apar.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3">
                  <p className="text-sm font-medium text-cream">
                    Comunicare discretă
                  </p>
                  <p className="mt-1 text-sm text-cream/65">
                    Mesaje rare, clare și relevante. Te poți dezabona oricând.
                  </p>
                </div>
              </div>

              <div className="mt-8 hidden lg:block">
                <p className="text-sm italic text-cream/55">
                  Un spațiu blând și bine structurat pentru a rămâne aproape de
                  resursele care te pot susține.
                </p>
              </div>
            </div>

            {/* Right form panel */}
            <div className="relative min-h-0 border-t border-white/10 bg-cream/95 p-4 text-charcoal sm:p-8 lg:min-h-[min(82svh,760px)] lg:border-l lg:border-t-0 lg:bg-white/94 lg:p-10">
              <div className="mx-auto flex h-full w-full max-w-xl items-center">
                <div className="w-full rounded-3xl border border-charcoal/8 bg-white/65 p-4 shadow-[0_18px_50px_rgba(44,44,44,0.06)] sm:rounded-[1.75rem] sm:bg-cream/72 sm:p-7">
                  <Heading
                    as="h3"
                    size="h3"
                    className="text-[1.65rem] leading-tight sm:text-[2rem]"
                    align="center"
                  >
                    Abonează-te aici
                  </Heading>

                  <Text
                    color="muted"
                    className="mt-2 text-sm leading-6 sm:mt-3 sm:text-base"
                    align="center"
                  >
                    Te anunțăm ocazional când apar resurse gratuite sau
                    evenimente noi.
                  </Text>

                  <NewsletterForm
                    className="mt-4 sm:mt-6"
                    source="Newsletter popup"
                    onSuccess={dismiss}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
