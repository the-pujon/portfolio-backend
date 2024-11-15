import { z } from "zod";

const createCertificateZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required",
    }),
    issuedBy: z.string({
      required_error: "Issuer is required",
    }),
    date: z.string({
      required_error: "Date is required",
    }),
    image: z.string({
      required_error: "Image URL is required",
    }),
    category: z.string({
      required_error: "Category is required",
    }),
    description: z.string({
      required_error: "Description is required",
    }),
    skills: z.array(z.string()).nonempty({
      message: "At least one skill is required",
    }),
    userId: z.string({
      required_error: "User ID is required",
    }),
  }),
});

const updateCertificateZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    issuedBy: z.string().optional(),
    date: z.string().optional(),
    image: z.string().optional(),
    credentialLink: z.string().optional(),
    category: z.string().optional(),
    description: z.string().optional(),
    skills: z.array(z.string()).optional(),
    userId: z.string({
      required_error: "User ID is required",
    }),
  }),
});

export const CertificateValidation = {
  createCertificateZodSchema,
  updateCertificateZodSchema,
};
