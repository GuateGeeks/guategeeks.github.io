import React, { useState } from 'react';
import { MenuIcon, CloseIcon, MoonIcon, SunIcon } from './Icons';

function Navbar({ toggleTheme, isDark }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[var(--bg-primary)] border-b-4 border-royal-violet sticky top-0 z-50 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-extrabold text-3xl tracking-tight">
              <span className="text-royal-violet">Guate</span>
              <span className="text-blue">Geeks</span>
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-[var(--text-primary)] hover:text-royal-violet font-bold text-lg transition-colors">Inicio</a>
            <a href="#servicios" className="text-[var(--text-primary)] hover:text-royal-violet font-bold text-lg transition-colors">Servicios</a>
            <a href="#programas" className="text-[var(--text-primary)] hover:text-royal-violet font-bold text-lg transition-colors">Programas</a>
            <a href="#nosotros" className="text-[var(--text-primary)] hover:text-royal-violet font-bold text-lg transition-colors">Nosotros</a>
            <a href="#contacto" className="text-[var(--text-primary)] hover:text-royal-violet font-bold text-lg transition-colors">Contacto</a>
            <button 
                onClick={toggleTheme} 
                className="p-2 rounded-full text-[var(--text-primary)] hover:bg-gray-100 dark:hover:bg-strong-gray-300 transition-colors"
                aria-label="Toggle Dark Mode"
            >
                {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
            <a href="#contacto" className="btn-primary">Agendar</a>
          </div>
          <div className="md:hidden flex items-center gap-4">
             <button 
                onClick={toggleTheme} 
                className="p-2 rounded-full text-[var(--text-primary)] hover:bg-gray-100 dark:hover:bg-strong-gray-300 transition-colors"
            >
                {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-[var(--text-primary)] hover:text-soft-gray p-2 focus:outline-none focus:ring-2 focus:ring-soft-gray rounded-md">
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[var(--bg-primary)] shadow-lg border-b-4 border-royal-violet animate-fade-in-down z-40">
          <div className="px-4 py-4 space-y-2 text-center">
            <a href="#inicio" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-lg font-bold text-[var(--text-primary)] hover:bg-gray-50 dark:hover:bg-strong-gray-200 hover:text-royal-violet">Inicio</a>
            <a href="#servicios" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-lg font-bold text-[var(--text-primary)] hover:bg-gray-50 dark:hover:bg-strong-gray-200 hover:text-royal-violet">Servicios</a>
            <a href="#programas" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-lg font-bold text-[var(--text-primary)] hover:bg-gray-50 dark:hover:bg-strong-gray-200 hover:text-royal-violet">Programas</a>
            <a href="#nosotros" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-lg font-bold text-[var(--text-primary)] hover:bg-gray-50 dark:hover:bg-strong-gray-200 hover:text-royal-violet">Nosotros</a>
            <a href="#contacto" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-lg font-bold text-[var(--text-primary)] hover:bg-gray-50 dark:hover:bg-strong-gray-200 hover:text-royal-violet">Contacto</a>
             <a href="#contacto" onClick={() => setIsOpen(false)} className="block px-3 py-3 mt-4 rounded-md text-lg font-bold bg-royal-violet text-strong-gray-100 hover:bg-royal-violet-600">Agendar Asesoría</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
