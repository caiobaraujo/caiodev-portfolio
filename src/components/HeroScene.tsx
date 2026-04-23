"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.y += 0.003;
    meshRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.35) * 0.15;
  });

  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
      <Sphere ref={meshRef} args={[1.4, 128, 128]} scale={1.45}>
        <MeshDistortMaterial
          color="#67e8f9"
          attach="material"
          distort={0.35}
          speed={2}
          roughness={0.05}
          metalness={0.3}
          transparent
          opacity={0.9}
        />
      </Sphere>
    </Float>
  );
}

function Ring() {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!ringRef.current) return;
    ringRef.current.rotation.z += 0.004;
    ringRef.current.rotation.x += 0.001;
  });

  return (
    <mesh ref={ringRef} rotation={[Math.PI / 2.8, 0, 0]}>
      <torusGeometry args={[2.3, 0.03, 16, 200]} />
      <meshStandardMaterial
        color="#a78bfa"
        emissive="#7c3aed"
        emissiveIntensity={1.2}
      />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <div className="relative h-[360px] w-full md:h-[460px]">
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400/10 via-transparent to-violet-500/10 blur-2xl" />

      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={1.2} />
        <directionalLight
          position={[3, 3, 3]}
          intensity={2.4}
          color="#67e8f9"
        />
        <pointLight position={[-3, -2, 3]} intensity={2} color="#a78bfa" />

        <Stars
          radius={40}
          depth={20}
          count={1200}
          factor={2.8}
          saturation={0}
          fade
          speed={0.5}
        />

        <AnimatedSphere />
        <Ring />
      </Canvas>
    </div>
  );
}
