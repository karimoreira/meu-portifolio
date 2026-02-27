import { useState, useEffect, useRef } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar({ theme, setTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      if (y > lastScrollY.current && y > 100) {
        setHidden(true);
        setIsOpen(false);
      } else {
        setHidden(false);
      }
      lastScrollY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      const offset = 80;
      const top = section.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const links = [
    { name: 'Sobre', href: '#about' },
    { name: 'Destaques', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className={`nav ${hidden ? 'nav--hidden' : ''} ${scrolled ? 'nav--scrolled' : ''}`}>

      <div className="nav__inner">
        <a
          href="#"
          className="nav__logo"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          aria-label="Voltar ao topo"
        >
          ATILIO<span className="nav__logo-accent">DEV</span>
        </a>

        <div className="nav__links">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav__link"
              onClick={(e) => scrollToSection(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="nav__theme-btn"
            aria-label="Alternar tema"
          >
            {theme === 'light' ? <Sun size={22} /> : <Moon size={22} />}
          </button>
        </div>

        <div className="nav__mobile">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="nav__theme-btn"
            aria-label="Alternar tema"
          >
            {theme === 'light' ? <Sun size={22} /> : <Moon size={22} />}
          </button>
          <button
            className="nav__menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className={`nav__dropdown ${isOpen ? 'nav__dropdown--open' : ''}`}>
        {links.map((link, i) => (
          <a
            key={link.name}
            href={link.href}
            className="nav__dropdown-link"
            style={{ transitionDelay: isOpen ? `${i * 0.05}s` : '0s' }}
            onClick={(e) => scrollToSection(e, link.href)}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
