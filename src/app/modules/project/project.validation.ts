import { z } from "zod";

const feedbackSchema = z.object({
  rating: z.number(),
  email: z.string().email(),
  feedback: z.string(),
});

const createProjectZodSchema = z.object({
  body: z.object({
    userId: z.string().optional(),
    title: z.string().optional(),
    shortDescription: z.string().optional(),
    fullDescription: z.string().optional(),
    thumbnailImage: z.string().optional(),
    images: z.array(z.string()).optional(),
    videoDemo: z.string().optional(),
    liveLink: z.string().optional(),
    clientGithub: z.string().optional(),
    serverGithub: z.string().optional(),
    category: z.string().optional(),
    projectDuration: z.string().optional(),
    projectTeamSize: z.string().optional(),
    projectType: z.string().optional(),
    projectStatus: z.string().optional(),
    projectStack: z.string().optional(),
    projectChallenges: z.string().optional(),
    tags: z.array(z.string()).optional(),
    technologies: z.array(z.string()).optional(),
    keyFeatures: z.array(z.string()).optional(),
    challenges: z.array(z.string()).optional(),
    solutions: z.array(z.string()).optional(),
    feedbacks: z.array(feedbackSchema).optional(),
    featured: z.boolean().optional(),
    priority: z.number().min(0).max(6).optional(),
  }),
});

const updateProjectZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    shortDescription: z.string().optional(),
    fullDescription: z.string().optional(),
    thumbnailImage: z.string().optional(),
    images: z.array(z.string()).optional(),
    videoDemo: z.string().optional(),
    liveLink: z.string().optional(),
    clientGithub: z.string().optional(),
    serverGithub: z.string().optional(),
    category: z.string().optional(),
    projectDuration: z.string().optional(),
    projectTeamSize: z.string().optional(),
    projectType: z.string().optional(),
    projectStatus: z.string().optional(),
    projectStack: z.string().optional(),
    projectChallenges: z.string().optional(),
    tags: z.array(z.string()).optional(),
    technologies: z.array(z.string()).optional(),
    keyFeatures: z.array(z.string()).optional(),
    challenges: z.array(z.string()).optional(),
    solutions: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
    priority: z.number().min(0).max(6).optional(),
  }),
});

const giveFeedbackZodSchema = z.object({
  body: z.object({
    projectId: z.string(),
    rating: z.number().min(1).max(5),
    email: z.string().email(),
    feedback: z.string(),
  }),
});

export const ProjectValidation = {
  createProjectZodSchema,
  updateProjectZodSchema,
  giveFeedbackZodSchema,
};
