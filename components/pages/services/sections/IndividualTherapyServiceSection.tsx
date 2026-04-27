import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import Button from "@/components/ui/Button";
import EditorialServiceSection from "../components/EditorialServiceSection";

const points = [
  "dificultăți emoționale și relaționale",
  "anxietate, stres sau blocaje interioare",
  "perioade de tranziție sau pierdere",
  "nevoia de claritate și reconectare",
] as const;

export default function IndividualTherapyServiceSection() {
  return (
    <EditorialServiceSection
      id="psihoterapie-individuala"
      eyebrow="Psihoterapie individuală"
      title="Un spațiu sigur pentru a înțelege ce se întâmplă cu tine"
      description="Psihoterapia individuală oferă un cadru calm și confidențial în care poți explora emoții, relații, tipare și experiențe care îți influențează viața de zi cu zi."
      imageSrc="/services/psihoterapie-individuala.jpg"
      imageAlt="Spațiu calm pentru psihoterapie individuală"
      tone="teal"
    >
      <ServicePoints items={points} tone="teal" />

      <div className="mt-7">
        <Button variant="outline">
          <Link href="/contact">
            Programează o discuție
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
