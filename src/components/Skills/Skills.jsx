import { skills } from '../../data/content';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Skills.css';

function SkillCard({ group, index }) {
  const [ref, visible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`skill-card reveal ${visible ? 'visible' : ''}`}
      style={{ '--delay': `${index * 0.1}s` }}
    >
      <div className="skill-card__header">
        <group.icon className="skill-card__icon" />
        <h3 className="skill-card__title">{group.category}</h3>
      </div>
      <div className="skill-card__items">
        {group.items.map(tech => (
          <span key={tech} className="skill-card__item">{tech}</span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const [titleRef, titleVisible] = useScrollReveal();
  const [marqueeRef, marqueeVisible] = useScrollReveal({ threshold: 0.05 });

  const allSkills = skills.flatMap(group =>
    group.items.map(item => ({ name: item, category: group.category }))
  );

  const midpoint = Math.ceil(allSkills.length / 2);
  const row1 = allSkills.slice(0, midpoint);
  const row2 = allSkills.slice(midpoint);

  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <h2
          ref={titleRef}
          className={`section-heading reveal ${titleVisible ? 'visible' : ''}`}
        >
          <span className="section-heading__label">Skills</span>
          <span className="section-heading__line" />
        </h2>

        <div
          ref={marqueeRef}
          className={`skills__marquee-area ${marqueeVisible ? 'active' : ''}`}
        >
          <div className="marquee marquee--left">
            <div className="marquee__track">
              <div className="marquee__content">
                {row1.map((skill, i) => (
                  <span key={i} className="marquee__item">{skill.name}</span>
                ))}
              </div>
              <div className="marquee__content" aria-hidden="true">
                {row1.map((skill, i) => (
                  <span key={`d-${i}`} className="marquee__item">{skill.name}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="marquee marquee--right">
            <div className="marquee__track">
              <div className="marquee__content">
                {row2.map((skill, i) => (
                  <span key={i} className="marquee__item">{skill.name}</span>
                ))}
              </div>
              <div className="marquee__content" aria-hidden="true">
                {row2.map((skill, i) => (
                  <span key={`d-${i}`} className="marquee__item">{skill.name}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="skills__grid">
          {skills.map((group, index) => (
            <SkillCard key={index} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
