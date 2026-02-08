import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Softer, more ambient palette for liquid glass aesthetic
const COLORS = [
  "#8400e2", // Royal Violet
  "#a01bff", // Lighter violet
  "#4300ed", // Blue
  "#6123ff", // Lighter blue
  "#00d37b", // Emerald
  "#b854ff", // Lavender
];

// Smooth glass-like sphere instead of hard lego bricks
const GlassOrb = ({ color, position, scale = 1 }) => {
  const mesh = useRef();

  return (
    <mesh ref={mesh} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhysicalMaterial 
        color={color} 
        roughness={0.1} 
        metalness={0.1}
        transmission={0.6}
        thickness={1.5}
        transparent
        opacity={0.4}
      />
    </mesh>
  );
};

// Scene Controller
const Scene = () => {
  const groupRef = useRef();
  const [scrollProgress, setScrollProgress] = useState(0);

  const orbs = useMemo(() => {
    const count = 20;
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      initialPos: new THREE.Vector3(
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 20
      ),
      scale: 0.3 + Math.random() * 1.2,
      floatSpeed: 0.2 + Math.random() * 0.5,
      floatAmplitude: 0.5 + Math.random() * 1.5,
      phase: Math.random() * Math.PI * 2,
    }));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? window.scrollY / totalHeight : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime;
      
      // Smooth parallax based on scroll
      const targetY = 5 - (scrollProgress * 20);
      const targetX = scrollProgress * 3;
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.05);
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.05);
      groupRef.current.rotation.z = scrollProgress * 0.1;

      // Float each orb individually
      groupRef.current.children.forEach((child, i) => {
        const orb = orbs[i];
        if (orb) {
          child.position.y = orb.initialPos.y + Math.sin(time * orb.floatSpeed + orb.phase) * orb.floatAmplitude;
          child.position.x = orb.initialPos.x + Math.cos(time * orb.floatSpeed * 0.7 + orb.phase) * orb.floatAmplitude * 0.5;
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {orbs.map((orb) => (
        <GlassOrb
          key={orb.id}
          color={orb.color}
          position={orb.initialPos}
          scale={orb.scale}
        />
      ))}
    </group>
  );
};

const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 20], fov: 45 }} 
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={1.0} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={0.4} color="#8400e2" />
        <pointLight position={[10, -5, 10]} intensity={0.3} color="#4300ed" />
        <Scene />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
