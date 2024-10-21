import { z } from "zod";

const createBlogFeedbackZodSchema = z.object({
  body: z.object({
    blog: z.string({
      required_error: "Blog ID is required",
    }),
    rating: z
      .number({
        required_error: "Rating is required",
      })
      .min(1)
      .max(5),
    email: z
      .string({
        required_error: "Email is required",
      })
      .email(),
    feedback: z.string({
      required_error: "Feedback is required",
    }),
  }),
});

const updateBlogFeedbackZodSchema = z.object({
  body: z.object({
    rating: z.number().min(1).max(5).optional(),
    email: z.string().email().optional(),
    feedback: z.string().optional(),
  }),
});

export const BlogFeedbackValidation = {
  createBlogFeedbackZodSchema,
  updateBlogFeedbackZodSchema,
};
