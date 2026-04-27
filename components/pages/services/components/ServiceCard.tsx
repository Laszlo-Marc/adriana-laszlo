import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
  tone?: "teal" | "purple" | "sand" | "gold";
  featured?: boolean;
};

const toneClasses = {
  teal: {
    iconWrap: "bg-teal/10 text-teal",
    border: "border-teal/20",
    hover: "hover:border-teal/35",
  },
  purple: {
    iconWrap: "bg-purple/10 text-purple",
    border: "border-purple/25",
    hover: "hover:border-purple/40",
  },
  sand: {
    iconWrap: "bg-sand/60 text-charcoal",
    border: "border-sand/70",
    hover: "hover:border-sand",
  },
  gold: {
    iconWrap: "bg-gold/15 text-charcoal",
    border: "border-gold/25",
    hover: "hover:border-gold/40",
  },
};

export default function ServiceCard({
  title,
  description,
  href,
  Icon,
  tone = "teal",
  featured = false,
}: ServiceCardProps) {
  const styles = toneClasses[tone];

  return (
    <Link
      href={href}
      className={cn(
        "group relative flex h-full flex-col rounded-[1.5rem] border bg-white/80 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md",
        styles.border,
        styles.hover,
        featured && "bg-purple/5 ring-1 ring-purple/15",
      )}
    >
      {featured && (
        <span className="mb-4 w-fit rounded-full bg-purple/10 px-3 py-1 text-xs font-medium tracking-wide text-purple">
          Specializare principală
        </span>
      )}

      <div
        className={cn(
          "mb-5 flex size-11 items-center justify-center rounded-full",
          styles.iconWrap,
        )}
      >
        <Icon className="size-5" aria-hidden="true" />
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-semibold tracking-tight text-charcoal">
          {title}
        </h3>

        <p className="text-sm leading-7 text-charcoal/70">{description}</p>
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm font-medium text-charcoal">
        Află mai multe
        <ArrowRight className="size-4 transition group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
