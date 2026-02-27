import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import { GlobalVideoProvider } from './hooks/GlobalVideoContext.jsx';
import { personalData } from './data/content';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (window.location.pathname !== '/') {
      window.history.replaceState(null, '', '/');
    }
  }, []);

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-theme' : '';
    document.documentElement.className = theme === 'light' ? 'light-theme' : '';
  }, [theme]);

  return (
    <>
      <div className="noise-overlay" />

      <div className="app">
        <Navbar theme={theme} setTheme={setTheme} />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <Contact />

        </main>

        <footer className="footer">
          <div className="footer__inner">
            <p>
              Desenvolvido por{' '}
              <a
                href={personalData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
              >
                Kari Atílio Moreira
              </a>
            </p>
            <p className="footer__copy">© 2026 atiliodev.com</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
