"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

function FieldLabel({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
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

function baseInputClassName(hasError?: boolean) {
  return cn(
    "w-full rounded-[16px] border bg-cream/60 px-4 py-3 text-sm text-charcoal outline-none transition-colors placeholder:text-charcoal/40 sm:rounded-[20px] sm:px-5 sm:py-4 sm:text-[15px]",
    "focus:border-teal/40 focus:bg-white focus:ring-4 focus:ring-teal/10",
    hasError ? "border-red-300" : "border-charcoal/10",
  );
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError(null);
    setSubmitted(false);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setForm(initialState);
      setSubmitted(true);
    } catch {
      setError(
        "A apărut o problemă la trimiterea mesajului. Te rog să încerci din nou.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" noValidate>
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
            className={baseInputClassName()}
            placeholder="Numele tău"
          />
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
            className={baseInputClassName()}
            placeholder="adresa@email.com"
          />
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
          className={baseInputClassName()}
          placeholder="Număr de telefon"
        />
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
            baseInputClassName(),
            "min-h-[140px] resize-y leading-relaxed sm:min-h-[220px]",
          )}
          placeholder="Scrie aici câteva detalii despre motivul pentru care dorești să iei legătura."
        />
      </div>

      <div className="space-y-2.5 pt-0.5 sm:space-y-3 sm:pt-1">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-charcoal px-6 py-3 text-sm font-medium text-white transition hover:opacity-92 disabled:cursor-not-allowed disabled:opacity-70 sm:min-h-[54px] sm:w-auto sm:px-7 sm:text-[15px]"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Se trimite...
            </>
          ) : (
            "Trimite mesajul"
          )}
        </button>

        <p className="text-xs leading-relaxed text-charcoal/55 sm:text-sm">
          Îți voi răspunde în cel mai scurt timp posibil.
        </p>

        {submitted ? (
          <p className="text-sm text-teal">
            Mesajul a fost trimis. Îți mulțumesc!
          </p>
        ) : null}

        {error ? <p className="text-sm text-red-600">{error}</p> : null}
      </div>
    </form>
  );
}
