'use client';
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { Mesh } from "three";


const RotatingSphere = () => {
const meshRef = useRef<any>(null);
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
      meshRef.current.rotation.x += 0.001;
    }
  });

return (
  <mesh ref={meshRef} scale={1.5}>
    <sphereGeometry args={[1, 100, 200]} />
    <MeshDistortMaterial
      distort={0.3}
      speed={2}
       color="#8b5cf6"
    />
  </mesh>
);
};

const ThreeModel = () => {
  return (
    <Canvas camera={{ position: [0, 0, 4] }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 2, 1]} intensity={1} />
      <RotatingSphere />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default ThreeModel;
