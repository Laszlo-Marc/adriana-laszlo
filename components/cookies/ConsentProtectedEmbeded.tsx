"use client";

import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useCookieConsent } from "./CookiesConsentProvider";

type ConsentProtectedEmbedProps = {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
};

export default function ConsentProtectedEmbed({
  title,
  description,
  children,
  className,
}: ConsentProtectedEmbedProps) {
  const { preferences, openSettings } = useCookieConsent();

  if (preferences.embeds) {
    return <>{children}</>;
  }

  return (
    <div
      className={cn(
        "flex min-h-80 items-center justify-center rounded-4xl border border-charcoal/10 bg-cream/70 p-6 text-center",
        className,
      )}
    >
      <div className="mx-auto max-w-md">
        <p className="font-display text-2xl text-charcoal">{title}</p>

        <p className="mt-3 text-sm leading-6 text-muted">{description}</p>

        <Button type="button" className="mt-5" onClick={openSettings}>
          Configurează cookies
        </Button>
      </div>
    </div>
  );
}
