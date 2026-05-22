import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import MobileServiceCard from "./MobileServiceCard";
import TraumaCenterMobileBlock from "./TraumaCenterMobileBlock";
import { eventsService, therapyServices } from "./data";

export default function ServicesTeaserMobile() {
  return (
    <div className="lg:hidden">
      <Container size="wider" padding="none" className="relative z-10 pb-10">
        <div className="px-6 pt-16 text-center">
          <Text
            as="p"
            size="xs"
            color="gold"
            weight="medium"
            transform="upper"
            align="center"
            className="mb-4 tracking-[0.16em]"
          >
            Moduri de lucru
          </Text>

          <Heading
            as="h2"
            size="h2"
            className="text-balance text-charcoal"
            align="center"
          >
            Forme de sprijin pentru ritmul și nevoile tale
          </Heading>
        </div>

        <div className="mt-10">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-7 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {therapyServices.map((service) => (
              <MobileServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        <TraumaCenterMobileBlock service={eventsService} />
      </Container>
    </div>
  );
}
