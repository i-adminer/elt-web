"use server";

import nodemailer from "nodemailer";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ActionResult {
  success: boolean;
  error?: string;
}

// Zoho SMTP transporter
// MAIL_AUTH is the Zoho mailbox used solely for authentication
function createTransporter() {
  const user = process.env.MAIL_AUTH;
  const pass = process.env.ZOHO_APP_PASSWORD;

  if (!user || !pass) {
    throw new Error(
      "MAIL_AUTH or ZOHO_APP_PASSWORD environment variable is not set.",
    );
  }

  return nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });
}

// Server-side validation
function validate(data: ContactFormData): string | null {
  if (!data.name.trim()) return "Name is required.";
  if (!data.email.trim()) return "Email is required.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    return "Please enter a valid email address.";
  if (!data.subject.trim()) return "Subject is required.";
  if (!data.message.trim()) return "Message is required.";
  if (data.message.trim().length < 10) return "Message is too short.";
  return null;
}

export async function sendContactEmail(
  data: ContactFormData,
): Promise<ActionResult> {
  const validationError = validate(data);
  if (validationError) return { success: false, error: validationError };

  // MAIL_AUTH  — Zoho mailbox for SMTP auth (also the From address — Zoho requires these to match)
  // MAIL_TO    — where enquiries are delivered (defaults to MAIL_AUTH if not set)
  const authEmail = process.env.MAIL_AUTH!;
  const to = process.env.MAIL_TO || authEmail;

  // Zoho requires From === authenticated mailbox — cannot relay on behalf of arbitrary addresses.
  // We set Reply-To to the visitor so hitting Reply in your inbox goes straight back to them.
  const fromHeader = `"EasyLink Technologies" <${authEmail}>`;
  const replyToHeader = `"${data.name}" <${data.email}>`;

  const html = `
     <!DOCTYPE html>
    <html lang="en">
    <head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /></head>
    <body style="margin:0;padding:0;background:#f4f5f6;font-family:Manrope,Arial,sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f5f6;padding:40px 0;">
        <tr><td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;border:1px dotted #ee5228;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">
            <!-- Header -->
            <tr>
              <td style="padding:32px 40px;border:1px dotted #ee5228;border-radius:16px;">
                <img
                  src="https://res.cloudinary.com/dfyqn0c1t/image/upload/v1790940274/logo_kgcqpl.png"
                  alt="EasyLink Technologies"
                  width="160"
                  style="display:block;height:auto;max-height:48px;width:auto;max-width:160px;object-fit:contain;"
                />
                <p style="margin:10px 0 0;color:#2d581d;font-size:13px;font-weight:700;">NEW WEBSITE ENQUIRY</p>
              </td>
            </tr>
            <!-- Body -->
            <tr>
              <td style="padding:40px;">
                <p style="margin:0 0 24px;color:#111827;font-size:18px;font-weight:700;">You have a new message</p>
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;">
                      <p style="margin:0;color:#6b7280;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;font-weight:600;">From</p>
                      <p style="margin:4px 0 0;color:#111827;font-size:15px;font-weight:600;">${escapeHtml(data.name)}</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;">
                      <p style="margin:0;color:#6b7280;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;font-weight:600;">Email</p>
                      <p style="margin:4px 0 0;color:#2d581d;font-size:15px;">
                        <a href="mailto:${escapeHtml(data.email)}" style="color:#2d581d;text-decoration:none;">${escapeHtml(data.email)}</a>
                      </p>
                    </td>
                  </tr>
                  ${
                    data.phone
                      ? `
                  <tr>
                    <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;">
                      <p style="margin:0;color:#6b7280;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;font-weight:600;">Phone</p>
                      <p style="margin:4px 0 0;color:#111827;font-size:15px;">${escapeHtml(data.phone)}</p>
                    </td>
                  </tr>`
                      : ""
                  }
                  <tr>
                    <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;">
                      <p style="margin:0;color:#6b7280;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;font-weight:600;">Subject</p>
                      <p style="margin:4px 0 0;color:#111827;font-size:15px;font-weight:600;">${escapeHtml(data.subject)}</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:16px 0 0;">
                      <p style="margin:0 0 8px;color:#6b7280;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;font-weight:600;">Message</p>
                      <div style="background:#f9fafb;border-radius:10px;padding:16px;color:#374151;font-size:15px;line-height:1.7;white-space:pre-wrap;">${escapeHtml(data.message)}</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- Footer -->
            <tr>
              <td style="padding:20px 40px;background:#f9fafb;border-top:1px solid #f0f0f0;">
                <p style="margin:0;color:#9ca3af;font-size:12px;">Sent from the EasyLink Technologies website contact form &bull; <a href="https://www.easylink.co.ke" style="color:#2d581d;text-decoration:none;">www.easylink.co.ke</a></p>
              </td>
            </tr>
          </table>
        </td></tr>
      </table>
    </body>
    </html>
  `;

  try {
    const transporter = createTransporter();

    await transporter.sendMail({
      from: fromHeader,
      to,
      replyTo: replyToHeader,
      subject: `[Website Enquiry] ${data.subject}`,
      html,
      text: `New enquiry from ${data.name} <${data.email}>\n\n${data.phone ? `Phone: ${data.phone}\n` : ""}Subject: ${data.subject}\n\n${data.message}`,
    });

    return { success: true };
  } catch (err) {
    console.error("[contact action] sendMail error:", err);
    return {
      success: false,
      error:
        "Failed to send your message. Please try again or email us directly at info@easylink.co.ke.",
    };
  }
}

// Minimal HTML escape — prevents injection in the email body
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
