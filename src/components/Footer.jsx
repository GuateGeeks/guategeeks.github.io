import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

function Footer() {
  return (
    <footer>
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
                { label: 'Facebook', Icon: FaFacebookF },
                { label: 'Instagram', Icon: FaInstagram },
                { label: 'TikTok', Icon: FaTiktok },
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
                  <social.Icon className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-coral transition-colors" aria-hidden="true" />
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
                    className="text-sm text-[var(--text-secondary)] hover:text-coral transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-coral transition-all duration-300" />
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
                  className="text-sm text-[var(--text-secondary)] hover:text-coral transition-colors duration-300 flex items-center gap-2"
                >
                  <HiOutlineMail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  info@guategeeks.com
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/50230044972" 
                  className="text-sm text-[var(--text-secondary)] hover:text-sky transition-colors duration-300 flex items-center gap-2"
                >
                  <FaWhatsapp className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
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
