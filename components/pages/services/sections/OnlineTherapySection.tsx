import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import Button from "@/components/ui/Button";
import EditorialServiceSection from "../components/EditorialServiceSection";

const points = [
  "ședințe desfășurate într-un cadru familiar",
  "continuitate terapeutică atunci când călătorești",
  "flexibilitate pentru programul tău",
  "aceeași atenție și confidențialitate",
] as const;

export default function OnlineTherapyServiceSection() {
  return (
    <EditorialServiceSection
      id="terapie-online"
      eyebrow="Terapie online"
      title="Sprijin terapeutic accesibil, oriunde te-ai afla"
      description="Terapia online poate fi o opțiune potrivită atunci când ai nevoie de flexibilitate, continuitate și un spațiu terapeutic pe care îl poți accesa dintr-un loc în care te simți confortabil."
      imageSrc="/services/terapie-online.jpg"
      imageAlt="Laptop într-un spațiu calm pentru terapie online"
      tone="purple"
      reverse
    >
      <ServicePoints items={points} tone="purple" />

      <div className="mt-7">
        <Button variant="outline">
          <Link href="/contact">
            Întreabă despre terapia online
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </EditorialServiceSection>
  );
}

function ServicePoints({
  items,
  tone,
}: {
  items: readonly string[];
  tone: "teal" | "purple";
}) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-2 text-sm leading-6 text-charcoal/75"
        >
          <CheckCircle2
            className={`mt-0.5 size-4 shrink-0 ${
              tone === "teal" ? "text-teal" : "text-purple"
            }`}
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
