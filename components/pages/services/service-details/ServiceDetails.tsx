import { serviceDetails } from "./service-page-data";
import ServiceDetailSection from "./ServiceDetailsSection";
export default function ServicesDetails() {
  return (
    <>
      {serviceDetails.map((service) => (
        <ServiceDetailSection key={service.id} {...service} />
      ))}
    </>
  );
}
