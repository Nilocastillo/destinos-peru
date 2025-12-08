import { defineCollection, z } from "astro:content";

const toursCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      image: image(),
      title: z.string(),
      duration: z.string(),
      location: z.string(),
      departure: z.string(),
      category: z.array(z.string()),
      description: z.string(),
      alt: z.string(),
      order: z.number().optional().default(0),
      meta_title: z.string(),
      meta_description: z.string(),
    }),
});

export const collections = {
  tours: toursCollection,
};
