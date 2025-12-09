'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslations } from 'next-intl';

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
    const t = useTranslations('services.cta');
    const ctaRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!ctaRef.current || !buttonRef.current) return;

        // Animate CTA content
        gsap.fromTo(
            '.cta-content',
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: ctaRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            }
        );

        // Pulsing glow effect on button
        gsap.to(buttonRef.current, {
            boxShadow: '0 0 40px rgba(212, 175, 55, 0.6), 0 0 80px rgba(212, 175, 55, 0.3)',
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
        });
    }, []);

    return (
        <section
            ref={ctaRef}
            className="relative py-32 px-6 bg-black overflow-hidden"
        >
            {/* Radial gradient background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />

            {/* Animated lines */}
            <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="ctaGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
                            <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <line x1="0" y1="50%" x2="100%" y2="50%" stroke="url(#ctaGoldGradient)" strokeWidth="2" />
                    <line x1="50%" y1="0" x2="50%" y2="100%" stroke="url(#ctaGoldGradient)" strokeWidth="2" />
                </svg>
            </div>

            <div className="cta-content relative max-w-4xl mx-auto text-center space-y-8">
                <h2 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight">
                    {t('title')}{' '}
                    <span className="text-gold">{t('titleHighlight')}</span>
                </h2>

                <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto">
                    {t('subtitle')}
                </p>

                <div className="pt-8">
                    <button
                        ref={buttonRef}
                        className="group relative px-12 py-5 bg-gradient-to-r from-gold to-gold-light rounded-xl font-bold text-lg text-black overflow-hidden transition-all duration-300 hover:scale-105"
                        style={{ boxShadow: '0 0 30px rgba(212, 175, 55, 0.5)' }}
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            {t('button')}
                            <svg
                                className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                />
                            </svg>
                        </span>

                        {/* Animated shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </button>
                </div>

                {/* Trust indicators */}
                <div className="pt-12 flex flex-wrap justify-center items-center gap-8 text-gray-500 text-sm">
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span>{t('trust.noCommitment')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span>{t('trust.valueDriven')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span>{t('trust.tailored')}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
