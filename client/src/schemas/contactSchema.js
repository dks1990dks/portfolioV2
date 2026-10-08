import { z } from "zod";

export const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full Name must be at least 2 characters"),

  companyName: z
    .string()
    .optional(),

  email: z
    .string()
    .email("Please enter a valid email address"),

  phone: z
    .string()
    .optional(),

  country: z
    .string()
    .optional(),

  industry: z
    .string()
    .optional(),

  companySize: z
    .string()
    .optional(),

  preferredCommunication: z
    .string()
    .optional(),

  source: z
    .string()
    .optional(),

  projectType: z
    .string()
    .min(1, "Please select a project type"),

  budget: z
  .string()
  .min(1, "Please select a budget range"),

timeline: z
  .string()
  .min(1, "Please select a timeline"),

  projectDescription: z
    .string()
    .min(10, "Please provide a brief description (at least 10 characters)"),
});