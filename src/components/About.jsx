import React from 'react';

function About() {
  return (
    <section id="nosotros" className="py-20 section-glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 glass-panel rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-royal-violet">Sobre Nosotros</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              <span className="text-[var(--text-primary)]">Experiencias Educativas </span>
              <span className="text-gradient-violet">Inmersivas</span>
            </h2>
            <p className="mt-4 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
              Imaginamos, diseñamos y creamos experiencias centradas en la formación de jóvenes apasionados por el mundo digital.
            </p>
          </div>

          {/* Mission Card */}
          <div className="glass-card p-8 sm:p-10 relative overflow-hidden">
            {/* Accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{
              background: 'linear-gradient(to bottom, #8400e2, #4300ed, #00d37b)',
            }} />

            <p className="text-lg text-[var(--text-secondary)] leading-relaxed pl-6">
              Nuestra metodología pretende que los estudiantes encuentren satisfacción en descubrir lo que piensan, establezcan nuevas relaciones, adquieran conocimientos, encuentren nuevas formas de hacer las cosas y de comunicar sus ideas.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mt-6 pl-6">
              {[
                { label: 'Design Thinking', color: 'rgba(132, 0, 226, 0.15)', textColor: '#8400e2', borderColor: 'rgba(132, 0, 226, 0.3)' },
                { label: 'STEAM', color: 'rgba(67, 0, 237, 0.15)', textColor: '#4300ed', borderColor: 'rgba(67, 0, 237, 0.3)' },
                { label: 'Innovación', color: 'rgba(0, 211, 123, 0.15)', textColor: '#00d37b', borderColor: 'rgba(0, 211, 123, 0.3)' },
                { label: 'Robótica', color: 'rgba(237, 0, 98, 0.15)', textColor: '#ed0062', borderColor: 'rgba(237, 0, 98, 0.3)' },
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
                desc: 'Democratizar la educación tecnológica en Guatemala.',
                icon: '🎯',
              },
              { 
                title: 'Visión',
                desc: 'Cada estudiante guatemalteco como creador de tecnología.',
                icon: '🌟',
              },
              { 
                title: 'Impacto',
                desc: 'Comunidades educativas transformadas y empoderadas.',
                icon: '💡',
              },
            ].map((item, i) => (
              <div key={i} className="glass-panel rounded-2xl p-5 text-center group cursor-default">
                <div className="text-3xl mb-3 transition-transform duration-300 group-hover:scale-125">{item.icon}</div>
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
