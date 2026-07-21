// Single field renderer shared by every input/textarea on the Contact form.
// Centralising this removes the near-identical name/email/message blocks
// that used to be copy-pasted three times with only the tag and props
// changing (see Contact.jsx history) — same look, one place to edit.

export default function FormField({
  as = 'input',
  label,
  field,
  value,
  focused,
  onChange,
  onFocus,
  onBlur,
  ...rest
}) {
  const Tag = as; // 'input' or 'textarea'
  const isFocused = focused === field;

  return (
    <div className="nb-field-wrap">
      <span>{label}</span>
      <Tag
        className="nb-field-input"
        style={{ border: `1.5px solid ${isFocused ? '#c23b6e' : '#e0d8cf'}` }}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        {...rest}
      />
    </div>
  );
}
