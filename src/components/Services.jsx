import React from 'react';

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

export default Services;
