import React from 'react';
import { HiOutlineCheckCircle, HiOutlineOfficeBuilding, HiTrendingUp, HiOutlineBeaker } from 'react-icons/hi';

const BenefitItem = ({ Icon, title, description, delay }) => (
  <div 
    className="flex gap-4 glass-panel rounded-2xl p-5 group cursor-default"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex-shrink-0">
      <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6"
        style={{
          background: 'linear-gradient(135deg, rgba(239, 133, 86, 0.15), rgba(239, 133, 86, 0.05))',
          border: '1px solid rgba(239, 133, 86, 0.2)',
        }}
      >
        <Icon className="h-6 w-6 text-coral" aria-hidden="true" />
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
      Icon: HiOutlineCheckCircle,
      title: "Metodología Propia",
      description: "Contenido adaptado al contexto local y alineado a estándares internacionales.",
    },
    {
      Icon: HiOutlineOfficeBuilding,
      title: "Soporte Local",
      description: "Respuesta rápida y técnica presencial en Guatemala.",
    },
    {
      Icon: HiTrendingUp,
      title: "Resultados Medibles",
      description: "Evaluamos el progreso de estudiantes y docentes con métricas claras.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left - Benefits */}
          <div>
            <div className="inline-flex items-center gap-2 glass-panel rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-coral">Ventajas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
            ¿Por qué elegir{' '}
               <span className="text-gradient-coral">GuateGeeks?</span>
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
              background: 'linear-gradient(135deg, rgba(239, 133, 86, 0.3), rgba(104, 85, 153, 0.2))',
            }} />
            
            <div className="relative glass-card overflow-hidden">
              {/* Abstract Tech Visualization */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-t-[20px]" style={{
                background: 'linear-gradient(135deg, #2a3040, #333d4d)',
              }}>
                {/* Animated grid */}
                <svg className="absolute inset-0 w-full h-full opacity-20" aria-hidden="true">
                  <pattern id="glass-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                     <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-coral"/>
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#glass-grid)" />
                </svg>
                
                {/* Floating orbs */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full opacity-40 animate-pulse"
                  style={{ background: 'radial-gradient(circle, rgba(239, 133, 86, 0.6), transparent 70%)' }}
                />
                <div className="absolute top-1/4 right-1/4 w-20 h-20 rounded-full opacity-30 animate-pulse"
                  style={{ background: 'radial-gradient(circle, rgba(104, 85, 153, 0.6), transparent 70%)', animationDelay: '1s' }}
                />

                {/* Central content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4"
                    style={{
                       background: 'rgba(239, 133, 86, 0.2)',
                      backdropFilter: 'blur(20px)',
                       border: '1px solid rgba(239, 133, 86, 0.3)',
                    }}
                  >
                    <HiOutlineBeaker className="h-10 w-10 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-white font-bold text-xl tracking-wide">Laboratorio 4.0</h3>
                  <p className="text-coral-800 text-sm mt-1 font-medium">Innovación & Aprendizaje</p>
                </div>

                {/* Decorative dots */}
                <div className="absolute top-6 right-8 w-2 h-2 bg-sky rounded-full" />
                <div className="absolute bottom-8 left-10 w-2 h-2 bg-plum rounded-full" />
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
                    style={{ background: 'linear-gradient(135deg, #ef8556, #f4a07a)' }}
                  >
                    MG
                  </div>
                  <div>
                     <div className="text-sm font-semibold text-[var(--text-primary)]">Lic. María González</div>
                     <div className="text-xs text-coral font-medium">Directora Académica — Colegio Valle Verde</div>
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
