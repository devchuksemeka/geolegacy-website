"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function Scene() {
  const spin = useRef<THREE.Group>(null);

  useFrame(({ clock, camera }, delta) => {
    let progress = 0;
    if (typeof window !== "undefined") {
      progress = Math.min(
        Math.max(window.scrollY / (window.innerHeight * 0.9), 0),
        1
      );
    }

    const group = spin.current;
    if (group) {
      const targetY = clock.elapsedTime * 0.22 + progress * Math.PI * 1.5;
      const targetZ = -progress * 0.55;
      const targetX = Math.sin(progress * Math.PI) * 0.35;
      group.rotation.y = THREE.MathUtils.damp(
        group.rotation.y,
        targetY,
        2.5,
        delta
      );
      group.rotation.z = THREE.MathUtils.damp(group.rotation.z, targetZ, 3, delta);
      group.rotation.x = THREE.MathUtils.damp(group.rotation.x, targetX, 3, delta);
      group.position.y = THREE.MathUtils.damp(group.position.y, progress * 0.5, 3, delta);
    }

    camera.position.z = THREE.MathUtils.damp(
      camera.position.z,
      5.6 - progress * 1.4,
      2.5,
      delta
    );
    camera.position.y = THREE.MathUtils.damp(
      camera.position.y,
      0.6 + progress * 0.6,
      2.5,
      delta
    );
    camera.lookAt(0, -0.1, 0);
  });

  return (
    <group>
      <Float
        speed={1.2}
        rotationIntensity={0.18}
        floatIntensity={0.5}
      >
        <group ref={spin}>
          <mesh rotation={[Math.PI / 2.3, 0, 0.4]}>
            <torusGeometry args={[1.7, 0.008, 12, 160]} />
            <meshBasicMaterial color="#9db8ff" transparent opacity={0.5} />
          </mesh>
          <mesh rotation={[Math.PI / 1.75, 0.35, -0.5]}>
            <torusGeometry args={[2.15, 0.006, 12, 160]} />
            <meshBasicMaterial color="#c7d2ee" transparent opacity={0.35} />
          </mesh>

          <mesh>
            <octahedronGeometry args={[0.72, 0]} />
            <meshPhysicalMaterial
              color="#dbe7ff"
              roughness={0.12}
              metalness={0.35}
              transparent
              opacity={0.92}
              clearcoat={1}
              clearcoatRoughness={0.25}
            />
          </mesh>
          <mesh scale={1.02}>
            <octahedronGeometry args={[0.72, 1]} />
            <meshBasicMaterial color="#6fa1ff" wireframe transparent opacity={0.5} />
          </mesh>

          <mesh>
            <octahedronGeometry args={[0.3, 0]} />
            <meshPhysicalMaterial
              color="#2b4fd8"
              emissive="#2b4fd8"
              emissiveIntensity={0.65}
              roughness={0.3}
            />
          </mesh>

          <mesh position={[0, -1.35, 0]}>
            <cylinderGeometry args={[0.035, 0.035, 1.6, 12]} />
            <meshStandardMaterial color="#16296b" roughness={0.4} metalness={0.6} />
          </mesh>
          <mesh position={[0, -2.12, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.95, 1, 0.05, 48]} />
            <meshStandardMaterial color="#0f1c4f" roughness={0.5} metalness={0.4} />
          </mesh>
        </group>
      </Float>

      <Sparkles
        count={70}
        scale={[6, 3, 3]}
        size={1.6}
        speed={0.35}
        opacity={0.45}
        color="#6fa1ff"
        position={[0, 0.3, 0]}
      />
      <ambientLight intensity={0.75} />
      <directionalLight position={[4, 6, 5]} intensity={1.1} />
      <pointLight position={[-4, 2, -3]} intensity={20} distance={12} color="#6fa1ff" />
      <pointLight position={[4, -1, 3]} intensity={14} distance={10} color="#ffffff" />
    </group>
  );
}

export default function HeroScene({
  onReady,
}: {
  onReady?: () => void;
}) {
  return (
    <Canvas
      camera={{ position: [0, 0.6, 5.6], fov: 42 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      onCreated={() => onReady?.()}
    >
      <Scene />
    </Canvas>
  );
}