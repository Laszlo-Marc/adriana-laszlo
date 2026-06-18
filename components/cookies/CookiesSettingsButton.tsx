"use client";

import { useCookieConsent } from "./CookiesConsentProvider";

type CookieSettingsButtonProps = {
  className?: string;
};

export default function CookieSettingsButton({
  className,
}: CookieSettingsButtonProps) {
  const { openSettings } = useCookieConsent();

  return (
    <button type="button" onClick={openSettings} className={className}>
      Setări cookies
    </button>
  );
}
