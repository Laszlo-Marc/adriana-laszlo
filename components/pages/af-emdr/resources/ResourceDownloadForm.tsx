"use client";

import { type FormEvent, useRef, useState } from "react";
import { CheckCircle2, Download, Loader2 } from "lucide-react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";

import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import type { DownloadResource } from "./resourceContent";

type ResourceDownloadFormProps = {
  resource: DownloadResource;
};

type FormStatus = "idle" | "success";

type FormState = {
  name: string;
  email: string;
  consent: boolean;
};

type FieldErrors = Partial<
  Record<
    "resourceId" | "name" | "email" | "consent" | "turnstileToken",
    string[]
  >
>;

const initialState: FormState = {
  name: "",
  email: "",
  consent: false,
};

const inputClassName =
  "h-12 w-full rounded-full border border-border bg-cream/60 px-5 text-sm text-charcoal outline-none transition-[border-color,background-color,box-shadow] placeholder:text-muted/60 focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/20 motion-reduce:transition-none";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;

  return <p className="mt-1.5 text-xs text-red-600">{message}</p>;
}

export default function ResourceDownloadForm({
  resource,
}: ResourceDownloadFormProps) {
  const startedAtRef = useRef(Date.now());
  const turnstileRef = useRef<TurnstileInstance>(null);

  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [downloadHref, setDownloadHref] = useState(resource.downloadHref || "");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [error, setError] = useState<string | null>(null);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError(null);
    setFieldErrors({});
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const website = String(formData.get("website") || "");

    try {
      const response = await fetch("/api/resources/download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          resourceId: resource.id,
          name: form.name,
          email: form.email,
          consent: form.consent,
          website,
          startedAt: startedAtRef.current,
          turnstileToken,
        }),
      });

      const result = (await response.json()) as {
        ok?: boolean;
        message?: string;
        downloadHref?: string;
        errors?: FieldErrors;
      };

      if (!response.ok) {
        setFieldErrors(result.errors || {});
        throw new Error(result.message || "Resource download failed");
      }

      setDownloadHref(result.downloadHref || resource.downloadHref || "");
      setStatus("success");
      setForm(initialState);
      setTurnstileToken("");
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

  function resetForm() {
    setStatus("idle");
    setError(null);
    setFieldErrors({});
    setTurnstileToken("");
    startedAtRef.current = Date.now();
    turnstileRef.current?.reset();
  }

  return (
    <div className="rounded-4xl border border-white/70 bg-white/78 p-6 backdrop-blur-sm sm:p-8 lg:p-10">
      <div className="mb-7">
        <Heading as="h3" size="h3" align="center">
          {resource.title}
        </Heading>

        <Text color="muted" className="mt-4 max-w-xl" align="center">
          {resource.description}
        </Text>
      </div>

      {status === "success" ? (
        <div className="rounded-3xl border border-teal/40 bg-teal/15 p-6">
          <CheckCircle2
            aria-hidden="true"
            className="mb-4 h-8 w-8 text-muted-teal"
          />

          <h4 className="font-display text-2xl text-charcoal">
            Resursa este pregătită.
          </h4>

          <Text color="muted" className="mt-3">
            Ți-am trimis linkul de descărcare și pe email. Poți descărca resursa
            și direct de aici.
          </Text>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            {downloadHref ? (
              <Button href={downloadHref} download>
                Descarcă resursa
              </Button>
            ) : null}

            <Button type="button" variant="outline" onClick={resetForm}>
              Alege altă resursă
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <input type="hidden" name="resourceId" value={resource.id} />

          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />

          <div>
            <label
              htmlFor={`resource-name-${resource.id}`}
              className="mb-2 block text-sm font-medium text-charcoal"
            >
              Prenume
            </label>

            <input
              id={`resource-name-${resource.id}`}
              name="name"
              type="text"
              autoComplete="given-name"
              required
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
              className={inputClassName}
              placeholder="Prenumele tău"
              aria-invalid={Boolean(fieldErrors.name)}
            />

            <FieldError message={fieldErrors.name?.[0]} />
          </div>

          <div>
            <label
              htmlFor={`resource-email-${resource.id}`}
              className="mb-2 block text-sm font-medium text-charcoal"
            >
              Email
            </label>

            <input
              id={`resource-email-${resource.id}`}
              name="email"
              type="email"
              autoComplete="email"
              required
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              className={inputClassName}
              placeholder="email@exemplu.ro"
              aria-invalid={Boolean(fieldErrors.email)}
            />

            <FieldError message={fieldErrors.email?.[0]} />
          </div>

          <label className="flex gap-3 text-sm leading-6 text-muted">
            <input
              type="checkbox"
              name="consent"
              required
              checked={form.consent}
              onChange={(event) => updateField("consent", event.target.checked)}
              className="mt-1 h-4 w-4 rounded border-border text-teal focus:ring-gold"
              aria-invalid={Boolean(fieldErrors.consent)}
            />

            <span>
              Sunt de acord să primesc această resursă pe email și înțeleg că
              îmi pot retrage consimțământul oricând.
            </span>
          </label>

          <FieldError message={fieldErrors.consent?.[0]} />

          {siteKey ? (
            <div className="overflow-hidden rounded-[16px]">
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

          <Button
            type="submit"
            disabled={isSubmitting || !turnstileToken}
            className="w-full justify-center"
            leftIcon={
              isSubmitting ? (
                <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />
              ) : (
                <Download aria-hidden="true" className="h-4 w-4" />
              )
            }
          >
            {isSubmitting ? "Se trimite..." : resource.submitLabel}
          </Button>

          {error ? (
            <p className="text-center text-sm text-red-600" role="alert">
              {error}
            </p>
          ) : null}

          <p className="text-center text-xs leading-5 text-muted">
            Fără spam. Datele sunt folosite doar pentru trimiterea resursei și,
            dacă alegi ulterior, pentru materiale utile similare.
          </p>
        </form>
      )}
    </div>
  );
}
