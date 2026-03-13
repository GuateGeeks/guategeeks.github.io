import React, { useState, useEffect, useRef, useCallback } from "react";
import { MenuIcon, CloseIcon, MoonIcon, SunIcon } from "./Icons";

function Navbar({ toggleTheme, isDark }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const mobileMenuRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const sectionIds = [
      "inicio",
      "servicios",
      "programas",
      "metodologia",
      "nosotros",
      "contacto",
    ];
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section - iterate from bottom to top
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Close mobile menu on outside click
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Focus trap inside mobile menu
  const handleMenuKeyDown = useCallback((e) => {
    if (e.key !== "Tab" || !mobileMenuRef.current) return;
    const focusable = mobileMenuRef.current.querySelectorAll("a, button");
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }, []);

  const navLinks = [
    { id: "inicio", label: "Inicio" },
    { id: "servicios", label: "Servicios" },
    { id: "programas", label: "Programas" },
    { id: "metodologia", label: "Metodologia" },
    { id: "nosotros", label: "Nosotros" },
    { id: "contacto", label: "Contacto" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
      aria-label="Navegación principal"
    >
      <div
        className={`max-w-6xl mx-auto px-4 transition-all duration-500 ${scrolled ? "px-4" : "px-6"}`}
      >
        <div
          className={`glass-panel-heavy rounded-2xl px-6 transition-all duration-500 ${
            scrolled ? "shadow-lg" : ""
          }`}
          style={{
            borderRadius: "20px",
          }}
        >
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <a href="#inicio" className="flex items-center gap-2 group">
              <img
                src="/logo.svg"
                alt="GuateGeeks"
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-110"
                width="120"
                height="40"
              />
            </a>

            {/* Desktop Navigation - Glass Pills */}
            <div className="hidden md:flex items-center gap-1">
              <div
                className="flex items-center gap-0.5 p-1 rounded-xl"
                style={{
                  background: "var(--bg-glass)",
                  border: "1px solid var(--glass-border-subtle)",
                }}
                role="list"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    role="listitem"
                    aria-current={
                      activeSection === link.id ? "true" : undefined
                    }
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative ${
                      activeSection === link.id
                        ? "text-white"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    }`}
                    style={
                      activeSection === link.id
                        ? {
                            background:
                              "linear-gradient(135deg, #ef8556, #f4a07a)",
                            boxShadow: "0 2px 12px rgba(239, 133, 86, 0.3)",
                          }
                        : {}
                    }
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
                  background: "var(--bg-glass)",
                  border: "1px solid var(--glass-border-subtle)",
                }}
                aria-label={
                  isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
                }
              >
                {isDark ? <SunIcon /> : <MoonIcon />}
              </button>

              {/* CTA */}
              <a
                href="#contacto"
                className="btn-primary ml-3 text-sm py-2.5 px-5"
              >
                Agendar asesoría
              </a>
            </div>

            {/* Mobile Controls */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-xl transition-all duration-300"
                style={{
                  background: "var(--bg-glass)",
                  border: "1px solid var(--glass-border-subtle)",
                }}
                aria-label={
                  isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
                }
              >
                {isDark ? <SunIcon /> : <MoonIcon />}
              </button>
              <button
                ref={menuButtonRef}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-xl transition-all duration-300"
                style={{
                  background: isOpen
                    ? "linear-gradient(135deg, #ef8556, #f4a07a)"
                    : "var(--bg-glass)",
                  border: "1px solid var(--glass-border-subtle)",
                  color: isOpen ? "white" : "var(--text-primary)",
                }}
                aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                {isOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Glass Dropdown */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        onKeyDown={handleMenuKeyDown}
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-[400px] opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
        }`}
        role="menu"
        aria-hidden={!isOpen}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="glass-panel-heavy rounded-2xl p-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)}
                role="menuitem"
                tabIndex={isOpen ? 0 : -1}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                  activeSection === link.id
                    ? "text-white"
                    : "text-[var(--text-primary)] hover:bg-[var(--bg-glass-hover)]"
                }`}
                style={
                  activeSection === link.id
                    ? {
                        background: "linear-gradient(135deg, #ef8556, #f4a07a)",
                        boxShadow: "0 2px 12px rgba(239, 133, 86, 0.3)",
                      }
                    : {}
                }
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              role="menuitem"
              tabIndex={isOpen ? 0 : -1}
              className="btn-primary block text-center mt-2"
            >
              Agendar asesoría
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
