import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import AccentText from "@/components/ui/AccentText";
import Button from "@/components/ui/Button";

import { homeSocialVideos } from "./social-data";
import { FaInstagram } from "react-icons/fa";

function SocialVideoCard({
  src,
  poster,
  href,
  title,
  handle,
}: {
  src: string;
  poster?: string;
  href: string;
  title: string;
  handle?: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group relative mx-auto w-full max-w-[400px] block overflow-hidden rounded-[28px] bg-sand/40 shadow-[0_18px_40px_rgba(44,44,44,0.08)] ring-1 ring-charcoal/8 transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple"
      aria-label={`${title}${handle ? ` - ${handle}` : ""}`}
    >
      <div className="relative aspect-9/16 overflow-hidden rounded-[28px] bg-charcoal/5">
        <video
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
        >
          <source src={src} type="video/mp4" />
        </video>

        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-charcoal/45 via-charcoal/5 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <div className="rounded-[20px] bg-white/88 px-4 py-3 backdrop-blur-sm">
            <p className="text-sm font-medium leading-snug text-charcoal">
              {title}
            </p>
            {handle ? (
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-charcoal/60">
                {handle}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function HomeSocialSection() {
  return (
    <Section
      background="white"
      spacing="lg"
      aria-labelledby="home-social-heading"
      className="relative overflow-hidden"
    >
      <Container size="wide" padding="default">
        <div className="relative">
          {/* background brand elements */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <div className="absolute left-20 top-8 hidden opacity-[0.6] lg:block">
              <Image
                src="/backgrounds/single.png"
                alt=""
                width={180}
                height={220}
                className="h-auto w-35 xl:w-45"
              />
            </div>

            <div className="absolute right-16 bottom-0  opacity-[0.6] lg:block">
              <Image
                src="/backgrounds/dragonfly.png"
                alt=""
                width={180}
                height={180}
                className="h-auto w-30 xl:w-60"
              />
            </div>

            <div className="absolute left-1/2 top-10 h-40 w-40 -translate-x-1/2 rounded-full bg-purple/8 blur-3xl" />
            <div className="absolute bottom-6 right-1/4 h-32 w-32 rounded-full bg-teal/80 blur-3xl" />
          </div>

          <div className="mx-auto text-center">
            <AccentText className="text-4xl">Comunitate și resurse</AccentText>

            <Heading as="h2" className="mt-3 text-balance" align="center">
              Urmărește conținutul publicat pe social media
            </Heading>

            <Text
              size="lg"
              color="muted"
              className="mx-auto mt-4  text-balance"
              align="center"
            >
              Videouri scurte, explicații clare și resurse care pot aduce mai
              multă înțelegere între ședințe.
            </Text>
          </div>

          <div className="mt-10 grid grid-cols-2 justify-items-center gap-4 lg:grid-cols-3">
            {homeSocialVideos.map((video) => (
              <SocialVideoCard
                key={video.id}
                src={video.src}
                poster={video.poster}
                href={video.href}
                title={video.title}
                handle={video.handle}
              />
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button
              variant="primary"
              size="lg"
              leftIcon={<FaInstagram className="mr-2 h-4 w-4" />}
              rightIcon={<ArrowRight className="ml-2 h-4 w-4" />}
            >
              <Link
                href="https://www.instagram.com/adrianalaszlo/"
                target="_blank"
                rel="noreferrer"
              >
                Urmărește pagina
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
