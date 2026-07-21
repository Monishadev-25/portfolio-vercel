import { TAB_ITEMS } from '../data/content';

export default function TabRail({ activePage, onNavigate }) {
  return (
    <div className="notebook-tabrail" role="tablist" aria-label="Chapters">
      {TAB_ITEMS.map((tab) => (
        <button
          key={tab.id}
          type="button"
          role="tab"
          aria-selected={tab.id === activePage}
          className={`notebook-tab${tab.id === activePage ? ' is-active' : ''}`}
          style={{ '--tab-color': tab.color }}
          onClick={() => onNavigate(tab.id)}
        >
          <span className="notebook-tab-number">{tab.number}</span>
          <span className="notebook-tab-label">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
