import { EXPERIENCE } from '../data/content';
import FloralCorner from '../components/FloralCorner';
import experienceImg from '../assets/experience.png'; 

export default function Experience() {
  return (
    <div className="page-experience">
      <h1 className="notebook-heading notebook-heading--sm">
        <span aria-hidden="true">💼 </span>Experience
      </h1>

      <div className="page-experience-body">
        <ol className="notebook-timeline">
          {EXPERIENCE.map((role) => (
            <li key={role.title} className="notebook-timeline-item">
              <div className="notebook-timeline-marker">{role.year}</div>
              <div className="notebook-timeline-body">
                <p className="notebook-timeline-period">{role.period}</p>
                <h3 className="notebook-timeline-title">{role.title}</h3>
                <p className="notebook-timeline-company">{role.company}</p>
                <p className="notebook-timeline-desc">{role.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="page-experience-visual">
          <img
            src={experienceImg}
            alt="Illustration of a workspace"
            className="notebook-photo-frame"
          />
          <FloralCorner className="page-experience-floral" />
        </div>
      </div>
    </div>
  );
}