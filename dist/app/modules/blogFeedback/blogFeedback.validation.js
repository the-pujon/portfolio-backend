"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogFeedbackValidation = void 0;
const zod_1 = require("zod");
const createBlogFeedbackZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        blog: zod_1.z.string({
            required_error: "Blog ID is required",
        }),
        rating: zod_1.z
            .number({
            required_error: "Rating is required",
        })
            .min(1)
            .max(5),
        email: zod_1.z
            .string({
            required_error: "Email is required",
        })
            .email(),
        feedback: zod_1.z.string({
            required_error: "Feedback is required",
        }),
    }),
});
const updateBlogFeedbackZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        rating: zod_1.z.number().min(1).max(5).optional(),
        email: zod_1.z.string().email().optional(),
        feedback: zod_1.z.string().optional(),
    }),
});
exports.BlogFeedbackValidation = {
    createBlogFeedbackZodSchema,
    updateBlogFeedbackZodSchema,
};
