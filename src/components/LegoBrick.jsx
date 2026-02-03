import React from 'react';

// Isometric 3D Block Component
const LegoBrick = ({ color, className = "", style = {}, width = 1, height = 1 }) => {
    // Depth of the block in pixels
    const depth = 16; 

    return (
      <div 
        className={`lego-brick relative w-full h-full ${className}`} 
        style={{
            ...style,
            transformStyle: 'preserve-3d'
        }}
      >
        {/* Top Face (The main colored face that faces the viewer) */}
        <div 
            className={`absolute inset-0 ${color} z-10 border border-white/20`} 
            style={{ transform: `translateZ(${depth}px)` }}
        ></div>

        {/* South/Bottom Face (Simulating thickness) */}
        <div 
            className={`absolute bottom-0 left-0 w-full ${color} brightness-75 border border-white/10`} 
            style={{ 
                height: `${depth}px`,
                transformOrigin: 'bottom',
                transform: 'rotateX(-90deg)'
            }}
        ></div>

        {/* East/Right Face (Simulating thickness) */}
        <div 
            className={`absolute top-0 right-0 h-full ${color} brightness-50 border border-white/10`} 
            style={{ 
                width: `${depth}px`,
                transformOrigin: 'right',
                transform: 'rotateY(90deg)'
            }}
        ></div>
        
        {/* Base Shadow (Optional, helps float effect) */}
        <div 
            className="absolute inset-0 bg-black/20 blur-sm"
            style={{ transform: 'translateZ(-10px)' }}
        ></div>
      </div>
    );
};

export default LegoBrick;
