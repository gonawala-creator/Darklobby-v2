import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.string(),
    thumbnail: z.string(),
    author: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    readTime: z.string().default('4 min read'),
  }),
});

const settings = defineCollection({
  type: 'data',
  schema: z.record(z.any()),
});

export const collections = {
  news,
  settings,
};
