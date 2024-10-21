"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationValidation = void 0;
const zod_1 = require("zod");
const createEducationZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        institution: zod_1.z.string({
            required_error: "Institution is required",
        }),
        degree: zod_1.z.string({
            required_error: "Degree is required",
        }),
        fieldOfStudy: zod_1.z.string({
            required_error: "Field of study is required",
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
const updateEducationZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        institution: zod_1.z.string().optional(),
        degree: zod_1.z.string().optional(),
        fieldOfStudy: zod_1.z.string().optional(),
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
exports.EducationValidation = {
    createEducationZodSchema,
    updateEducationZodSchema,
};
