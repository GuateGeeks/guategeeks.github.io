import React, { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon, MoonIcon, SunIcon } from './Icons';

function Navbar({ toggleTheme, isDark }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Detect active section
      const sections = ['inicio', 'servicios', 'programas', 'nosotros', 'contacto'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'programas', label: 'Programas' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'py-2' 
        : 'py-4'
    }`}>
      <div className={`max-w-6xl mx-auto px-4 transition-all duration-500 ${scrolled ? 'px-4' : 'px-6'}`}>
        <div className={`glass-panel-heavy rounded-2xl px-6 transition-all duration-500 ${
          scrolled ? 'shadow-lg' : ''
        }`} style={{
          borderRadius: '20px',
        }}>
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <a href="#inicio" className="flex items-center gap-2 group">
              <img 
                src="/logo.svg" 
                alt="GuateGeeks" 
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-110" 
              />
            </a>

            {/* Desktop Navigation - Glass Pills */}
            <div className="hidden md:flex items-center gap-1">
              <div className="flex items-center gap-0.5 p-1 rounded-xl" style={{
                background: 'var(--bg-glass)',
                border: '1px solid var(--glass-border-subtle)',
              }}>
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative ${
                      activeSection === link.id
                        ? 'text-white'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                    style={activeSection === link.id ? {
                      background: 'linear-gradient(135deg, #8400e2, #a01bff)',
                      boxShadow: '0 2px 12px rgba(132, 0, 226, 0.3)',
                    } : {}}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme} 
                className="ml-2 p-2.5 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95"
                style={{
                  background: 'var(--bg-glass)',
                  border: '1px solid var(--glass-border-subtle)',
                }}
                aria-label="Toggle Dark Mode"
              >
                {isDark ? <SunIcon /> : <MoonIcon />}
              </button>

              {/* CTA */}
              <a href="#contacto" className="btn-primary ml-3 text-sm py-2.5 px-5">
                Agendar
              </a>
            </div>

            {/* Mobile Controls */}
            <div className="md:hidden flex items-center gap-2">
              <button 
                onClick={toggleTheme} 
                className="p-2.5 rounded-xl transition-all duration-300"
                style={{
                  background: 'var(--bg-glass)',
                  border: '1px solid var(--glass-border-subtle)',
                }}
              >
                {isDark ? <SunIcon /> : <MoonIcon />}
              </button>
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="p-2.5 rounded-xl transition-all duration-300"
                style={{
                  background: isOpen ? 'linear-gradient(135deg, #8400e2, #a01bff)' : 'var(--bg-glass)',
                  border: '1px solid var(--glass-border-subtle)',
                  color: isOpen ? 'white' : 'var(--text-primary)',
                }}
              >
                {isOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu - Glass Dropdown */}
      <div className={`md:hidden transition-all duration-500 overflow-hidden ${
        isOpen ? 'max-h-[400px] opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'
      }`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="glass-panel-heavy rounded-2xl p-4 space-y-1">
            {navLinks.map((link, i) => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                onClick={() => setIsOpen(false)} 
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                  activeSection === link.id
                    ? 'text-white'
                    : 'text-[var(--text-primary)] hover:bg-[var(--bg-glass-hover)]'
                }`}
                style={activeSection === link.id ? {
                  background: 'linear-gradient(135deg, #8400e2, #a01bff)',
                  boxShadow: '0 2px 12px rgba(132, 0, 226, 0.3)',
                  animationDelay: `${i * 0.05}s`,
                } : {
                  animationDelay: `${i * 0.05}s`,
                }}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#contacto" 
              onClick={() => setIsOpen(false)} 
              className="btn-primary block text-center mt-2"
            >
              Agendar Asesoria
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
