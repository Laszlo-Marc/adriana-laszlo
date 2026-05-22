import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import MobileServiceCard from "./MobileServiceCard";
import TraumaCenterMobileBlock from "./TraumaCenterMobileBlock";
import { eventsService, therapyServices } from "./data";

export default function ServicesTeaserMobile() {
  return (
    <div className="lg:hidden">
      <Container size="wider" padding="none" className="relative z-10">
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

          <Text
            size="base"
            color="muted"
            align="center"
            className="mx-auto mt-5 max-w-md text-pretty leading-7"
          >
            Poți lucra individual, online sau printr-o abordare specializată
            pentru traumă. Iar prin Trauma Center, poți descoperi și experiențe
            de grup.
          </Text>
        </div>

        <div className="mt-10">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-7 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {therapyServices.map((service) => (
              <MobileServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        <TraumaCenterMobileBlock service={eventsService} />

        <div className="px-6 pb-20 pt-12">
          <Text
            size="sm"
            color="muted"
            align="center"
            className="mx-auto max-w-sm text-pretty leading-7"
          >
            Nu trebuie să alegi perfect de la început. Putem clarifica împreună
            forma de sprijin potrivită pentru tine.
          </Text>
        </div>
      </Container>
    </div>
  );
}
