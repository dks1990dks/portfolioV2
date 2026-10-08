import { baseLayout } from "./layout.js";

export function meetingReminderTemplate({ clientName, meetingTime, meetingLink }) {
  const content = `
    <h2 style="color: #ffffff; margin-top: 0;">Discovery Call Scheduled</h2>
    <p style="color: #cbd5e1; font-size: 15px; line-height: 1.6;">
      Hi ${clientName}, this is a quick reminder for our upcoming technical evaluation session.
    </p>
    <div style="background: #0f172a; padding: 15px; border-radius: 8px; margin: 20px 0; border: 1px solid #334155;">
      <p style="margin: 0; font-size: 13px; color: #94a3b8;">Scheduled Time:</p>
      <p style="margin: 4px 0 0; font-size: 16px; color: #38bdf8; font-weight: bold;">${meetingTime}</p>
    </div>
    <div style="text-align: center; margin: 30px 0;">
      <a href="${meetingLink}" style="background: #0284c7; color: #ffffff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">
        Join Video Call
      </a>
    </div>
  `;

  return baseLayout(content);
}