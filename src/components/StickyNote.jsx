export default function StickyNote({ children, tone = 'yellow', className = '' }) {
  return (
    <div className={`notebook-sticky notebook-sticky--${tone} ${className}`}>
      <span className="notebook-sticky-tape" aria-hidden="true" />
      {children}
    </div>
  );
}
