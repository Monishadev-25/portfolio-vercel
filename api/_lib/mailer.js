import nodemailer from 'nodemailer';

// Vercel spins up a fresh instance per invocation (and reuses warm ones), so
// creating the transporter at module scope lets it be reused across warm
// invocations without recreating it on every request.
let transporter;

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for port 465, false for 587/25
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }
  return transporter;
}

// Basic HTML escaping so submitted text can't break out of the email markup.
const escapeHtml = (str = '') =>
  str.replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));

export async function sendContactEmail({ name, email, message }) {
  const adminEmail = process.env.ADMIN_EMAIL;

  return getTransporter().sendMail({
    from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
    to: adminEmail,
    replyTo: email, // hitting "Reply" in the inbox goes straight to the visitor
    subject: `New portfolio message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: `
      <div style="font-family: sans-serif; font-size: 14px; color: #2d2117;">
        <h2 style="margin: 0 0 12px;">New contact form submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      </div>
    `,
  });
}
