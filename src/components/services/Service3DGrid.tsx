'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { useTranslations } from 'next-intl';

// Individual 3D models for each service
function WhatsAppModel() {
    return (
        <group>
            {[...Array(5)].map((_, i) => (
                <Float key={i} speed={2 + i} rotationIntensity={0.5} floatIntensity={1}>
                    <mesh position={[Math.sin(i) * 1.5, Math.cos(i) * 1.5, 0]}>
                        <sphereGeometry args={[0.3, 32, 32]} />
                        <meshStandardMaterial
                            color="#D4AF37"
                            metalness={0.8}
                            roughness={0.2}
                            emissive="#D4AF37"
                            emissiveIntensity={0.3}
                        />
                    </mesh>
                </Float>
            ))}
        </group>
    );
}

function EmailModel() {
    return (
        <Float speed={2} rotationIntensity={0.3} floatIntensity={1}>
            <group>
                {/* Envelope base */}
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[2, 1.4, 0.1]} />
                    <meshStandardMaterial
                        color="#D4AF37"
                        metalness={0.9}
                        roughness={0.1}
                        emissive="#D4AF37"
                        emissiveIntensity={0.2}
                    />
                </mesh>
                {/* Envelope flap */}
                <mesh position={[0, 0.5, 0.05]} rotation={[Math.PI / 6, 0, 0]}>
                    <boxGeometry args={[2, 0.8, 0.1]} />
                    <meshStandardMaterial
                        color="#F5D76E"
                        metalness={0.8}
                        roughness={0.2}
                        emissive="#F5D76E"
                        emissiveIntensity={0.3}
                    />
                </mesh>
            </group>
        </Float>
    );
}

function SEOModel() {
    return (
        <Float speed={2.5} rotationIntensity={0.4} floatIntensity={1.5}>
            <group rotation={[0, 0, -Math.PI / 4]}>
                {/* Arrow shaft */}
                <mesh position={[0, -0.5, 0]}>
                    <cylinderGeometry args={[0.1, 0.1, 1.5, 32]} />
                    <meshStandardMaterial
                        color="#D4AF37"
                        metalness={0.9}
                        roughness={0.1}
                        emissive="#D4AF37"
                        emissiveIntensity={0.3}
                    />
                </mesh>
                {/* Arrow head */}
                <mesh position={[0, 0.5, 0]} rotation={[0, 0, Math.PI]}>
                    <coneGeometry args={[0.4, 0.8, 32]} />
                    <meshStandardMaterial
                        color="#F5D76E"
                        metalness={0.8}
                        roughness={0.2}
                        emissive="#F5D76E"
                        emissiveIntensity={0.4}
                    />
                </mesh>
            </group>
        </Float>
    );
}

function InfluencerModel() {
    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <group>
                {/* Phone */}
                <mesh>
                    <boxGeometry args={[1, 2, 0.2]} />
                    <meshStandardMaterial
                        color="#1A2333"
                        metalness={0.9}
                        roughness={0.1}
                    />
                </mesh>
                {/* Screen */}
                <mesh position={[0, 0, 0.11]}>
                    <boxGeometry args={[0.9, 1.8, 0.05]} />
                    <meshStandardMaterial
                        color="#D4AF37"
                        metalness={0.5}
                        roughness={0.3}
                        emissive="#D4AF37"
                        emissiveIntensity={0.5}
                    />
                </mesh>
                {/* Floating icons */}
                {[...Array(3)].map((_, i) => (
                    <Float key={i} speed={3 + i} rotationIntensity={1} floatIntensity={2}>
                        <mesh position={[Math.sin(i * 2) * 1.5, Math.cos(i * 2) * 1.5, 0.5]}>
                            <sphereGeometry args={[0.15, 16, 16]} />
                            <meshStandardMaterial
                                color="#F5D76E"
                                metalness={0.8}
                                roughness={0.2}
                                emissive="#F5D76E"
                                emissiveIntensity={0.5}
                            />
                        </mesh>
                    </Float>
                ))}
            </group>
        </Float>
    );
}

function DigitalProductsModel() {
    return (
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1}>
            <group rotation={[0.2, 0.3, 0]}>
                {/* Laptop base */}
                <mesh position={[0, -0.3, 0]}>
                    <boxGeometry args={[2.5, 0.1, 1.8]} />
                    <meshStandardMaterial
                        color="#1A2333"
                        metalness={0.9}
                        roughness={0.1}
                    />
                </mesh>
                {/* Laptop screen */}
                <mesh position={[0, 0.5, -0.8]} rotation={[-0.2, 0, 0]}>
                    <boxGeometry args={[2.4, 1.6, 0.1]} />
                    <meshStandardMaterial
                        color="#0A0F1F"
                        metalness={0.8}
                        roughness={0.2}
                    />
                </mesh>
                {/* Screen glow */}
                <mesh position={[0, 0.5, -0.75]} rotation={[-0.2, 0, 0]}>
                    <boxGeometry args={[2.2, 1.4, 0.05]} />
                    <meshStandardMaterial
                        color="#D4AF37"
                        metalness={0.3}
                        roughness={0.5}
                        emissive="#D4AF37"
                        emissiveIntensity={0.6}
                    />
                </mesh>
            </group>
        </Float>
    );
}

interface ServiceCardProps {
    serviceKey: 'whatsapp' | 'email' | 'seo' | 'influencer' | 'digital';
    model: 'whatsapp' | 'email' | 'seo' | 'influencer' | 'digital';
}

function ServiceCard({ serviceKey, model }: ServiceCardProps) {
    const t = useTranslations('services.cards');
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (cardRef.current) {
            gsap.to(cardRef.current, {
                y: -10,
                boxShadow: '0 20px 60px rgba(212, 175, 55, 0.4)',
                duration: 0.3,
                ease: 'power2.out',
            });
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (cardRef.current) {
            gsap.to(cardRef.current, {
                y: 0,
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
                duration: 0.3,
                ease: 'power2.out',
            });
        }
    };

    const Model3D = () => {
        switch (model) {
            case 'whatsapp':
                return <WhatsAppModel />;
            case 'email':
                return <EmailModel />;
            case 'seo':
                return <SEOModel />;
            case 'influencer':
                return <InfluencerModel />;
            case 'digital':
                return <DigitalProductsModel />;
            default:
                return null;
        }
    };

    return (
        <div
            ref={cardRef}
            className="relative bg-gradient-to-br from-[#0A0F1F] to-[#1A2333] rounded-2xl overflow-hidden border border-gold/20 transition-all duration-300"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)' }}
        >
            {/* 3D Canvas */}
            <div className="h-64 relative">
                <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                    <pointLight position={[-10, -10, -10]} intensity={0.5} color="#D4AF37" />
                    <Model3D />
                    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={isHovered ? 4 : 1} />
                </Canvas>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
                <h3 className="text-2xl font-heading font-bold text-white">{t(`${serviceKey}.title`)}</h3>
                <p className="text-gray-400 leading-relaxed">{t(`${serviceKey}.description`)}</p>
                <button className="group relative px-6 py-3 bg-transparent border border-gold rounded-lg overflow-hidden transition-all duration-300 hover:border-gold-light w-full">
                    <span className="relative z-10 text-gold group-hover:text-black transition-colors duration-300 font-semibold">
                        {t(`${serviceKey}.button`)}
                    </span>
                    <div className="absolute inset-0 bg-gold transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                </button>
            </div>

            {/* Glow effect on hover */}
            {isHovered && (
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent pointer-events-none" />
            )}
        </div>
    );
}

export default function Service3DGrid() {
    const services: Array<{ serviceKey: ServiceCardProps['serviceKey'], model: ServiceCardProps['model'] }> = [
        { serviceKey: 'whatsapp', model: 'whatsapp' },
        { serviceKey: 'email', model: 'email' },
        { serviceKey: 'seo', model: 'seo' },
        { serviceKey: 'influencer', model: 'influencer' },
        { serviceKey: 'digital', model: 'digital' },
    ];

    return (
        <section className="py-20 px-6 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
}
