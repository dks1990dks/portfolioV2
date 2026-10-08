import { baseLayout } from "./layout.js";

export function proposalTemplate({ clientName, projectTitle, proposalLink }) {
  const content = `
    <h2 style="color: #ffffff; margin-top: 0;">Project Proposal: ${projectTitle}</h2>
    <p style="color: #cbd5e1; font-size: 15px; line-height: 1.6;">
      Hi ${clientName}, thank you for taking the time to discuss your project requirements.
    </p>
    <p style="color: #cbd5e1; font-size: 15px; line-height: 1.6;">
      I have prepared a detailed architecture proposal, scope breakdown, and execution timeline for review.
    </p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="${proposalLink}" style="background: #0284c7; color: #ffffff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">
        View Project Proposal
      </a>
    </div>
  `;

  return baseLayout(content);
}