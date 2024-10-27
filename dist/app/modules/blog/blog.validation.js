"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogValidation = void 0;
const zod_1 = require("zod");
const createBlogZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: "Title is required",
        }),
        content: zod_1.z.string({
            required_error: "Content is required",
        }),
        image: zod_1.z.array(zod_1.z.string()).optional(),
        author: zod_1.z.string({
            required_error: "Author is required",
        }),
        category: zod_1.z.string({
            required_error: "Category is required",
        }),
        tags: zod_1.z.array(zod_1.z.string()).optional(),
    }),
});
const updateBlogZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        content: zod_1.z.string().optional(),
        image: zod_1.z.array(zod_1.z.string()).optional(),
        author: zod_1.z.string().optional(),
        category: zod_1.z.string().optional(),
        tags: zod_1.z.array(zod_1.z.string()).optional(),
    }),
});
const addFeedbackZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        rating: zod_1.z.number().min(1).max(5),
        email: zod_1.z.string().email(),
        feedback: zod_1.z.string(),
    }),
});
exports.BlogValidation = {
    createBlogZodSchema,
    updateBlogZodSchema,
    addFeedbackZodSchema,
};
