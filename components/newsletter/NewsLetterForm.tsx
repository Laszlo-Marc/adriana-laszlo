"use client";

import { type FormEvent, useEffect, useId, useRef, useState } from "react";
import { CheckCircle2, Download, Loader2, Mail } from "lucide-react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";

import { cn } from "@/lib/utils";

type NewsletterFormProps = {
  source: string;
  className?: string;
  onSuccess?: () => void;
  resourceId?: string;
  submitLabel?: string;
  successTitle?: string;
  successMessage?: string;
  downloadUrl?: string;
  downloadLabel?: string;
  autoDownload?: boolean;
};

type FieldErrors = Partial<
  Record<"firstName" | "email" | "turnstileToken", string[]>
>;

type SubscribeResponse = {
  ok?: boolean;
  message?: string;
  errors?: FieldErrors;
  downloadUrl?: string;
  downloadHref?: string;
};

const inputClassName =
  "h-12 w-full rounded-2xl border border-charcoal/10 bg-white/70 px-4 text-sm text-charcoal outline-none transition-[border-color,background-color,box-shadow] placeholder:text-muted/55 focus:border-teal/60 focus:bg-white focus:ring-4 focus:ring-teal/10 sm:h-13 sm:px-5";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;

  return (
    <p className="mt-1.5 text-xs leading-5 text-red-600" role="alert">
      {message}
    </p>
  );
}

function triggerDownload(url: string) {
  const link = document.createElement("a");
  link.href = url;
  link.download = "";
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

export default function NewsletterForm({
  source,
  className,
  onSuccess,
  resourceId,
  submitLabel = "Abonează-te",
  successTitle = "Te-ai abonat cu succes.",
  successMessage = "Mulțumim. Vei primi doar anunțuri rare și relevante.",
  downloadUrl,
  downloadLabel = "Descarcă resursa gratuită",
  autoDownload = false,
}: NewsletterFormProps) {
  const formId = useId();
  const startedAtRef = useRef<number | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [resolvedDownloadUrl, setResolvedDownloadUrl] = useState<string | null>(
    downloadUrl ?? null,
  );
  const [error, setError] = useState<string | null>(null);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    startedAtRef.current = Date.now();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError(null);
    setFieldErrors({});
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const website = String(formData.get("website") || "");

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          email,
          source,
          resourceId,
          website,
          startedAt: startedAtRef.current ?? Date.now(),
          turnstileToken,
        }),
      });

      const result = (await response.json()) as SubscribeResponse;

      if (!response.ok) {
        setFieldErrors(result.errors || {});
        throw new Error(result.message || "Newsletter subscribe failed");
      }

      const nextDownloadUrl =
        result.downloadUrl ?? result.downloadHref ?? downloadUrl ?? null;

      setSubmitted(true);
      setResolvedDownloadUrl(nextDownloadUrl);
      setFirstName("");
      setEmail("");
      setTurnstileToken("");
      startedAtRef.current = Date.now();
      turnstileRef.current?.reset();

      if (autoDownload && nextDownloadUrl) {
        window.setTimeout(() => {
          triggerDownload(nextDownloadUrl);
        }, 450);
      }

      onSuccess?.();
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "A apărut o problemă la abonare. Te rog să încerci din nou.",
      );

      turnstileRef.current?.reset();
      setTurnstileToken("");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div
        className={cn(
          "rounded-3xl border border-teal/30 bg-teal/10 p-4 text-center sm:p-5",
          className,
        )}
        role="status"
      >
        <CheckCircle2
          aria-hidden="true"
          className="mx-auto mb-3 h-8 w-8 text-muted-teal"
        />

        <p className="font-display text-xl text-charcoal sm:text-2xl">
          {successTitle}
        </p>

        <p className="mt-2 text-sm leading-6 text-muted">{successMessage}</p>

        {resolvedDownloadUrl ? (
          <a
            href={resolvedDownloadUrl}
            download
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-charcoal px-5 py-3 text-sm font-semibold text-cream transition hover:bg-charcoal/90 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            <Download aria-hidden="true" className="h-4 w-4" />
            {downloadLabel}
          </a>
        ) : null}
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("space-y-3.5 sm:space-y-4", className)}
      noValidate
    >
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid gap-3.5 sm:gap-4">
        <div>
          <label
            htmlFor={`${formId}-first-name`}
            className="mb-1.5 block text-sm font-medium text-charcoal sm:mb-2"
          >
            Prenume
          </label>

          <input
            id={`${formId}-first-name`}
            name="firstName"
            type="text"
            autoComplete="given-name"
            value={firstName}
            onChange={(event) => {
              setFirstName(event.target.value);

              if (fieldErrors.firstName) {
                setFieldErrors((prev) => ({ ...prev, firstName: undefined }));
              }
            }}
            className={cn(
              inputClassName,
              fieldErrors.firstName ? "border-red-300" : null,
            )}
            placeholder="Prenumele tău"
            aria-invalid={Boolean(fieldErrors.firstName)}
          />

          <FieldError message={fieldErrors.firstName?.[0]} />
        </div>

        <div>
          <label
            htmlFor={`${formId}-email`}
            className="mb-1.5 block text-sm font-medium text-charcoal sm:mb-2"
          >
            Email
          </label>

          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);

              if (fieldErrors.email) {
                setFieldErrors((prev) => ({ ...prev, email: undefined }));
              }
            }}
            className={cn(
              inputClassName,
              fieldErrors.email ? "border-red-300" : null,
            )}
            placeholder="adresa@email.com"
            aria-invalid={Boolean(fieldErrors.email)}
          />

          <FieldError message={fieldErrors.email?.[0]} />
        </div>
      </div>

      {siteKey ? (
        <div className="overflow-hidden rounded-2xl border border-charcoal/10 bg-white/70 p-1">
          <Turnstile
            ref={turnstileRef}
            siteKey={siteKey}
            onSuccess={(token) => {
              setTurnstileToken(token);

              if (fieldErrors.turnstileToken) {
                setFieldErrors((prev) => ({
                  ...prev,
                  turnstileToken: undefined,
                }));
              }
            }}
            onError={() => setTurnstileToken("")}
            onExpire={() => setTurnstileToken("")}
            options={{
              theme: "light",
              size: "normal",
            }}
          />
        </div>
      ) : null}

      <FieldError message={fieldErrors.turnstileToken?.[0]} />

      {error ? (
        <p
          className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700"
          role="alert"
        >
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting || Boolean(siteKey && !turnstileToken)}
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-charcoal px-5 text-xs font-semibold uppercase tracking-[0.16em] text-cream transition hover:bg-charcoal/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:cursor-not-allowed disabled:opacity-55 sm:h-13 sm:text-sm"
      >
        {isSubmitting ? (
          <>
            <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />
            Se trimite...
          </>
        ) : (
          <>
            <Mail aria-hidden="true" className="h-4 w-4" />
            {submitLabel}
          </>
        )}
      </button>

      <p className="rounded-full border border-charcoal/8 bg-white/60 px-4 py-2 text-center text-[11px] leading-5 text-muted sm:text-xs">
        Prin abonare accepți{" "}
        <a
          href="/politica-de-confidentialitate"
          className="font-medium text-charcoal underline underline-offset-4"
        >
          politica de confidențialitate
        </a>
        .
      </p>
    </form>
  );
}
