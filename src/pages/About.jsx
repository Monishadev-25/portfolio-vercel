import { ABOUT, PROFILE } from '../data/content';
import FloralCorner from '../components/FloralCorner';
import about from '../assets/about.png';

export default function About() {
  return (
    <div className="page-about">
      <div className="page-about-text">
        <h1 className="notebook-heading notebook-heading--script">About Me ♡</h1>

        {ABOUT.paragraphs.map((p, i) => (
          <p key={i} className="notebook-paragraph">{p}</p>
        ))}

        <p className="notebook-signature">{PROFILE.name} ♡</p>
      </div>

      <div className="page-about-visual">
        <div className="notebook-photo notebook-photo--wide">
          <img src={about} alt="Portrait"className="notebook-photo-frame"/>
        </div>

        <div className="notebook-card">
          <h2 className="notebook-card-title">Fun Facts</h2>
          <ul className="notebook-card-list">
            {ABOUT.funFacts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </div>

        <FloralCorner className="page-about-floral" />
      </div>
    </div>
  );
}
