"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";

import {
  allAcceptedCookieConsent,
  COOKIE_CONSENT_STORAGE_KEY,
  createStoredCookieConsent,
  defaultCookieConsent,
  parseStoredCookieConsent,
  type CookieConsentPreferences,
  type StoredCookieConsent,
} from "@/lib/cookies/cookiesConsent";

type CookieConsentSnapshot = {
  isReady: boolean;
  consent: StoredCookieConsent | null;
};

type CookieConsentContextValue = {
  isReady: boolean;
  consent: StoredCookieConsent | null;
  preferences: CookieConsentPreferences;
  hasDecision: boolean;
  isSettingsOpen: boolean;
  acceptAll: () => void;
  rejectOptional: () => void;
  savePreferences: (preferences: CookieConsentPreferences) => void;
  openSettings: () => void;
  closeSettings: () => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(
  null,
);

const COOKIE_CONSENT_CHANGE_EVENT = "adriana-cookie-consent-change";

const serverConsentSnapshot: CookieConsentSnapshot = {
  isReady: false,
  consent: null,
};

let cachedRawConsent: string | null = null;
let cachedParsedConsent: StoredCookieConsent | null = null;
let cachedSnapshot: CookieConsentSnapshot | null = null;

function readStoredConsent(): StoredCookieConsent | null {
  if (typeof window === "undefined") return null;

  const rawConsent = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);

  if (rawConsent === cachedRawConsent) {
    return cachedParsedConsent;
  }

  cachedRawConsent = rawConsent;
  cachedParsedConsent = parseStoredCookieConsent(rawConsent);

  return cachedParsedConsent;
}

function getStoredConsentSnapshot(): CookieConsentSnapshot {
  const consent = readStoredConsent();

  if (cachedSnapshot?.isReady === true && cachedSnapshot.consent === consent) {
    return cachedSnapshot;
  }

  cachedSnapshot = {
    isReady: true,
    consent,
  };

  return cachedSnapshot;
}

function getServerConsentSnapshot(): CookieConsentSnapshot {
  return serverConsentSnapshot;
}

function subscribeToConsentChanges(onStoreChange: () => void) {
  function handleStorage(event: StorageEvent) {
    if (event.key === COOKIE_CONSENT_STORAGE_KEY) {
      onStoreChange();
    }
  }

  window.addEventListener("storage", handleStorage);
  window.addEventListener(COOKIE_CONSENT_CHANGE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(COOKIE_CONSENT_CHANGE_EVENT, onStoreChange);
  };
}

function writeStoredConsent(consent: StoredCookieConsent) {
  const serializedConsent = JSON.stringify(consent);

  window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, serializedConsent);

  cachedRawConsent = serializedConsent;
  cachedParsedConsent = consent;
  cachedSnapshot = {
    isReady: true,
    consent,
  };

  window.dispatchEvent(new Event(COOKIE_CONSENT_CHANGE_EVENT));
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const snapshot = useSyncExternalStore(
    subscribeToConsentChanges,
    getStoredConsentSnapshot,
    getServerConsentSnapshot,
  );

  const { isReady, consent } = snapshot;

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const savePreferences = useCallback(
    (preferences: CookieConsentPreferences) => {
      const nextConsent = createStoredCookieConsent(preferences);

      writeStoredConsent(nextConsent);
      setIsSettingsOpen(false);
    },
    [],
  );

  const acceptAll = useCallback(() => {
    savePreferences(allAcceptedCookieConsent);
  }, [savePreferences]);

  const rejectOptional = useCallback(() => {
    savePreferences(defaultCookieConsent);
  }, [savePreferences]);

  const openSettings = useCallback(() => {
    setIsSettingsOpen(true);
  }, []);

  const closeSettings = useCallback(() => {
    setIsSettingsOpen(false);
  }, []);

  const value = useMemo<CookieConsentContextValue>(
    () => ({
      isReady,
      consent,
      preferences: consent ?? defaultCookieConsent,
      hasDecision: isReady && consent !== null,
      isSettingsOpen,
      acceptAll,
      rejectOptional,
      savePreferences,
      openSettings,
      closeSettings,
    }),
    [
      isReady,
      consent,
      isSettingsOpen,
      acceptAll,
      rejectOptional,
      savePreferences,
      openSettings,
      closeSettings,
    ],
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);

  if (!context) {
    throw new Error(
      "useCookieConsent must be used inside CookieConsentProvider",
    );
  }

  return context;
}
