import { z } from "zod";

const createProfileZodSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().email().optional(),
    designation: z.string().optional(),
    department: z.string().optional(),
    location: z
      .object({
        city: z.string().optional(),
        country: z.string().optional(),
      })
      .optional(),
    heroImage: z.string().optional(),
    about: z.string().optional(),
    aboutImage: z.string().optional(),
    skills: z.array(z.string()).optional(),
    projects: z.array(z.string()).optional(),
    experiences: z.array(z.string()).optional(),
    education: z.array(z.string()).optional(),
    certifications: z.array(z.string()).optional(),
    awards: z.array(z.string()).optional(),
    socialMedia: z
      .object({
        linkedin: z.string().optional(),
        twitter: z.string().optional(),
        facebook: z.string().optional(),
        instagram: z.string().optional(),
        youtube: z.string().optional(),
        github: z.string().optional(),
        leetcode: z.string().optional(),
      })
      .optional(),
    introduction: z.string().optional(),
    resume: z.string().optional(),
    projectCategory: z.string().optional(),
  }),
});

const updateProfileZodSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().email().optional(),
    designation: z.string().optional(),
    department: z.string().optional(),
    location: z
      .object({
        city: z.string().optional(),
        country: z.string().optional(),
      })
      .optional(),
    heroImage: z.string().optional(),
    about: z.string().optional(),
    aboutImage: z.string().optional(),
    skills: z.array(z.string()).optional(),
    projects: z.array(z.string()).optional(),
    experiences: z.array(z.string()).optional(),
    education: z.array(z.string()).optional(),
    certifications: z.array(z.string()).optional(),
    awards: z.array(z.string()).optional(),
    socialMedia: z
      .object({
        linkedin: z.string().optional(),
        twitter: z.string().optional(),
        facebook: z.string().optional(),
        instagram: z.string().optional(),
        youtube: z.string().optional(),
        github: z.string().optional(),
        leetcode: z.string().optional(),
      })
      .optional(),
    introduction: z.string().optional(),
    resume: z.string().optional(),
    projectCategory: z.string().optional(),
  }),
});

export const ProfileValidation = {
  createProfileZodSchema,
  updateProfileZodSchema,
};
