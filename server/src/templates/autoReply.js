import { baseLayout } from "./layout.js";
import { escapeHtml } from "../utils/email.js";

export function autoReplyTemplate(lead) {
  const referenceId = lead._id
    ? `DC-LEAD-${lead._id.toString().slice(-6).toUpperCase()}`
    : "DC-LEAD-PENDING";

  const content = `
    <h2 style="color: #ffffff; margin-top: 0;">
      Thank You, ${escapeHtml(lead.fullName)}!
    </h2>

    <p style="color: #cbd5e1; font-size: 15px; line-height: 1.6;">
      Your project inquiry has been successfully received.
      I will review your requirements and get back to you shortly.
    </p>

    <div style="background: #0f172a; padding: 15px; border-radius: 8px; margin: 20px 0; border: 1px solid #334155;">
      <p style="margin: 0; font-size: 13px; color: #94a3b8;">
        Submission Reference ID:
      </p>

      <p style="margin: 4px 0 0; font-family: monospace; font-size: 16px; color: #38bdf8; font-weight: bold;">
        ${escapeHtml(referenceId)}
      </p>
    </div>

    <h3 style="color: #38bdf8; margin-bottom: 10px;">
      What Happens Next?
    </h3>

    <ol class="steps-list">
      <li>
        <strong>Requirement Review:</strong>
        Review of your project brief and requirements.
      </li>

      <li>
        <strong>Discovery Discussion:</strong>
        Clarifying goals, workflows, and technical requirements.
      </li>

      <li>
        <strong>Proposal & Roadmap:</strong>
        Discussion of scope, timeline, and estimated cost.
      </li>
    </ol>
  `;

  return baseLayout(content);
}