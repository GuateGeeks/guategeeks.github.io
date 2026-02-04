import React from 'react';
import { RobotIcon, TeacherIcon, StudentIcon, ParentsIcon, CheckIcon } from './Icons';

const ServiceDetail = ({ label, items }) => (
  <div className="mt-4">
    <h4 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wide mb-2 opacity-80">{label}</h4>
    <ul className="space-y-1">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start text-sm text-[var(--text-secondary)]">
          <span className="mr-2 mt-0.5 text-royal-violet flex-shrink-0"><CheckIcon /></span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ServiceCard = ({ title, description, icon, includes, implementation, deliverables, color }) => (
  <div className={`flex flex-col bg-[var(--bg-card)] rounded-xl shadow-lg overflow-hidden border-t-8 ${color} hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}>
    <div className="p-6 flex-1 flex flex-col">
      <div className={`w-14 h-14 rounded-lg bg-gray-50 dark:bg-strong-gray-300 flex items-center justify-center mb-4 text-3xl transition-colors duration-300 ${color.replace('border-', 'text-')}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{title}</h3>
      <p className="text-[var(--text-secondary)] mb-6 text-sm leading-relaxed">{description}</p>
      
      <div className="border-t border-gray-100 dark:border-strong-gray-700 pt-4 mt-auto space-y-4">
        <ServiceDetail label="Qué incluye" items={includes} />
        <ServiceDetail label="Implementación" items={implementation} />
        <ServiceDetail label="Entregables" items={deliverables} />
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100 dark:border-strong-gray-700">
         <a href="#contacto" className={`block w-full py-2 text-center rounded-md font-bold text-sm transition-colors border-2 ${color.replace('border-', 'border-')} ${color.replace('border-', 'text-')} hover:bg-gray-50 dark:hover:bg-strong-gray-700`}>
            Solicitar Información
         </a>
      </div>
    </div>
  </div>
);

function Services() {
  const services = [
    {
      title: "Provisión de Equipo",
      description: "Equipamos tu institución con la mejor tecnología para el aprendizaje práctico.",
      icon: <RobotIcon />,
      color: "border-raspberry-red",
      includes: ["Kits de robótica educativa", "Placas electrónicas y sensores", "Impresoras 3D y consumibles"],
      implementation: ["Instalación en laboratorio", "Configuración inicial", "Pruebas de funcionamiento"],
      deliverables: ["Laboratorio funcional", "Inventario detallado", "Manuales de uso"]
    },
    {
      title: "Capacitación Docente",
      description: "Empoderamos a tus maestros con herramientas y metodologías STEAM innovadoras.",
      icon: <TeacherIcon />,
      color: "border-blue",
      includes: ["Talleres teórico-prácticos", "Plataforma de recursos", "Material didáctico digital"],
      implementation: ["Sesiones intensivas", "Acompañamiento en aula", "Evaluación continua"],
      deliverables: ["Certificación por horas", "Guías didácticas", "Planificaciones modelo"]
    },
    {
      title: "Talleres para Estudiantes y Padres",
      description: "Experiencias inmersivas para estudiantes y talleres de integración para padres de familia.",
      icon: <StudentIcon />,
      color: "border-emerald",
      includes: ["Talleres curriculares (alumnos)", "Retos y competencias", "Escuela para padres"],
      implementation: ["Clases semanales", "Bootcamps de temporada", "Webinars familiares"],
      deliverables: ["Proyectos funcionales", "Portafolios de evidencia", "Comunidad comprometida"]
    }
  ];

  return (
    <section id="servicios" className="py-16 sm:py-24 bg-[var(--bg-secondary)] backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-royal-violet font-semibold tracking-wide uppercase">Nuestros Servicios</h2>
          <p className="mt-2 text-3xl font-extrabold text-[var(--text-primary)] sm:text-4xl">
            Soluciones Integrales STEAM
          </p>
          <p className="mt-4 text-xl text-[var(--text-secondary)]">
            Acompañamos a tu institución en cada paso del camino hacia la excelencia tecnológica.
          </p>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
