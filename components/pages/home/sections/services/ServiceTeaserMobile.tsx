import Container from "@/components/ui/Container";
import ServicesMobileSlider from "./ServicesMobileSlider";
import { mobileServiceSlides } from "./data";

export default function ServicesTeaserMobile() {
  return (
    <div className="lg:hidden">
      <Container size="wider" padding="none" className="relative z-10 pb-20 ">
        <ServicesMobileSlider services={mobileServiceSlides} />
      </Container>
    </div>
  );
}
