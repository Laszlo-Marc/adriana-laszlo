// sanity/schemaTypes/index.ts

import { author } from "./documents/author";
import { blogPost } from "./documents/blogPost";
import { event } from "./documents/event";
import { siteSettings } from "./documents/siteSettings";

import { eventDetails } from "./objects/eventDetails";
import { eventSchedule } from "./objects/eventSchedule";
import { eventSignup } from "./objects/eventSignup";
import { faqItem } from "./objects/faqItem";
import { galleryImage } from "./objects/galleryImage";
import { portableText } from "./objects/portableText";
import { seo } from "./objects/seo";

export const schemaTypes = [
  // Documents
  author,
  blogPost,
  event,
  siteSettings,

  // Objects
  seo,
  faqItem,
  portableText,
  galleryImage,
  eventSchedule,
  eventDetails,
  eventSignup,
];
