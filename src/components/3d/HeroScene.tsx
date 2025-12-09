"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function GoldenObject() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.005;
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh ref={meshRef} scale={1.5}>
                <icosahedronGeometry args={[1, 0]} />
                <meshStandardMaterial
                    color="#D4AF37"
                    metalness={0.9}
                    roughness={0.1}
                    emissive="#D4AF37"
                    emissiveIntensity={0.2}
                />
            </mesh>
        </Float>
    );
}

export default function HeroScene() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#F5D76E" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0A0F1F" />
                <GoldenObject />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
