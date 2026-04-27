import Link from "next/link";
import { ArrowRight, CalendarDays, UsersRound } from "lucide-react";

import Button from "@/components/ui/Button";
import EditorialServiceSection from "../components/EditorialServiceSection";

export default function EventsServiceSection() {
  return (
    <EditorialServiceSection
      id="evenimente"
      eyebrow="Evenimente și programe"
      title="Workshopuri și programe pentru învățare, vindecare și comunitate"
      description="Evenimentele și programele tematice creează contexte ghidate pentru explorare personală, dezvoltarea resurselor interioare și înțelegerea unor teme importante precum trauma, relațiile, atașamentul sau reglarea emoțională."
      imageSrc="/services/evenimente.jpg"
      imageAlt="Spațiu pregătit pentru un workshop terapeutic"
      tone="teal"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-[1.25rem] border border-teal/15 bg-white/55 p-4">
          <UsersRound className="size-5 text-teal" aria-hidden="true" />
          <p className="mt-3 text-sm font-medium text-charcoal">
            Grupuri și workshopuri
          </p>
          <p className="mt-2 text-sm leading-6 text-charcoal/70">
            Întâlniri tematice într-un cadru sigur, clar și bine structurat.
          </p>
        </div>

        <div className="rounded-[1.25rem] border border-teal/15 bg-white/55 p-4">
          <CalendarDays className="size-5 text-teal" aria-hidden="true" />
          <p className="mt-3 text-sm font-medium text-charcoal">
            Programe anunțate periodic
          </p>
          <p className="mt-2 text-sm leading-6 text-charcoal/70">
            Evenimente pentru persoane care caută sprijin, educație și
            comunitate.
          </p>
        </div>
      </div>

      <div className="mt-7">
        <Button variant="outline">
          <Link href="/evenimente">
            Vezi evenimentele
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </EditorialServiceSection>
  );
}
