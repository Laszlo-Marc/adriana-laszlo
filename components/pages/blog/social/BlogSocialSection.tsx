import Link from "next/link";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import AccentText from "@/components/ui/AccentText";

import { socialReels } from "./socialContent";
import { FaInstagram } from "react-icons/fa";

export default function BlogSocialSection() {
  return (
    <Section
      background="cream"
      spacing="lg"
      aria-labelledby="blog-social-heading"
      className="relative overflow-hidden"
    >
      <Container size="wide" padding="default">
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-14">
          <AccentText className="mb-4 block text-purple">
            Gânduri scurte, explicate simplu
          </AccentText>

          <Heading id="blog-social-heading" as="h2" size="h2" align="center">
            Urmărește materiale video scurte pe Instagram
          </Heading>

          <Text align="center" color="muted" className="mx-auto mt-5 max-w-2xl">
            Idei clare despre traumă, relații, limite și vindecare emoțională,
            explicate în format scurt și ușor de urmărit.
          </Text>
        </div>

        <div className="-mx-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:gap-7">
          <div className="flex snap-x snap-mandatory gap-4 sm:contents">
            {socialReels.map((reel) => (
              <article
                key={reel.id}
                className="group w-[78vw] max-w-[21rem] shrink-0 snap-center overflow-hidden rounded-[2rem] border border-white/70 bg-white  sm:w-auto sm:max-w-none sm:shrink sm:snap-none"
              >
                <div className="relative aspect-[9/16] overflow-hidden bg-charcoal">
                  <video
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    src={reel.videoSrc}
                    poster={reel.posterSrc}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    controls={false}
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent"
                  />

                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="font-display text-2xl leading-tight text-white">
                      {reel.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/82">
                      {reel.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            variant="primary"
            leftIcon={<FaInstagram aria-hidden="true" className="h-4 w-4" />}
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
          >
            Vezi mai multe pe Instagram
          </Button>
        </div>
      </Container>
    </Section>
  );
}
