import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import { contactItems, scheduleItem, socials } from "./contactData";

type ContactSuccessPanelProps = {
  onReset?: () => void;
};

export default function ContactSuccessPanel({
  onReset,
}: ContactSuccessPanelProps) {
  const ScheduleIcon = scheduleItem.icon;

  return (
    <div className="space-y-6">
      <div className="rounded-[26px] border border-teal/35 bg-teal/20 p-5 text-center sm:rounded-4xl sm:p-7">
        <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-teal text-charcoal">
          <CheckCircle2 className="size-6" aria-hidden="true" />
        </div>

        <Heading as="h2" size="h3" align="center" className="mt-5">
          Mesajul a fost trimis
        </Heading>

        <Text
          color="muted"
          align="center"
          className="mx-auto mt-3 max-w-md leading-7"
        >
          Mulțumim pentru mesaj. Vei primi un răspuns cât de curând. Dacă este
          ceva urgent sau preferi contact direct, poți folosi datele de mai jos.
        </Text>
      </div>

      <div className="rounded-[28px] border border-charcoal/8 bg-teal/80 p-4 sm:rounded-4xl sm:p-6">
        <div className="space-y-3 sm:space-y-4">
          {contactItems.map((item) => {
            const Icon = item.icon;

            const content = (
              <div className="flex items-start gap-3 rounded-[22px] border border-charcoal/8 bg-white/78 p-3.5 transition-shadow hover:shadow-[0_10px_28px_rgba(44,44,44,0.05)] sm:gap-4 sm:rounded-3xl sm:p-4">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-teal/10 text-purple sm:size-11">
                  <Icon className="size-4 sm:size-5" aria-hidden="true" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-medium text-charcoal/60 sm:text-sm">
                    {item.title}
                  </p>

                  <div className="mt-0.5 flex items-start gap-2 sm:mt-1 sm:items-center">
                    <p className="text-sm font-medium leading-snug text-charcoal sm:text-base">
                      {item.value}
                    </p>

                    {item.href ? (
                      <ArrowUpRight className="mt-0.5 size-3.5 shrink-0 text-charcoal/40 sm:mt-0 sm:size-4" />
                    ) : null}
                  </div>
                </div>
              </div>
            );

            if (!item.href) {
              return <div key={item.title}>{content}</div>;
            }

            return (
              <Link
                key={item.title}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className="block"
              >
                {content}
              </Link>
            );
          })}
        </div>

        <div className="mt-4 rounded-[22px] border border-charcoal/8 bg-cream/82 p-4 sm:rounded-3xl sm:p-5">
          <div className="flex items-start gap-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-purple/10 text-purple sm:size-10">
              <ScheduleIcon className="size-4 sm:size-5" aria-hidden="true" />
            </div>

            <div>
              <Heading as="h3" size="h4">
                {scheduleItem.title}
              </Heading>

              <Text
                color="muted"
                className="mt-1.5 text-sm sm:mt-2 sm:text-base"
              >
                {scheduleItem.value}
              </Text>
            </div>
          </div>
        </div>

        <div className="mt-5 space-y-3">
          <Heading as="h3" size="h4">
            Social media
          </Heading>

          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-charcoal/10 bg-white px-3.5 py-2 text-sm font-medium text-charcoal transition hover:bg-white/80 sm:px-4"
                >
                  <Icon className="size-4" aria-hidden="true" />
                  {social.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {onReset ? (
        <div className="flex justify-center">
          <Button type="button" variant="secondary" onClick={onReset}>
            Trimite alt mesaj
          </Button>
        </div>
      ) : null}
    </div>
  );
}
