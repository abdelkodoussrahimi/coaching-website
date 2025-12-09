'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useTranslations } from 'next-intl';

export default function PremiumHeader() {
    const t = useTranslations('services.header');
    const headerRef = useRef<HTMLDivElement>(null);
    const linesRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (!headerRef.current) return;

        // Animate gold lines
        const lines = linesRef.current?.querySelectorAll('.gold-line');
        if (lines) {
            gsap.fromTo(
                lines,
                {
                    scaleX: 0,
                    opacity: 0
                },
                {
                    scaleX: 1,
                    opacity: 0.6,
                    duration: 2,
                    stagger: 0.3,
                    ease: 'power2.out',
                    repeat: -1,
                    yoyo: true,
                }
            );
        }

        // Animate text
        gsap.fromTo(
            '.premium-title',
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
        );

        gsap.fromTo(
            '.premium-subtitle',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, delay: 0.3, ease: 'power3.out' }
        );
    }, []);

    return (
        <div
            ref={headerRef}
            className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        >
            {/* Dark gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0A0F1F] to-[#0D1B3A]" />

            {/* Animated gold lines */}
            <svg
                ref={linesRef}
                className="absolute inset-0 w-full h-full opacity-30"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
                        <stop offset="50%" stopColor="#D4AF37" stopOpacity="1" />
                        <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                    </linearGradient>
                </defs>
                <line
                    className="gold-line"
                    x1="0"
                    y1="20%"
                    x2="100%"
                    y2="20%"
                    stroke="url(#goldGradient)"
                    strokeWidth="1"
                />
                <line
                    className="gold-line"
                    x1="0"
                    y1="40%"
                    x2="100%"
                    y2="40%"
                    stroke="url(#goldGradient)"
                    strokeWidth="1"
                />
                <line
                    className="gold-line"
                    x1="0"
                    y1="60%"
                    x2="100%"
                    y2="60%"
                    stroke="url(#goldGradient)"
                    strokeWidth="1"
                />
                <line
                    className="gold-line"
                    x1="0"
                    y1="80%"
                    x2="100%"
                    y2="80%"
                    stroke="url(#goldGradient)"
                    strokeWidth="1"
                />
            </svg>

            {/* Particle effects */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-gold rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${5 + Math.random() * 5}s`,
                            opacity: 0.3 + Math.random() * 0.4,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                <h1 className="premium-title text-6xl md:text-8xl font-heading font-bold text-white mb-6 tracking-tight">
                    {t('title')}{' '}
                    <span className="text-gold">{t('titleHighlight')}</span>
                </h1>
                <p className="premium-subtitle text-xl md:text-2xl text-gray-300 font-light tracking-wide">
                    {t('subtitle')}
                </p>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
        </div>
    );
}
