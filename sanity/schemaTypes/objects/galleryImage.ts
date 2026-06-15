// sanity/schemaTypes/objects/galleryImage.ts

import { defineField, defineType } from "sanity";

export const galleryImage = defineType({
  name: "galleryImage",
  title: "Gallery image",
  type: "image",
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: "alt",
      title: "Alternative text",
      type: "string",
      validation: (Rule) => Rule.required().max(160),
    }),
  ],
});
