import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    draft: z.boolean().optional().default(false)
  })
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().default(0),
    tags: z.array(z.string()).default([]),
    repoUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    samples: z
      .array(
        z.object({
          title: z.string(),
          url: z.string().url(),
          image: z.string().url().optional()
        })
      )
      .default([]),
    videos: z
      .array(
        z.object({
          title: z.string(),
          src: z.string().optional(),
          embedUrl: z.string().url().optional(),
          thumbnail: z.string().optional(),
          portrait: z.boolean().optional()
        })
      )
      .default([])
  })
});

export const collections = { blog, projects };
