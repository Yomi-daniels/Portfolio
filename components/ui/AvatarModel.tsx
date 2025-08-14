'use client';
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

export default function AvatarModel() {
  const group = useRef<any>(null);
  const { scene } = useGLTF("/models/avatar-fullbodyfrag.glb");

  // Optional: animate rotation
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={group} scale={1.5}>
      <primitive object={scene} />
    </group>
  );
}