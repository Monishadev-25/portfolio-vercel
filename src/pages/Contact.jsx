import { useState } from 'react';
import { CONTACT } from '../data/content';
import { Icon } from '../components/Icon';
import FormField from '../components/FormField';

const INITIAL_FORM = { name: '', email: '', message: '' };

const API_URL = import.meta.env.VITE_API_URL || '';

const FIELDS = [
  { field: 'name',    label: 'Your Name',    as: 'input',    type: 'text',  autoComplete: 'name'  },
  { field: 'email',   label: 'Your Email',   as: 'input',    type: 'email', autoComplete: 'email' },
  { field: 'message', label: 'Your Message', as: 'textarea', rows: 5 },
];

export default function Contact() {
  const [form, setForm]       = useState(INITIAL_FORM);
  const [status, setStatus]   = useState('idle');
  const [focused, setFocused] = useState(null);

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) { setStatus('error'); return; }
    setStatus('sending');
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
      setForm(INITIAL_FORM);
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <div className="page-contact">

        {/* ── LEFT: info (unchanged structure, improved icons + note card) ── */}
        <div className="page-contact-info">
          <h1 className="notebook-heading notebook-heading--sm">
            Let's Connect <span aria-hidden="true">📩</span>
          </h1>
          <p className="notebook-lede">
            Have a project in mind or just want to say hi? I'd love to hear from you!
          </p>

          {/* improved icon list */}
          <ul className="notebook-contact-list" style={{ padding: 0, margin: '0 0 0 -10px' }}>
            {[
              { icon: 'mail',     text: CONTACT.email },
              { icon: 'pin',      text: CONTACT.location },
              { icon: 'github',   text: CONTACT.github },
              { icon: 'linkedin', text: CONTACT.linkedin },
            ].map(({ icon, text }) => (
              <li key={icon} className="nb-icon-item">
                <span className="nb-icon-badge">
                  <Icon name={icon} />
                </span>
                <span style={{ wordBreak: 'break-all' }}>{text}</span>
              </li>
            ))}
          </ul>

          {/* ── lavender tape note (bottom-left) ── */}
          <div className="nb-note-card">
            <div className="nb-note-line">open to work ✨</div>
            <span className="nb-note-tag"># available now</span>
          </div>
        </div>

        {/* ── RIGHT: improved form card ── */}
        <div className="nb-form-card-wrap">
          <div className="nb-form-card">

            <p className="nb-form-eyebrow">Drop me a message</p>

            <form onSubmit={handleSubmit} noValidate>

              {FIELDS.map(({ field, label, as, ...fieldProps }) => (
                <FormField
                  key={field}
                  as={as}
                  field={field}
                  label={label}
                  value={form[field]}
                  focused={focused}
                  onChange={handleChange(field)}
                  onFocus={() => setFocused(field)}
                  onBlur={() => setFocused(null)}
                  {...fieldProps}
                />
              ))}

              <button
                type="submit"
                className="notebook-btn-primary"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending…' : 'Send Message'}
                <Icon name="send" />
              </button>

              {status === 'sent'  && <p className="nb-status ok">✓ Message sent — thank you!</p>}
              {status === 'error' && <p className="nb-status err">✗ Please fill in every field.</p>}
            </form>
          </div>
        </div>

      </div>
    </>
  );
}
