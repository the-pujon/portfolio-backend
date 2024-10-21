"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileValidation = void 0;
const zod_1 = require("zod");
const createProfileZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        email: zod_1.z.string().email().optional(),
        designation: zod_1.z.string().optional(),
        department: zod_1.z.string().optional(),
        location: zod_1.z
            .object({
            city: zod_1.z.string().optional(),
            country: zod_1.z.string().optional(),
        })
            .optional(),
        heroImage: zod_1.z.string().optional(),
        about: zod_1.z.string().optional(),
        aboutImage: zod_1.z.string().optional(),
        skills: zod_1.z.array(zod_1.z.string()).optional(),
        projects: zod_1.z.array(zod_1.z.string()).optional(),
        experiences: zod_1.z.array(zod_1.z.string()).optional(),
        education: zod_1.z.array(zod_1.z.string()).optional(),
        certifications: zod_1.z.array(zod_1.z.string()).optional(),
        awards: zod_1.z.array(zod_1.z.string()).optional(),
        socialMedia: zod_1.z
            .object({
            linkedin: zod_1.z.string().optional(),
            twitter: zod_1.z.string().optional(),
            facebook: zod_1.z.string().optional(),
            instagram: zod_1.z.string().optional(),
            youtube: zod_1.z.string().optional(),
            github: zod_1.z.string().optional(),
            leetcode: zod_1.z.string().optional(),
        })
            .optional(),
        introduction: zod_1.z.string().optional(),
        resume: zod_1.z.string().optional(),
        projectCategory: zod_1.z.string().optional(),
    }),
});
const updateProfileZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        email: zod_1.z.string().email().optional(),
        designation: zod_1.z.string().optional(),
        department: zod_1.z.string().optional(),
        location: zod_1.z
            .object({
            city: zod_1.z.string().optional(),
            country: zod_1.z.string().optional(),
        })
            .optional(),
        heroImage: zod_1.z.string().optional(),
        about: zod_1.z.string().optional(),
        aboutImage: zod_1.z.string().optional(),
        skills: zod_1.z.array(zod_1.z.string()).optional(),
        projects: zod_1.z.array(zod_1.z.string()).optional(),
        experiences: zod_1.z.array(zod_1.z.string()).optional(),
        education: zod_1.z.array(zod_1.z.string()).optional(),
        certifications: zod_1.z.array(zod_1.z.string()).optional(),
        awards: zod_1.z.array(zod_1.z.string()).optional(),
        socialMedia: zod_1.z
            .object({
            linkedin: zod_1.z.string().optional(),
            twitter: zod_1.z.string().optional(),
            facebook: zod_1.z.string().optional(),
            instagram: zod_1.z.string().optional(),
            youtube: zod_1.z.string().optional(),
            github: zod_1.z.string().optional(),
            leetcode: zod_1.z.string().optional(),
        })
            .optional(),
        introduction: zod_1.z.string().optional(),
        resume: zod_1.z.string().optional(),
        projectCategory: zod_1.z.string().optional(),
    }),
});
exports.ProfileValidation = {
    createProfileZodSchema,
    updateProfileZodSchema,
};
