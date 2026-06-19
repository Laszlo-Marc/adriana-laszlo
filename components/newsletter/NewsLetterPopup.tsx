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
              className="absolute -left-12 -top-8 w-40 rotate-[-8deg] opacity-[0.08] sm:w-56 lg:w-72 lg:opacity-[0.11]"
            />

            <Image
              src="/backgrounds/df-purple-up.png"
              alt=""
              width={220}
              height={220}
              className="absolute right-4 top-20 w-20 opacity-10 sm:w-24 lg:right-[18%] lg:top-[8%] lg:w-28 lg:opacity-20"
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

          <div className="relative grid h-full lg:grid-cols-[1.05fr_0.95fr]">
            {/* Left editorial panel - desktop only */}
            <div className="relative hidden min-h-0 overflow-hidden px-5 pb-4 pt-6 sm:px-10 sm:py-10 lg:block lg:min-h-[min(82svh,760px)] lg:px-14 lg:py-14">
              <p className="text-xs uppercase tracking-[0.28em] text-cream/60">
                Newsletter
              </p>

              <Heading
                as="h2"
                size="h1"
                className="mt-4 max-w-[10ch] text-[3.6rem] leading-[0.95] text-cream"
              >
                Evenimente, articole și resurse
              </Heading>

              <Text className="mt-6 max-w-xl text-base leading-7 text-cream/72">
                Abonează-te și primești acces la o resursă gratuită, creată
                special pentru comunitatea newsletterului — un material care nu
                este disponibil public pe site.
              </Text>

              <div className="mt-8 grid gap-3 sm:max-w-lg">
                <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3">
                  <p className="text-sm font-medium text-cream">
                    Resursă exclusivă la abonare
                  </p>
                  <p className="mt-1 text-sm text-cream/65">
                    Primești un material descărcabil gratuit, disponibil doar
                    prin newsletter.
                  </p>
                </div>

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
                    Comunicare discretă
                  </p>
                  <p className="mt-1 text-sm text-cream/65">
                    Mesaje rare, clare și relevante. Te poți dezabona oricând.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-sm italic text-cream/55">
                  Un spațiu blând și bine structurat pentru a rămâne aproape de
                  resursele care te pot susține.
                </p>
              </div>
            </div>

            {/* Form panel */}
            <div className="relative min-h-full bg-cream/95 p-4 text-charcoal sm:p-8 lg:min-h-[min(82svh,760px)] lg:border-l lg:border-white/10 lg:bg-white/94 lg:p-10">
              <div className="mx-auto flex h-full w-full max-w-xl items-center">
                <div className="w-full rounded-3xl border border-charcoal/8 bg-white/70 p-5 shadow-[0_18px_50px_rgba(44,44,44,0.06)] sm:rounded-[1.75rem] sm:bg-cream/72 sm:p-7">
                  <p className="text-center text-[10px] uppercase tracking-[0.24em] text-muted sm:text-xs">
                    Resursă gratuită
                  </p>

                  <Heading
                    id="newsletter-popup-title"
                    as="h2"
                    size="h3"
                    className="mt-3 text-[1.5rem] leading-tight sm:text-[2rem]"
                    align="center"
                  >
                    Alătură-te comunității.
                  </Heading>

                  <Text
                    color="muted"
                    className="mt-3 text-sm leading-6 sm:text-base"
                    align="center"
                  >
                    Abonează-te și îți trimitem gratuit o resursă descărcabilă
                    care nu este disponibilă public pe site.
                  </Text>

                  <NewsletterForm
                    className="mt-4 sm:mt-6"
                    source="Newsletter popup"
                    resourceKey="ghid-resurse-pozitive.pdf"
                    submitLabel="Primește resursa gratuită"
                    successTitle="Resursa este pregătită."
                    successMessage="Mulțumim pentru abonare. Poți descărca materialul gratuit folosind butonul de mai jos."
                    downloadLabel="Descarcă resursa gratuită"
                    autoDownload={true}
                  />
                  <p className="mt-4 text-center text-xs leading-5 text-muted">
                    Fără mesaje dese. Fără presiune. Te poți dezabona oricând.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
