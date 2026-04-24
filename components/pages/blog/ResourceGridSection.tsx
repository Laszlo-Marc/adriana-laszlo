import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

import ResourceCard from "./ResourceCard";
import { FreeResource } from "./blog-page-data";

type ResourcesGridSectionProps = {
  resources: FreeResource[];
};

export default function ResourcesGridSection({
  resources,
}: ResourcesGridSectionProps) {
  if (!resources.length) return null;

  return (
    <Section
      background="cream"
      spacing="md"
      aria-labelledby="resources-grid-heading"
      className="relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-teal/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-purple/10 blur-3xl"
      />

      <Container size="wide" className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <Heading as="h2" size="h2" align="center">
            Resurse gratuite
          </Heading>

          <Text className="mt-4 " align="center" color="muted">
            Exerciții și materiale descărcabile pe care le poți folosi în ritmul
            tău, între ședințe sau ca prim pas spre mai multă claritate.
          </Text>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource) => (
            <ResourceCard key={resource.downloadHref} {...resource} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
