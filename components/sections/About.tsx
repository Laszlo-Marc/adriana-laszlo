import Image from "next/image";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/AboutAccordion";

const items: Array<{
  id: string;
  icon: "heart-handshake" | "badge-check" | "brain" | "sparkles";
  title: string;
  content: string;
}> = [
  {
    id: "story",
    icon: "heart-handshake",
    title: "Povestea mea",
    content:
      "Aici pui varianta scurtă, bine scrisă, a poveștii profesionale. Nu foarte lungă. Doar cât să creeze conexiune și încredere.",
  },
  {
    id: "specializations",
    icon: "badge-check",
    title: "Specializări și certificări",
    content:
      "Aici listezi clar formările relevante, certificările și experiența care susțin credibilitatea profesională.",
  },
  {
    id: "af-emdr",
    icon: "brain",
    title: "Despre AF-EMDR",
    content:
      "Explică pe scurt ce este AF-EMDR, cum ajută și de ce este relevant pentru persoanele cu traumă relațională sau blocaje emoționale.",
  },
  {
    id: "approach",
    icon: "sparkles",
    title: "Cum lucrez",
    content:
      "Descrie pe scurt stilul de lucru: siguranță, ritm potrivit, claritate, reglare emoțională și proces terapeutic adaptat.",
  },
];

export default function AboutSection() {
  return (
    <Section
      aria-labelledby="about-heading"
      background="white"
      className="py-20 md:py-28"
    >
      <Container size="wide" padding="default">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-muted/30">
            <div className="relative aspect-4/5 w-full max-h-190">
              <Image
                src="/adriana10.webp"
                alt="Portret Adriana Laszlo"
                fill
                loading="eager"
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 90vw"
              />
            </div>
          </div>

          <div className="max-w-4xl">
            <p className="mb-3 text-sm uppercase tracking-[0.18em] text-muted-foreground">
              Despre
            </p>

            <Heading
              as="h2"
              className="max-w-xl text-3xl leading-tight md:text-4xl"
            >
              Un cadru terapeutic sigur, profund și orientat spre vindecare
              reală
            </Heading>

            <Text className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
              Această secțiune ar trebui să transmită clar cine este Adriana
              Laszlo, ce o diferențiază și cum lucrează, într-un format aerisit
              și ușor de parcurs.
            </Text>

            <Accordion
              type="single"
              collapsible
              defaultValue="af-emdr"
              className="w-full"
            >
              {items.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger icon={item.icon}>
                    {item.title}
                  </AccordionTrigger>

                  <AccordionContent className="pl-8 md:pl-9">
                    <p className="leading-7">{item.content}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </Section>
  );
}
