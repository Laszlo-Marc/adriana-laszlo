import { motion } from "framer-motion";
import {
  BadgeCheck,
  Brain,
  Building2,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

type PointFeatureProps = {
  point: PointItem;
  delay?: number;
  direction: "left" | "right";
};
export type PointItem = {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  position: "left" | "right";
};
export const points: PointItem[] = [
  {
    id: "af-emdr",
    title: "Specializare AF-EMDR",
    description:
      "Abordare profundă și atent ghidată pentru trauma relațională, PTSD complex și blocaje emoționale persistente.",
    icon: Brain,
    position: "left",
  },
  {
    id: "safe-work",
    title: "Cadru sigur de lucru",
    description:
      "Procesul terapeutic este construit cu atenție la ritm, reglare și siguranță emoțională, fără a forța expunerea.",
    icon: ShieldCheck,
    position: "left",
  },
  {
    id: "relationship-trauma",
    title: "Focus pe trauma relațională",
    description:
      "Lucru orientat spre înțelegerea tiparelor repetate, a rănilor de atașament și a impactului lor în viața actuală.",
    icon: HeartHandshake,
    position: "left",
  },
  {
    id: "experience",
    title: "Experiență solidă",
    description:
      "Practica este orientată spre claritate, stabilizare și schimbări reale, nu doar spre insight teoretic.",
    icon: BadgeCheck,
    position: "right",
  },
  {
    id: "trauma-center",
    title: "Fondator Trauma Center",
    description:
      "Un diferențiator important care susține direcția profesională și expertiza concentrată exclusiv pe vindecarea traumelor.",
    icon: Building2,
    position: "right",
  },
  {
    id: "lasting-change",
    title: "Schimbări reale și durabile",
    description:
      "Scopul nu este doar să înțelegi ce s-a întâmplat, ci să reduci încărcătura emoțională și să ieși din tiparele care te blochează.",
    icon: Sparkles,
    position: "right",
  },
];

export function PointFeature({
  point,
  delay = 0,
  direction,
}: PointFeatureProps) {
  const Icon = point.icon;

  return (
    <motion.article
      initial={{
        opacity: 0,
        x: direction === "left" ? -24 : 24,
        y: 12,
      }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className="group mt-12"
    >
      <div className="flex items-start gap-4">
        <div className="relative mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-charcoal/8 bg-sand/45 text-gold transition-colors duration-200 group-hover:bg-sand/70">
          <Icon className="h-5 w-5" />
        </div>

        <div className="min-w-0">
          <h3 className="text-lg font-medium leading-snug text-charcoal transition-colors duration-200 group-hover:text-purple">
            {point.title}
          </h3>

          <p className="mt-2 text-sm leading-7 text-charcoal/70">
            {point.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
