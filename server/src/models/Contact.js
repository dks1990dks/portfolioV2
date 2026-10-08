import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    company: { type: String, default: "", trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    phone: { type: String, default: "", trim: true },
    country: {
      type: String,
      default: "",
      trim: true,
    },
    projectType: { type: String, required: true },
    budget: { type: String, required: true },
    timeline: { type: String, required: true },
    description: { type: String, required: true },
    status: {
      type: String,
      enum: [
        "New",
        "Contacted",
        "Meeting Scheduled",
        "Proposal Sent",
        "Won",
        "Lost",
      ],
      default: "New",
      index: true, // Speeds up status-based CRM filtering
    },

    // 🟢 Custom B2B Lead Qualification Fields
    industry: {
      type: String,
      enum: [
        "Textile",
        "Education",
        "Retail",
        "Manufacturing",
        "Healthcare",
        "Services",
        "Other",
      ],
      default: "Other",
      index: true,
    },
    companySize: {
      type: String,
      enum: ["1–10", "11–50", "51–200", "200+"],
      default: "1–10",
    },
    preferredCommunication: {
      type: String,
      enum: ["Email", "WhatsApp", "Google Meet"],
      default: "Email",
    },
    source: {
      type: String,
      enum: ["Website", "LinkedIn", "GitHub", "Referral", "Direct"],
      default: "Website",
      index: true,
    },
    priority: {
      type: String,
      enum: ["High", "Medium", "Low"],
      default: "Medium",
      index: true,
    },

    notes: [
      {
        text: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
      },
    ],
    followUpDate: {
      type: Date,
      default: null,
    },
    metadata: {
      ipAddress: { type: String, default: "" },
      userAgent: { type: String, default: "" },
      referrer: { type: String, default: "" },
      country: { type: String, default: "Unknown" },
      city: { type: String, default: "Unknown" },
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  },
);

// 🔍 Text Search Index for fast CRM search across name, email, company, industry, and project type
contactSchema.index({
  fullName: "text",
  email: "text",
  company: "text",
  industry: "text",
  projectType: "text",
});

// ⚡ Compound Index for CRM filtering & analytics queries
contactSchema.index({ status: 1, priority: 1, createdAt: -1 });

// Virtual helper to format reference ID consistently (e.g., DC-LEAD-A1B2C3)
contactSchema.virtual("referenceId").get(function () {
  return `DC-LEAD-${this._id.toString().slice(-6).toUpperCase()}`;
});

// Ensure virtuals are included when converting to JSON
contactSchema.set("toJSON", { virtuals: true });
contactSchema.set("toObject", { virtuals: true });

export default mongoose.models.Contact ||
  mongoose.model("Contact", contactSchema);
