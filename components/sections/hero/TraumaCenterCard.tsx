import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Text from "@/components/ui/Text";
export function TraumaCenterCard({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={
        compact
          ? "rounded-[20px] border border-white/70 bg-white/90 p-4 shadow-[0_12px_30px_rgba(44,44,44,0.10)] backdrop-blur-md"
          : "rounded-[22px] border border-white/70 bg-white/90 p-4 shadow-[0_12px_30px_rgba(44,44,44,0.10)] backdrop-blur-md sm:p-5"
      }
    >
      <div className="flex items-center gap-3">
        <Image
          src="/tc-logo.svg"
          alt="Trauma Center"
          width={compact ? 40 : 48}
          height={compact ? 40 : 48}
          className={
            compact
              ? "h-10 w-10 shrink-0 object-contain"
              : "h-14 w-14 shrink-0 object-contain"
          }
        />

        <Heading as="h2" size={compact ? "h4" : "h3"} case="normal">
          Fondator Trauma Center
        </Heading>
      </div>

      <Text
        size="sm"
        color="muted"
        className="mt-3 lg:text-left"
        align="center"
      >
        {compact
          ? "Un spațiu dedicat intervenției specializate în traumă, atașament și reglare emoțională."
          : "Un spațiu dedicat lucrului terapeutic cu trauma, atașamentul și reglarea emoțională, fondat pentru intervenție specializată și siguranță relațională."}
      </Text>

      <Button
        href="https://traumacenter.ro"
        variant="purple"
        size="sm"
        className="mt-4 w-full sm:w-auto"
      >
        <div className="inline-flex items-center justify-center gap-2 text-charcoal">
          <Text as="span" size="sm" weight="medium">
            Descoperă Centrul
          </Text>
          <ArrowRight size={15} strokeWidth={1.75} />
        </div>
      </Button>
    </div>
  );
}
