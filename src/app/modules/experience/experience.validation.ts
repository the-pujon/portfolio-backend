import { z } from "zod";

const createExperienceZodSchema = z.object({
  body: z.object({
    companyName: z.string({
      required_error: "Company name is required",
    }),
    position: z.string({
      required_error: "Position is required",
    }),
    startDate: z
      .string({
        required_error: "Start date is required",
      })
      .refine((val) => !isNaN(Date.parse(val)), {
        message: "Invalid date format",
      }),
    endDate: z
      .string({
        required_error: "End date is required",
      })
      .refine((val) => !isNaN(Date.parse(val)), {
        message: "Invalid date format",
      }),
  }),
});

const updateExperienceZodSchema = z.object({
  body: z.object({
    companyName: z.string().optional(),
    position: z.string().optional(),
    startDate: z
      .string()
      .refine((val) => !isNaN(Date.parse(val)), {
        message: "Invalid date format",
      })
      .optional(),
    endDate: z
      .string()
      .refine((val) => !isNaN(Date.parse(val)), {
        message: "Invalid date format",
      })
      .optional(),
  }),
});

export const ExperienceValidation = {
  createExperienceZodSchema,
  updateExperienceZodSchema,
};
