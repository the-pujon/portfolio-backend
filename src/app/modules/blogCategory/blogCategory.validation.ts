import { z } from "zod";

const createBlogCategoryZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
    }),
  }),
});

const updateBlogCategoryZodSchema = z.object({
  body: z.object({
    name: z.string().optional(),
  }),
});

export const BlogCategoryValidation = {
  createBlogCategoryZodSchema,
  updateBlogCategoryZodSchema,
};
