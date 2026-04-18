// TrustItemsRow.tsx
import { Brain, Award, Building2, ShieldCheck } from "lucide-react";

const items = [
  { icon: Brain, label: "AF-EMDR", sub: "Specializare" },
  { icon: Award, label: "15+ ani", sub: "Experiență" },
  { icon: Building2, label: "Trauma Center", sub: "Fondator" },
  { icon: ShieldCheck, label: "Validat științific", sub: "Metodă" },
];

export default function TrustItemsRow() {
  return (
    <ul className="grid grid-cols-2 gap-6 sm:flex sm:justify-center sm:gap-30">
      {items.map((item, i) => {
        const Icon = item.icon;

        return (
          <li key={i} className="flex flex-col items-center text-center">
            <Icon className="h-16 w-16 text-primary mb-2 text-muted-teal" />

            <span className="text-lg font-medium text-foreground">
              {item.label}
            </span>

            <span className="text-md text-muted-foreground">{item.sub}</span>
          </li>
        );
      })}
    </ul>
  );
}
