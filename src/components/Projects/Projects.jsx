import { projects } from '../../data/content';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container-custom">
        <h2 className="section-title">
          Alguns dos projetos:
        </h2>

        <div className="grid-layout">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image" 
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="400"
                  srcSet={`${project.image} 800w`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="project-overlay">
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="project-link github" aria-label={`Ver código fonte de ${project.title}`}><Github size={20}/></a>
                  {project.deploy && <a href={project.deploy} target="_blank" rel="noopener noreferrer" className="project-link deploy" aria-label={`Ver deploy de ${project.title}`}><ExternalLink size={20}/></a>}
                </div>
              </div>
              
              <div className="project-content">
                <span className="project-tag">{project.tag}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                <div className="project-tech-list">
                  {project.tech.map(tech => (
                    <span key={tech} className="project-tech-item">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}