import { z } from "zod";

const createSkillZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
    }),
    image: z.string({
      required_error: "Image URL is required",
    }),
    userId: z.string({
      required_error: "User ID is required",
    }),
  }),
});

const updateSkillZodSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    userId: z.string({
      required_error: "User ID is required",
    }),
  }),
});

export const SkillValidation = {
  createSkillZodSchema,
  updateSkillZodSchema,
};
