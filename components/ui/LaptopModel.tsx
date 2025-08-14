"use client";

import React from "react";
import { useGLTF } from "@react-three/drei";

export default function LaptopModel(props: any) {
  const { scene } = useGLTF("/models/asus_rog_strix_scar_17_2023_g733_gaming_laptop.glb");

  return (
    <primitive
      object={scene}
      scale={0.3} // scaled down to fit
      position={[0, -1.2, 0]} // slightly lower so it's centered
      rotation={[0, Math.PI / 5, 0]} // nice angled view
      {...props}
    />
  );
}

useGLTF.preload("/models/asus_rog_strix_scar_17_2023_g733_gaming_laptop.glb");
