import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

export default function BlogPostCTA() {
  return (
    <section className="bg-cream pb-16 md:pb-24">
      <Container size="default" padding="default">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-sand/40 bg-white/75 px-6 py-8 text-center shadow-[0_22px_70px_rgba(44,44,44,0.08)] md:px-10 md:py-10">
          <Heading as="h2" size="h2" className="text-charcoal">
            Simți că te regăsești în acest articol?
          </Heading>

          <Text size="base" className="mx-auto mt-4 max-w-2xl text-muted">
            Un prim pas poate fi o conversație clară și sigură despre ce
            trăiești, ce te blochează și ce fel de sprijin ți se potrivește.
          </Text>

          <div className="mt-7 flex justify-center">
            <Button href="/contact">Programează o discuție</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
