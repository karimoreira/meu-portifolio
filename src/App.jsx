import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { personalData } from './data/content';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.className = '';
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    }
  }, [theme]);

  return (
    <div className="app-container">
      <Navbar theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <footer className="app-footer">
        <p>Desenvolvido por <a href={personalData.social.linkedin} target="_blank" rel="noopener noreferrer" className="footer-name">Kari Atílio Moreira</a></p>
        <p className="copyright-container"><span className="copyright-symbol">©</span> 2025 atiliodev.com</p>
      </footer>
    </div>
  )
}

export default App