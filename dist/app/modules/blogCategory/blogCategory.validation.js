"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogCategoryValidation = void 0;
const zod_1 = require("zod");
const createBlogCategoryZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: "Name is required",
        }),
    }),
});
const updateBlogCategoryZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
    }),
});
exports.BlogCategoryValidation = {
    createBlogCategoryZodSchema,
    updateBlogCategoryZodSchema,
};
