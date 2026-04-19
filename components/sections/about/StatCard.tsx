import { motion, useInView, useSpring } from "framer-motion";
import { Award, Brain, Building2, Calendar } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export type StatCardProps = {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  delay?: number;
};
export type StatItem = {
  id: string;
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
};
export const stats: StatItem[] = [
  {
    id: "experience",
    icon: <Calendar className="h-5 w-5" />,
    value: 15,
    suffix: "+",
    label: "Ani experiență",
  },
  {
    id: "specialization",
    icon: <Brain className="h-5 w-5" />,
    value: 1,
    suffix: "",
    label: "Specializare AF-EMDR",
  },
  {
    id: "center",
    icon: <Building2 className="h-5 w-5" />,
    value: 1,
    suffix: "",
    label: "Trauma Center fondat",
  },
  {
    id: "trust",
    icon: <Award className="h-5 w-5" />,
    value: 100,
    suffix: "%",
    label: "Focus pe traumă",
  },
];

export function StatCard({
  icon,
  value,
  suffix,
  label,
  delay = 0,
}: StatCardProps) {
  const countRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(countRef, { once: true, amount: 0.35 });

  const springValue = useSpring(0, {
    stiffness: 55,
    damping: 14,
  });

  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    springValue.set(value);

    const unsubscribe = springValue.on("change", (latest) => {
      setDisplay(Math.floor(latest));
    });

    return unsubscribe;
  }, [isInView, springValue, value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className="group rounded-3xl border border-charcoal/10 bg-white/70 p-6 text-center shadow-[0_10px_35px_rgba(31,31,31,0.04)] backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1"
    >
      <div
        ref={countRef}
        className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-charcoal/4 text-teal transition-colors duration-200 group-hover:bg-teal/10"
      >
        {icon}
      </div>

      <div className="flex items-center justify-center text-3xl font-semibold tracking-tight text-charcoal">
        <span>{display}</span>
        <span>{suffix}</span>
      </div>

      <p className="mt-2 text-sm leading-6 text-charcoal/70">{label}</p>

      <div className="mx-auto mt-4 h-0.5 w-10 bg-purple/55 transition-all duration-300 group-hover:w-16" />
    </motion.div>
  );
}
