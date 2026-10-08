import { baseLayout } from "./layout.js";
import { escapeHtml } from "../utils/email.js";

export function adminNotificationTemplate(lead) {
  const content = `
    <h2 style="color: #ffffff; margin-top: 0;">
      🚀 New Project Inquiry Received
    </h2>

    <table class="table-info">
      <tr>
        <td class="label">Name</td>
        <td>${escapeHtml(lead.fullName)}</td>
      </tr>

      <tr>
        <td class="label">Email</td>
        <td>
          <a href="mailto:${escapeHtml(lead.email)}" style="color:#38bdf8">
            ${escapeHtml(lead.email)}
          </a>
        </td>
      </tr>

      <tr>
        <td class="label">Company</td>
        <td>${escapeHtml(lead.company || "N/A")}</td>
      </tr>

      <tr>
        <td class="label">Phone</td>
        <td>${escapeHtml(lead.phone || "N/A")}</td>
      </tr>

      <tr>
        <td class="label">Country</td>
        <td>${escapeHtml(lead.country || "N/A")}</td>
      </tr>

      <tr>
        <td class="label">Industry</td>
        <td>${escapeHtml(lead.industry || "Other")}</td>
      </tr>

      <tr>
        <td class="label">Company Size</td>
        <td>${escapeHtml(lead.companySize || "N/A")}</td>
      </tr>

      <tr>
        <td class="label">Preferred Communication</td>
        <td>${escapeHtml(lead.preferredCommunication || "Email")}</td>
      </tr>

      <tr>
        <td class="label">Source</td>
        <td>${escapeHtml(lead.source || "Website")}</td>
      </tr>

      <tr>
        <td class="label">Project Type</td>
        <td>
          <strong>${escapeHtml(lead.projectType)}</strong>
        </td>
      </tr>

      <tr>
        <td class="label">Budget</td>
        <td>${escapeHtml(lead.budget)}</td>
      </tr>

      <tr>
        <td class="label">Timeline</td>
        <td>${escapeHtml(lead.timeline)}</td>
      </tr>

      <tr>
        <td class="label">Detected Location</td>
        <td>
          ${escapeHtml(lead.metadata?.city || "Unknown")},
          ${escapeHtml(lead.metadata?.country || "Unknown")}
        </td>
      </tr>
    </table>

    <h3 style="color: #38bdf8; margin-bottom: 5px;">
      Project Requirements:
    </h3>

    <div class="desc-box">
      ${
        lead.description
          ? escapeHtml(lead.description).replace(/\n/g, "<br/>")
          : "No description provided."
      }
    </div>
  `;

  return baseLayout(content);
}