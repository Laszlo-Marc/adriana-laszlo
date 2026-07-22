"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
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

  const dismiss = useCallback(() => {
    window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
    setIsVisible(false);
  }, []);

  useEffect(() => {
    if (pathname === "/contact") return;
    if (pathname.startsWith("/studio")) return;
    if (wasRecentlyDismissed()) return;

    const timeout = window.setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => window.clearTimeout(timeout);
  }, [pathname]);

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
      if (event.key === "Escape") dismiss();
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [dismiss, isVisible]);

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="newsletter-popup-title"
      className="fixed inset-0 z-160 bg-charcoal/45 backdrop-blur-[5px]"
    >
      <div className="flex h-svh items-center justify-center overflow-hidden p-3 sm:p-6">
        <div className="relative w-full max-w-3xl overflow-hidden rounded-[1.75rem] border border-charcoal/8 bg-cream text-charcoal shadow-[0_30px_90px_rgba(20,20,20,0.24)] sm:rounded-[2rem]">
          {/* Light decorative background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute -right-24 -top-28 size-80 rounded-full bg-purple/10 blur-3xl" />
            <div className="absolute -bottom-32 -left-24 size-80 rounded-full bg-teal/15 blur-3xl" />
          </div>

          <button
            type="button"
            aria-label="Închide"
            onClick={dismiss}
            className="absolute right-3 top-3 z-30 inline-flex size-9 items-center justify-center rounded-full border border-charcoal/10 bg-white/85 text-charcoal shadow-sm transition hover:scale-[1.03] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:right-5 sm:top-5 sm:size-10"
          >
            <X aria-hidden="true" className="size-5" strokeWidth={1.8} />
          </button>

          <div className="relative px-4 pb-4 pt-12 sm:px-8 sm:pb-7 sm:pt-7">
            <div className="mx-auto w-full max-w-2xl">
              <div className="mx-auto max-w-xl text-center">
                <p className="text-[10px] uppercase tracking-[0.26em] text-gold sm:text-xs">
                  Resursă gratuită
                </p>

                <Heading
                  id="newsletter-popup-title"
                  as="h2"
                  size="h3"
                  align="center"
                  className="mt-2 text-[1.45rem] leading-tight sm:text-[2rem]"
                >
                  Alătură-te comunității.
                </Heading>

                <Text
                  color="muted"
                  align="center"
                  className="mt-2 text-sm leading-5 sm:text-[0.95rem] sm:leading-6"
                >
                  Abonează-te și primești gratuit o resursă descărcabilă care nu
                  este disponibilă public pe site.
                </Text>
              </div>

              <NewsletterForm
                className="mt-4 sm:mt-5"
                source="Newsletter popup"
                resourceId="ghid-resurse-pozitive"
                submitLabel="Primește resursa gratuită"
                successTitle="Resursa este pregătită."
                successMessage="Mulțumim pentru abonare. Ți-am trimis resursa și pe email. O poți descărca și folosind butonul de mai jos."
                downloadLabel="Descarcă resursa gratuită"
                autoDownload
              />

              <p className="mt-3 text-center text-[11px] leading-4 text-muted sm:text-xs">
                Fără mesaje dese. Fără presiune. Te poți dezabona oricând.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
