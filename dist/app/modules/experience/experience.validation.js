"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceValidation = void 0;
const zod_1 = require("zod");
const createExperienceZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string({
            required_error: "User ID is required",
        }),
        companyName: zod_1.z.string({
            required_error: "Company name is required",
        }),
        position: zod_1.z.string({
            required_error: "Position is required",
        }),
        startDate: zod_1.z
            .string({
            required_error: "Start date is required",
        })
            .refine((val) => !isNaN(Date.parse(val)), {
            message: "Invalid date format",
        }),
        endDate: zod_1.z
            .string({
            required_error: "End date is required",
        })
            .refine((val) => !isNaN(Date.parse(val)), {
            message: "Invalid date format",
        }),
    }),
});
const updateExperienceZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        companyName: zod_1.z.string().optional(),
        position: zod_1.z.string().optional(),
        startDate: zod_1.z
            .string()
            .refine((val) => !isNaN(Date.parse(val)), {
            message: "Invalid date format",
        })
            .optional(),
        endDate: zod_1.z
            .string()
            .refine((val) => !isNaN(Date.parse(val)), {
            message: "Invalid date format",
        })
            .optional(),
    }),
});
const deleteExperienceZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string({
            required_error: "User ID is required",
        }),
    }),
});
const getProfileByUserIdZodSchema = zod_1.z.object({
    params: zod_1.z.object({
        userId: zod_1.z.string({
            required_error: "User ID is required",
        }),
    }),
});
exports.ExperienceValidation = {
    createExperienceZodSchema,
    updateExperienceZodSchema,
    deleteExperienceZodSchema,
    getProfileByUserIdZodSchema,
};
