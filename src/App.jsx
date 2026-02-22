import { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { personalData } from './data/content';

const Projects = lazy(() => import('./components/Projects/Projects'));
const Skills = lazy(() => import('./components/Skills/Skills'));
const Contact = lazy(() => import('./components/Contact/Contact'));

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
          <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
            <Projects />
            <Skills />
            <Contact />
          </Suspense>
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
