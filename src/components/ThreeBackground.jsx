import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

// Lego Brick 3D Model
const LegoBrick3D = ({ position, rotation, color, scale = 1 }) => {
  const mesh = useRef();
  
  // Base dimensions for a 2x4 brick roughly
  const width = 4;
  const height = 1.2;
  const depth = 2;

  return (
    <group position={position} rotation={rotation} scale={scale} ref={mesh}>
      {/* Main Block Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[width, height, depth]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} />
      </mesh>

      {/* Studs (2x4 arrangement) */}
      {Array.from({ length: 4 }).map((_, i) => (
        <group key={i}>
             {/* Front row */}
            <mesh position={[-1.5 + i * 1, height/2 + 0.1, 0.5]}>
                <cylinderGeometry args={[0.35, 0.35, 0.2, 16]} />
                <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} />
            </mesh>
            {/* Back row */}
            <mesh position={[-1.5 + i * 1, height/2 + 0.1, -0.5]}>
                <cylinderGeometry args={[0.35, 0.35, 0.2, 16]} />
                <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} />
            </mesh>
        </group>
      ))}
    </group>
  );
};

// Scene Controller that reacts to scroll
const Scene = () => {
    const groupRef = useRef();
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = window.scrollY / totalHeight;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useFrame((state, delta) => {
        if (groupRef.current) {
            // Interpolate position based on scroll
            // Start: Top Left (-5, 2, 0)
            // End: Bottom Right (5, -5, 0)
            const x = -10 + (scrollProgress * 20); // Move across screen
            const y = 5 - (scrollProgress * 15);  // Move down
            
            // Smooth lerp
            groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, x, 0.1);
            groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, y, 0.1);
            
            // Continuous rotation + scroll based rotation
            groupRef.current.rotation.x += delta * 0.5;
            groupRef.current.rotation.y += delta * 0.2;
            groupRef.current.rotation.z = scrollProgress * Math.PI * 4;
        }
    });

    return (
        <group ref={groupRef}>
             {/* Primary "Hero" Block */}
            <LegoBrick3D color="#cba063" scale={0.8} />
            
            {/* Satellite blocks floating around */}
            <group position={[2, 1, -1]} rotation={[1,1,0]}>
                 <LegoBrick3D color="#1e587c" scale={0.4} />
            </group>
            <group position={[-2, -1, 1]} rotation={[0,1,1]}>
                 <LegoBrick3D color="#3783a0" scale={0.3} />
            </group>
        </group>
    );
};

const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }} gl={{ alpha: true }} transparent>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#04223f" />
        <Scene />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
