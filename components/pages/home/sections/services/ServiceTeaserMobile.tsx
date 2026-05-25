import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import MobileServiceCard from "./MobileServiceCard";
import TraumaCenterMobileBlock from "./TraumaCenterMobileBlock";
import { eventsService, therapyServices } from "./data";
import AccentText from "@/components/ui/AccentText";

export default function ServicesTeaserMobile() {
  return (
    <div className="lg:hidden">
      <Container size="wider" padding="none" className="relative z-10 pb-10">
        <div className="px-6 pt-16 text-center">
          <AccentText className="justify-center text-2xl text-center text-gold">
            Servicii
          </AccentText>

          <Heading
            as="h2"
            size="h1"
            className="text-balance mt-4 "
            align="center"
          >
            Forme de sprijin
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
