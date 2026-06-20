"use client";

import { FormEvent, ReactNode, useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";

import Heading from "@/components/ui/Heading";
import { cn } from "@/lib/utils";
import ContactSuccessPanel from "./ContentSuccessPanel";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
  newsletterConsent: boolean;
};

type FieldErrors = Partial<
  Record<keyof FormState | "turnstileToken", string[]>
>;

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
  newsletterConsent: false,
};

function FieldLabel({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1.5 block text-sm font-medium text-charcoal sm:mb-2.5 sm:text-[15px]"
    >
      {children}
    </label>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;

  return <p className="mt-1.5 text-xs text-red-600">{message}</p>;
}

function baseInputClassName(hasError?: boolean) {
  return cn(
    "w-full rounded-[16px] border bg-cream/60 px-4 py-3 text-sm text-charcoal outline-none transition-colors placeholder:text-charcoal/40 sm:rounded-[20px] sm:px-5 sm:py-4 sm:text-[15px]",
    "focus:border-teal/40 focus:bg-white focus:ring-4 focus:ring-teal/10",
    hasError ? "border-red-300" : "border-charcoal/10",
  );
}

export default function ContactForm() {
  const startedAtRef = useRef<number | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);

  const [form, setForm] = useState<FormState>(initialState);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    startedAtRef.current = Date.now();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError(null);
    setSubmitted(false);
    setFieldErrors({});
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const website = String(formData.get("website") || "");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          website,
          startedAt: startedAtRef.current ?? Date.now(),
          turnstileToken,
        }),
      });

      const result = (await response.json()) as {
        ok?: boolean;
        message?: string;
        errors?: FieldErrors;
      };

      if (!response.ok) {
        setFieldErrors(result.errors || {});
        throw new Error(result.message || "Form submission failed");
      }

      setForm(initialState);
      setTurnstileToken("");
      setSubmitted(true);
      startedAtRef.current = Date.now();
      turnstileRef.current?.reset();
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "A apărut o problemă la trimiterea mesajului. Te rog să încerci din nou.",
      );

      turnstileRef.current?.reset();
      setTurnstileToken("");
    } finally {
      setIsSubmitting(false);
    }
  }

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));

    if (fieldErrors[key]) {
      setFieldErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  }

  function handleResetForm() {
    setSubmitted(false);
    setError(null);
    setFieldErrors({});
    setForm(initialState);
    setTurnstileToken("");
    startedAtRef.current = Date.now();
    turnstileRef.current?.reset();
  }

  if (submitted) {
    return <ContactSuccessPanel onReset={handleResetForm} />;
  }

  return (
    <>
      <div className="mb-5 space-y-1.5 sm:mb-7 sm:space-y-2">
        <Heading as="h2" size="h3">
          Trimite un mesaj
        </Heading>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 sm:space-y-6"
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

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          <div>
            <FieldLabel htmlFor="name">Nume</FieldLabel>

            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
              className={baseInputClassName(Boolean(fieldErrors.name))}
              placeholder="Numele tău"
              aria-invalid={Boolean(fieldErrors.name)}
            />

            <FieldError message={fieldErrors.name?.[0]} />
          </div>

          <div>
            <FieldLabel htmlFor="email">Email</FieldLabel>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              className={baseInputClassName(Boolean(fieldErrors.email))}
              placeholder="adresa@email.com"
              aria-invalid={Boolean(fieldErrors.email)}
            />

            <FieldError message={fieldErrors.email?.[0]} />
          </div>
        </div>

        <div>
          <FieldLabel htmlFor="phone">Telefon</FieldLabel>

          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className={baseInputClassName(Boolean(fieldErrors.phone))}
            placeholder="Număr de telefon"
            aria-invalid={Boolean(fieldErrors.phone)}
          />

          <FieldError message={fieldErrors.phone?.[0]} />
        </div>

        <div>
          <FieldLabel htmlFor="message">Mesaj</FieldLabel>

          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            className={cn(
              baseInputClassName(Boolean(fieldErrors.message)),
              "min-h-35 resize-y leading-relaxed sm:min-h-55",
            )}
            placeholder="Scrie aici câteva detalii despre motivul pentru care dorești să iei legătura."
            aria-invalid={Boolean(fieldErrors.message)}
          />

          <FieldError message={fieldErrors.message?.[0]} />
        </div>

        {siteKey ? (
          <div className="overflow-hidden rounded-2xl">
            <Turnstile
              ref={turnstileRef}
              siteKey={siteKey}
              options={{
                theme: "light",
                size: "flexible",
                language: "ro",
              }}
              onSuccess={setTurnstileToken}
              onExpire={() => setTurnstileToken("")}
              onError={() => setTurnstileToken("")}
            />

            <FieldError message={fieldErrors.turnstileToken?.[0]} />
          </div>
        ) : null}

        <div className="space-y-2.5 pt-0.5 sm:space-y-3 sm:pt-1">
          <button
            type="submit"
            disabled={isSubmitting || Boolean(siteKey && !turnstileToken)}
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-charcoal px-6 py-3 text-sm font-medium text-white transition hover:opacity-92 disabled:cursor-not-allowed disabled:opacity-70 sm:min-h-13.5 sm:w-auto sm:px-7 sm:text-[15px]"
          >
            {isSubmitting ? (
              <>
                <Loader2
                  className="mr-2 h-4 w-4 animate-spin"
                  aria-hidden="true"
                />
                Se trimite...
              </>
            ) : (
              "Trimite mesajul"
            )}
          </button>

          <p className="text-xs leading-relaxed text-charcoal/55 sm:text-sm">
            Îți voi răspunde în cel mai scurt timp posibil.
          </p>

          {error ? (
            <p className="text-sm text-red-600" role="alert">
              {error}
            </p>
          ) : null}
        </div>
      </form>
    </>
  );
}
