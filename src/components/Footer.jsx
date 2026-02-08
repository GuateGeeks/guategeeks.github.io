import React from 'react';

function Footer() {
  return (
    <footer className="section-glass border-t border-[var(--glass-border-subtle)]">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#inicio" className="inline-block mb-4 group">
              <img src="/logo.svg" alt="GuateGeeks" className="h-10 w-auto transition-transform duration-300 group-hover:scale-105" width="120" height="40" />
            </a>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed max-w-sm">
              Imaginamos, diseñamos y creamos el futuro de la educación tecnológica en Guatemala.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {[
                { label: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                { label: 'Instagram', icon: 'M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm-4 11a3 3 0 110-6 3 3 0 010 6zm4.5-7.5a1 1 0 110-2 1 1 0 010 2z' },
                { label: 'TikTok', icon: 'M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-5 12a3 3 0 01-3-3V8h2v4a1 1 0 002 0V6h2v2a3 3 0 003 3v2a5 5 0 01-3-1v3a3 3 0 01-3 3z' },
              ].map((social, i) => (
                <a 
                  key={i}
                  href="javascript:void(0)" 
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 group"
                  style={{
                    background: 'var(--bg-glass)',
                    border: '1px solid var(--glass-border-subtle)',
                  }}
                  aria-label={social.label}
                >
                  <svg className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-royal-violet transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-sm font-semibold text-[var(--text-primary)] mb-4 uppercase tracking-wider">Navegación</p>
            <ul className="space-y-3">
              {['Inicio', 'Servicios', 'Programas', 'Nosotros', 'Contacto'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-sm text-[var(--text-secondary)] hover:text-royal-violet transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-royal-violet transition-all duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold text-[var(--text-primary)] mb-4 uppercase tracking-wider">Contacto</p>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:info@guategeeks.com" 
                  className="text-sm text-[var(--text-secondary)] hover:text-royal-violet transition-colors duration-300 flex items-center gap-2"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@guategeeks.com
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/50230044972" 
                  className="text-sm text-[var(--text-secondary)] hover:text-emerald transition-colors duration-300 flex items-center gap-2"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654z"/>
                  </svg>
                  (+502) 3004-4972
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[var(--glass-border-subtle)]">
          <p className="text-center text-xs text-[var(--text-tertiary)]">
            &copy; {new Date().getFullYear()} GuateGeeks. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
