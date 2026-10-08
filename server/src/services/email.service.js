import { Resend } from "resend";
import { ENV } from "../config/env.js";
import { adminNotificationTemplate } from "../templates/adminNotification.js";
import { autoReplyTemplate } from "../templates/autoReply.js";

const resend = ENV.RESEND_API_KEY ? new Resend(ENV.RESEND_API_KEY) : null;

export async function sendAdminNotification(lead) {
  if (!resend) {
    console.warn("⚠️ Resend API Key missing. Skipping admin notification.");
    return;
  }

  return resend.emails.send({
    from: ENV.MAIL_FROM,
    to: [ENV.MAIL_TO],
    subject: `🚀 New Inquiry: ${lead.fullName} (${lead.projectType})`,
    html: adminNotificationTemplate(lead),
  });
}

export async function sendAutoReply(lead) {
  if (!resend) {
    console.warn("⚠️ Resend API Key missing. Skipping client auto-reply.");
    return;
  }

  return resend.emails.send({
    from: ENV.MAIL_FROM,
    to: [lead.email],
    subject: `Inquiry Received — Deepak Codes`,
    html: autoReplyTemplate(lead),
  });
}