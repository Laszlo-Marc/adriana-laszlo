import AccentText from "@/components/ui/AccentText";
import Heading from "@/components/ui/Heading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Text from "@/components/ui/Text";

type TestimonialsHeaderProps = {
  title: string;
  description?: string;
};

export default function TestimonialsHeader({
  title,
  description,
}: TestimonialsHeaderProps) {
  return (
    <ScrollReveal className="mx-auto max-w-3xl text-center">
      <AccentText className="block text-center text-2xl text-gold">
        Testimoniale
      </AccentText>

      <Heading
        id="testimonials-heading"
        as="h2"
        size="h2"
        className="mt-4"
        align="center"
        font="display"
        textCase="uppercase"
      >
        {title}
      </Heading>

      {description ? (
        <Text
          as="p"
          size="lg"
          color="muted"
          align="center"
          className="mx-auto mt-5 hidden max-w-2xl text-pretty lg:block"
        >
          {description}
        </Text>
      ) : null}
    </ScrollReveal>
  );
}
