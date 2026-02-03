import React, { useState, useEffect } from 'react';
import LegoBrick from './LegoBrick';

function Hero() {
  const [assembled, setAssembled] = useState(false);
  const [randomPositions, setRandomPositions] = useState([]);

  // Brick Configuration Data
  // Grid is 6x6. Each unit is roughly 1 brick size.
  // span defines width/height in grid units.
  const bricks = [
    { id: 1, color: "bg-camel", colSpan: 2, rowSpan: 2, colStart: 1, rowStart: 1, w: 2, h: 2 },
    { id: 2, color: "bg-cerulean", colSpan: 1, rowSpan: 2, colStart: 3, rowStart: 1, w: 1, h: 2 },
    { id: 3, color: "bg-baltic-blue", colSpan: 3, rowSpan: 1, colStart: 4, rowStart: 1, w: 3, h: 1 },
    { id: 4, color: "bg-prussian-blue", colSpan: 1, rowSpan: 1, colStart: 4, rowStart: 2, w: 1, h: 1 }, // Gap filler?
    // Let's stick to the visual pattern from before but mapped
    { id: 5, color: "bg-camel", colSpan: 2, rowSpan: 2, colStart: 1, rowStart: 3, w: 2, h: 2 },
    { id: 6, color: "bg-cerulean", colSpan: 2, rowSpan: 2, colStart: 3, rowStart: 3, w: 2, h: 2 },
    { id: 7, color: "bg-baltic-blue", colSpan: 2, rowSpan: 1, colStart: 5, rowStart: 2, w: 2, h: 1 }, // Adjusted
    { id: 8, color: "bg-prussian-blue", colSpan: 2, rowSpan: 2, colStart: 5, rowStart: 3, w: 2, h: 2 },
    { id: 9, color: "bg-cerulean", colSpan: 3, rowSpan: 2, colStart: 4, rowStart: 5, w: 3, h: 2 },
    { id: 10, color: "bg-baltic-blue", colSpan: 2, rowSpan: 2, colStart: 1, rowStart: 5, w: 2, h: 2 } // Corner
  ];

  useEffect(() => {
     // Generate random start positions
     const positions = bricks.map(() => ({
         x: (Math.random() - 0.5) * 800, // Random X between -400 and 400
         y: (Math.random() - 0.5) * 800, // Random Y
         rotate: (Math.random() - 0.5) * 360, // Random rotation
         scale: 0.5 + Math.random() * 0.5,
         delay: Math.random() * 0.5 // Staggered start
     }));
     setRandomPositions(positions);

     // Trigger assembly after a short delay
     const timer = setTimeout(() => {
         setAssembled(true);
     }, 100);

     return () => clearTimeout(timer);
  }, []);

  return (
    <section id="inicio" className="relative bg-[var(--bg-primary)] overflow-hidden transition-colors duration-300 min-h-[600px] flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="relative z-10 pb-12 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-10 px-4 sm:px-6 lg:px-8 text-center sm:text-left transition-colors duration-300">
          <main className="mt-8 mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
            <div className="">
              <h1 className="text-4xl tracking-tight font-extrabold text-[var(--text-primary)] sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Imagina, Diseña y</span>{' '}
                <span className="block text-cerulean xl:inline">Crea el Futuro</span>
              </h1>
              <p className="mt-4 text-base text-[var(--text-secondary)] sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-0 md:mt-5 md:text-xl">
                Desarrolla tus habilidades tecnológicas en un entorno inmersivo y sé parte de esta evolución digital.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a href="#nosotros" className="btn-primary w-full sm:w-auto">
                  Conócenos
                </a>
                <a href="#servicios" className="btn-secondary w-full sm:w-auto">
                  Ver Programas
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      {/* Animated Lego Design */}
      <div className="hidden sm:flex lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-[var(--bg-secondary)] items-center justify-center overflow-visible h-64 sm:h-full transition-colors duration-300">
        <div className="relative w-96 h-96 grid grid-cols-6 grid-rows-6 gap-2 p-10 transform rotate-3 scale-110 perspective-1000">
            {bricks.map((brick, index) => {
                const startPos = randomPositions[index] || { x: 0, y: 0, rotate: 0, scale: 0, delay: 0 };
                
                const style = assembled ? {
                    transform: 'translate(0, 0) rotate(0deg) scale(1)',
                    opacity: 1,
                    transition: `all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${startPos.delay}s`
                } : {
                    transform: `translate(${startPos.x}px, ${startPos.y}px) rotate(${startPos.rotate}deg) scale(${startPos.scale})`,
                    opacity: 0,
                    transition: 'none' // Instant reset if needed, or allow transition out
                };

                return (
                    <div 
                        key={brick.id}
                        className={`col-span-${brick.colSpan} row-span-${brick.rowSpan} col-start-${brick.colStart} row-start-${brick.rowStart} relative`}
                        style={{ zIndex: assembled ? 10 : 0 }} // Ensure proper layering
                    >
                        <LegoBrick 
                            color={brick.color} 
                            style={style}
                            width={brick.w}
                            height={brick.h}
                        />
                    </div>
                );
            })}
        </div>
      </div>
       {/* Mobile background decoration */}
       <div className="absolute top-0 right-0 -z-10 w-full h-full opacity-5 sm:hidden pointer-events-none">
          <div className="grid grid-cols-4 gap-4 p-4">
             <div className="w-full h-20 bg-camel rounded-lg"></div>
             <div className="w-full h-20 bg-baltic-blue rounded-lg col-span-2"></div>
             <div className="w-full h-20 bg-cerulean rounded-lg"></div>
          </div>
       </div>
    </section>
  );
}

export default Hero;
