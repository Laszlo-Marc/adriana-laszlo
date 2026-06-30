// sanity/schemaTypes/documents/event.ts

import { defineArrayMember, defineField, defineType } from "sanity";

export const event = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "summary",
      title: "Short summary",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().min(80).max(280),
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [defineArrayMember({ type: "galleryImage" })],
      validation: (Rule) => Rule.max(8),
    }),
    defineField({
      name: "status",
      title: "Event status",
      type: "string",
      options: {
        list: [
          { title: "Draft", value: "draft" },
          { title: "Upcoming", value: "upcoming" },
          { title: "Sold out", value: "soldOut" },
          { title: "Past", value: "past" },
          { title: "Cancelled", value: "cancelled" },
        ],
        layout: "dropdown",
      },
      initialValue: "draft",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "registrationStatus",
      title: "Registration status",
      type: "string",
      options: {
        list: [
          { title: "Open", value: "open" },
          { title: "Limited places", value: "limited" },
          { title: "Waitlist", value: "waitlist" },
          { title: "Closed", value: "closed" },
        ],
        layout: "dropdown",
      },
      initialValue: "open",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "schedule",
      title: "Schedule",
      type: "eventSchedule",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "details",
      title: "Details",
      type: "eventDetails",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "signup",
      title: "Signup",
      type: "eventSignup",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "storySections",
      title: "Story sections",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "storySection",
          title: "Story section",
          fields: [
            defineField({
              name: "eyebrow",
              title: "Small label",
              type: "string",
              validation: (Rule) => Rule.max(80),
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required().max(120),
            }),

            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 4,
              validation: (Rule) => Rule.required().max(900),
            }),
            defineField({
              name: "image",
              title: "Image",
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
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "eyebrow",
              media: "image",
            },
          },
        }),
      ],
      validation: (Rule) => Rule.max(10),
    }),
    defineField({
      name: "faq",
      title: "FAQ",
      type: "array",
      of: [defineArrayMember({ type: "faqItem" })],
      validation: (Rule) => Rule.max(8),
    }),
    defineField({
      name: "featured",
      title: "Featured event",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
    }),
  ],
  preview: {
    select: {
      title: "title",
      status: "status",
      startDate: "schedule.startDate",
      media: "mainImage",
    },
    prepare({ title, status, startDate, media }) {
      return {
        title,
        subtitle: [status, startDate?.slice(0, 10)].filter(Boolean).join(" · "),
        media,
      };
    },
  },
  orderings: [
    {
      title: "Event date, newest first",
      name: "eventDateDesc",
      by: [{ field: "schedule.startDate", direction: "desc" }],
    },
    {
      title: "Event date, oldest first",
      name: "eventDateAsc",
      by: [{ field: "schedule.startDate", direction: "asc" }],
    },
  ],
});
