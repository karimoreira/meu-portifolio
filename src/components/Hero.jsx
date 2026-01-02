import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { personalData } from '../data/content';

export default function Hero() {
  const scrollToSection = (e, id) => {
    e.preventDefault()
    const section = document.querySelector(id)
    const headerHeight = document.querySelector('.navbar').offsetHeight

    if (section) {
      const sectionTop = section.offsetTop - headerHeight;
      window.scrollTo({ top: sectionTop, behavior: 'smooth' })
    }
  }

  return (
    <section id="about" className="hero-section">
      <div className="hero-glow" />

      <div className="container hero-grid">
        <div className="hero-content animate-slide-left">
          <p className="hero-greeting">Olá, mundo! Sou o</p>
          <h1 className="hero-title">{personalData.name}</h1>
          <h2 className="hero-role">{personalData.role}</h2>
          <p className="hero-description">
            {personalData.intro} <br/>
            {personalData.about}
          </p>

          <div className="hero-actions">
            <a href={personalData.resumeUrl} download className="btn btn-primary">
              Baixar Currículo
            </a>
            <a href="#projects" className="btn btn-secondary" onClick={(e) => scrollToSection(e, '#projects')}>
              Ver Projetos <ArrowRight size={18} />
            </a>
          </div>
          <div className="social-links">
            <a href={personalData.social.github} target="_blank" rel="noopener noreferrer" className="social-icon hover-gray" aria-label="GitHub">
              <Github />
            </a>
            <a href={personalData.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon hover-cyan" aria-label="LinkedIn">
              <Linkedin />
            </a>
            <a href={personalData.social.email} className="social-icon hover-purple" aria-label="Email">
              <Mail />
            </a>
          </div>
        </div>

        <div className="code-card animate-scale-in">
          <div className="code-header">
            <div className="dot red" />
            <div className="dot yellow" />
            <div className="dot green" />
          </div>
          
          <div className="code-content">
            <p><span className="c-cyan">const</span> developer = <span className="c-purple">{"{"}</span></p>
            <p className="indent-1">name: <span className="c-gray">'{personalData.name}'</span>,</p>
            <p className="indent-1">
              skills: <a href="#skills" className="c-cyan hover-underline" onClick={(e) => scrollToSection(e, '#skills')}>this.showAll()</a>,
            </p>
            <p className="indent-1">education: <span className="c-gray">'Análise e Desenvolvimento de Sistemas'</span>,</p>
            <p className="indent-1">learningAndPracticing: <span className="c-gray">'Aprendizado constante e evolução contínua.'</span></p>
            <p><span className="c-purple">{"}"}</span>;</p>
          </div>
        </div>
      </div> 
    </section>
  );
}