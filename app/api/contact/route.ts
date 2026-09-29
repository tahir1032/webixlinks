import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactDetails, projectTypes } from "@/data/site";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function sendViaHostingerSmtp(subject: string, html: string, replyTo: string) {
  const host = process.env.HOSTINGER_SMTP_HOST;
  const port = process.env.HOSTINGER_SMTP_PORT;
  const user = process.env.HOSTINGER_SMTP_USER;
  const pass = process.env.HOSTINGER_SMTP_PASSWORD;

  if (!host || !port || !user || !pass) {
    throw new Error("Hostinger SMTP is not configured");
  }

  const transporter = nodemailer.createTransport({
    host,
    port: Number(port),
    secure: Number(port) === 465,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: `Webixlinks Website <${user}>`,
    to: contactDetails.email,
    replyTo,
    subject,
    html,
  });
}

async function sendViaResend(subject: string, html: string, replyTo: string) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Webixlinks Website <hello@webixlinks.com>",
      to: [process.env.CONTACT_NOTIFICATION_EMAIL || contactDetails.email],
      reply_to: replyTo,
      subject,
      html,
    }),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Resend API error ${res.status}: ${errorText}`);
  }
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request body" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const company = typeof body.company === "string" ? body.company.trim() : "";
  const projectType = typeof body.projectType === "string" ? body.projectType : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const botcheck = body.botcheck;

  // Honeypot field — real users never fill this in, bots usually do.
  if (botcheck) {
    return NextResponse.json({ success: true });
  }

  if (!name || !email) {
    return NextResponse.json({ success: false, error: "Name and email are required" }, { status: 400 });
  }

  const projectTypeLabel =
    projectType === "not-sure"
      ? "Not sure yet"
      : projectTypes.find((t) => t.value === projectType)?.label ?? "Not specified";

  const subject = `New project inquiry from ${name}`;
  const html = `
    <h2>New project inquiry — Webixlinks contact form</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Company or website:</strong> ${escapeHtml(company || "—")}</p>
    <p><strong>What they need:</strong> ${escapeHtml(projectTypeLabel)}</p>
    <p><strong>Message:</strong><br/>${escapeHtml(message || "—").replace(/\n/g, "<br/>")}</p>
  `;

  try {
    await sendViaHostingerSmtp(subject, html, email);
    return NextResponse.json({ success: true });
  } catch (smtpError) {
    console.error("Hostinger SMTP failed, falling back to Resend:", smtpError);
  }

  try {
    await sendViaResend(subject, html, email);
    return NextResponse.json({ success: true });
  } catch (resendError) {
    console.error("Resend fallback also failed:", resendError);
    return NextResponse.json({ success: false, error: "Failed to send message" }, { status: 502 });
  }
}
