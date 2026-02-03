import React, { useState } from 'react';

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

const LegoBrick = ({ color, className = "" }) => (
  <div className={`w-full h-full rounded-sm relative ${color} ${className} shadow-sm border-b-4 border-black/10`}>
    <div className="absolute top-0 left-0 w-full h-full flex flex-wrap gap-1 p-1 opacity-20">
       <div className="w-1/4 h-1/4 rounded-full bg-black/20 transform scale-50"></div>
       <div className="w-1/4 h-1/4 rounded-full bg-black/20 transform scale-50"></div>
       <div className="w-1/4 h-1/4 rounded-full bg-black/20 transform scale-50"></div>
       <div className="w-1/4 h-1/4 rounded-full bg-black/20 transform scale-50"></div>
    </div>
  </div>
);

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b-4 border-lego-yellow sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-extrabold text-3xl tracking-tight">
              <span className="text-lego-red">Guate</span>
              <span className="text-lego-blue">Geeks</span>
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-lego-black hover:text-lego-blue font-bold text-lg transition-colors">Inicio</a>
            <a href="#nosotros" className="text-lego-black hover:text-lego-blue font-bold text-lg transition-colors">Nosotros</a>
            <a href="#servicios" className="text-lego-black hover:text-lego-blue font-bold text-lg transition-colors">Acelerador</a>
            <a href="#contacto" className="text-lego-black hover:text-lego-blue font-bold text-lg transition-colors">Contacto</a>
            <a href="#contacto" className="bg-lego-red text-white px-4 py-2 rounded font-bold hover:bg-red-700 transition-colors">Únete</a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-lego-black hover:text-lego-blue p-2 focus:outline-none focus:ring-2 focus:ring-lego-blue rounded-md">
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg border-b-4 border-lego-blue animate-fade-in-down z-40">
          <div className="px-4 py-4 space-y-2 text-center">
            <a href="#inicio" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-lg font-bold text-lego-black hover:bg-gray-50 hover:text-lego-blue">Inicio</a>
            <a href="#nosotros" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-lg font-bold text-lego-black hover:bg-gray-50 hover:text-lego-blue">Nosotros</a>
            <a href="#servicios" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-lg font-bold text-lego-black hover:bg-gray-50 hover:text-lego-blue">Acelerador</a>
            <a href="#contacto" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-lg font-bold text-lego-black hover:bg-gray-50 hover:text-lego-blue">Contacto</a>
             <a href="#contacto" onClick={() => setIsOpen(false)} className="block px-3 py-3 mt-4 rounded-md text-lg font-bold bg-lego-red text-white hover:bg-red-700">Únete</a>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-12 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-10 px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <main className="mt-8 mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
            <div className="">
              <h1 className="text-4xl tracking-tight font-extrabold text-lego-black sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Imagina, Diseña y</span>{' '}
                <span className="block text-lego-blue xl:inline">Crea el Futuro</span>
              </h1>
              <p className="mt-4 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-0 md:mt-5 md:text-xl">
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
      {/* Abstract Lego Design - Hidden on small mobile, visible as background or side on larger */}
      <div className="hidden sm:flex lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-lego-gray items-center justify-center overflow-hidden h-64 sm:h-auto">
        <div className="relative w-full h-full grid grid-cols-6 grid-rows-6 gap-2 p-10 opacity-90 transform rotate-3 scale-110">
            <LegoBrick color="bg-lego-red" className="col-span-2 row-span-2" />
            <LegoBrick color="bg-lego-yellow" className="col-span-1 row-span-2" />
            <LegoBrick color="bg-lego-blue" className="col-span-3 row-span-1" />
            <LegoBrick color="bg-lego-green" className="col-span-1 row-span-1" />
            <LegoBrick color="bg-lego-red" className="col-span-2 row-span-2" />
            <LegoBrick color="bg-lego-yellow" className="col-span-2 row-span-2" />
            <LegoBrick color="bg-lego-blue" className="col-span-2 row-span-1" />
            <div className="col-span-1 row-span-1"></div>
            <LegoBrick color="bg-lego-green" className="col-span-2 row-span-2" />
             <LegoBrick color="bg-lego-yellow" className="col-span-3 row-span-2" />
        </div>
      </div>
       {/* Mobile background decoration */}
       <div className="absolute top-0 right-0 -z-10 w-full h-full opacity-5 sm:hidden pointer-events-none">
          <div className="grid grid-cols-4 gap-4 p-4">
             <div className="w-full h-20 bg-lego-red rounded-lg"></div>
             <div className="w-full h-20 bg-lego-blue rounded-lg col-span-2"></div>
             <div className="w-full h-20 bg-lego-yellow rounded-lg"></div>
          </div>
       </div>
    </section>
  );
}

function About() {
  return (
    <section id="nosotros" className="py-12 sm:py-16 bg-lego-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-lego-blue font-semibold tracking-wide uppercase">Sobre Nosotros</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-lego-black sm:text-4xl">
            Experiencias Educativas Inmersivas
          </p>
          <p className="mt-4 max-w-2xl text-lg sm:text-xl text-gray-500 mx-auto text-left sm:text-center">
            Imaginamos, diseñamos y creamos experiencias centradas en la formación de niños(as) y jóvenes apasionados por el mundo digital.
          </p>
        </div>
        
        <div className="mt-10 bg-white rounded-lg shadow-lg p-6 sm:p-8 border-l-8 border-lego-green">
          <p className="text-lg text-gray-600 mb-4">
            Nuestra metodología pretende que los estudiantes encuentren satisfacción en descubrir lo que piensan, establezcan nuevas relaciones, adquieran conocimientos, encuentren nuevas formas de hacer las cosas y de comunicar sus ideas.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
             <span className="px-3 py-1 bg-lego-yellow/20 text-lego-black font-bold rounded-full text-sm">Design Thinking</span>
             <span className="px-3 py-1 bg-lego-blue/20 text-lego-black font-bold rounded-full text-sm">STEAM</span>
             <span className="px-3 py-1 bg-lego-red/20 text-lego-black font-bold rounded-full text-sm">Innovación</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const ServiceCard = ({ title, description, color, link, icon }) => (
  <div className={`flex flex-col overflow-hidden rounded-lg shadow-lg card-hover bg-white border-t-8 ${color} touch-manipulation`}>
    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
      <div className="flex-1">
        <div className="h-12 w-12 rounded-md bg-gray-100 flex items-center justify-center mb-4 text-2xl">
            {icon}
        </div>
        <p className="text-xl font-bold text-lego-black">{title}</p>
        <p className="mt-3 text-base text-gray-500">{description}</p>
      </div>
      <div className="mt-6">
        <a href={link} className="inline-flex items-center justify-center w-full sm:w-auto px-4 py-2 border border-transparent text-base font-bold rounded-md text-lego-blue bg-blue-50 hover:bg-blue-100 transition-colors">
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
      color: "border-lego-red",
      icon: "🚀",
      link: "#"
    },
    {
      title: "Inteligencia Artificial",
      description: "Explora cómo integrar la IA en el aula para diseñar actividades prácticas que personalicen el aprendizaje.",
      color: "border-lego-blue",
      icon: "🤖",
      link: "#"
    },
    {
      title: "Robótica Educativa",
      description: "Formación en programación por bloques y diseño con LEGO Education para resolver retos STEAM.",
      color: "border-lego-yellow",
      icon: "🧱",
      link: "#"
    },
    {
      title: "Recursos 3D",
      description: "Diseñamos modelos 3D low‑poly y recursos optimizados para VR/AR y simuladores educativos.",
      color: "border-lego-green",
      icon: "🧊",
      link: "#"
    },
    {
      title: "Simuladores Virtuales",
      description: "Capacitación para usar simuladores y entornos 3D que facilitan la enseñanza de electricidad y electrónica.",
      color: "border-lego-red",
      icon: "⚡",
      link: "#"
    }
  ];

  return (
    <section id="servicios" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-lego-black sm:text-4xl">
            Nuestros Programas
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
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
    <section className="py-12 sm:py-16 bg-lego-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">Nuestros Instructores</h2>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8 sm:mb-10">
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
    <footer id="contacto" className="bg-lego-black text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold mb-4"><span className="text-lego-red">Guate</span><span className="text-lego-blue">Geeks</span></h3>
            <p className="text-gray-400">Imagina, diseña y crea el futuro.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-lego-yellow">Contacto</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="mailto:info@guategeeks.com" className="hover:text-white block p-2 md:p-0 bg-gray-800 md:bg-transparent rounded-lg md:rounded-none">info@guategeeks.com</a></li>
              <li><a href="https://wa.me/50230044972" className="hover:text-white block p-2 md:p-0 bg-gray-800 md:bg-transparent rounded-lg md:rounded-none">(+502) 3004-4972</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-lego-green">Síguenos</h4>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">TikTok</a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} GuateGeeks. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
