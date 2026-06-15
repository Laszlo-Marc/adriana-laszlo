// sanity/schemaTypes/objects/eventDetails.ts

import { defineField, defineType } from "sanity";

export const eventDetails = defineType({
  name: "eventDetails",
  title: "Event details",
  type: "object",
  fields: [
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (Rule) => Rule.required().max(140),
    }),
    defineField({
      name: "format",
      title: "Format",
      type: "string",
      options: {
        list: [
          { title: "Fizic", value: "fizic" },
          { title: "Online", value: "online" },
          { title: "Hibrid", value: "hibrid" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "string",
      description: 'Example: "350 lei" or "Preț comunicat la înscriere"',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: "groupSize",
      title: "Group size",
      type: "string",
      description: 'Example: "8–12 participante"',
      validation: (Rule) => Rule.max(100),
    }),
  ],
});
