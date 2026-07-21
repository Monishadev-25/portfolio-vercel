import { useCallback, useEffect, useState } from 'react';
import NotebookPage from './components/NotebookPage';
import Preloader from './components/Preloader';
import { TAB_ITEMS } from './data/content';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

const PAGES = {
  home: { component: Home, title: 'Home' },
  about: { component: About, title: 'About Me' },
  skills: { component: Skills, title: 'Skills' },
  projects: { component: Projects, title: 'Projects' },
  experience: { component: Experience, title: 'Experience' },
  contact: { component: Contact, title: 'Contact' },
};

const PAGE_ORDER = TAB_ITEMS.map((t) => t.id);

export default function App() {
  const [activePage, setActivePage] = useState('home');

  const navigate = useCallback((id) => {
    if (PAGES[id]) setActivePage(id);
  }, []);

  // Left/Right arrow keys flip between chapters, like turning notebook pages.
  // Skipped while typing in a form field so it doesn't hijack text input.
  useEffect(() => {
    const handleKey = (e) => {
      const tag = document.activeElement?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;

      const idx = PAGE_ORDER.indexOf(activePage);
      if (e.key === 'ArrowRight' && idx < PAGE_ORDER.length - 1) {
        navigate(PAGE_ORDER[idx + 1]);
      } else if (e.key === 'ArrowLeft' && idx > 0) {
        navigate(PAGE_ORDER[idx - 1]);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activePage, navigate]);

  useEffect(() => {
    document.title = `${PAGES[activePage].title} — Monisha`;
  }, [activePage]);

  const { component: ActivePageComponent } = PAGES[activePage];

  return (
    <>
      <Preloader />
      <div className="notebook-app">
        <NotebookPage activePage={activePage} onNavigate={navigate}>
          <ActivePageComponent />
        </NotebookPage>
      </div>
    </>
  );
}
