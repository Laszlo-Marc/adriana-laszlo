// sanity/lib/image.ts

import imageUrlBuilder, { SanityImageSource } from "@sanity/image-url";

import { sanityClient } from "./client";

const builder = imageUrlBuilder(sanityClient);

export function urlForImage(source: SanityImageSource) {
  return builder.image(source);
}
