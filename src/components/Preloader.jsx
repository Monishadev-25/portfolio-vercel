import { useEffect, useState } from 'react';

// Always show the splash for at least this long, so it doesn't flash for
// a single frame on fast connections — long enough to register as an
// intentional "opening the notebook" moment, short enough not to annoy
// repeat visitors.
const MIN_VISIBLE_MS = 900;
// Must match the CSS transition duration on .nb-preloader below, so the
// component unmounts only after the fade-out finishes.
const FADE_MS = 450;

export default function Preloader() {
  const [hidden, setHidden] = useState(false);
  const [mounted, setMounted] = useState(true);

  // Wait for the window "load" event (all assets — images, fonts, the GIF
  // itself — fetched) before starting the fade, floored by MIN_VISIBLE_MS.
  useEffect(() => {
    const start = Date.now();

    const finish = () => {
      const wait = Math.max(0, MIN_VISIBLE_MS - (Date.now() - start));
      setTimeout(() => setHidden(true), wait);
    };

    if (document.readyState === 'complete') {
      finish();
    } else {
      window.addEventListener('load', finish, { once: true });
    }
    return () => window.removeEventListener('load', finish);
  }, []);

  // Remove from the DOM once the fade-out transition has finished.
  useEffect(() => {
    if (!hidden) return;
    const t = setTimeout(() => setMounted(false), FADE_MS);
    return () => clearTimeout(t);
  }, [hidden]);

  if (!mounted) return null;

  return (
    <div
      className={`nb-preloader${hidden ? ' is-hidden' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <img src="/page-flip-preloader.gif" alt="" width={112} height={83} />
      <span className="nb-preloader-text">turning the page…</span>
    </div>
  );
}
