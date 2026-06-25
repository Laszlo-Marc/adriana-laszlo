"use client";

import { useState } from "react";
import { X } from "lucide-react";

import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { CookieConsentPreferences } from "@/lib/cookies/cookiesConsent";
import { useCookieConsent } from "./CookiesConsentProvider";

type CookieToggleProps = {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
};

function CookieToggle({
  title,
  description,
  checked,
  disabled,
  onChange,
}: CookieToggleProps) {
  return (
    <label
      className={cn(
        "flex gap-3 rounded-2xl border border-charcoal/10 bg-cream/45 px-4 py-3",
        disabled ? "cursor-not-allowed opacity-65" : "cursor-pointer",
      )}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(event) => onChange?.(event.target.checked)}
        className="mt-1 h-4 w-4 shrink-0 rounded border-charcoal/20 text-teal focus:ring-teal/30"
      />

      <span className="min-w-0">
        <span className="block text-sm font-medium leading-5 text-charcoal">
          {title}
        </span>

        <span className="mt-0.5 block text-xs leading-5 text-muted">
          {description}
        </span>
      </span>
    </label>
  );
}

export default function CookiesBanner() {
  const {
    preferences,
    hasDecision,
    isSettingsOpen,
    acceptAll,
    rejectOptional,
    savePreferences,
    openSettings,
    closeSettings,
    isReady,
  } = useCookieConsent();
  const [localPreferences, setLocalPreferences] =
    useState<CookieConsentPreferences>(() => preferences);

  if (!isReady) {
    return null;
  }

  const shouldShowBanner = !hasDecision;
  const shouldShowSettings = isSettingsOpen;

  function handleOpenSettings() {
    setLocalPreferences(preferences);
    openSettings();
  }
  function updatePreference(
    key: keyof Omit<CookieConsentPreferences, "necessary">,
    value: boolean,
  ) {
    setLocalPreferences((current) => ({
      ...current,
      [key]: value,
    }));
  }

  if (!shouldShowBanner && !shouldShowSettings) {
    return null;
  }

  return (
    <>
      {shouldShowBanner ? (
        <div className="fixed inset-x-0 bottom-0 z-90 px-4 pb-4 sm:px-6 sm:pb-6">
          <div className="mx-auto max-w-4xl rounded-[1.75rem] border border-charcoal/10 bg-white/95 p-5 shadow-[0_24px_80px_rgba(44,44,44,0.18)] backdrop-blur-md sm:p-6">
            <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="font-display text-2xl text-charcoal">
                  Folosim cookies
                </p>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
                  Folosim cookies necesare pentru funcționarea site-ului și,
                  doar cu acordul tău, cookies pentru analiză și servicii
                  externe precum Google Analytics, Google Maps sau Instagram.
                </p>

                <a
                  href="/politica-cookies"
                  className="mt-3 inline-flex text-sm font-medium text-charcoal underline decoration-charcoal/25 underline-offset-4 transition hover:text-teal hover:decoration-teal/40"
                >
                  Citește politica de cookies
                </a>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row lg:flex-col">
                <Button
                  type="button"
                  className="justify-center"
                  onClick={acceptAll}
                >
                  Acceptă toate
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  className="justify-center"
                  onClick={rejectOptional}
                >
                  Respinge opționale
                </Button>

                <Button
                  type="button"
                  variant="ghost"
                  className="justify-center"
                  onClick={handleOpenSettings}
                >
                  Personalizează
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {shouldShowSettings ? (
        <div
          className="fixed inset-0 z-100 flex items-end justify-center bg-charcoal/35 px-3 py-3 backdrop-blur-sm sm:items-center sm:px-6 sm:py-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-settings-title"
        >
          <div className="max-h-[calc(100svh-1.5rem)] w-full max-w-3xl overflow-y-auto rounded-3xl border border-charcoal/10 bg-white p-4 shadow-[0_24px_90px_rgba(44,44,44,0.22)] sm:max-h-[calc(100svh-3rem)] sm:rounded-[1.75rem] sm:p-5 lg:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p
                  id="cookie-settings-title"
                  className="font-display text-xl text-charcoal sm:text-2xl"
                >
                  Setări cookies
                </p>

                <p className="mt-1.5 max-w-xl text-xs leading-5 text-muted sm:text-sm sm:leading-6">
                  Alege ce categorii de cookies accepți. Cookies necesare sunt
                  active întotdeauna.
                </p>
              </div>

              <button
                type="button"
                onClick={closeSettings}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-charcoal/10 text-charcoal transition hover:bg-cream sm:h-10 sm:w-10"
                aria-label="Închide setările cookies"
              >
                <X aria-hidden="true" className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-5 grid gap-2.5">
              <CookieToggle
                title="Cookies necesare"
                description="Necesare pentru funcționarea site-ului, securitate, formulare și memorarea preferințelor de consimțământ."
                checked
                disabled
              />

              <CookieToggle
                title="Cookies analitice"
                description="Ne ajută să înțelegem cum este folosit site-ul prin Google Analytics, Google Tag Manager și Vercel Analytics."
                checked={localPreferences.analytics}
                onChange={(checked) => updatePreference("analytics", checked)}
              />

              <CookieToggle
                title="Servicii externe și conținut integrat"
                description="Permit încărcarea unor servicii precum Google Maps și Instagram embeds."
                checked={localPreferences.embeds}
                onChange={(checked) => updatePreference("embeds", checked)}
              />

              <CookieToggle
                title="Cookies de marketing"
                description="Rezervat pentru campanii sau măsurare de marketing, dacă vor fi activate ulterior."
                checked={localPreferences.marketing}
                onChange={(checked) => updatePreference("marketing", checked)}
              />
            </div>

            <div className="mt-5 grid gap-2 sm:grid-cols-3">
              <Button
                type="button"
                variant="outline"
                className="min-h-11 justify-center px-4 text-xs tracking-[0.14em] sm:text-[11px] lg:text-xs"
                onClick={rejectOptional}
              >
                Respinge opționale
              </Button>

              <Button
                type="button"
                variant="outline"
                className="min-h-11 justify-center px-4 text-xs tracking-[0.14em] sm:text-[11px] lg:text-xs"
                onClick={acceptAll}
              >
                Acceptă toate
              </Button>

              <Button
                type="button"
                className="min-h-11 justify-center px-4 text-xs tracking-[0.14em] sm:text-[11px] lg:text-xs"
                onClick={() => savePreferences(localPreferences)}
              >
                Salvează preferințele
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
