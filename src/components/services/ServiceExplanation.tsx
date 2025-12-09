'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Sphere } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslations } from 'next-intl';

gsap.registerPlugin(ScrollTrigger);

function RotatingGlobe() {
    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            <group>
                {/* Main sphere */}
                <Sphere args={[1.5, 64, 64]}>
                    <meshStandardMaterial
                        color="#D4AF37"
                        metalness={0.9}
                        roughness={0.1}
                        emissive="#D4AF37"
                        emissiveIntensity={0.3}
                    />
                </Sphere>
                {/* Orbiting rings */}
                {[0, 60, 120].map((rotation, i) => (
                    <mesh key={i} rotation={[0, (rotation * Math.PI) / 180, Math.PI / 4]}>
                        <torusGeometry args={[2, 0.02, 16, 100]} />
                        <meshStandardMaterial
                            color="#F5D76E"
                            metalness={0.8}
                            roughness={0.2}
                            emissive="#F5D76E"
                            emissiveIntensity={0.4}
                        />
                    </mesh>
                ))}
            </group>
        </Float>
    );
}

export default function ServiceExplanation() {
    const t = useTranslations('services.explanation');
    const sectionRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    const benefitKeys = ['impact', 'clarity', 'growth', 'automation', 'authority', 'revenue'] as const;

    useEffect(() => {
        if (!textRef.current || !sectionRef.current) return;

        const bullets = textRef.current.querySelectorAll('.benefit-item');

        gsap.fromTo(
            bullets,
            { x: -50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse',
                },
            }
        );
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative py-32 px-6 bg-gradient-to-b from-black via-[#0A0F1F] to-black overflow-hidden"
        >
            {/* Spotlight effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left: Text Content */}
                <div ref={textRef} className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-5xl md:text-6xl font-heading font-bold text-white">
                            {t('title')} <span className="text-gold">{t('titleHighlight')}</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-light" />
                    </div>

                    <div className="space-y-6">
                        {benefitKeys.map((key) => (
                            <div
                                key={key}
                                className="benefit-item flex items-start gap-4 group cursor-pointer"
                            >
                                <div className="flex-shrink-0 w-2 h-2 mt-2 bg-gold rounded-full group-hover:scale-150 transition-transform duration-300" />
                                <div className="space-y-1">
                                    <h3 className="text-xl font-semibold text-white group-hover:text-gold transition-colors duration-300">
                                        {t(`benefits.${key}.title`)}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">{t(`benefits.${key}.description`)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: 3D Model */}
                <div className="h-[600px] relative">
                    <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
                        <ambientLight intensity={0.3} />
                        <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={1} />
                        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#D4AF37" />
                        <pointLight position={[10, -10, 10]} intensity={0.5} color="#F5D76E" />
                        <RotatingGlobe />
                        <OrbitControls
                            enableZoom={false}
                            enablePan={false}
                            autoRotate
                            autoRotateSpeed={0.5}
                        />
                    </Canvas>
                </div>
            </div>
        </section>
    );
}
