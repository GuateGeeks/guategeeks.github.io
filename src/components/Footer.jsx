import React from 'react';

function Footer() {
  return (
    <footer id="contacto" className="bg-[var(--bg-secondary)] backdrop-blur-md text-[var(--text-primary)] border-t border-strong-gray-300 transition-colors duration-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <a href="#inicio" className="inline-block mb-4">
               <img src="/logo.svg" alt="GuateGeeks Logo" className="h-12 w-auto mx-auto md:mx-0" />
            </a>
            <p className="text-[var(--text-secondary)]">Imagina, diseña y crea el futuro.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-royal-violet">Contacto</h4>
            <ul className="space-y-3 text-[var(--text-secondary)]">
              <li><a href="mailto:info@guategeeks.com" className="hover:text-emerald block p-2 md:p-0 bg-white/5 md:bg-transparent rounded-lg md:rounded-none transition-colors">info@guategeeks.com</a></li>
              <li><a href="https://wa.me/50230044972" className="hover:text-emerald block p-2 md:p-0 bg-white/5 md:bg-transparent rounded-lg md:rounded-none transition-colors">(+502) 3004-4972</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-raspberry-red">Síguenos</h4>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="#" className="text-[var(--text-secondary)] hover:text-chartreuse-600 dark:hover:text-chartreuse transition-colors transform hover:scale-110">Facebook</a>
              <a href="#" className="text-[var(--text-secondary)] hover:text-chartreuse-600 dark:hover:text-chartreuse transition-colors transform hover:scale-110">Instagram</a>
              <a href="#" className="text-[var(--text-secondary)] hover:text-chartreuse-600 dark:hover:text-chartreuse transition-colors transform hover:scale-110">TikTok</a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-strong-gray-300 pt-8 text-center text-[var(--text-secondary)]">
          <p>&copy; {new Date().getFullYear()} GuateGeeks. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
