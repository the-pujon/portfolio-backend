import { z } from "zod";

const createProjectCategoryZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
    }),
  }),
});

const updateProjectCategoryZodSchema = z.object({
  body: z.object({
    name: z.string().optional(),
  }),
});

export const ProjectCategoryValidation = {
  createProjectCategoryZodSchema,
  updateProjectCategoryZodSchema,
};
