import { projects } from '../data/content';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="section-padding projects-section">
      <div className="container-custom">
        <h2 className="section-title">
          Alguns Projetos
        </h2>

        <div className="grid-layout">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image" 
                />
                <div className="project-overlay">
                  <a href={project.repo} target="_blank" className="project-link github"><Github size={20}/></a>
                  {project.deploy && <a href={project.deploy} target="_blank" className="project-link deploy"><ExternalLink size={20}/></a>}
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