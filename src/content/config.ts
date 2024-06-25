import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        tags: z.array(z.string()),
        summary: z.string(),
    }),
});

// Export
export const collections = {
    blogposts: postsCollection,
};


