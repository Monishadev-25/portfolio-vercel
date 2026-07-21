import { useEffect, useRef, useState } from 'react';
import Sidebar from './Sidebar';
import TabRail from './TabRail';
import MobileTopbar from './MobileTopbar';
import { TAB_ITEMS } from '../data/content';

const PAGE_ORDER = TAB_ITEMS.map((t) => t.id);

/**
 * NotebookPage lays out the recurring "open book" frame:
 * [left page: nav] [spine] [right page: content] -> tab rail,
 * plus a mobile top bar + slide-in drawer for the nav on small screens.
 *
 * The frame itself never scrolls — only .notebook-page-inner (the content
 * pane a page renders into) scrolls, so the template stays fixed to the
 * viewport on every page and every breakpoint.
 */
export default function NotebookPage({ activePage, onNavigate, children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile drawer automatically whenever the page changes
  useEffect(() => setMenuOpen(false), [activePage]);

  // Lock body scroll while the drawer is open (mobile)
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Which way through the "book" we're turning — later chapter = forward
  // flip, earlier chapter = backward flip. Read before the ref updates in
  // the effect below, so it reflects the previous page during this render.
  const prevPageRef = useRef(activePage);
  const prevIndex = PAGE_ORDER.indexOf(prevPageRef.current);
  const nextIndex = PAGE_ORDER.indexOf(activePage);
  const flipDirection = nextIndex >= prevIndex ? 'forward' : 'back';

  useEffect(() => {
    prevPageRef.current = activePage;
  }, [activePage]);

  return (
    <div className="notebook-spread">
      <MobileTopbar onMenuOpen={() => setMenuOpen(true)} />

      <div className="notebook-book-row">
        <div className="notebook-book">
          <div className={`notebook-page notebook-page--left${menuOpen ? ' is-open' : ''}`}>
            <Sidebar
              activePage={activePage}
              onNavigate={onNavigate}
              onClose={menuOpen ? () => setMenuOpen(false) : undefined}
            />
          </div>

          {menuOpen && (
            <button
              type="button"
              className="notebook-drawer-backdrop"
              aria-label="Close navigation menu"
              onClick={() => setMenuOpen(false)}
            />
          )}

          <div className="notebook-spine" aria-hidden="true" />

          <div className="notebook-page notebook-page--right">
            <div className="notebook-page-inner">
              {/* Keying on activePage forces a remount each navigation, so
                  the flip animation below replays every time instead of
                  only once on first load. */}
              <div
                key={activePage}
                className={`notebook-page-turn notebook-page-turn--${flipDirection}`}
              >
                {children}
              </div>
            </div>
          </div>
        </div>

        <TabRail activePage={activePage} onNavigate={onNavigate} />
      </div>
    </div>
  );
}
