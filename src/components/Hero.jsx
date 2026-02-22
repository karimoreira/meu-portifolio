import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { personalData } from '../data/content';
import { useTextScramble } from '../hooks/useTextScramble';

const RAYS_COUNT = 40;

function HeroOrb() {
  const rays = Array.from({ length: RAYS_COUNT }, (_, i) => {
    const angle = (360 / RAYS_COUNT) * i + (Math.random() * 6 - 3);
    const length = 70 + Math.random() * 100;
    const delay = Math.random() * 4;
    const hue = (angle + 180) % 360;
    const width = 1.5 + Math.random() * 2;
    return { angle, length, delay, hue, width };
  });

  return (
    <div className="hero-orb">
      <div className="hero-orb__rays">
        {rays.map((ray, i) => (
          <div
            key={i}
            className="hero-orb__ray"
            style={{
              '--angle': `${ray.angle}deg`,
              '--length': `${ray.length}px`,
              '--delay': `${ray.delay}s`,
              '--hue': ray.hue,
              '--width': `${ray.width}px`,
            }}
          />
        ))}
      </div>

      <div className="hero-orb__sphere">
        <div className="hero-orb__ring hero-orb__ring--1" />
        <div className="hero-orb__ring hero-orb__ring--2" />
        <div className="hero-orb__ring hero-orb__ring--3" />
        <div className="hero-orb__core" />
        <div className="hero-orb__glow" />
      </div>
    </div>
  );
}

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
          <HeroOrb />
        </div>
      </div>

      <div className={`hero__scroll-indicator ${loaded ? 'animate-in' : ''}`}>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
