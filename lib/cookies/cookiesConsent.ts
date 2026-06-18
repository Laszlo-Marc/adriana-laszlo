export const COOKIE_CONSENT_VERSION = 1;
export const COOKIE_CONSENT_STORAGE_KEY = "adriana-cookie-consent-v1";

export type CookieConsentPreferences = {
  necessary: true;
  analytics: boolean;
  embeds: boolean;
  marketing: boolean;
};

export type StoredCookieConsent = CookieConsentPreferences & {
  version: number;
  updatedAt: string;
};

export const defaultCookieConsent: CookieConsentPreferences = {
  necessary: true,
  analytics: false,
  embeds: false,
  marketing: false,
};

export const allAcceptedCookieConsent: CookieConsentPreferences = {
  necessary: true,
  analytics: true,
  embeds: true,
  marketing: true,
};

export function createStoredCookieConsent(
  preferences: CookieConsentPreferences,
): StoredCookieConsent {
  return {
    ...preferences,
    necessary: true,
    version: COOKIE_CONSENT_VERSION,
    updatedAt: new Date().toISOString(),
  };
}

export function parseStoredCookieConsent(
  value: string | null,
): StoredCookieConsent | null {
  if (!value) return null;

  try {
    const parsed = JSON.parse(value) as Partial<StoredCookieConsent>;

    if (parsed.version !== COOKIE_CONSENT_VERSION) {
      return null;
    }

    return {
      necessary: true,
      analytics: Boolean(parsed.analytics),
      embeds: Boolean(parsed.embeds),
      marketing: Boolean(parsed.marketing),
      version: COOKIE_CONSENT_VERSION,
      updatedAt: parsed.updatedAt || new Date().toISOString(),
    };
  } catch {
    return null;
  }
}
