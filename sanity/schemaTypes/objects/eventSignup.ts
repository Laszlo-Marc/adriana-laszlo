// sanity/schemaTypes/objects/eventSignup.ts

import { defineField, defineType } from "sanity";

export const eventSignup = defineType({
  name: "eventSignup",
  title: "Signup section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Signup title",
      type: "string",
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: "description",
      title: "Signup description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(400),
    }),
    defineField({
      name: "ctaLabel",
      title: "Button label",
      type: "string",
      initialValue: "Mă înscriu",
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: "formUrl",
      title: "Form URL",
      type: "url",
      description:
        "External form link if the event uses a Google Form, Typeform, etc.",
    }),
    defineField({
      name: "mapEmbedUrl",
      title: "Google Maps embed URL",
      type: "url",
    }),
    defineField({
      name: "mapLink",
      title: "Google Maps link",
      type: "url",
    }),
    defineField({
      name: "note",
      title: "Small note",
      type: "text",
      rows: 2,
      validation: (Rule) => Rule.max(240),
    }),
  ],
});
