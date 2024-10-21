"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectCategoryValidation = void 0;
const zod_1 = require("zod");
const createProjectCategoryZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: "Name is required",
        }),
    }),
});
const updateProjectCategoryZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
    }),
});
exports.ProjectCategoryValidation = {
    createProjectCategoryZodSchema,
    updateProjectCategoryZodSchema,
};
