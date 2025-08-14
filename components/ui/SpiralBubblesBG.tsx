'use client';
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function SpiralBubbles() {
  const meshRef = useRef<any>(null);

  const geometry = useMemo(() => {
    const points = [];
    const bubbles = 80;
    const spiralTurns = 3;
    for (let i = 0; i < bubbles; i++) {
      const t = (i / bubbles) * Math.PI * 2 * spiralTurns;
      const r = 2 + Math.sin(t * 2) * 0.5;
      points.push(
        new THREE.Vector3(
          Math.cos(t) * r,
          Math.sin(t) * r,
          Math.sin(t * 3) * 0.7
        )
      );
    }
    const curve = new THREE.CatmullRomCurve3(points);
    return new THREE.TubeGeometry(curve, 200, 0.5, 16, false); // radius increased
  }, []);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime();
      const position = meshRef.current.geometry.attributes.position;
      for (let i = 0; i < position.count; i++) {
        const x = position.getX(i);
        const y = position.getY(i);
        const z = position.getZ(i);
        position.setXYZ(
          i,
          x + Math.sin(time + i * 0.1) * 0.03,
          y + Math.cos(time + i * 0.1) * 0.03,
          z + Math.sin(time * 0.7 + i * 0.13) * 0.03
        );
      }
      position.needsUpdate = true;
      meshRef.current.rotation.z += 0.002;
      meshRef.current.rotation.x += 0.001;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshPhysicalMaterial
        color="#a78bfa"
        roughness={0.3}
        clearcoat={0.8}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
}

export default function SpiralBubblesBG() {
  return (
    <Canvas
      className="absolute inset-0 z-0"
      camera={{ position: [0, 0, 7], fov: 50 }}
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <SpiralBubbles />
    </Canvas>
  );
}