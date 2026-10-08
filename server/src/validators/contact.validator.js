import { z } from "zod";

export const contactValidator = z.object({
  fullName: z
    .string()
    .min(2, "Full Name must be at least 2 characters"),

  email: z
    .string()
    .email("Please enter a valid email address"),

  company: z
    .string()
    .optional()
    .default(""),

  phone: z
    .string()
    .optional()
    .default(""),

  country: z
    .string()
    .optional()
    .default(""),

  industry: z
    .enum([
      "Textile",
      "Education",
      "Retail",
      "Manufacturing",
      "Healthcare",
      "Services",
      "Other",
    ])
    .optional()
    .default("Other"),

  companySize: z
    .enum(["1–10", "11–50", "51–200", "200+"])
    .optional()
    .default("1–10"),

  preferredCommunication: z
    .enum(["Email", "WhatsApp", "Google Meet"])
    .optional()
    .default("Email"),

  source: z
    .enum(["Website", "LinkedIn", "GitHub", "Referral", "Direct"])
    .optional()
    .default("Website"),

  projectType: z
    .string()
    .min(1, "Project type is required"),

  budget: z
    .string()
    .min(1, "Budget range is required"),

  timeline: z
    .string()
    .min(1, "Timeline is required"),

  description: z
    .string()
    .min(
      10,
      "Please provide a brief description (at least 10 characters)"
    ),
});