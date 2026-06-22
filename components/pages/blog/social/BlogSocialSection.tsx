import { FaInstagram } from "react-icons/fa";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import AccentText from "@/components/ui/AccentText";
import Text from "@/components/ui/Text";

import { socialReels } from "./socialContent";

const instagramUrl = "https://www.instagram.com/";

export default function BlogSocialSection() {
  if (!socialReels.length) return null;

  return (
    <Section
      background="cream"
      spacing="md"
      aria-labelledby="blog-social-heading"
      className="relative overflow-hidden"
    >
      <Container size="wide" padding="default">
        <div className="mx-auto mb-8 max-w-2xl text-center lg:mb-10">
          <AccentText className="mb-3 block text-purple">
            Gânduri scurte, explicate simplu
          </AccentText>

          <Heading id="blog-social-heading" as="h2" size="h2" align="center">
            Materiale video scurte pe Instagram
          </Heading>

          <Text
            as="p"
            size="base"
            align="center"
            className="mx-auto mt-5 max-w-xl text-pretty leading-7 text-charcoal/65"
          >
            Fragmente video despre traumă, atașament și resurse interioare,
            explicate într-un mod accesibil.
          </Text>
        </div>

        <div className="-mx-4 overflow-x-auto px-4 pb-3 scrollbar-none sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:gap-6 [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex snap-x snap-mandatory gap-4 sm:contents">
            {socialReels.map((reel) => (
              <ReelCard key={reel.id} reel={reel} />
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Button
            variant="primary"
            leftIcon={<FaInstagram aria-hidden="true" className="h-4 w-4" />}
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            size="md"
          >
            Vezi mai multe pe Instagram
          </Button>
        </div>
      </Container>
    </Section>
  );
}

type SocialReel = (typeof socialReels)[number];

function ReelCard({ reel }: { reel: SocialReel }) {
  return (
    <article className="w-[72vw] max-w-68 shrink-0 snap-center sm:w-auto sm:max-w-none sm:shrink sm:snap-none">
      <div className="relative aspect-9/14 overflow-hidden rounded-4xl bg-charcoal ring-1 ring-charcoal/10">
        <video
          className="h-full w-full object-cover"
          src={reel.videoSrc}
          poster={reel.posterSrc}
          controls
          muted
          playsInline
          preload="none"
          aria-label={reel.title}
        />
      </div>
    </article>
  );
}
