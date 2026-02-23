import { useRef, useCallback } from 'react';
import { projects } from '../../data/content';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Projects.css';

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [revealRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    card.style.setProperty('--glow-x', `${x}px`);
    card.style.setProperty('--glow-y', `${y}px`);
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (card) {
      card.style.transform = '';
    }
  }, []);

  return (
    <div
      ref={revealRef}
      className={`project-card-wrapper reveal ${isVisible ? 'visible' : ''}`}
      style={{ '--delay': `${index * 0.08}s` }}
    >
      <div
        ref={cardRef}
        className="project-card tilt-card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="project-card__glow" />

        <div className="project-card__image-wrap">
          <img
            src={project.image}
            srcSet={`${project.image} 1919w, ${project.image.replace('.webp', '-800w.webp')} 800w, ${project.image.replace('.webp', '-400w.webp')} 400w`}
            sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 400px"
            alt={project.title}
            className="project-card__image"
            loading="lazy"
            decoding="async"
            width="387"
            height="200"
          />
        </div>

        <div className="project-card__body">
          <span className="project-card__tag">{project.tag}</span>
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__desc">{project.description}</p>
          <div className="project-card__tech">
            {project.tech.map(tech => (
              <span key={tech} className="tech-pill">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [titleRef, titleVisible] = useScrollReveal();

  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <h2
          ref={titleRef}
          className={`section-heading reveal ${titleVisible ? 'visible' : ''}`}
        >
          <span className="section-heading__label">Projetos</span>
          <span className="section-heading__line" />
        </h2>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}