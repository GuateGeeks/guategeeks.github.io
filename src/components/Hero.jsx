import React from 'react';
import heroImg1 from '../assets/img/spike-kids.png';
import heroImg2 from '../assets/img/spike-kids02.png';
import heroImg3 from '../assets/img/spike-kids03.png';

function Hero() {
  return (
    <section id="inicio" className="relative bg-transparent overflow-hidden transition-colors duration-300 min-h-[700px] flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="relative z-10 pb-12 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-10 px-4 sm:px-6 lg:px-8 text-center sm:text-left transition-colors duration-300">
          <main className="mt-8 mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
            <div className="">
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                <span className="block text-strong-gray-900 dark:text-white xl:inline">Aceleración Tecnológica</span>{' '}
                <span className="block text-royal-violet xl:inline">para Instituciones Educativas</span>
              </h1>
              <p className="mt-4 text-base text-[var(--text-secondary)] sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-0 md:mt-5 md:text-xl">
                Transformamos tu colegio con educación STEAM, robótica y capacitación docente de alto impacto. Preparamos a tus estudiantes para el futuro hoy.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a href="#contacto" className="btn-primary w-full sm:w-auto">
                  Solicitar Propuesta
                </a>
                <a href="https://wa.me/50230044972" target="_blank" rel="noopener noreferrer" className="btn-outline w-full sm:w-auto flex items-center justify-center gap-2">
                   Agendar Asesoría
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      {/* Hero Image Collage */}
      <div className="hidden lg:flex lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 items-center justify-center p-4">
        <div className="relative w-full h-[600px] perspective-1000">
            {/* Image 2: Top Right - Floating behind */}
            <div 
                className="absolute top-12 right-8 w-64 h-48 rounded-2xl overflow-hidden shadow-2xl z-10 animate-float"
                style={{ animationDelay: '0s' }}
            >
                <img src={heroImg2} alt="Estudiantes en laboratorio" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-royal-violet/10"></div>
            </div>

            {/* Image 3: Bottom Left - Floating in front */}
            <div 
                className="absolute bottom-24 left-12 w-64 h-48 rounded-2xl overflow-hidden shadow-2xl z-30 animate-float"
                style={{ animationDelay: '2s' }}
            >
                <img src={heroImg3} alt="Aprendizaje práctico" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 border-4 border-white/20 rounded-2xl"></div>
            </div>

            {/* Image 1: Center Main - Largest */}
            <div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-royal-violet/30 shadow-2xl z-20 animate-float border-8 border-white dark:border-strong-gray-800"
                style={{ animationDelay: '1s' }}
            >
                <img src={heroImg1} alt="Estudiantes con robot SPIKE" className="w-full h-full object-cover scale-110 hover:scale-125 transition-transform duration-700" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-emerald rounded-full animate-bounce delay-700"></div>
            <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-blue rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-10 w-3 h-3 bg-raspberry-red rounded-full animate-ping"></div>
        </div>
      </div>

       {/* Mobile background decoration */}
       <div className="absolute top-0 right-0 -z-10 w-full h-full opacity-5 sm:hidden pointer-events-none">
          <div className="grid grid-cols-4 gap-4 p-4">
             <div className="w-full h-20 bg-royal-violet rounded-lg"></div>
             <div className="w-full h-20 bg-blue rounded-lg col-span-2"></div>
             <div className="w-full h-20 bg-emerald rounded-lg"></div>
          </div>
       </div>
    </section>
  );
}

export default Hero;
