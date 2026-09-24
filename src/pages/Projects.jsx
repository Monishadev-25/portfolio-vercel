import { useCallback, useEffect, useRef, useState } from 'react';
import { PROJECTS } from '../data/content';
import { Icon } from '../components/Icon';

const TRAIL_STEPS = 12; // number of paw prints in the scroll trail

export default function Projects() {
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [canScroll, setCanScroll] = useState({ left: false, right: false });

  const updateProgress = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const ratio = max <= 0 ? 0 : el.scrollLeft / max;
    setProgress(ratio);
    setCanScroll({ left: el.scrollLeft > 4, right: el.scrollLeft < max - 4 });
  }, []);

  useEffect(() => {
    updateProgress();
    window.addEventListener('resize', updateProgress);
    return () => window.removeEventListener('resize', updateProgress);
  }, [updateProgress]);

  const scrollByCards = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth, behavior: 'smooth' });
  };

  return (
    <div className="page-projects">
      <header className="page-projects-head">
        <h1 className="notebook-heading notebook-heading--sm">
          <span aria-hidden="true">📁 </span>Projects
        </h1>
        <p className="notebook-lede notebook-lede--script">Things I've built with love ♡</p>
      </header>

      {/* Arrows sit in their own gutter beside the track — they never sit on
          top of card content, and the track sizes cards to show exactly 3
          full cards at once (no partial peek, no edge fade needed). */}
      <div className="notebook-scroller-wrap">
        <button
          type="button"
          className="notebook-scroller-arrow"
          onClick={() => scrollByCards(-1)}
          disabled={!canScroll.left}
          aria-label="Scroll projects left"
        >
          <Icon name="chevronLeft" />
        </button>

        <ul
          className="notebook-project-track"
          ref={trackRef}
          onScroll={updateProgress}
          tabIndex={0}
          aria-label="Project list, horizontally scrollable"
        >
          {PROJECTS.map((project) => (
            <li key={project.title} className="notebook-project-card">
              <div className="notebook-project-thumb" role="img" aria-label={`${project.title} preview`}>
                <img src={project.thumbnail} alt="Portrait"className="notebook-photo-frame"/>
              </div>
              <h3 className="notebook-project-title">{project.title}</h3>
              <div className="notebook-project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="notebook-tag">{tag}</span>
                ))}
              </div>
              <a href={project.link} className="notebook-project-link" target="_blank" rel="noopener noreferrer">
                Live Demo <Icon name="external" />
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="notebook-scroller-arrow"
          onClick={() => scrollByCards(1)}
          disabled={!canScroll.right}
          aria-label="Scroll projects right"
        >
          <Icon name="chevronRight" />
        </button>
      </div>

      {/* Cat-track scroll tracker — a trail of paw prints lights up as you scroll,
          like footprints left behind, instead of a single sliding thumb. */}
      <div className="notebook-scrub-trail" role="presentation" aria-hidden="true">
        {Array.from({ length: TRAIL_STEPS }).map((_, i) => {
          const stepProgress = i / (TRAIL_STEPS - 1);
          const nextStepProgress = (i + 1) / (TRAIL_STEPS - 1);
          const reached = stepProgress <= progress + 0.001;
          const isCurrent = reached && (i === TRAIL_STEPS - 1 || nextStepProgress > progress + 0.001);
          const offsetY = i % 2 === 0 ? -3 : 5;
          const scale = isCurrent ? 1.5 : reached ? 1.05 : 0.8;

          return (
            <span
              key={i}
              className={`notebook-scrub-paw${reached ? ' is-reached' : ''}${isCurrent ? ' is-current' : ''}`}
              style={{ transform: `translateY(${offsetY}px) scale(${scale})` }}
            >
              🌷
            </span>
          );
        })}
      </div>
    </div>
  );
}