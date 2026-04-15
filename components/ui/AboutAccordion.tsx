"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as React from "react";
import {
  Plus,
  Brain,
  BadgeCheck,
  HeartHandshake,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b border-border/70", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const iconMap = {
  "heart-handshake": HeartHandshake,
  "badge-check": BadgeCheck,
  "brain": Brain,
  "sparkles": Sparkles,
} as const;

type IconName = keyof typeof iconMap;

type AccordionTriggerProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Trigger
> & {
  icon?: IconName;
};

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(({ className, children, icon, ...props }, ref) => {
  const Icon: LucideIcon | null = icon ? iconMap[icon] : null;

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "group flex flex-1 items-center justify-between gap-4 py-5 text-left transition-all",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          className,
        )}
        {...props}
      >
        <span className="flex min-w-0 items-center gap-3">
          {Icon ? (
            <Icon
              size={18}
              strokeWidth={1.9}
              className="mt-0.5 shrink-0 text-muted-foreground"
              aria-hidden="true"
            />
          ) : null}

          <span className="text-[15px] font-medium leading-6 text-foreground">
            {children}
          </span>
        </span>

        <Plus
          size={18}
          strokeWidth={1.9}
          className={cn(
            "shrink-0 text-muted-foreground transition-transform duration-200",
            "[&>path:last-child]:origin-center [&>path:last-child]:transition-all [&>path:last-child]:duration-200",
            "group-data-[state=open]:rotate-180",
            "group-data-[state=open]:[&>path:last-child]:rotate-90",
            "group-data-[state=open]:[&>path:last-child]:opacity-0",
          )}
          aria-hidden="true"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-sm text-muted-foreground",
      "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className,
    )}
    {...props}
  >
    <div className="pb-5 pt-0">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
