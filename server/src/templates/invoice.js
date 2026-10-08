import { baseLayout } from "./layout.js";

export function invoiceTemplate({ clientName, invoiceNumber, amount, dueDate, paymentLink }) {
  const content = `
    <h2 style="color: #ffffff; margin-top: 0;">Invoice #${invoiceNumber} Issued</h2>
    <p style="color: #cbd5e1; font-size: 15px; line-height: 1.6;">
      Hi ${clientName}, please find the milestone invoice details below:
    </p>
    <table class="table-info">
      <tr><td class="label">Invoice ID</td><td>${invoiceNumber}</td></tr>
      <tr><td class="label">Amount Due</td><td><strong>${amount}</strong></td></tr>
      <tr><td class="label">Due Date</td><td>${dueDate}</td></tr>
    </table>
    <div style="text-align: center; margin: 30px 0;">
      <a href="${paymentLink}" style="background: #10b981; color: #ffffff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">
        Pay Invoice Now
      </a>
    </div>
  `;

  return baseLayout(content);
}