import React, { useState, useEffect } from 'react';
import LegoBrick from './LegoBrick';

// Available colors for random selection
const COLORS = [
  "bg-royal-violet",
  "bg-blue", 
  "bg-emerald",
  "bg-raspberry-red",
  "bg-chartreuse"
];

// Helper to generate a random integer
const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Grid dimensions
const GRID_SIZE = 8; // Larger grid for smaller blocks
const MAX_LEVELS = 3; 
const BLOCK_DEPTH = 48; // Taller blocks (visual depth)

function Hero() {
  const [assembled, setAssembled] = useState(false);
  const [shapes, setShapes] = useState([]);
  const [randomPositions, setRandomPositions] = useState([]);

  useEffect(() => {
    // 1. Generate Random Shapes and Layout
    const generateLayout = () => {
        const newShapes = [];
        const grid = Array(MAX_LEVELS).fill(null).map(() => 
            Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(false))
        );

        // Defined small shapes (Max 1x2)
        const allowedShapes = [
            { w: 1, h: 1 },
            { w: 2, h: 1 }, { w: 1, h: 2 }
        ];

        // Helper to try placing a specific shape type
        const tryPlaceShape = (shapeDef) => {
             // Try random positions
             const col = randInt(0, GRID_SIZE - shapeDef.w);
             const row = randInt(0, GRID_SIZE - shapeDef.h);
             
             let placedZ = -1;
             // Try levels (Gravity: lowest first)
             for (let z = 0; z < MAX_LEVELS; z++) {
                let isFree = true;
                for (let dy = 0; dy < shapeDef.h; dy++) {
                    for (let dx = 0; dx < shapeDef.w; dx++) {
                        if (grid[z][row + dy][col + dx]) {
                            isFree = false;
                            break;
                        }
                    }
                    if (!isFree) break;
                }
                if (isFree) {
                    placedZ = z;
                    break;
                }
             }

             if (placedZ !== -1) {
                 // Place it
                for (let dy = 0; dy < shapeDef.h; dy++) {
                    for (let dx = 0; dx < shapeDef.w; dx++) {
                        grid[placedZ][row + dy][col + dx] = true;
                    }
                }
                newShapes.push({
                    id: newShapes.length,
                    colStart: col + 1,
                    rowStart: row + 1,
                    w: shapeDef.w,
                    h: shapeDef.h,
                    z: placedZ,
                    color: COLORS[Math.floor(Math.random() * COLORS.length)]
                });
                return true;
             }
             return false;
        };

        let attempts = 0;
        // Increase block count slightly since they are smaller, but keep it dispersed
        while (newShapes.length < 24 && attempts < 200) { 
            attempts++;
            const def = allowedShapes[Math.floor(Math.random() * allowedShapes.length)];
            tryPlaceShape(def);
        }

        return newShapes;
    };

    const layout = generateLayout();
    setShapes(layout);

    // 2. Generate Random Animation Start Positions
    const positions = layout.map((shape) => {
        // Calculate delay based on Z-level (bottom first)
        // shape.z is 0, 1, or 2.
        // Base delay + z * factor + random variance
        const zDelay = shape.z * 0.4; // 0.4s gap between layers
        const randomDelay = Math.random() * 0.3;
        
        return {
            x: (Math.random() - 0.5) * 1500, 
            y: (Math.random() - 0.5) * 1500, 
            z: 1000 + Math.random() * 1000, 
            rotateX: Math.random() * 360,
            rotateY: Math.random() * 360,
            rotateZ: Math.random() * 360,
            scale: 0.2 + Math.random() * 0.5,
            delay: zDelay + randomDelay
       };
    });
    setRandomPositions(positions);


    // 3. Trigger Animation
    const timer = setTimeout(() => {
        setAssembled(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="inicio" className="relative bg-transparent overflow-hidden transition-colors duration-300 min-h-[600px] flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="relative z-10 pb-12 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-10 px-4 sm:px-6 lg:px-8 text-center sm:text-left transition-colors duration-300">
          <main className="mt-8 mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
            <div className="">
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                <span className="block text-strong-gray-900 dark:text-white xl:inline">Aceleración Tecnológica</span>{' '}
                <span className="block text-royal-violet xl:inline">para Instituciones Educativas</span>
              </h1>
              <p className="mt-4 text-base text-[var(--text-secondary)] sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-0 md:mt-5 md:text-xl">
                Transformamos tu colegio con educación STEAM, robótica y capacitación docente de alto impacto. Preparamos a tus estudiantes para el futuro hoy.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a href="#contacto" className="btn-primary w-full sm:w-auto">
                  Solicitar Propuesta
                </a>
                <a href="https://wa.me/50230044972" target="_blank" rel="noopener noreferrer" className="btn-outline w-full sm:w-auto flex items-center justify-center gap-2">
                   Agendar Asesoría
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      {/* Animated Lego Design */}
      <div 
        className="hidden sm:flex lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 items-center justify-center overflow-visible h-64 sm:h-full transition-colors duration-300"
        style={{ perspective: '2000px' }} 
      >
        <div 
            className="relative w-[30rem] h-[30rem] grid gap-2 p-10 transform transition-transform duration-1000"
            style={{ 
                gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
                gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`,
                transformStyle: 'preserve-3d', 
                transform: 'rotateX(55deg) rotateZ(45deg) scale(0.9) translateZ(-50px)', 
            }}
        >
            {/* Grid Base Plate (Optional visual guide) */}
             <div className="absolute inset-0 border-4 border-white/5 bg-white/5 rounded-xl transform -translate-z-2" style={{ transform: 'translateZ(-2px)' }}></div>

            {shapes.map((shape, index) => {
                const startPos = randomPositions[index] || { x: 0, y: 0, z: 800, rotateX: 0, rotateY: 0, scale: 0, delay: 0 };
                
                // Calculate final Z position based on stacking level
                const finalZ = shape.z * BLOCK_DEPTH; 

                const style = assembled ? {
                    transform: `translate3d(0, 0, ${finalZ}px) rotate(0deg) scale(1)`, 
                    transition: `transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${startPos.delay}s`
                } : {
                    transform: `translate3d(${startPos.x}px, ${startPos.y}px, ${startPos.z}px) rotateX(${startPos.rotateX}deg) rotateY(${startPos.rotateY}deg) rotateZ(${startPos.rotateZ}deg) scale(${startPos.scale})`, 
                    transition: 'none'
                };

                return (
                    <div 
                        key={shape.id}
                        className="relative"
                        style={{ 
                            gridColumnStart: shape.colStart,
                            gridColumnEnd: `span ${shape.w}`,
                            gridRowStart: shape.rowStart,
                            gridRowEnd: `span ${shape.h}`,
                            zIndex: assembled ? (shape.z + 10) : 0, // Higher levels visually on top (mostly for handling overlap glitches if any)
                            transformStyle: 'preserve-3d',
                            ...style
                        }} 
                    >
                        <LegoBrick 
                            color={shape.color} 
                            width={1} 
                            height={1}
                        />
                    </div>
                );
            })}
        </div>
      </div>
       {/* Mobile background decoration */}
       <div className="absolute top-0 right-0 -z-10 w-full h-full opacity-5 sm:hidden pointer-events-none">
          <div className="grid grid-cols-4 gap-4 p-4">
             <div className="w-full h-20 bg-royal-violet rounded-lg"></div>
             <div className="w-full h-20 bg-blue rounded-lg col-span-2"></div>
             <div className="w-full h-20 bg-emerald rounded-lg"></div>
          </div>
       </div>
    </section>
  );
}

export default Hero;
