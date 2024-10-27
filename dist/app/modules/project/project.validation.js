"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectValidation = void 0;
const zod_1 = require("zod");
const feedbackSchema = zod_1.z.object({
    rating: zod_1.z.number(),
    email: zod_1.z.string().email(),
    feedback: zod_1.z.string(),
});
const createProjectZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string().optional(),
        title: zod_1.z.string().optional(),
        shortDescription: zod_1.z.string().optional(),
        fullDescription: zod_1.z.string().optional(),
        thumbnailImage: zod_1.z.string().optional(),
        images: zod_1.z.array(zod_1.z.string()).optional(),
        videoDemo: zod_1.z.string().optional(),
        liveLink: zod_1.z.string().optional(),
        clientGithub: zod_1.z.string().optional(),
        serverGithub: zod_1.z.string().optional(),
        category: zod_1.z.string().optional(),
        projectDuration: zod_1.z.string().optional(),
        projectTeamSize: zod_1.z.string().optional(),
        projectType: zod_1.z.string().optional(),
        projectStatus: zod_1.z.string().optional(),
        projectStack: zod_1.z.string().optional(),
        projectChallenges: zod_1.z.string().optional(),
        tags: zod_1.z.array(zod_1.z.string()).optional(),
        technologies: zod_1.z.array(zod_1.z.string()).optional(),
        keyFeatures: zod_1.z.array(zod_1.z.string()).optional(),
        challenges: zod_1.z.array(zod_1.z.string()).optional(),
        solutions: zod_1.z.array(zod_1.z.string()).optional(),
        feedbacks: zod_1.z.array(feedbackSchema).optional(),
    }),
});
const updateProjectZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        shortDescription: zod_1.z.string().optional(),
        fullDescription: zod_1.z.string().optional(),
        thumbnailImage: zod_1.z.string().optional(),
        images: zod_1.z.array(zod_1.z.string()).optional(),
        videoDemo: zod_1.z.string().optional(),
        liveLink: zod_1.z.string().optional(),
        clientGithub: zod_1.z.string().optional(),
        serverGithub: zod_1.z.string().optional(),
        category: zod_1.z.string().optional(),
        projectDuration: zod_1.z.string().optional(),
        projectTeamSize: zod_1.z.string().optional(),
        projectType: zod_1.z.string().optional(),
        projectStatus: zod_1.z.string().optional(),
        projectStack: zod_1.z.string().optional(),
        projectChallenges: zod_1.z.string().optional(),
        tags: zod_1.z.array(zod_1.z.string()).optional(),
        technologies: zod_1.z.array(zod_1.z.string()).optional(),
        keyFeatures: zod_1.z.array(zod_1.z.string()).optional(),
        challenges: zod_1.z.array(zod_1.z.string()).optional(),
        solutions: zod_1.z.array(zod_1.z.string()).optional(),
        feedbacks: zod_1.z.array(feedbackSchema).optional(),
    }),
});
const giveFeedbackZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        projectId: zod_1.z.string(),
        rating: zod_1.z.number().min(1).max(5),
        email: zod_1.z.string().email(),
        feedback: zod_1.z.string(),
    }),
});
exports.ProjectValidation = {
    createProjectZodSchema,
    updateProjectZodSchema,
    giveFeedbackZodSchema,
};
