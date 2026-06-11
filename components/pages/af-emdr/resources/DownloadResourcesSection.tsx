import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import DownloadResourcesClient from "./DownloadResourcesClient";
import { downloadResources } from "./resourceContent";

export default function DownloadResourcesSection() {
  return (
    <Section
      background="cream"
      spacing="sm"
      aria-labelledby="download-resources-heading"
      className="relative overflow-hidden"
      id="resurse"
    >
      <Container size="wide" padding="default">
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <Heading
            id="download-resources-heading"
            as="h2"
            size="h1"
            align="center"
          >
            Resurse gratuite
          </Heading>
        </div>

        <DownloadResourcesClient resources={downloadResources} />
      </Container>
    </Section>
  );
}
