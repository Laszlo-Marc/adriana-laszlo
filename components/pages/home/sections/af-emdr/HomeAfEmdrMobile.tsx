import Image from "next/image";
import { Mail } from "lucide-react";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import AccentText from "@/components/ui/AccentText";
import Button from "@/components/ui/Button";
import { afEmdrContent } from "./af-emdr-data";

export function HomeAfEmdrMobile() {
  return (
    <div className="lg:hidden">
      <div className="px-4 pt-10 text-center">
        <AccentText className="justify-center text-2xl text-center text-gold">
          {afEmdrContent.eyebrow}
        </AccentText>

        <Heading
          as="h2"
          size="h1"
          align="center"
          color="charcoal"
          className="mt-4  leading-[1.05]"
        >
          {afEmdrContent.title}
        </Heading>
      </div>

      <div className="relative mt-12 pb-8">
        {/* colored editorial panel */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-5 h-40 w-full bg-teal"
        />

        {/* image */}
        <div className="relative z-20 mx-auto aspect-[4/3] w-[82%] max-w-none overflow-hidden  bg-sand/20 shadow-[0_24px_70px_rgba(44,44,44,0.14)]">
          {" "}
          <Image
            src="/home-page/certifications.jpg"
            alt="Certificate și diplome profesionale în cabinetul Adrianei Laszlo"
            fill
            priority={false}
            className="object-cover object-center"
            sizes="72vw"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal/10"
          />
        </div>
      </div>

      <div className="px-6 pb-16 pt-5 text-center">
        <Text
          align="center"
          color="muted"
          className="mx-auto max-w-md text-sm leading-7 sm:text-base"
        >
          {afEmdrContent.body}
        </Text>

        <div className="mt-8">
          <Button
            href="/contact"
            leftIcon={<Mail className="h-4 w-4" />}
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
          >
            {afEmdrContent.cta}
          </Button>
        </div>
      </div>
    </div>
  );
}
