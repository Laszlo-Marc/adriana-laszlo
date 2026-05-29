import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import TraumaCenterMobileBlock from "./TraumaCenterMobileBlock";
import { eventsService, therapyServices } from "./data";
import AccentText from "@/components/ui/AccentText";
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
