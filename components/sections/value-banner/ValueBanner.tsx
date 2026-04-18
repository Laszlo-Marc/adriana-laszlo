import Container from "@/components/ui/Container";
import ValueMessage from "./ValueMessage";
import TrustItemsRow from "./TrustItemsRow";
import Section from "../../ui/Section";

export default function ValueBanner() {
  return (
    <Section spacing="sm" background="teal-soft">
      <Container>
        <div className="py-10 text-center">
          <ValueMessage />
          <div className="mt-6">
            <TrustItemsRow />
          </div>
        </div>
      </Container>
    </Section>
  );
}
