import { z } from "zod";

const createBlogZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required",
    }),
    content: z.string({
      required_error: "Content is required",
    }),
    image: z.array(z.string()).optional(),
    author: z.string({
      required_error: "Author is required",
    }),
    category: z.string({
      required_error: "Category is required",
    }),
    tags: z.array(z.string()).optional(),
  }),
});

const updateBlogZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    content: z.string().optional(),
    image: z.array(z.string()).optional(),
    author: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const addFeedbackZodSchema = z.object({
  body: z.object({
    rating: z.number().min(1).max(5),
    email: z.string().email(),
    feedback: z.string(),
  }),
});

export const BlogValidation = {
  createBlogZodSchema,
  updateBlogZodSchema,
  addFeedbackZodSchema,
};
