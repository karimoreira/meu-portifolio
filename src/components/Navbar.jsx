import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar({ theme, setTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (event, href) => {
    event.preventDefault();
    const section = document.querySelector(href);
    const headerHeight = document.querySelector('.navbar').offsetHeight;

    if (section) {
      const sectionTop = section.offsetTop - headerHeight;
      window.scrollTo({ top: sectionTop, behavior: 'smooth' });
    }
  };

  const links = [
    { name: 'Sobre', href: '#about' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contato', href: '#contact' },
  ];

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const getThemeIcon = () => {
    return theme === 'light' ? <Sun size={24} /> : <Moon size={24} />;
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo" onClick={(e) => { e.preventDefault(); window.scrollTo(0,0); }} aria-label="Voltar ao topo">
          <span className="navbar-title">
            ATILIO<span className="navbar-title-highlight">DEV</span>
          </span>
        </a>
        
        <div className="desktop-menu">
          {links.map((link, index) => (
            <a key={link.name} href={link.href} onClick={(e) => scrollToSection(e, link.href)}>
              {link.name}
            </a>
          ))}
          <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Alternar tema">
            {getThemeIcon()}
          </button>
        </div>

        <div className="mobile-actions">
          <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Alternar tema">
            {getThemeIcon()}
          </button>
          <button className="mobile-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-dropdown">
          {links.map((link) => (
            <a key={link.name} href={link.href} onClick={(e) => { scrollToSection(e, link.href); setIsOpen(false); }}>
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}