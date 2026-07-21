import { sendContactEmail } from './_lib/mailer.js';
import { validateContact } from './_lib/validateContact.js';
import { isRateLimited } from './_lib/rateLimit.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket?.remoteAddress || 'unknown';
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many messages sent — please try again later.' });
  }

  const { name, email, message } = req.body ?? {};

  const errors = validateContact({ name, email, message });
  if (errors.length) {
    return res.status(400).json({ error: errors.join(' ') });
  }

  try {
    await sendContactEmail({ name: name.trim(), email: email.trim(), message: message.trim() });
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Failed to send contact email:', err);
    return res.status(502).json({ error: 'Could not send the message right now. Please try again shortly.' });
  }
}
