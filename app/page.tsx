import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import { Phone, ArrowRight, Mail, Calendar } from "lucide-react";

export default function ShowcasePage() {
  return (
    <main id="main">
      {/* ============================================
          HEADING SIZES
          ============================================ */}
      <Section background="cream" spacing="lg">
        <Container>
          <Heading as="h4" size="eyebrow" color="muted">
            01 — Componente
          </Heading>
          <Heading as="h1" size="h1" className="mb-12">
            Heading — toate dimensiunile
          </Heading>

          <div className="space-y-10 border-l-2 border-teal pl-6">
            <div>
              <Text size="xs" color="muted" transform="upper" className="mb-2">
                size=display
              </Text>
              <Heading as="h4" size="display">
                Vindecarea începe
              </Heading>
            </div>

            <div>
              <Text size="xs" color="muted" transform="upper" className="mb-2">
                size=h1
              </Text>
              <Heading as="h4" size="h1">
                Psihoterapie integrativă
              </Heading>
            </div>

            <div>
              <Text size="xs" color="muted" transform="upper" className="mb-2">
                size=h2
              </Text>
              <Heading as="h4" size="h2">
                Servicii oferite
              </Heading>
            </div>

            <div>
              <Text size="xs" color="muted" transform="upper" className="mb-2">
                size=h3
              </Text>
              <Heading as="h4" size="h3">
                Terapie individuală
              </Heading>
            </div>

            <div>
              <Text size="xs" color="muted" transform="upper" className="mb-2">
                size=h4
              </Text>
              <Heading as="h4" size="h4">
                Prima ședință
              </Heading>
            </div>

            <div>
              <Text size="xs" color="muted" transform="upper" className="mb-2">
                size=eyebrow
              </Text>
              <Heading as="h4" size="eyebrow">
                Despre mine
              </Heading>
            </div>
          </div>
        </Container>
      </Section>

      {/* ============================================
          HEADING COLORS & CASE
          ============================================ */}
      <Section background="white" spacing="lg">
        <Container>
          <Heading as="h4" size="eyebrow" color="muted">
            02 — Variante
          </Heading>
          <Heading size="h2" className="mb-12">
            Heading — culori & case
          </Heading>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-cream rounded-softer border border-border">
              <Text size="xs" color="muted" transform="upper" className="mb-2">
                color=charcoal
              </Text>
              <Heading size="h3" color="charcoal">
                Text implicit
              </Heading>
            </div>

            <div className="p-6 bg-cream rounded-softer border border-border">
              <Text size="xs" color="muted" transform="upper" className="mb-2">
                color=muted
              </Text>
              <Heading size="h3" color="muted">
                Text secundar
              </Heading>
            </div>

            <div className="p-6 bg-charcoal rounded-softer">
              <Text size="xs" color="cream" transform="upper" className="mb-2">
                color=cream
              </Text>
              <Heading size="h3" color="cream">
                Pe fundal închis
              </Heading>
            </div>

            <div className="p-6 bg-cream rounded-softer border border-border">
              <Text size="xs" color="muted" transform="upper" className="mb-2">
                color=teal
              </Text>
              <Heading size="h3" color="teal">
                Accent principal
              </Heading>
            </div>

            <div className="p-6 bg-cream rounded-softer border border-border">
              <Text size="xs" color="muted" transform="upper" className="mb-2">
                color=purple
              </Text>
              <Heading size="h3" color="purple">
                Accent secundar
              </Heading>
            </div>

            <div className="p-6 bg-cream rounded-softer border border-border">
              <Text size="xs" color="muted" transform="upper" className="mb-2">
                color=gold
              </Text>
              <Heading size="h3" color="gold">
                Accent auriu
              </Heading>
            </div>

            <div className="p-6 bg-cream rounded-softer border border-border md:col-span-2">
              <Text size="xs" color="muted" transform="upper" className="mb-2">
                case=normal
              </Text>
              <Heading size="h3" case="normal">
                Adriana Laszlo
              </Heading>
            </div>
          </div>
        </Container>
      </Section>

      {/* ============================================
          TEXT SIZES
          ============================================ */}
      <Section background="cream" spacing="lg">
        <Container>
          <Heading as="h4" size="eyebrow" color="muted">
            03 — Componente
          </Heading>
          <Heading size="h2" className="mb-12">
            Text — toate dimensiunile
          </Heading>

          <div className="space-y-8 border-l-2 border-purple pl-6">
            <div>
              <Text size="xs" color="muted" transform="upper" className="mb-2">
                size=xl
              </Text>
              <Text size="xl">
                Psihoterapia este o artă, nu o tehnică. Se rafinează în relația
                terapeutică.
              </Text>
            </div>

            <div>
              <Text size="xs" color="muted" transform="upper" className="mb-2">
                size=lg
              </Text>
              <Text size="lg">
                Peste 15 ani de experiență în psihoterapie integrativă,
                specializată în AF-EMDR și EFT.
              </Text>
            </div>

            <div>
              <Text size="xs" color="muted" transform="upper" className="mb-2">
                size=base (implicit)
              </Text>
              <Text>
                Tratez traume de atașament din copilărie și traume majore din
                viața adultă. Fiecare proces terapeutic este unic și se
                adaptează nevoilor fiecărei persoane.
              </Text>
            </div>

            <div>
              <Text size="xs" color="muted" transform="upper" className="mb-2">
                size=sm
              </Text>
              <Text size="sm">
                Programul de lucru este flexibil, cu ședințe disponibile și
                online pentru persoanele din afara Clujului.
              </Text>
            </div>
            <div>
              <Text size="xs" color="muted" transform="upper" className="mb-2">
                size=xs
              </Text>
              <Text size="xs">
                Publicat pe 12 martie 2025 · Categoria: Terapie individuală
              </Text>
            </div>
          </div>
        </Container>
      </Section>

      {/* ============================================
          TEXT WEIGHTS, COLORS & TRANSFORMS
          ============================================ */}
      <Section background="white" spacing="lg">
        <Container>
          <Heading as="h4" size="eyebrow" color="muted">
            04 — Variante
          </Heading>
          <Heading size="h2" className="mb-12">
            Text — culori, greutăți & transformări
          </Heading>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-cream rounded-softer border border-border">
              <Text size="xs" color="muted" transform="upper" className="mb-2">
                weight=regular
              </Text>
              <Text>Text cu greutate implicită.</Text>
            </div>

            <div className="p-6 bg-cream rounded-softer border border-border">
              <Text size="xs" color="muted" transform="upper" className="mb-2">
                weight=medium
              </Text>
              <Text weight="medium">Text accentuat cu medium.</Text>
            </div>

            <div className="p-6 bg-cream rounded-softer border border-border">
              <Text size="xs" color="muted" transform="upper" className="mb-2">
                weight=semibold
              </Text>
              <Text weight="semibold">Text accentuat cu semibold.</Text>
            </div>

            <div className="p-6 bg-cream rounded-softer border border-border">
              <Text size="xs" color="muted" transform="upper" className="mb-2">
                transform=upper
              </Text>
              <Text transform="upper" size="sm" weight="medium">
                Etichetă majusculă
              </Text>
            </div>

            <div className="p-6 bg-cream rounded-softer border border-border">
              <Text size="xs" color="muted" transform="upper" className="mb-2">
                color=muted
              </Text>
              <Text color="muted">Text secundar, subtil.</Text>
            </div>

            <div className="p-6 bg-cream rounded-softer border border-border">
              <Text size="xs" color="muted" transform="upper" className="mb-2">
                color=teal
              </Text>
              <Text color="teal" weight="medium">
                Text cu accent teal.
              </Text>
            </div>

            <div className="p-6 bg-cream rounded-softer border border-border">
              <Text size="xs" color="muted" transform="upper" className="mb-2">
                color=purple
              </Text>
              <Text color="purple" weight="medium">
                Text cu accent purple.
              </Text>
            </div>

            <div className="p-6 bg-cream rounded-softer border border-border">
              <Text size="xs" color="muted" transform="upper" className="mb-2">
                color=gold
              </Text>
              <Text color="gold" weight="medium">
                Text cu accent gold.
              </Text>
            </div>

            <div className="p-6 bg-charcoal rounded-softer md:col-span-2">
              <Text
                size="xs"
                color="cream"
                transform="upper"
                className="mb-2 opacity-70"
              >
                color=cream (pe fundal închis)
              </Text>
              <Text color="cream" size="lg">
                Psihoterapia este un drum pe care îl parcurgem împreună.
              </Text>
            </div>

            <div className="p-6 bg-cream rounded-softer border border-border md:col-span-2">
              <Text size="xs" color="muted" transform="upper" className="mb-2">
                balance (previne cuvinte orfane)
              </Text>
              <Text size="lg" balance>
                Peste 15 ani de experiență în psihoterapie integrativă
                specializată
              </Text>
            </div>

            <div className="p-6 bg-cream rounded-softer border border-border md:col-span-2">
              <Text size="xs" color="muted" transform="upper" className="mb-2">
                clamp={3}
              </Text>
              <Text color="muted" clamp={3}>
                Psihoterapia este o artă, nu o tehnică. Se rafinează în relația
                terapeutică între terapeut și client, construind un spațiu sigur
                unde vindecarea poate avea loc. Procesul este unic pentru
                fiecare persoană și necesită timp, răbdare și angajament din
                partea ambelor părți. Fiecare ședință este un pas înainte pe
                drumul recuperării și al auto-cunoașterii profunde.
              </Text>
            </div>
          </div>
        </Container>
      </Section>

      {/* ============================================
          BUTTONS
          ============================================ */}
      <Section background="cream" spacing="lg">
        <Container>
          <Heading as="h4" size="eyebrow" color="muted">
            05 — Componente
          </Heading>
          <Heading size="h2" className="mb-12">
            Button — variante & dimensiuni
          </Heading>

          {/* Variants */}
          <div className="mb-12">
            <Text
              size="sm"
              color="muted"
              transform="upper"
              weight="medium"
              className="mb-4"
            >
              Variante
            </Text>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="urgent">Urgent</Button>
              <Button variant="purple">Purple</Button>
            </div>
          </div>

          {/* Sizes */}
          <div className="mb-12">
            <Text
              size="sm"
              color="muted"
              transform="upper"
              weight="medium"
              className="mb-4"
            >
              Dimensiuni
            </Text>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          {/* With icons */}
          <div className="mb-12">
            <Text
              size="sm"
              color="muted"
              transform="upper"
              weight="medium"
              className="mb-4"
            >
              Cu iconițe
            </Text>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="primary"
                leftIcon={<Calendar size={16} strokeWidth={1.75} />}
              >
                Programează
              </Button>
              <Button
                variant="purple"
                leftIcon={<Phone size={16} strokeWidth={1.75} />}
              >
                0744 473 869
              </Button>
              <Button
                variant="outline"
                rightIcon={<ArrowRight size={16} strokeWidth={1.75} />}
              >
                Află mai multe
              </Button>
              <Button
                variant="ghost"
                leftIcon={<Mail size={16} strokeWidth={1.75} />}
              >
                Email
              </Button>
            </div>
          </div>

          {/* Full width */}
          <div className="mb-12 max-w-sm">
            <Text
              size="sm"
              color="muted"
              transform="upper"
              weight="medium"
              className="mb-4"
            >
              Full width
            </Text>
            <div className="flex flex-col gap-3">
              <Button variant="primary" fullWidth>
                Programează o ședință
              </Button>
              <Button
                variant="purple"
                fullWidth
                leftIcon={<Phone size={16} strokeWidth={1.75} />}
              >
                Sună acum
              </Button>
            </div>
          </div>

          {/* As links */}
          <div>
            <Text
              size="sm"
              color="muted"
              transform="upper"
              weight="medium"
              className="mb-4"
            >
              Ca link (href)
            </Text>
            <div className="flex flex-wrap gap-3">
              <Button href="/contact" variant="primary">
                Link intern
              </Button>
              <Button href="tel:+40744473869" variant="purple">
                Link tel:
              </Button>
              <Button href="https://traumacenter.ro" variant="outline" external>
                Link extern
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* ============================================
          CONTAINER SIZES
          ============================================ */}
      <Section background="white" spacing="lg">
        <Container>
          <Heading as="h4" size="eyebrow" color="muted">
            06 — Layout
          </Heading>
          <Heading size="h2" className="mb-12">
            Container — dimensiuni
          </Heading>
        </Container>

        <div className="space-y-6">
          <Container size="narrow">
            <div className="p-6 bg-teal-soft rounded-softer border border-teal">
              <Text
                size="xs"
                transform="upper"
                weight="medium"
                className="mb-2"
              >
                size=narrow — max-w-3xl (~768px)
              </Text>
              <Text size="sm" color="muted">
                Pentru articole de blog și text lung, unde lizibilitatea
                contează mai mult decât lățimea. Măsura optimă este ~65
                caractere pe rând.
              </Text>
            </div>
          </Container>

          <Container size="default">
            <div className="p-6 bg-purple-soft rounded-softer border border-purple">
              <Text
                size="xs"
                transform="upper"
                weight="medium"
                className="mb-2"
              >
                size=default — max-w-6xl (~1152px)
              </Text>
              <Text size="sm" color="muted">
                Lățimea implicită pentru majoritatea secțiunilor. Suficient de
                lată pentru layout-uri bogate, suficient de îngustă ca textul să
                nu se lățească pe monitoare ultrawide.
              </Text>
            </div>
          </Container>

          <Container size="wide">
            <div className="p-6 bg-sand rounded-softer border border-border-strong">
              <Text
                size="xs"
                transform="upper"
                weight="medium"
                className="mb-2"
              >
                size=wide — max-w-[1400px]
              </Text>
              <Text size="sm" color="muted">
                Pentru secțiuni editoriale largi, hero-uri și galerii de
                imagini. Se oprește la 1400px ca să nu pară amator pe
                display-uri mari.
              </Text>
            </div>
          </Container>
        </div>
      </Section>

      {/* ============================================
          SECTION BACKGROUNDS
          ============================================ */}
      <Section background="cream" spacing="md">
        <Container>
          <Heading as="h4" size="eyebrow" color="muted">
            07 — Layout
          </Heading>
          <Heading size="h2">Section — fundaluri</Heading>
          <Text color="muted" className="mt-4">
            Fiecare secțiune de mai jos este un <code>&lt;Section&gt;</code> cu
            un background diferit.
          </Text>
        </Container>
      </Section>

      <Section background="cream" spacing="md">
        <Container>
          <Text size="xs" transform="upper" weight="medium" color="muted">
            background=cream (implicit)
          </Text>
          <Heading size="h3" className="mt-2">
            Fundal cream — baza
          </Heading>
        </Container>
      </Section>

      <Section background="white" spacing="md">
        <Container>
          <Text size="xs" transform="upper" weight="medium" color="muted">
            background=white
          </Text>
          <Heading size="h3" className="mt-2">
            Fundal alb — contrast
          </Heading>
        </Container>
      </Section>

      <Section background="teal-soft" spacing="md">
        <Container>
          <Text size="xs" transform="upper" weight="medium" color="muted">
            background=teal-soft
          </Text>
          <Heading size="h3" className="mt-2">
            Fundal teal soft — momente calme
          </Heading>
        </Container>
      </Section>

      <Section background="purple-soft" spacing="md">
        <Container>
          <Text size="xs" transform="upper" weight="medium" color="muted">
            background=purple-soft
          </Text>
          <Heading size="h3" className="mt-2">
            Fundal purple soft — momente blânde
          </Heading>
        </Container>
      </Section>

      <Section background="sand" spacing="md">
        <Container>
          <Text size="xs" transform="upper" weight="medium" color="muted">
            background=sand
          </Text>
          <Heading size="h3" className="mt-2">
            Fundal sand — accent cald
          </Heading>
        </Container>
      </Section>

      <Section background="charcoal" spacing="md">
        <Container>
          <Text
            size="xs"
            transform="upper"
            weight="medium"
            color="cream"
            className="opacity-70"
          >
            background=charcoal
          </Text>
          <Heading size="h3" color="cream" className="mt-2">
            Fundal charcoal — secțiuni dramatice
          </Heading>
          <Text color="cream" className="mt-4 opacity-80">
            Textul devine automat crem pentru contrast.
          </Text>
        </Container>
      </Section>

      {/* ============================================
          SECTION SPACING
          ============================================ */}
      <Section background="cream" spacing="lg">
        <Container>
          <Heading as="h4" size="eyebrow" color="muted">
            08 — Layout
          </Heading>
          <Heading size="h2" className="mb-12">
            Section — spațiere verticală
          </Heading>
          <Text color="muted" className="mb-8">
            Fiecare secțiune de mai jos are o valoare diferită pentru{" "}
            <code>spacing</code>. Observă diferența de respirație pe verticală.
          </Text>
        </Container>
      </Section>

      <Section background="white" spacing="sm">
        <Container>
          <Text size="xs" transform="upper" weight="medium" color="muted">
            spacing=sm
          </Text>
        </Container>
      </Section>

      <Section background="cream" spacing="md">
        <Container>
          <Text size="xs" transform="upper" weight="medium" color="muted">
            spacing=md (implicit)
          </Text>
        </Container>
      </Section>

      <Section background="white" spacing="lg">
        <Container>
          <Text size="xs" transform="upper" weight="medium" color="muted">
            spacing=lg
          </Text>
        </Container>
      </Section>

      <Section background="cream" spacing="xl">
        <Container>
          <Text size="xs" transform="upper" weight="medium" color="muted">
            spacing=xl
          </Text>
        </Container>
      </Section>

      {/* ============================================
          REAL COMPOSITION EXAMPLE
          ============================================ */}
      <Section background="charcoal" spacing="xl">
        <Container size="narrow">
          <Heading as="h4" size="eyebrow" color="teal" align="center">
            09 — Exemplu real
          </Heading>
          <Heading
            as="h2"
            size="h1"
            color="cream"
            align="center"
            className="mt-4 mb-6"
          >
            Primul pas este cel mai greu
          </Heading>
          <Text
            size="lg"
            color="cream"
            align="center"
            balance
            className="opacity-80 mb-10"
          >
            O ședință inițială de cunoaștere este gratuită. Fără angajament,
            fără presiune — doar o conversație despre ce te aduce aici.
          </Text>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              leftIcon={<Calendar size={18} strokeWidth={1.75} />}
            >
              Programează o ședință
            </Button>
            <Button
              href="tel:+40744473869"
              variant="purple"
              size="lg"
              leftIcon={<Phone size={18} strokeWidth={1.75} />}
            >
              0744 473 869
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}
