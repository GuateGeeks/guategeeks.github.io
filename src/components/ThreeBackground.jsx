import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const COLORS = ["#8400e2", "#4300ed", "#00d37b", "#ed0062", "#c5f700"];

// Lego Brick 3D Model
const LegoBrick3D = ({ type = '2x4', color, position, rotation, scale = 1 }) => {
  const mesh = useRef();
  
  // Dimensions
  // 1 unit = stud spacing approx
  const width = type === '2x4' ? 4 : 2;
  const height = 1.2;
  const depth = 2;
  const studsX = type === '2x4' ? 4 : 2;

  // Calculate starting X for studs to center them
  // e.g. Width 4: studs at -1.5, -0.5, 0.5, 1.5
  // Width 2: studs at -0.5, 0.5
  const startX = -((width - 1) / 2);

  return (
    <group position={position} rotation={rotation} scale={scale} ref={mesh}>
      {/* Main Block Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[width, height, depth]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} />
      </mesh>

      {/* Studs */}
      {Array.from({ length: studsX }).map((_, i) => (
        <group key={i}>
             {/* Front row */}
            <mesh position={[startX + i, height/2 + 0.1, 0.5]}>
                <cylinderGeometry args={[0.35, 0.35, 0.2, 16]} />
                <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} />
            </mesh>
            {/* Back row */}
            <mesh position={[startX + i, height/2 + 0.1, -0.5]}>
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

    // Generate random configuration on mount
    const blocks = useMemo(() => {
        const count = 30; // Increased count to fill the larger space
        return Array.from({ length: count }).map((_, i) => ({
            id: i,
            type: Math.random() > 0.5 ? '2x4' : '2x2', // 50/50 chance
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
            // Random spread around center - Significantly increased range
            initialPos: new THREE.Vector3(
                (Math.random() - 0.5) * 50, // Much wider X spread
                (Math.random() - 0.5) * 40, // Much taller Y spread
                (Math.random() - 0.5) * 20  // Deeper Z spread
            ),
            rotation: [
                Math.random() * Math.PI * 2,
                Math.random() * Math.PI * 2,
                Math.random() * Math.PI * 2
            ],
            scale: 0.4 + Math.random() * 0.5, // Slightly larger scale variation
            // Individual rotation speeds
            rotSpeed: {
                x: (Math.random() - 0.5) * 0.02,
                y: (Math.random() - 0.5) * 0.02,
                z: (Math.random() - 0.5) * 0.02
            }
        }));
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            // Prevent division by zero
            const progress = totalHeight > 0 ? window.scrollY / totalHeight : 0;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        // Initial call
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useFrame((state, delta) => {
        if (groupRef.current) {
            // Move the entire group based on scroll
            // Scroll 0 -> Group at top
            // Scroll 1 -> Group moves down and across
            const targetY = 5 - (scrollProgress * 25); 
            // Add some horizontal parallax drift
            const targetX = (scrollProgress * 5); 

            // Smoothly interpolate group position
            groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.1);
            groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.1);
            
            // Rotate the whole cluster slowly based on scroll
            groupRef.current.rotation.z = scrollProgress * 0.2;

            // Animate individual blocks
            groupRef.current.children.forEach((child, i) => {
                const blockData = blocks[i];
                if (blockData) {
                    child.rotation.x += blockData.rotSpeed.x;
                    child.rotation.y += blockData.rotSpeed.y;
                    child.rotation.z += blockData.rotSpeed.z;
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
      <Canvas camera={{ position: [0, 0, 15], fov: 50 }} gl={{ alpha: true }} transparent>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8400e2" />
        <Scene />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
