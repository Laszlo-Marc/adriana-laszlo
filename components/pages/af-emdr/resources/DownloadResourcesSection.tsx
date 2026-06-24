import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import DownloadResourcesClient from "./DownloadResourcesClient";
import { downloadResources } from "./resourceContent";

export default function DownloadResourcesSection() {
  if (!downloadResources.length) return null;

  return (
    <Section
      id="resurse"
      background="cream"
      spacing="sm"
      aria-labelledby="download-resources-heading"
      className="relative overflow-hidden"
    >
      <Container size="wide" padding="default">
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <Heading
            id="download-resources-heading"
            as="h2"
            size="h2"
            align="center"
            textCase="uppercase"
          >
            Resurse gratuite
          </Heading>

          <Text
            align="center"
            className="mx-auto mt-5 max-w-2xl text-charcoal/70"
          >
            Alege materialul care ți se potrivește și lasă-ne adresa de email
            pentru a primi resursa.
          </Text>
        </div>

        <DownloadResourcesClient resources={downloadResources} />
      </Container>
    </Section>
  );
}
