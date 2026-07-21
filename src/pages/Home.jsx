import { PROFILE } from '../data/content';
import FloralCorner from '../components/FloralCorner';
import StickyNote from '../components/StickyNote';
import portrait from '../assets/home.png';

export default function Home() {
  return (
    <div className="page-home">
      <div className="page-home-text">
        <p className="eyebrow-code">{'< Welcome />'}</p>
        <h1 className="notebook-heading">
          Hi, I'm <span className="notebook-heading-accent">{PROFILE.name}</span>
        </h1>
        <p className="notebook-role">{PROFILE.role} ♡</p>
        <p className="notebook-lede">{PROFILE.tagline}</p>

        <pre className="notebook-codeblock">
          <code>{PROFILE.codeSnippet}</code>
        </pre>

        <button type="button" className="notebook-btn-primary">
          Let's Connect <span aria-hidden="true">→</span>
        </button>
      </div>

      <div className="page-home-visual">
        <div className="notebook-photo">
          <img src={portrait}alt="Portrait"className="notebook-photo-frame"/>
        </div>
        <StickyNote tone="peach" className="page-home-sticky">
          Building dreams <br />with code {'</>'}
        </StickyNote>
        <FloralCorner className="page-home-floral" />   
      </div>
    </div>
  );
}
