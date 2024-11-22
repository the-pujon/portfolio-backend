"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificateValidation = void 0;
const zod_1 = require("zod");
const createCertificateZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: "Title is required",
        }),
        issuedBy: zod_1.z.string({
            required_error: "Issuer is required",
        }),
        date: zod_1.z.string({
            required_error: "Date is required",
        }),
        image: zod_1.z.string({
            required_error: "Image URL is required",
        }),
        category: zod_1.z.string({
            required_error: "Category is required",
        }),
        description: zod_1.z.string({
            required_error: "Description is required",
        }),
        skills: zod_1.z.array(zod_1.z.string()).nonempty({
            message: "At least one skill is required",
        }),
        userId: zod_1.z.string({
            required_error: "User ID is required",
        }),
    }),
});
const updateCertificateZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        issuedBy: zod_1.z.string().optional(),
        date: zod_1.z.string().optional(),
        image: zod_1.z.string().optional(),
        credentialLink: zod_1.z.string().optional(),
        category: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        skills: zod_1.z.array(zod_1.z.string()).optional(),
        userId: zod_1.z.string({
            required_error: "User ID is required",
        }),
    }),
});
exports.CertificateValidation = {
    createCertificateZodSchema,
    updateCertificateZodSchema,
};
