// sanity/schemaTypes/objects/seo.ts

import { defineField, defineType } from "sanity";

export const seo = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Google title",
      type: "string",
      description:
        "Recommended: 45–60 characters. This can override the default page title.",
      validation: (Rule) => Rule.max(70),
    }),
    defineField({
      name: "description",
      title: "Google description",
      type: "text",
      rows: 3,
      description:
        "Recommended: 140–160 characters. This can override the default meta description.",
      validation: (Rule) => Rule.max(170),
    }),
    defineField({
      name: "image",
      title: "Social sharing image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative text",
          type: "string",
          validation: (Rule) => Rule.max(160),
        }),
      ],
    }),
    defineField({
      name: "noIndex",
      title: "Hide from Google?",
      type: "boolean",
      initialValue: false,
      description:
        "Only turn this on for drafts, private pages, test content, or pages that should not appear in Google.",
    }),
  ],
});
