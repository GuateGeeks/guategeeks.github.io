import React, { useState, useEffect } from 'react';

// Icons (Simple SVGs)
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

// Enhanced Lego Brick Component
const LegoBrick = ({ color, className = "", style = {}, width = 1, height = 1 }) => {
    // Generate stud array based on dimensions (assuming 1 unit = 2x2 grid of studs roughly, or just fill space)
    // For simplicity, let's say 1 grid cell = 4 studs (2x2)
    const studCount = width * height * 4; 
    const studs = Array.from({ length: studCount });

    return (
      <div 
        className={`lego-brick w-full h-full ${color} ${className}`} 
        style={style}
      >
        <div className="absolute top-0 left-0 w-full h-full grid gap-1 p-1" 
             style={{ 
                 gridTemplateColumns: `repeat(${width * 2}, 1fr)`, 
                 gridTemplateRows: `repeat(${height * 2}, 1fr)` 
             }}>
           {studs.map((_, i) => (
               <div key={i} className={`lego-stud w-full h-full ${color} brightness-110`}></div>
           ))}
        </div>
      </div>
    );
};

function Navbar({ toggleTheme, isDark }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[var(--bg-primary)] border-b-4 border-camel sticky top-0 z-50 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-extrabold text-3xl tracking-tight">
              <span className="text-camel">Guate</span>
              <span className="text-cerulean">Geeks</span>
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-[var(--text-primary)] hover:text-cerulean font-bold text-lg transition-colors">Inicio</a>
            <a href="#nosotros" className="text-[var(--text-primary)] hover:text-cerulean font-bold text-lg transition-colors">Nosotros</a>
            <a href="#servicios" className="text-[var(--text-primary)] hover:text-cerulean font-bold text-lg transition-colors">Acelerador</a>
            <a href="#contacto" className="text-[var(--text-primary)] hover:text-cerulean font-bold text-lg transition-colors">Contacto</a>
            <button 
                onClick={toggleTheme} 
                className="p-2 rounded-full text-[var(--text-primary)] hover:bg-gray-100 dark:hover:bg-prussian-blue-300 transition-colors"
                aria-label="Toggle Dark Mode"
            >
                {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
            <a href="#contacto" className="btn-primary">Únete</a>
          </div>
          <div className="md:hidden flex items-center gap-4">
             <button 
                onClick={toggleTheme} 
                className="p-2 rounded-full text-[var(--text-primary)] hover:bg-gray-100 dark:hover:bg-prussian-blue-300 transition-colors"
            >
                {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-[var(--text-primary)] hover:text-cerulean p-2 focus:outline-none focus:ring-2 focus:ring-cerulean rounded-md">
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[var(--bg-primary)] shadow-lg border-b-4 border-camel animate-fade-in-down z-40">
          <div className="px-4 py-4 space-y-2 text-center">
            <a href="#inicio" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-lg font-bold text-[var(--text-primary)] hover:bg-gray-50 dark:hover:bg-prussian-blue-200 hover:text-cerulean">Inicio</a>
            <a href="#nosotros" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-lg font-bold text-[var(--text-primary)] hover:bg-gray-50 dark:hover:bg-prussian-blue-200 hover:text-cerulean">Nosotros</a>
            <a href="#servicios" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-lg font-bold text-[var(--text-primary)] hover:bg-gray-50 dark:hover:bg-prussian-blue-200 hover:text-cerulean">Acelerador</a>
            <a href="#contacto" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-lg font-bold text-[var(--text-primary)] hover:bg-gray-50 dark:hover:bg-prussian-blue-200 hover:text-cerulean">Contacto</a>
             <a href="#contacto" onClick={() => setIsOpen(false)} className="block px-3 py-3 mt-4 rounded-md text-lg font-bold bg-camel text-prussian-blue-100 hover:bg-camel-600">Únete</a>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  const [assembled, setAssembled] = useState(false);
  const [randomPositions, setRandomPositions] = useState([]);

  // Brick Configuration Data
  // Grid is 6x6. Each unit is roughly 1 brick size.
  // span defines width/height in grid units.
  const bricks = [
    { id: 1, color: "bg-camel", colSpan: 2, rowSpan: 2, colStart: 1, rowStart: 1, w: 2, h: 2 },
    { id: 2, color: "bg-cerulean", colSpan: 1, rowSpan: 2, colStart: 3, rowStart: 1, w: 1, h: 2 },
    { id: 3, color: "bg-baltic-blue", colSpan: 3, rowSpan: 1, colStart: 4, rowStart: 1, w: 3, h: 1 },
    { id: 4, color: "bg-prussian-blue", colSpan: 1, rowSpan: 1, colStart: 4, rowStart: 2, w: 1, h: 1 }, // Gap filler?
    // Let's stick to the visual pattern from before but mapped
    { id: 5, color: "bg-camel", colSpan: 2, rowSpan: 2, colStart: 1, rowStart: 3, w: 2, h: 2 },
    { id: 6, color: "bg-cerulean", colSpan: 2, rowSpan: 2, colStart: 3, rowStart: 3, w: 2, h: 2 },
    { id: 7, color: "bg-baltic-blue", colSpan: 2, rowSpan: 1, colStart: 5, rowStart: 2, w: 2, h: 1 }, // Adjusted
    { id: 8, color: "bg-prussian-blue", colSpan: 2, rowSpan: 2, colStart: 5, rowStart: 3, w: 2, h: 2 },
    { id: 9, color: "bg-cerulean", colSpan: 3, rowSpan: 2, colStart: 4, rowStart: 5, w: 3, h: 2 },
    { id: 10, color: "bg-baltic-blue", colSpan: 2, rowSpan: 2, colStart: 1, rowStart: 5, w: 2, h: 2 } // Corner
  ];

  useEffect(() => {
     // Generate random start positions
     const positions = bricks.map(() => ({
         x: (Math.random() - 0.5) * 800, // Random X between -400 and 400
         y: (Math.random() - 0.5) * 800, // Random Y
         rotate: (Math.random() - 0.5) * 360, // Random rotation
         scale: 0.5 + Math.random() * 0.5,
         delay: Math.random() * 0.5 // Staggered start
     }));
     setRandomPositions(positions);

     // Trigger assembly after a short delay
     const timer = setTimeout(() => {
         setAssembled(true);
     }, 100);

     return () => clearTimeout(timer);
  }, []);

  return (
    <section id="inicio" className="relative bg-[var(--bg-primary)] overflow-hidden transition-colors duration-300 min-h-[600px] flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="relative z-10 pb-12 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-10 px-4 sm:px-6 lg:px-8 text-center sm:text-left transition-colors duration-300">
          <main className="mt-8 mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
            <div className="">
              <h1 className="text-4xl tracking-tight font-extrabold text-[var(--text-primary)] sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Imagina, Diseña y</span>{' '}
                <span className="block text-cerulean xl:inline">Crea el Futuro</span>
              </h1>
              <p className="mt-4 text-base text-[var(--text-secondary)] sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-0 md:mt-5 md:text-xl">
                Desarrolla tus habilidades tecnológicas en un entorno inmersivo y sé parte de esta evolución digital.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a href="#nosotros" className="btn-primary w-full sm:w-auto">
                  Conócenos
                </a>
                <a href="#servicios" className="btn-secondary w-full sm:w-auto">
                  Ver Programas
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      {/* Animated Lego Design */}
      <div className="hidden sm:flex lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-[var(--bg-secondary)] items-center justify-center overflow-visible h-64 sm:h-full transition-colors duration-300">
        <div className="relative w-96 h-96 grid grid-cols-6 grid-rows-6 gap-2 p-10 transform rotate-3 scale-110 perspective-1000">
            {bricks.map((brick, index) => {
                const startPos = randomPositions[index] || { x: 0, y: 0, rotate: 0, scale: 0, delay: 0 };
                
                const style = assembled ? {
                    transform: 'translate(0, 0) rotate(0deg) scale(1)',
                    opacity: 1,
                    transition: `all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${startPos.delay}s`
                } : {
                    transform: `translate(${startPos.x}px, ${startPos.y}px) rotate(${startPos.rotate}deg) scale(${startPos.scale})`,
                    opacity: 0,
                    transition: 'none' // Instant reset if needed, or allow transition out
                };

                return (
                    <div 
                        key={brick.id}
                        className={`col-span-${brick.colSpan} row-span-${brick.rowSpan} col-start-${brick.colStart} row-start-${brick.rowStart} relative`}
                        style={{ zIndex: assembled ? 10 : 0 }} // Ensure proper layering
                    >
                        <LegoBrick 
                            color={brick.color} 
                            style={style}
                            width={brick.w}
                            height={brick.h}
                        />
                    </div>
                );
            })}
        </div>
      </div>
       {/* Mobile background decoration */}
       <div className="absolute top-0 right-0 -z-10 w-full h-full opacity-5 sm:hidden pointer-events-none">
          <div className="grid grid-cols-4 gap-4 p-4">
             <div className="w-full h-20 bg-camel rounded-lg"></div>
             <div className="w-full h-20 bg-baltic-blue rounded-lg col-span-2"></div>
             <div className="w-full h-20 bg-cerulean rounded-lg"></div>
          </div>
       </div>
    </section>
  );
}

function About() {
  return (
    <section id="nosotros" className="py-12 sm:py-16 bg-[var(--bg-secondary)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-cerulean font-semibold tracking-wide uppercase">Sobre Nosotros</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Experiencias Educativas Inmersivas
          </p>
          <p className="mt-4 max-w-2xl text-lg sm:text-xl text-[var(--text-secondary)] mx-auto text-left sm:text-center">
            Imaginamos, diseñamos y creamos experiencias centradas en la formación de niños(as) y jóvenes apasionados por el mundo digital.
          </p>
        </div>
        
        <div className="mt-10 bg-[var(--bg-card)] rounded-lg shadow-lg p-6 sm:p-8 border-l-8 border-baltic-blue transition-colors duration-300">
          <p className="text-lg text-[var(--text-secondary)] mb-4">
            Nuestra metodología pretende que los estudiantes encuentren satisfacción en descubrir lo que piensan, establezcan nuevas relaciones, adquieran conocimientos, encuentren nuevas formas de hacer las cosas y de comunicar sus ideas.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
             <span className="px-3 py-1 bg-camel/20 text-[var(--text-primary)] font-bold rounded-full text-sm">Design Thinking</span>
             <span className="px-3 py-1 bg-baltic-blue/20 text-[var(--text-primary)] font-bold rounded-full text-sm">STEAM</span>
             <span className="px-3 py-1 bg-cerulean/20 text-[var(--text-primary)] font-bold rounded-full text-sm">Innovación</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const ServiceCard = ({ title, description, color, link, icon }) => (
  <div className={`flex flex-col overflow-hidden rounded-lg shadow-lg card-hover bg-[var(--bg-card)] border-t-8 ${color} touch-manipulation transition-colors duration-300`}>
    <div className="flex-1 p-6 flex flex-col justify-between">
      <div className="flex-1">
        <div className="h-12 w-12 rounded-md bg-gray-100 dark:bg-prussian-blue-300 flex items-center justify-center mb-4 text-2xl transition-colors duration-300">
            {icon}
        </div>
        <p className="text-xl font-bold text-[var(--text-primary)]">{title}</p>
        <p className="mt-3 text-base text-[var(--text-secondary)]">{description}</p>
      </div>
      <div className="mt-6">
        <a href={link} className="inline-flex items-center justify-center w-full sm:w-auto px-4 py-2 border border-transparent text-base font-bold rounded-md text-baltic-blue dark:text-camel bg-gray-100 dark:bg-prussian-blue-400 hover:bg-gray-200 dark:hover:bg-prussian-blue-300 transition-colors">
          Saber más <span aria-hidden="true" className="ml-1">&rarr;</span>
        </a>
      </div>
    </div>
  </div>
);

function Services() {
  const services = [
    {
      title: "Acelerador Educativo",
      description: "Brindamos equipo educativo y formación docente para integrar tecnología y metodologías STEAM en el aula.",
      color: "border-camel",
      icon: "🚀",
      link: "#"
    },
    {
      title: "Inteligencia Artificial",
      description: "Explora cómo integrar la IA en el aula para diseñar actividades prácticas que personalicen el aprendizaje.",
      color: "border-cerulean",
      icon: "🤖",
      link: "#"
    },
    {
      title: "Robótica Educativa",
      description: "Formación en programación por bloques y diseño con LEGO Education para resolver retos STEAM.",
      color: "border-baltic-blue",
      icon: "🧱",
      link: "#"
    },
    {
      title: "Recursos 3D",
      description: "Diseñamos modelos 3D low‑poly y recursos optimizados para VR/AR y simuladores educativos.",
      color: "border-prussian-blue-600",
      icon: "🧊",
      link: "#"
    },
    {
      title: "Simuladores Virtuales",
      description: "Capacitación para usar simuladores y entornos 3D que facilitan la enseñanza de electricidad y electrónica.",
      color: "border-camel",
      icon: "⚡",
      link: "#"
    }
  ];

  return (
    <section id="servicios" className="py-12 sm:py-16 bg-[var(--bg-primary)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-[var(--text-primary)] sm:text-4xl">
            Nuestros Programas
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-[var(--text-secondary)] mx-auto">
            Soluciones educativas para el futuro
          </p>
        </div>
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="py-12 sm:py-16 bg-baltic-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">Nuestros Instructores</h2>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8 sm:mb-10 text-white/90">
          Equipo de geeks guatemaltecos expertos en tecnología, con experiencia docente y en la creación de experiencias educativas inmersivas.
        </p>
        <div className="bg-white/10 rounded-lg p-6 sm:p-8 backdrop-blur-sm inline-block w-full sm:w-auto">
          <p className="font-bold text-lg">Formados en integración de tecnología, Design Thinking y STEAM.</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contacto" className="bg-prussian-blue-200 text-[var(--text-primary)] border-t border-prussian-blue-300 transition-colors duration-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold mb-4"><span className="text-camel">Guate</span><span className="text-cerulean">Geeks</span></h3>
            <p className="text-[var(--text-secondary)]">Imagina, diseña y crea el futuro.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-camel">Contacto</h4>
            <ul className="space-y-3 text-[var(--text-secondary)]">
              <li><a href="mailto:info@guategeeks.com" className="hover:text-camel block p-2 md:p-0 bg-white/5 md:bg-transparent rounded-lg md:rounded-none transition-colors">info@guategeeks.com</a></li>
              <li><a href="https://wa.me/50230044972" className="hover:text-camel block p-2 md:p-0 bg-white/5 md:bg-transparent rounded-lg md:rounded-none transition-colors">(+502) 3004-4972</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-cerulean">Síguenos</h4>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="#" className="text-[var(--text-secondary)] hover:text-camel transition-colors transform hover:scale-110">Facebook</a>
              <a href="#" className="text-[var(--text-secondary)] hover:text-camel transition-colors transform hover:scale-110">Instagram</a>
              <a href="#" className="text-[var(--text-secondary)] hover:text-camel transition-colors transform hover:scale-110">TikTok</a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-prussian-blue-300 pt-8 text-center text-[var(--text-secondary)]">
          <p>&copy; {new Date().getFullYear()} GuateGeeks. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check system preference or saved preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        setIsDark(!isDark);
        if (!isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

  return (
    <div className={`min-h-screen font-sans ${isDark ? 'dark' : ''}`}>
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      <Hero />
      <About />
      <Services />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
