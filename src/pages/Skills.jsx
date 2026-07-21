import { SKILL_CATEGORIES } from '../data/content';
import StickyNote from '../components/StickyNote';
import FloralCorner from '../components/FloralCorner';

export default function Skills() {
  return (
    <div className="page-skills">
      <h1 className="notebook-heading notebook-heading--sm">
        <span aria-hidden="true">{'</>'} </span>Skills &amp; Tech Stack
      </h1>

      <div className="notebook-skill-categories">
        {SKILL_CATEGORIES.map((category) => (
          <section
            key={category.id}
            className="notebook-skill-category"
            style={{ '--category-accent': category.accent }}
          >
            <h2 className="notebook-skill-category-title">
              <span className="notebook-skill-category-icon" aria-hidden="true">
                {category.icon}
              </span>
              {category.title}
            </h2>
            <ul className="notebook-skill-pills">
              {category.skills.map((skill) => (
                <li key={skill} className="notebook-skill-pill">
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <StickyNote tone="lavender" className="page-skills-sticky">
        Always learning + <br />always building
      </StickyNote>
      <FloralCorner className="page-skills-floral" />
    </div>
  );
}