import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

type NewsletterResourceWelcomeEmailProps = {
  firstName?: string;
  resourceTitle: string;
  downloadUrl: string;
};

const main = {
  backgroundColor: "#fffaf2",
  fontFamily:
    "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  color: "#2c2c2c",
};

const container = {
  maxWidth: "600px",
  margin: "0 auto",
  padding: "32px 20px",
};

const card = {
  backgroundColor: "#ffffff",
  border: "1px solid rgba(44,44,44,0.08)",
  borderRadius: "28px",
  padding: "32px",
};

const eyebrow = {
  margin: "0 0 14px",
  fontSize: "11px",
  letterSpacing: "0.22em",
  textTransform: "uppercase" as const,
  color: "#7a7068",
};

const heading = {
  margin: "0",
  fontFamily: "Cinzel, Georgia, serif",
  fontSize: "30px",
  lineHeight: "1.18",
  color: "#2c2c2c",
};

const text = {
  fontSize: "15px",
  lineHeight: "1.75",
  color: "#7a7068",
};

const button = {
  backgroundColor: "#2c2c2c",
  color: "#fffaf2",
  borderRadius: "999px",
  padding: "14px 22px",
  fontSize: "14px",
  fontWeight: 600,
  textDecoration: "none",
  display: "inline-block",
};

const note = {
  fontSize: "12px",
  lineHeight: "1.6",
  color: "#7a7068",
};

export default function NewsletterResourceWelcomeEmail({
  firstName,
  resourceTitle,
  downloadUrl,
}: NewsletterResourceWelcomeEmailProps) {
  const greeting = firstName?.trim() ? `Bună, ${firstName.trim()},` : "Bună,";

  return (
    <Html lang="ro">
      <Head />
      <Preview>Resursa ta gratuită este pregătită pentru descărcare.</Preview>

      <Body style={main}>
        <Container style={container}>
          <Section style={card}>
            <Text style={eyebrow}>Resursă gratuită</Text>

            <Heading style={heading}>Resursa ta este pregătită.</Heading>

            <Text style={text}>{greeting}</Text>

            <Text style={text}>
              Îți mulțumim pentru abonare. Mai jos găsești linkul către
              materialul gratuit: <strong>{resourceTitle}</strong>.
            </Text>

            <Text style={text}>
              Poți reveni la acest email oricând ai nevoie să descarci din nou
              resursa.
            </Text>

            <Section style={{ marginTop: "28px", marginBottom: "28px" }}>
              <Button href={downloadUrl} style={button}>
                Descarcă resursa gratuită
              </Button>
            </Section>

            <Text style={note}>
              Vei primi doar mesaje ocazionale despre resurse, evenimente și
              materiale utile. Te poți dezabona oricând.
            </Text>
          </Section>

          <Text
            style={{
              ...note,
              textAlign: "center" as const,
              marginTop: "18px",
            }}
          >
            Adriana Laszlo · Trauma Center
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
