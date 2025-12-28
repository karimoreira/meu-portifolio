import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { personalData } from './data/content';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <footer className="app-footer">
        <p>Desenvolvido por <a href={personalData.social.linkedin} target="_blank" rel="noopener noreferrer" className="footer-name">Kari Atílio Moreira</a></p>
        <p>© 2025 Todos os direitos reservados</p>
      </footer>
    </div>
  )
}

export default App