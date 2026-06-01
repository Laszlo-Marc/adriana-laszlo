"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Download } from "lucide-react";

import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import { DownloadResource } from "./resourceContent";

type ResourceDownloadFormProps = {
  resource: DownloadResource;
};

type FormStatus = "idle" | "success";

export default function ResourceDownloadForm({
  resource,
}: ResourceDownloadFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Later:
    // POST name, email, resource.id to /api/resource-download
    setStatus("success");
  }

  return (
    <div className="rounded-[2rem] border border-white/70 bg-white/78 p-6 shadow-[0_24px_90px_rgba(44,44,44,0.08)] backdrop-blur-sm sm:p-8 lg:p-10">
      <div className="mb-7">
        <span className="mb-4 inline-flex rounded-full bg-teal/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-charcoal">
          {resource.eyebrow}
        </span>

        <h3 className="font-display text-3xl leading-tight text-charcoal sm:text-4xl">
          {resource.title}
        </h3>

        <Text color="muted" className="mt-4 max-w-xl">
          {resource.description}
        </Text>
      </div>

      {status === "success" ? (
        <div className="rounded-[1.5rem] border border-teal/40 bg-teal/15 p-6">
          <CheckCircle2 className="mb-4 h-8 w-8 text-muted-teal" />

          <h4 className="font-display text-2xl text-charcoal">
            Resursa este pregătită.
          </h4>

          <Text color="muted" className="mt-3">
            În implementarea finală, aici putem trimite automat linkul pe email
            sau putem afișa butonul direct de descărcare.
          </Text>

          <Button
            type="button"
            className="mt-6"
            onClick={() => setStatus("idle")}
          >
            Descarcă altă resursă
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <input type="hidden" name="resourceId" value={resource.id} />
          <input type="hidden" name="resourceTitle" value={resource.title} />

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
              className="h-12 w-full rounded-full border border-border bg-cream/60 px-5 text-sm text-charcoal outline-none transition placeholder:text-muted/60 focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/20"
              placeholder="Prenumele tău"
            />
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
              className="h-12 w-full rounded-full border border-border bg-cream/60 px-5 text-sm text-charcoal outline-none transition placeholder:text-muted/60 focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/20"
              placeholder="email@exemplu.ro"
            />
          </div>

          <label className="flex gap-3 text-sm leading-6 text-muted">
            <input
              type="checkbox"
              name="consent"
              required
              className="mt-1 h-4 w-4 rounded border-border text-teal focus:ring-gold"
            />
            <span>
              Sunt de acord să primesc această resursă pe email și înțeleg că
              îmi pot retrage consimțământul oricând.
            </span>
          </label>

          <Button
            type="submit"
            className="w-full justify-center"
            leftIcon={<Download className="h-4 w-4" />}
          >
            {resource.submitLabel}
          </Button>

          <p className="text-center text-xs leading-5 text-muted">
            Fără spam. Datele sunt folosite doar pentru trimiterea resursei și,
            dacă alegi ulterior, pentru materiale utile similare.
          </p>
        </form>
      )}
    </div>
  );
}
