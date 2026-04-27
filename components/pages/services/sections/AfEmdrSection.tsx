import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import Button from "@/components/ui/Button";
import EditorialServiceSection from "../components/EditorialServiceSection";

const afEmdrBenefits = [
  "traumă și experiențe copleșitoare",
  "răni de atașament",
  "anxietate și reacții emoționale intense",
  "tipare relaționale care se repetă",
] as const;

export default function AFEmdrServiceSection() {
  return (
    <EditorialServiceSection
      id="af-emdr"
      eyebrow="Specializare principală"
      title="Terapie AF-EMDR"
      description="AF-EMDR este o abordare terapeutică orientată către procesarea experiențelor dificile care continuă să influențeze prezentul. Lucrul se desfășoară într-un ritm atent, cu accent pe siguranță, stabilizare și integrare."
      imageSrc="/services/af-emdr.webp"
      imageAlt="Imagine calmă asociată terapiei AF-EMDR"
      tone="purple"
      reverse
    >
      <div className="space-y-6">
        <div className="rounded-[1.5rem] border border-purple/15 bg-white/55 p-5">
          <p className="text-sm font-medium text-charcoal">
            Potrivită mai ales pentru:
          </p>

          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {afEmdrBenefits.map((item) => (
              <li
                key={item}
                className="flex gap-2 text-sm leading-6 text-charcoal/75"
              >
                <CheckCircle2
                  className="mt-0.5 size-4 shrink-0 text-purple"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button variant="primary">
            <Link href="/contact">Programează o discuție</Link>
          </Button>

          <Button variant="outline">
            <Link href="/despre">
              Despre formare
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </EditorialServiceSection>
  );
}
