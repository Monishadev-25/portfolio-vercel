const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Returns an array of field-level error messages; empty array = valid.
export function validateContact({ name, email, message } = {}) {
  const errors = [];

  if (!name?.trim()) errors.push('Name is required.');
  if (!email?.trim() || !EMAIL_RE.test(email.trim())) errors.push('A valid email is required.');
  if (!message?.trim()) errors.push('Message is required.');
  if (message && message.length > 5000) errors.push('Message is too long.');

  return errors;
}
