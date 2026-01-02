import { skills } from '../../data/content';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="section-padding skills-section">
      <div className="container-custom">
        <h2 className="section-title">
          Skills
        </h2>

        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <skillGroup.icon className="skill-icon" />
                <h3 className="skill-title">{skillGroup.category}</h3>
              </div>
              <div className="skill-list">
                {skillGroup.items.map(tech => (
                  <span key={tech} className="skill-item">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}