"use client";

import { type FormEvent, useEffect, useRef, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";

import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import { cn } from "@/lib/utils";

type FeaturedEventSignupFormProps = {
  eventTitle: string;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
  newsletterConsent: boolean;
};

type FieldErrors = Partial<
  Record<
    | "eventTitle"
    | "name"
    | "email"
    | "phone"
    | "message"
    | "newsletterConsent"
    | "turnstileToken",
    string[]
  >
>;

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
  newsletterConsent: false,
};

const inputClassName =
  "min-h-12 w-full min-w-0 rounded-full border bg-cream/70 px-5 text-charcoal outline-none transition-[border-color,box-shadow,background-color] placeholder:text-muted focus:border-teal focus-visible:ring-2 focus-visible:ring-teal/35";

const textareaClassName =
  "w-full min-w-0 resize-none rounded-[1.5rem] border bg-cream/70 px-5 py-4 text-charcoal outline-none transition-[border-color,box-shadow,background-color] placeholder:text-muted focus:border-teal focus-visible:ring-2 focus-visible:ring-teal/35";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;

  return <p className="text-xs text-red-600">{message}</p>;
}

function inputStateClassName(hasError?: boolean) {
  return cn(hasError ? "border-red-300" : "border-charcoal/10");
}

export default function FeaturedEventSignupForm({
  eventTitle,
}: FeaturedEventSignupFormProps) {
  const startedAtRef = useRef<number | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);

  useEffect(() => {
    startedAtRef.current = Date.now();
  }, []);

  const [form, setForm] = useState<FormState>(initialState);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [turnstileToken, setTurnstileToken] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError(null);
    setSubmitted(false);
    setFieldErrors({});
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const website = String(formData.get("website") || "");

    try {
      const response = await fetch("/api/event-signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eventTitle,
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
        throw new Error(result.message || "Event signup failed");
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
          : "A apărut o problemă. Te rog să încerci din nou.",
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

  return (
    <div className="w-full min-w-0 max-w-full overflow-hidden rounded-4xl border border-white/70 bg-white/80 p-5 sm:p-8">
      {submitted ? (
        <div className="rounded-3xl border border-teal/35 bg-teal/10 p-5 text-center sm:p-6">
          <CheckCircle2
            aria-hidden="true"
            className="mx-auto mb-4 h-8 w-8 text-muted-teal"
          />

          <Heading as="h3" size="h3" align="center">
            Înscrierea a fost trimisă.
          </Heading>

          <Text as="p" size="sm" color="muted" align="center" className="mt-3">
            Îți mulțumim. Revenim cu detalii despre program în cel mai scurt
            timp.
          </Text>

          <Button
            type="button"
            variant="outline"
            className="mt-6"
            onClick={() => {
              setSubmitted(false);
              setError(null);
              setFieldErrors({});
              setTurnstileToken("");
              startedAtRef.current = Date.now();
              turnstileRef.current?.reset();
            }}
          >
            Trimite o altă solicitare
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full min-w-0" noValidate>
          <input type="hidden" name="eventTitle" value={eventTitle} />

          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />

          <div className="min-w-0">
            <Heading
              as="h3"
              size="h3"
              align="center"
              textCase="uppercase"
              className="mx-auto max-w-[16rem] text-balance sm:max-w-none"
            >
              Înscriere
            </Heading>
          </div>

          <div className="mt-7 grid min-w-0 gap-4">
            <label className="grid min-w-0 gap-2">
              <span className="text-sm font-medium text-charcoal">Nume</span>
              <input
                name="name"
                type="text"
                autoComplete="name"
                required
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                className={cn(
                  inputClassName,
                  inputStateClassName(Boolean(fieldErrors.name)),
                )}
                placeholder="Numele tău"
                aria-invalid={Boolean(fieldErrors.name)}
              />

              <FieldError message={fieldErrors.name?.[0]} />
            </label>

            <label className="grid min-w-0 gap-2">
              <span className="text-sm font-medium text-charcoal">Email</span>
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                className={cn(
                  inputClassName,
                  inputStateClassName(Boolean(fieldErrors.email)),
                )}
                placeholder="email@example.com"
                aria-invalid={Boolean(fieldErrors.email)}
              />

              <FieldError message={fieldErrors.email?.[0]} />
            </label>

            <label className="grid min-w-0 gap-2">
              <span className="text-sm font-medium text-charcoal">Telefon</span>
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                className={cn(
                  inputClassName,
                  inputStateClassName(Boolean(fieldErrors.phone)),
                )}
                placeholder="Opțional"
                aria-invalid={Boolean(fieldErrors.phone)}
              />

              <FieldError message={fieldErrors.phone?.[0]} />
            </label>

            <label className="grid min-w-0 gap-2">
              <span className="text-sm font-medium text-charcoal">
                Ce te interesează la acest program?
              </span>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={(event) => updateField("message", event.target.value)}
                className={cn(
                  textareaClassName,
                  inputStateClassName(Boolean(fieldErrors.message)),
                )}
                placeholder="Scrie câteva cuvinte despre ce ai vrea să clarifici."
                aria-invalid={Boolean(fieldErrors.message)}
              />

              <FieldError message={fieldErrors.message?.[0]} />
            </label>
          </div>

          <label className="mt-5 flex gap-3 rounded-2xl border border-charcoal/10 bg-cream/45 p-4 text-sm leading-6 text-charcoal/70">
            <input
              type="checkbox"
              name="newsletterConsent"
              checked={form.newsletterConsent}
              onChange={(event) =>
                updateField("newsletterConsent", event.target.checked)
              }
              className="mt-1 h-4 w-4 rounded border-charcoal/20 text-teal focus:ring-teal/30"
            />

            <span>
              Doresc să primesc ocazional anunțuri despre evenimente, resurse
              gratuite și materiale utile. Îmi pot retrage consimțământul
              oricând.
            </span>
          </label>

          {siteKey ? (
            <div className="mt-5 overflow-hidden rounded-2xl">
              <Turnstile
                ref={turnstileRef}
                siteKey={siteKey}
                options={{
                  theme: "light",
                  size: "flexible",
                  language: "ro",
                }}
                onSuccess={(token) => {
                  setTurnstileToken(token);

                  if (fieldErrors.turnstileToken) {
                    setFieldErrors((prev) => ({
                      ...prev,
                      turnstileToken: undefined,
                    }));
                  }
                }}
                onExpire={() => setTurnstileToken("")}
                onError={() => setTurnstileToken("")}
              />

              <FieldError message={fieldErrors.turnstileToken?.[0]} />
            </div>
          ) : null}

          <Button
            type="submit"
            className="mt-6 w-full"
            variant="primary"
            disabled={isSubmitting || Boolean(siteKey && !turnstileToken)}
          >
            {isSubmitting ? (
              <span className="inline-flex items-center justify-center gap-2">
                <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />
                Se trimite...
              </span>
            ) : (
              "Înscrie-te acum"
            )}
          </Button>

          {error ? (
            <p className="mt-3 text-center text-sm text-red-600" role="alert">
              {error}
            </p>
          ) : null}
        </form>
      )}
    </div>
  );
}
