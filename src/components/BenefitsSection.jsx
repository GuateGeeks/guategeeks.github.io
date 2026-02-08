import React from 'react';

const BenefitItem = ({ icon, title, description, delay }) => (
  <div 
    className="flex gap-4 glass-panel rounded-2xl p-5 group cursor-default"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex-shrink-0">
      <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6"
        style={{
          background: 'linear-gradient(135deg, rgba(132, 0, 226, 0.15), rgba(132, 0, 226, 0.05))',
          border: '1px solid rgba(132, 0, 226, 0.2)',
        }}
      >
        <svg className="h-6 w-6 text-royal-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
        </svg>
      </div>
    </div>
    <div>
      <h3 className="text-base font-semibold text-[var(--text-primary)] mb-1 tracking-tight">{title}</h3>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{description}</p>
    </div>
  </div>
);

function BenefitsSection() {
  const benefits = [
    {
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Metodología Propia",
      description: "Contenido adaptado al contexto local y alineado a estándares internacionales.",
    },
    {
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      title: "Soporte Local",
      description: "Respuesta rápida y técnica presencial en Guatemala.",
    },
    {
      icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
      title: "Resultados Medibles",
      description: "Evaluamos el progreso de estudiantes y docentes con métricas claras.",
    },
  ];

  return (
    <section className="py-20 section-glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left - Benefits */}
          <div>
            <div className="inline-flex items-center gap-2 glass-panel rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-royal-violet">Ventajas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
            ¿Por qué elegir{' '}
              <span className="text-gradient-violet">GuateGeeks?</span>
            </h2>
            <p className="mt-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              No solo vendemos tecnología, garantizamos que se utilice para potenciar el aprendizaje.
            </p>
            <div className="mt-8 space-y-4">
              {benefits.map((benefit, i) => (
                <BenefitItem key={i} {...benefit} delay={i * 100} />
              ))}
            </div>
          </div>

          {/* Right - Lab 4.0 Showcase Card */}
          <div className="mt-12 lg:mt-0 relative">
            {/* Ambient glow */}
            <div className="absolute -inset-8 rounded-3xl opacity-30 blur-3xl" style={{
              background: 'linear-gradient(135deg, rgba(132, 0, 226, 0.3), rgba(67, 0, 237, 0.2))',
            }} />
            
            <div className="relative glass-card overflow-hidden">
              {/* Abstract Tech Visualization */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-t-[20px]" style={{
                background: 'linear-gradient(135deg, #0f172a, #1e293b)',
              }}>
                {/* Animated grid */}
                <svg className="absolute inset-0 w-full h-full opacity-20" aria-hidden="true">
                  <pattern id="glass-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-royal-violet"/>
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#glass-grid)" />
                </svg>
                
                {/* Floating orbs */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full opacity-40 animate-pulse"
                  style={{ background: 'radial-gradient(circle, rgba(132, 0, 226, 0.6), transparent 70%)' }}
                />
                <div className="absolute top-1/4 right-1/4 w-20 h-20 rounded-full opacity-30 animate-pulse"
                  style={{ background: 'radial-gradient(circle, rgba(67, 0, 237, 0.6), transparent 70%)', animationDelay: '1s' }}
                />

                {/* Central content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4"
                    style={{
                      background: 'rgba(132, 0, 226, 0.2)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(132, 0, 226, 0.3)',
                    }}
                  >
                    <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-xl tracking-wide">Laboratorio 4.0</h3>
                  <p className="text-royal-violet-800 text-sm mt-1 font-medium">Innovación & Aprendizaje</p>
                </div>

                {/* Decorative dots */}
                <div className="absolute top-6 right-8 w-2 h-2 bg-blue-700 rounded-full" />
                <div className="absolute bottom-8 left-10 w-2 h-2 bg-emerald rounded-full" />
              </div>

              {/* Testimonial */}
              <div className="p-6">
                <blockquote>
                  <p className="text-base text-[var(--text-primary)] italic leading-relaxed">
                     "La implementación de GuateGeeks transformó la dinámica de nuestras clases. Los estudiantes ahora son creadores activos de tecnología."
                  </p>
                </blockquote>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ background: 'linear-gradient(135deg, #8400e2, #a01bff)' }}
                  >
                    MG
                  </div>
                  <div>
                     <div className="text-sm font-semibold text-[var(--text-primary)]">Lic. María González</div>
                     <div className="text-xs text-royal-violet font-medium">Directora Académica — Colegio Valle Verde</div>
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
