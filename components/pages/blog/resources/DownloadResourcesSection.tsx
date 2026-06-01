import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import AccentText from "@/components/ui/AccentText";

import DownloadResourcesClient from "./DownloadResourcesClient";
import { downloadResources } from "./resourceContent";

export default function DownloadResourcesSection() {
  return (
    <Section
      background="cream"
      spacing="sm"
      aria-labelledby="download-resources-heading"
      className="relative overflow-hidden"
    >
      <Container size="wide" padding="default">
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <AccentText className="mb-4 block text-purple">
            Resurse gratuite
          </AccentText>

          <Heading
            id="download-resources-heading"
            as="h2"
            size="h2"
            align="center"
          >
            Alege materialul de care ai nevoie acum
          </Heading>

          <Text align="center" color="muted" className="mx-auto mt-5 max-w-2xl">
            Exerciții și ghiduri scurte pe care le poți folosi între ședințe sau
            ca prim pas spre mai multă claritate emoțională.
          </Text>
        </div>

        <DownloadResourcesClient resources={downloadResources} />
      </Container>
    </Section>
  );
}
