import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../../schemas/contactSchema";
import { budgetOptions, projectTypes, timelineOptions } from "./contactData";
import { CheckCircle2, Send, Loader2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactForm() {
  const [submissionData, setSubmissionData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      budget: "Let's Discuss",
      projectType: "ERP Development",
      timeline: "Within 1 Month",
      companySize: "1–10",
      preferredCommunication: "Email",
      source: "Website",
    },
  });

  const selectedBudget = watch("budget");
  const selectedProjectType = watch("projectType");
  const selectedTimeline = watch("timeline");

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setApiError(null);

    // Map form fields to backend expects
    const payload = {
      fullName: data.fullName,
      email: data.email,
      company: data.companyName || "",
      phone: data.phone || "",
      country: data.country || "",
      industry: data.industry || "Other",
      companySize: data.companySize || "1–10",
      preferredCommunication: data.preferredCommunication || "Email",
      source: data.source || "Website",
      projectType: data.projectType,
      budget: data.budget,
      timeline: data.timeline,
      description: data.projectDescription || data.description,
    };

    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmissionData(result.data);
        reset();
      } else {
        setApiError(
          result.message ||
            "Failed to submit inquiry. Please check your details.",
        );
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setApiError(
        "Unable to connect to the backend server. Please verify your connection.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Step 8 — Success Screen View
  if (submissionData) {
    return (
      <div className="rounded-3xl bg-slate-900/90 border border-cyan-500/40 p-8 md:p-12 text-center shadow-2xl space-y-6">
        <div className="w-16 h-16 bg-cyan-500/20 text-cyan-400 rounded-2xl flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div>
          <h3 className="text-3xl font-bold text-white mb-2">✅ Thank You!</h3>
          <p className="text-slate-300 text-base max-w-md mx-auto leading-relaxed">
            Your project inquiry has been received successfully. We’ll get back
            to you shortly.
          </p>
        </div>

        {submissionData.referenceId && (
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 max-w-xs mx-auto">
            <span className="text-xs uppercase text-slate-500 font-semibold block mb-1">
              Reference ID
            </span>

            <span className="font-mono text-cyan-400 font-bold text-lg block">
              {submissionData.referenceId}
            </span>
          </div>
        )}

        <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            onClick={() => setSubmissionData(null)}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold transition"
          >
            Submit Another Request
          </button>

          <a
            href="https://wa.me/919737833333"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold flex items-center justify-center gap-2 transition"
          >
            <FaWhatsapp className="text-lg" />
            Connect on WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {apiError && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
          {apiError}
        </div>
      )}

      {/* Row 1: Name & Company */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
            Full Name <span className="text-cyan-400">*</span>
          </label>
          <input
            {...register("fullName")}
            type="text"
            placeholder="John Doe"
            className="w-full rounded-xl bg-slate-900 border border-slate-800 px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition"
          />
          {errors.fullName && (
            <p className="text-red-400 text-xs mt-1.5">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
            Company Name
          </label>
          <input
            {...register("companyName")}
            type="text"
            placeholder="Acme Corp"
            className="w-full rounded-xl bg-slate-900 border border-slate-800 px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition"
          />
        </div>
      </div>

      {/* Row 2: Email & Phone */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
            Email Address <span className="text-cyan-400">*</span>
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="john@example.com"
            className="w-full rounded-xl bg-slate-900 border border-slate-800 px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition"
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1.5">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
            Phone / WhatsApp
          </label>
          <input
            {...register("phone")}
            type="text"
            placeholder="+1 (555) 000-0000"
            className="w-full rounded-xl bg-slate-900 border border-slate-800 px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition"
          />
        </div>
      </div>

      {/* Row 3: Country & Industry */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
            Country
          </label>
          <input
            {...register("country")}
            type="text"
            placeholder="United States, UAE, India, etc."
            className="w-full rounded-xl bg-slate-900 border border-slate-800 px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
            Industry
          </label>

          <select
            {...register("industry")}
            className="w-full rounded-xl bg-slate-900 border border-slate-800 px-4 py-3 text-slate-100 focus:border-cyan-400 focus:outline-none transition cursor-pointer"
          >
            <option value="Other">Select industry</option>
            <option value="Textile">Textile</option>
            <option value="Education">Education</option>
            <option value="Retail">Retail</option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Services">Services</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {/* Row 4: Company Size & Preferred Communication */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
            Company Size
          </label>
          <select
            {...register("companySize")}
            className="w-full rounded-xl bg-slate-900 border border-slate-800 px-4 py-3 text-slate-100 focus:border-cyan-400 focus:outline-none transition cursor-pointer"
          >
            <option value="1–10">1–10 employees</option>
            <option value="11–50">11–50 employees</option>
            <option value="51–200">51–200 employees</option>
            <option value="200+">200+ employees</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
            Preferred Communication
          </label>
          <select
            {...register("preferredCommunication")}
            className="w-full rounded-xl bg-slate-900 border border-slate-800 px-4 py-3 text-slate-100 focus:border-cyan-400 focus:outline-none transition cursor-pointer"
          >
            <option value="Email">Email</option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="Google Meet">Google Meet</option>
          </select>
        </div>
      </div>

      {/* Project Type Selection */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
          Project Type <span className="text-cyan-400">*</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {projectTypes.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setValue("projectType", type)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition ${
                selectedProjectType === type
                  ? "bg-cyan-500/20 text-cyan-400 border-cyan-400"
                  : "bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Smart Budget Options */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
          Estimated Budget
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {budgetOptions.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setValue("budget", opt)}
              className={`py-2.5 px-3 rounded-xl text-xs font-semibold border text-center transition ${
                selectedBudget === opt
                  ? "bg-cyan-500/20 text-cyan-400 border-cyan-400"
                  : "bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
          Expected Timeline
        </label>
        <div className="flex flex-wrap gap-2">
          {timelineOptions.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setValue("timeline", t)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition ${
                selectedTimeline === t
                  ? "bg-cyan-500/20 text-cyan-400 border-cyan-400"
                  : "bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Project Description */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
          Project Description <span className="text-cyan-400">*</span>
        </label>
        <textarea
          {...register("projectDescription")}
          rows={5}
          placeholder="Tell me about your business, the problem you're trying to solve, and the features you'd like to build."
          className="w-full rounded-xl bg-slate-900 border border-slate-800 p-4 text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition resize-none"
        />
        {errors.projectDescription && (
          <p className="text-red-400 text-xs mt-1.5">
            {errors.projectDescription.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 disabled:opacity-50"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending Proposal Request...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Submit Project Inquiry
          </>
        )}
      </button>
    </form>
  );
}
