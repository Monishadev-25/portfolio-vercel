import { Icon } from './Icon';

export default function MobileTopbar({ onMenuOpen }) {
  return (
    <div className="notebook-topbar">
      <span className="notebook-topbar-logo">M.</span>
      <button
        type="button"
        className="notebook-topbar-menu"
        onClick={onMenuOpen}
        aria-label="Open navigation menu"
      >
        <Icon name="menu" />
      </button>
    </div>
  );
}
