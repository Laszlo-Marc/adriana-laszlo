import ServicesMobileSlider from "./ServicesMobileSlider";
import { mobileServiceSlides } from "./data";

export default function ServicesTeaserMobile() {
  return (
    <div className="relative z-10 lg:hidden">
      <ServicesMobileSlider services={mobileServiceSlides} />
    </div>
  );
}
