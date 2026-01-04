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
    const body = document.body;
    const html = document.documentElement;
    const navbar = document.querySelector('.navbar');

    body.className = '';
    html.className = '';
    navbar.className = 'navbar';

    if (theme === 'light') {
      body.classList.add('light-theme');
      html.classList.add('light-theme');
      navbar.classList.add('light-theme');
    }
  }, [theme]);

  return (
    <div className="site-container">
      <Navbar theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <Suspense fallback={<div style={{ minHeight: '100vh' }}></div>}>
          <Skills />
          <Projects />
          <Contact />
        </Suspense>
      </main>
      
      <footer className="site-footer">
        <p>Desenvolvido por <a href={personalData.social.linkedin} target="_blank" rel="noopener noreferrer" className="footer-name">Kari Atílio Moreira</a></p>
        <p className="copyright-container"><span className="copyright-symbol">©</span> 2026 atiliodev.com</p>
      </footer>
    </div>
  )
}

export default App