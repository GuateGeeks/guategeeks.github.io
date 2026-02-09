import React from 'react';
import { HiOutlineCursorClick, HiOutlineSparkles, HiOutlineLightBulb } from 'react-icons/hi';

function About() {
  return (
    <section id="nosotros" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 glass-panel rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-coral">Sobre Nosotros</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              <span className="text-[var(--text-primary)]">Tecnología con </span>
              <span className="text-gradient-coral">Propósito</span>
            </h2>
            <p className="mt-4 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
              En GuateGeeks, cerramos la brecha digital entre la educación tradicional y la industria 4.0, equipando a las futuras generaciones con las herramientas del mañana.
            </p>
          </div>

          {/* Mission Card */}
          <div className="glass-card p-8 sm:p-10 relative overflow-hidden">
            {/* Accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{
              background: 'linear-gradient(to bottom, #ef8556, #5fbad6, #685599)',
            }} />

            <p className="text-lg text-[var(--text-secondary)] leading-relaxed pl-6">
              Nuestra misión es democratizar el acceso a laboratorios de alta tecnología en Guatemala, asegurando que cada inversión en equipo se traduzca en empoderamiento docente y aprendizaje significativo para el estudiante.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mt-6 pl-6">
              {[
                { label: 'Infraestructura', color: 'rgba(239, 133, 86, 0.15)', textColor: '#d9613a', borderColor: 'rgba(239, 133, 86, 0.3)' },
                { label: 'Formación Docente', color: 'rgba(95, 186, 214, 0.15)', textColor: '#3a8fa8', borderColor: 'rgba(95, 186, 214, 0.3)' },
                { label: 'Innovación', color: 'rgba(104, 85, 153, 0.15)', textColor: '#685599', borderColor: 'rgba(104, 85, 153, 0.3)' },
                { label: 'Robótica Educativa', color: 'rgba(217, 97, 58, 0.15)', textColor: '#c4552e', borderColor: 'rgba(217, 97, 58, 0.3)' },
              ].map((tag, i) => (
                <span 
                  key={i}
                  className="px-4 py-1.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 cursor-default"
                  style={{
                    background: tag.color,
                    color: tag.textColor,
                    border: `1px solid ${tag.borderColor}`,
                  }}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {[
              { 
                title: 'Misión',
                desc: 'Equipar y capacitar a la próxima generación de creadores tecnológicos.',
                Icon: HiOutlineCursorClick,
              },
              { 
                title: 'Visión',
                desc: 'Un laboratorio STEAM funcional en cada colegio de Guatemala.',
                Icon: HiOutlineSparkles,
              },
              { 
                title: 'Impacto',
                desc: 'Docentes seguros, alumnos motivados, instituciones líderes.',
                Icon: HiOutlineLightBulb,
              },
            ].map((item, i) => (
              <div key={i} className="glass-panel rounded-2xl p-5 text-center group cursor-default">
                <div className="mb-3 flex justify-center">
                  <item.Icon className="w-8 h-8 text-coral transition-transform duration-300 group-hover:scale-125" aria-hidden="true" />
                </div>
                <h3 className="text-sm font-bold text-[var(--text-primary)] mb-1 tracking-tight">{item.title}</h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
