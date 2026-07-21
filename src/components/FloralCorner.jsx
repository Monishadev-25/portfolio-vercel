export default function FloralCorner({ className = '' }) {
  return (
    <svg
      className={`notebook-floral ${className}`}
      viewBox="0 0 120 220"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10 210 C 30 160, 20 120, 45 80 C 65 48, 60 20, 75 4"
        stroke="var(--floral-stem)"
        strokeWidth="2"
        fill="none"
      />
      {[
        [45, 80, 14],
        [58, 55, 11],
        [68, 32, 9],
        [75, 10, 8],
        [30, 130, 12],
        [22, 170, 10],
      ].map(([cx, cy, r], i) => (
        <g key={i} transform={`translate(${cx} ${cy})`}>
          <circle r={r} fill="var(--floral-petal)" opacity="0.9" />
          <circle r={r * 0.4} fill="var(--floral-center)" />
        </g>
      ))}
      <path d="M40 95 C 30 90, 20 95, 15 105" stroke="var(--floral-stem)" strokeWidth="1.5" fill="none" />
      <path d="M55 60 C 46 54, 36 56, 30 64" stroke="var(--floral-stem)" strokeWidth="1.5" fill="none" />
    </svg>
  );
}
