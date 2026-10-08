import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
      default: "",
    },
    company: {
      type: String,
      trim: true,
      default: "N/A",
    },
    country: {
      type: String,
      trim: true,
      default: "USA",
    },
    industry: {
      type: String,
      trim: true,
      default: "Others",
      enum: [
        "Textile",
        "Education",
        "Healthcare",
        "Retail",
        "Manufacturing",
        "Finance",
        "SaaS",
        "Others",
      ],
    },
    source: {
      type: String,
      enum: ["Website", "LinkedIn", "GitHub", "Referral", "Google Search", "Other"],
      default: "Website",
    },
    status: {
      type: String,
      enum: ["New", "Contacted", "Meeting", "Proposal", "Won", "Lost"],
      default: "New",
    },
    budget: {
      type: String,
      default: "$0",
    },
    projectValue: {
      type: Number,
      default: 0,
    },
    notes: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt
  }
);

// Prevent re-compilation model error in dev environments
const Lead = mongoose.models.Lead || mongoose.model("Lead", leadSchema);

export default Lead;