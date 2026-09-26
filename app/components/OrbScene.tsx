"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function Orb() {
  const spin = useRef<THREE.Group>(null);
  const ring = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (spin.current) {
      spin.current.rotation.y = t * 0.16;
      spin.current.rotation.x = Math.sin(t * 0.24) * 0.08;
    }
    if (ring.current) {
      ring.current.rotation.x = -0.55 + Math.sin(t * 0.3) * 0.14;
      ring.current.rotation.z = t * 0.3;
    }
  });

  return (
    <Float speed={1.3} rotationIntensity={0.22} floatIntensity={0.55}>
      <group ref={spin}>
        <mesh>
          <icosahedronGeometry args={[1.12, 1]} />
          <meshPhysicalMaterial
            color="#d3e0f8"
            roughness={0.14}
            metalness={0.4}
            transparent
            opacity={0.22}
            clearcoat={0.8}
            clearcoatRoughness={0.3}
          />
        </mesh>
        <mesh scale={1.015}>
          <icosahedronGeometry args={[1.12, 1]} />
          <meshBasicMaterial color="#6fa1ff" wireframe transparent opacity={0.16} />
        </mesh>
        <mesh scale={1.04}>
          <icosahedronGeometry args={[1.12, 3]} />
          <meshBasicMaterial color="#6fa1ff" wireframe transparent opacity={0.08} />
        </mesh>
        <mesh>
          <octahedronGeometry args={[0.5, 0]} />
          <meshPhysicalMaterial
            color="#2b4fd8"
            emissive="#2b4fd8"
            emissiveIntensity={0.7}
            roughness={0.24}
            metalness={0.5}
          />
        </mesh>
      </group>

      <mesh ref={ring} rotation={[-0.55, 0, 0]}>
        <torusGeometry args={[1.55, 0.012, 12, 140]} />
        <meshBasicMaterial color="#9db8ff" transparent opacity={0.42} />
      </mesh>

      <Sparkles
        count={42}
        scale={[5, 3, 3]}
        size={1.3}
        speed={0.3}
        opacity={0.32}
        color="#9db8ff"
        position={[0, 0.4, 0]}
      />
    </Float>
  );
}

export default function OrbScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 6, 5]} intensity={1.1} />
      <pointLight position={[-4, 2, -3]} intensity={18} distance={12} color="#6fa1ff" />
      <Orb />
    </Canvas>
  );
}