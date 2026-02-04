import React from 'react';

function About() {
  return (
    <section id="nosotros" className="py-12 sm:py-16 bg-[var(--bg-secondary)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-royal-violet font-semibold tracking-wide uppercase">Sobre Nosotros</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Experiencias Educativas Inmersivas
          </p>
          <p className="mt-4 max-w-2xl text-lg sm:text-xl text-[var(--text-secondary)] mx-auto text-left sm:text-center">
            Imaginamos, diseñamos y creamos experiencias centradas en la formación de niños(as) y jóvenes apasionados por el mundo digital.
          </p>
        </div>
        
        <div className="mt-10 bg-[var(--bg-card)] rounded-lg shadow-lg p-6 sm:p-8 border-l-8 border-royal-violet transition-colors duration-300">
          <p className="text-lg text-[var(--text-secondary)] mb-4">
            Nuestra metodología pretende que los estudiantes encuentren satisfacción en descubrir lo que piensan, establezcan nuevas relaciones, adquieran conocimientos, encuentren nuevas formas de hacer las cosas y de comunicar sus ideas.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
             <span className="px-3 py-1 bg-royal-violet/20 text-royal-violet font-bold rounded-full text-sm">Design Thinking</span>
             <span className="px-3 py-1 bg-blue/20 text-blue font-bold rounded-full text-sm">STEAM</span>
             <span className="px-3 py-1 bg-emerald/20 text-emerald-600 dark:text-emerald-400 font-bold rounded-full text-sm">Innovación</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
