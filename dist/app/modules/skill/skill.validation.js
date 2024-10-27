"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillValidation = void 0;
const zod_1 = require("zod");
const createSkillZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: "Name is required",
        }),
        image: zod_1.z.string({
            required_error: "Image URL is required",
        }),
        userId: zod_1.z.string({
            required_error: "User ID is required",
        }),
    }),
});
const updateSkillZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        image: zod_1.z.string().optional(),
        userId: zod_1.z.string({
            required_error: "User ID is required",
        }),
    }),
});
exports.SkillValidation = {
    createSkillZodSchema,
    updateSkillZodSchema,
};
