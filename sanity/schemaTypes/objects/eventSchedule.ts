// sanity/schemaTypes/objects/eventSchedule.ts

import { defineField, defineType } from "sanity";

export const eventSchedule = defineType({
  name: "eventSchedule",
  title: "Event schedule",
  type: "object",
  fields: [
    defineField({
      name: "startDate",
      title: "Start date and time",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "endDate",
      title: "End date and time",
      type: "datetime",
    }),
    defineField({
      name: "timeLabel",
      title: "Displayed time",
      type: "string",
      description: 'Example: "18:00 – 21:00"',
      validation: (Rule) => Rule.max(80),
    }),
    defineField({
      name: "duration",
      title: "Duration",
      type: "string",
      description: 'Example: "3 ore"',
      validation: (Rule) => Rule.max(80),
    }),
  ],
});
