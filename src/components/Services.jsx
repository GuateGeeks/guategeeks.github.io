import React, { useState } from 'react';
import { RobotIcon, TeacherIcon, StudentIcon, CheckIcon } from './Icons';

const ServiceCard = ({ title, description, icon, includes, implementation, deliverables, accentColor, accentGlow, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="glass-card group cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Accent glow on hover */}
      <div 
        className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
        style={{ 
          background: accentGlow,
          filter: 'blur(40px)',
          transform: 'scale(0.8)',
        }}
      />

      <div className="p-7">
        {/* Icon */}
        <div 
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3"
          style={{
            background: `${accentColor}15`,
            border: `1px solid ${accentColor}30`,
            color: accentColor,
          }}
        >
          <div className="w-7 h-7">{icon}</div>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 tracking-tight">{title}</h3>
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{description}</p>

        {/* Expandable Details */}
        <div className={`transition-all duration-500 overflow-hidden ${
          isExpanded ? 'max-h-[600px] opacity-100 mt-5' : 'max-h-0 opacity-0 mt-0'
        }`}>
          <div className="space-y-4 border-t border-[var(--glass-border-subtle)] pt-5">
            {[
              { label: 'Incluye', items: includes },
              { label: 'Implementacion', items: implementation },
              { label: 'Entregables', items: deliverables },
            ].map((section, sIdx) => (
              <div key={sIdx}>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mb-2">
                  {section.label}
                </h4>
                <ul className="space-y-1.5">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-[var(--text-secondary)]">
                      <span className="mr-2 mt-0.5 flex-shrink-0" style={{ color: accentColor }}>
                        <CheckIcon />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Toggle hint & CTA */}
        <div className="mt-5 flex items-center justify-between">
          <span className="text-xs text-[var(--text-tertiary)] font-medium">
            {isExpanded ? 'Menos detalles' : 'Ver detalles'}
          </span>
          <a 
            href="#contacto" 
            onClick={(e) => e.stopPropagation()}
            className="text-sm font-semibold transition-all duration-300 hover:gap-2 inline-flex items-center gap-1"
            style={{ color: accentColor }}
          >
            Solicitar Info
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

function Services() {
  const services = [
    {
      title: "Provision de Equipo",
      description: "Equipamos tu institucion con la mejor tecnologia para el aprendizaje practico.",
      icon: <RobotIcon />,
      accentColor: "#ed0062",
      accentGlow: "radial-gradient(circle, rgba(237, 0, 98, 0.15), transparent 70%)",
      includes: ["Kits de robotica educativa", "Placas electronicas y sensores", "Impresoras 3D y consumibles"],
      implementation: ["Instalacion en laboratorio", "Configuracion inicial", "Pruebas de funcionamiento"],
      deliverables: ["Laboratorio funcional", "Inventario detallado", "Manuales de uso"]
    },
    {
      title: "Capacitacion Docente",
      description: "Empoderamos a tus maestros con herramientas y metodologias STEAM innovadoras.",
      icon: <TeacherIcon />,
      accentColor: "#4300ed",
      accentGlow: "radial-gradient(circle, rgba(67, 0, 237, 0.15), transparent 70%)",
      includes: ["Talleres teorico-practicos", "Plataforma de recursos", "Material didactico digital"],
      implementation: ["Sesiones intensivas", "Acompanamiento en aula", "Evaluacion continua"],
      deliverables: ["Certificacion por horas", "Guias didacticas", "Planificaciones modelo"]
    },
    {
      title: "Talleres Estudiantes y Padres",
      description: "Experiencias inmersivas para estudiantes y talleres de integracion familiar.",
      icon: <StudentIcon />,
      accentColor: "#00d37b",
      accentGlow: "radial-gradient(circle, rgba(0, 211, 123, 0.15), transparent 70%)",
      includes: ["Talleres curriculares", "Retos y competencias", "Escuela para padres"],
      implementation: ["Clases semanales", "Bootcamps de temporada", "Webinars familiares"],
      deliverables: ["Proyectos funcionales", "Portafolios de evidencia", "Comunidad comprometida"]
    }
  ];

  return (
    <section id="servicios" className="py-20 sm:py-28 section-glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass-panel rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-royal-violet">Nuestros Servicios</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Soluciones Integrales{' '}
            <span className="text-gradient-violet">STEAM</span>
          </h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            Acompanamos a tu institucion en cada paso hacia la excelencia tecnologica.
          </p>
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
