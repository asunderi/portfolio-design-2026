import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		/** Sort key — use the most recent year of the engagement. */
		year: z.number(),
		/** Human label shown in UI, e.g. "2015 — 2019". Falls back to `year`. */
		dateLabel: z.string().optional(),
		role: z.string().optional(),
		/** Disciplines / engagement type tags. */
		type: z.array(z.string()).default([]),
		tools: z.array(z.string()).default([]),
		client: z.string().optional(),
		cover: z.string().optional(),
		featured: z.boolean().default(false),
		order: z.number().default(0),
	}),
});

export const collections = { projects };
