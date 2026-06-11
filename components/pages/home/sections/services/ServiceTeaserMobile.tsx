import Container from "@/components/ui/Container";
import TraumaCenterMobileBlock from "./TraumaCenterMobileBlock";
import { eventsService, therapyServices } from "./data";
import MobileServicesAccordion from "./MobileServicesAccordion";

export default function ServicesTeaserMobile() {
  return (
    <div className="lg:hidden">
      <Container size="wider" padding="none" className="relative z-10 pb-20 ">
        <MobileServicesAccordion services={therapyServices} />

        <TraumaCenterMobileBlock service={eventsService} />
      </Container>
    </div>
  );
}
