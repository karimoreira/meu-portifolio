import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { personalData } from '../data/content';
import { useTextScramble } from '../hooks/useTextScramble';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const scrambledName = useTextScramble(personalData.name, { delay: 500, trigger: loaded });
  const scrambledRole = useTextScramble(personalData.role, { delay: 1200, speed: 30, trigger: loaded });

  useEffect(() => {
    setLoaded(true);
  }, []);

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
      <div className="hero__blobs">
        <div className="hero__blob hero__blob--1" />
        <div className="hero__blob hero__blob--2" />
        <div className="hero__blob hero__blob--3" />
      </div>

      <div className="hero__content">
        <div className="hero__text">
          <p className={`hero__greeting ${loaded ? 'animate-in' : ''}`}>
            <span className="hero__greeting-bracket">&lt;</span>
            Olá, mundo!
            <span className="hero__greeting-bracket"> /&gt;</span>
          </p>

          <h1 className={`hero__name ${loaded ? 'animate-in' : ''}`}>
            {scrambledName || '\u00A0'}
          </h1>

          <h2 className={`hero__role ${loaded ? 'animate-in' : ''}`}>
            {scrambledRole || '\u00A0'}
          </h2>

          <p className={`hero__about ${loaded ? 'animate-in' : ''}`}>
            {personalData.about}
          </p>

          <div className={`hero__actions ${loaded ? 'animate-in' : ''}`}>
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

        <div className={`hero__visual ${loaded ? 'animate-in' : ''}`}>
          <div className="hero-photo">
            <img
              src="/img/code.webp"
              alt="Code Animation"
              className="hero-photo__img hero-photo__img--transparent"
              width="360"
              height="228"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>

      <div className={`hero__scroll-indicator ${loaded ? 'animate-in' : ''}`}>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
