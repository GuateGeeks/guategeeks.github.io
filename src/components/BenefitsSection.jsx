import React from 'react';

function BenefitsSection() {
  return (
    <section className="py-16 bg-[var(--bg-primary)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-[var(--text-primary)] sm:text-4xl">
              ¿Por qué elegir GuateGeeks?
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-[var(--text-secondary)]">
              Nos diferenciamos por ofrecer un acompañamiento real y cercano. No solo vendemos tecnología, garantizamos que se utilice para potenciar el aprendizaje.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-royal-violet/10 text-royal-violet">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-medium text-[var(--text-primary)]">Metodología Propia</h4>
                  <p className="mt-2 text-base text-[var(--text-secondary)]">
                    Contenido adaptado al contexto local y alineado a estándares internacionales.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-royal-violet/10 text-royal-violet">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-medium text-[var(--text-primary)]">Soporte Local</h4>
                  <p className="mt-2 text-base text-[var(--text-secondary)]">
                    Respuesta rápida y técnica presencial en Guatemala.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-royal-violet/10 text-royal-violet">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-medium text-[var(--text-primary)]">Resultados Medibles</h4>
                  <p className="mt-2 text-base text-[var(--text-secondary)]">
                    Evaluamos el progreso de estudiantes y docentes con métricas claras.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 relative">
             <div className="absolute -inset-4 bg-gradient-to-r from-royal-violet to-blue rounded-xl opacity-20 blur-xl"></div>
             <div className="relative bg-[var(--bg-card)] rounded-xl overflow-hidden shadow-2xl">
                 {/* Abstract Tech Illustration */}
                 <div className="aspect-w-16 aspect-h-9 bg-gray-900 flex items-center justify-center relative overflow-hidden">
                    {/* Background Grid */}
                    <svg className="absolute inset-0 w-full h-full opacity-20" width="100%" height="100%">
                      <pattern id="grid-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-royal-violet"/>
                      </pattern>
                      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                    </svg>
                    
                    {/* Glowing Accent Circle */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-royal-violet opacity-30 blur-3xl rounded-full"></div>

                    {/* Central Icon/Graphic */}
                    <div className="relative z-10 text-center">
                        <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-royal-violet/20 border-2 border-royal-violet mb-4 backdrop-blur-sm">
                            <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                        </div>
                        <h3 className="text-white font-bold text-xl tracking-wider uppercase">Laboratorio 4.0</h3>
                        <p className="text-royal-violet-200 text-sm mt-1">Innovación & Aprendizaje</p>
                    </div>

                    {/* Floating Decorative Elements */}
                    <div className="absolute top-10 right-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-10 left-10 w-3 h-3 bg-emerald-400 rounded-full animate-bounce"></div>
                 </div>
                 <div className="p-6">
                    <blockquote className="mt-2">
                        <p className="text-lg font-medium text-[var(--text-primary)] italic">
                            "La implementación de GuateGeeks transformó la dinámica de nuestras clases. Los estudiantes ahora son creadores activos de tecnología."
                        </p>
                    </blockquote>
                    <div className="mt-4 flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300 dark:bg-strong-gray-600"></div>
                        <div className="ml-4">
                            <div className="text-base font-bold text-[var(--text-primary)]">Lic. María González</div>
                            <div className="text-royal-violet text-sm">Directora Académica</div>
                        </div>
                    </div>
                 </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
