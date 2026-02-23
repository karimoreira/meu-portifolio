import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { personalData } from '../data/content';

export default function Hero() {


  const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      const offset = 80;
      window.scrollTo({ top: section.offsetTop - offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="hero">

      <div className="hero__content">
        <div className="hero__text">
          <p className="hero__greeting">
            <span className="hero__greeting-bracket">&lt;</span>
            Olá, mundo!
            <span className="hero__greeting-bracket"> /&gt;</span>
          </p>

          <h1 className="hero__name">
            {personalData.name}
          </h1>

          <h2 className="hero__role">
            {personalData.role}
          </h2>

          <p className="hero__about">
            {personalData.about}
          </p>

          <div className="hero__actions">
            <a
              href="#projects"
              className="btn-primary"
              onClick={(e) => scrollToSection(e, '#projects')}
            >
              Ver Projetos <ArrowDown size={18} />
            </a>

            <div className="hero__social">
              <a
                href="https://medium.com/@kari.atilio.m"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Medium"
              >
                <span className="social-btn__medium">M</span>
              </a>
              <a
                href={personalData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={personalData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={personalData.social.email}
                className="social-btn"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero-photo">
            <img
              src="/img/code.webp"
              srcSet="/img/code.webp 2000w, /img/code-720w.webp 720w, /img/code-360w.webp 360w"
              sizes="(max-width: 768px) 360px, 360px"
              alt="Code Animation"
              className="hero-photo__img hero-photo__img--transparent"
              width="360"
              height="360"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <div className="scroll-line" />
      </div>
    </section>
  );
}