"use client";
import * as React from "react";
import Image from "next/image";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import Text from "@/components/ui/Text";
import { cn } from "@/lib/utils";
import Section from "@/components/ui/Section";

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

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:no-underline [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="size-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-6 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

const items = [
  {
    id: "01",
    title: "Cum lucrează",
    content:
      "Procesul terapeutic este construit într-un ritm sigur, cu atenție la relația terapeutică, claritate și capacitatea persoanei de a rămâne prezentă în proces.",
  },
  {
    id: "02",
    title: "De ce trauma cere mai mult decât conversație",
    content:
      "Trauma nu este prezentă doar în povestea despre trecut, ci și în corp, în sistemul nervos, în reacții automate și în felul în care ne raportăm la ceilalți.",
  },
  {
    id: "03",
    title: "Ce este AF-EMDR",
    content:
      "Attachment-Focused EMDR este o formă specializată de EMDR care integrează lucrul cu trauma, atașamentul și siguranța relațională.",
  },
  {
    id: "04",
    title: "De ce contează atașamentul",
    content:
      "Felul în care am învățat să căutăm siguranță, apropiere sau protecție poate influența emoțiile, relațiile și reacțiile din prezent.",
  },
  {
    id: "05",
    title: "Siguranță înainte de intensitate",
    content:
      "Obiectivul nu este accesarea rapidă a durerii, ci construirea unui cadru stabil pentru ca procesarea să poată avea loc fără copleșire.",
  },
];

export default function AboutApproachEmdrAccordionSection() {
  return (
    <Section
      id="abordare-af-emdr"
      aria-labelledby="approach-emdr-heading"
      spacing="none"
      allowOverflow
      className="z-20"
    >
      <div className="grid min-h-svh lg:grid-cols-[1fr_1fr]">
        {/* Edge-to-edge image column */}
        <div className="relative min-h-105 lg:min-h-svh">
          <Image
            src="/backgrounds/wheat.jpg"
            alt="Cadru terapeutic calm, potrivit pentru lucrul cu trauma și reglarea emoțională"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/10" />
        </div>

        {/* Accordion column */}
        <div className="flex items-center px-5 py-16 md:px-10 lg:px-16 lg:py-24">
          <div className="w-full max-w-3xl">
            <div className="mt-10">
              <Accordion
                type="single"
                defaultValue="03"
                collapsible
                className="w-full"
              >
                {items.map((item) => (
                  <AccordionItem
                    value={item.id}
                    key={item.id}
                    className="last:border-b"
                  >
                    <AccordionTrigger className="cursor-pointer overflow-hidden pl-0 text-left text-charcoal/20 duration-200 hover:no-underline data-[state=open]:space-y-0 data-[state=open]:text-charcoal [&>svg]:hidden">
                      <div className="flex flex-1 items-start gap-4">
                        <p className="pt-2 text-xs font-semibold text-teal">
                          {item.id}
                        </p>

                        <h3 className="-mb-3 font-display text-3xl uppercase leading-[0.86] tracking-wide md:text-5xl">
                          {item.title}
                        </h3>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="pl-9 pr-4 text-charcoal/70 md:pl-16 md:pr-12">
                      <Text>{item.content}</Text>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      {/* Floating transition image */}
      <div className="pointer-events-none absolute left-1/2 bottom-0 z-20 hidden w-70 -translate-x-1/2 translate-y-1/2 lg:block">
        <div className="relative aspect-square  shadow-xl">
          <Image
            src="/backgrounds/pen.jpg"
            alt=""
            fill
            sizes="280px"
            aria-hidden="true"
            className="object-cover"
          />
        </div>
      </div>
    </Section>
  );
}
