import { MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import { ProcessImageBlock } from "./ProcessImageBlock";
import { ProcessRows } from "./ProcessRows";

export function HomeProcessMobile() {
  return (
    <div className="lg:hidden">
      <Container size="wider" padding="none">
        <div className="px-6 pb-20 pt-16">
          <div className="relative z-10 text-center">
            <Text
              as="p"
              size="xs"
              color="gold"
              weight="medium"
              transform="upper"
              align="center"
              className="mb-4 tracking-[0.16em]"
            >
              Primii pași
            </Text>

            <Heading
              as="h2"
              size="h1"
              align="center"
              className="mx-auto  text-balance text-charcoal"
            >
              Cum începem, fără presiune
            </Heading>
          </div>

          <ProcessImageBlock />

          <ProcessRows />

          <div className="relative z-10 mx-auto mt-9 max-w-md text-center">
            <Text
              size="sm"
              color="muted"
              align="center"
              className="text-pretty leading-7"
            >
              Procesul nu trebuie grăbit. Important este să existe un cadru în
              care te poți simți în siguranță să începi.
            </Text>

            <div className="mt-7">
              <Button
                href="/contact"
                size="lg"
                className="w-full"
                leftIcon={<MessageCircle className="h-4 w-4" />}
              >
                Programează o discuție
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
