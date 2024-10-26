import { z } from "zod";

const createEducationZodSchema = z.object({
  body: z.object({
    userId: z.string({
      required_error: "User ID is required",
    }),
    institution: z.string({
      required_error: "Institution is required",
    }),
    degree: z.string({
      required_error: "Degree is required",
    }),
    fieldOfStudy: z.string({
      required_error: "Field of study is required",
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

const updateEducationZodSchema = z.object({
  body: z.object({
    institution: z.string().optional(),
    degree: z.string().optional(),
    fieldOfStudy: z.string().optional(),
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

export const EducationValidation = {
  createEducationZodSchema,
  updateEducationZodSchema,
};
