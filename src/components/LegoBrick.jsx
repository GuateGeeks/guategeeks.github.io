import React from 'react';

// Enhanced Lego Brick Component
const LegoBrick = ({ color, className = "", style = {}, width = 1, height = 1 }) => {
    // Generate stud array based on dimensions (assuming 1 unit = 2x2 grid of studs roughly, or just fill space)
    // For simplicity, let's say 1 grid cell = 4 studs (2x2)
    const studCount = width * height * 4; 
    const studs = Array.from({ length: studCount });

    return (
      <div 
        className={`lego-brick w-full h-full ${color} ${className}`} 
        style={style}
      >
        <div className="absolute top-0 left-0 w-full h-full grid gap-1 p-1" 
             style={{ 
                 gridTemplateColumns: `repeat(${width * 2}, 1fr)`, 
                 gridTemplateRows: `repeat(${height * 2}, 1fr)` 
             }}>
           {studs.map((_, i) => (
               <div key={i} className={`lego-stud w-full h-full ${color} brightness-110`}></div>
           ))}
        </div>
      </div>
    );
};

export default LegoBrick;
