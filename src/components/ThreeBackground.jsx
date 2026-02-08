import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const COLORS = [
  "#8400e2", // Royal Violet
  "#a01bff", // Lighter violet
  "#4300ed", // Blue
  "#6123ff", // Lighter blue
  "#00d37b", // Emerald
  "#b854ff", // Lavender
];

// Lego Brick 3D with glass-like material
const LegoBrick3D = ({ type = '2x4', color, position, rotation, scale = 1 }) => {
  const width = type === '2x4' ? 4 : 2;
  const height = 1.2;
  const depth = 2;
  const studsX = type === '2x4' ? 4 : 2;
  const startX = -((width - 1) / 2);

  return (
    <group position={position} rotation={rotation} scale={scale}>
      {/* Main Block Body */}
      <mesh>
        <boxGeometry args={[width, height, depth]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} />
      </mesh>

      {/* Studs */}
      {Array.from({ length: studsX }).map((_, i) => (
        <group key={i}>
          <mesh position={[startX + i, height / 2 + 0.1, 0.5]}>
            <cylinderGeometry args={[0.35, 0.35, 0.2, 16]} />
            <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} />
          </mesh>
          <mesh position={[startX + i, height / 2 + 0.1, -0.5]}>
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

  const blocks = useMemo(() => {
    const count = 30;
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      type: Math.random() > 0.5 ? '2x4' : '2x2',
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      initialPos: new THREE.Vector3(
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 20
      ),
      rotation: [
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
      ],
      scale: 0.4 + Math.random() * 0.5,
      rotSpeed: {
        x: (Math.random() - 0.5) * 0.008,
        y: (Math.random() - 0.5) * 0.008,
        z: (Math.random() - 0.5) * 0.008,
      },
      floatSpeed: 0.15 + Math.random() * 0.35,
      floatAmplitude: 0.4 + Math.random() * 1.2,
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
      const targetY = 5 - scrollProgress * 25;
      const targetX = scrollProgress * 5;
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.05);
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.05);
      groupRef.current.rotation.z = scrollProgress * 0.15;

      // Animate individual blocks: gentle rotation + floating
      groupRef.current.children.forEach((child, i) => {
        const block = blocks[i];
        if (block) {
          child.rotation.x += block.rotSpeed.x;
          child.rotation.y += block.rotSpeed.y;
          child.rotation.z += block.rotSpeed.z;

          child.position.y =
            block.initialPos.y +
            Math.sin(time * block.floatSpeed + block.phase) * block.floatAmplitude;
          child.position.x =
            block.initialPos.x +
            Math.cos(time * block.floatSpeed * 0.7 + block.phase) * block.floatAmplitude * 0.3;
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {blocks.map((block) => (
        <LegoBrick3D
          key={block.id}
          type={block.type}
          color={block.color}
          position={block.initialPos}
          rotation={block.rotation}
          scale={block.scale}
        />
      ))}
    </group>
  );
};

const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8400e2" />
        <pointLight position={[10, -5, 10]} intensity={0.3} color="#4300ed" />
        <Scene />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
