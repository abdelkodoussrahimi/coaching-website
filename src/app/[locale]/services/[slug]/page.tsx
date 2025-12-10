'use client';

import { useTranslations, useMessages } from 'next-intl';
import { notFound } from 'next/navigation';
import { useEffect, useRef, use } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PremiumHeader from '@/components/services/PremiumHeader';
import CTASection from '@/components/services/CTASection';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);

    // Validate slug
    const validSlugs = ['website', 'seo', 'email', 'social_growth', 'payment', 'digital', 'whatsapp'];
    if (!validSlugs.includes(slug)) {
        notFound();
    }

    const t = useTranslations(`services.details.${slug}`);
    const messages = useMessages() as any;
    const serviceDetails = messages.services?.details?.[slug] || {};

    const included = t.raw('included') as string[];
    const process = t.raw('process') as string[];
    const outcomes = t.raw('outcomes') as string[];

    // Optional sections - safely access from messages object
    const portfolio = serviceDetails.portfolio as Array<{ title: string; year: string; type: string }> | undefined;
    const faq = serviceDetails.faq as Array<{ question: string; answer: string }> | undefined;

    const ctaTitle = t('cta.text');
    const ctaButton = t('cta.button');

    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Initialize Lenis for smooth scroll
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Animations
        if (contentRef.current) {
            const elements = contentRef.current.querySelectorAll('.animate-in');
            gsap.fromTo(elements,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: contentRef.current,
                        start: 'top 80%',
                    }
                }
            );
        }

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <main className="bg-black min-h-screen text-white">
            <PremiumHeader />

            <section className="relative pt-32 pb-20 px-6 min-h-[60vh] flex items-center justify-center overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[100px]" />

                <div className="relative max-w-4xl mx-auto text-center space-y-8 z-10">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-sm mb-4">
                        <span className="text-gold text-sm font-semibold tracking-wider uppercase">Premium Service</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                        {t('title')}
                    </h1>

                    <p className="text-xl md:text-2xl text-gold font-light">
                        {t('subtitle')}
                    </p>

                    <div className="w-24 h-1 bg-gradient-to-r from-gold to-transparent mx-auto rounded-full" />
                </div>
            </section>

            <section ref={contentRef} className="py-20 px-6 bg-gradient-to-b from-black to-[#0A0F1F]">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Description Column */}
                    <div className="space-y-8 animate-in">
                        <h2 className="text-3xl font-heading font-bold text-white">
                            Overview
                        </h2>
                        <p className="text-gray-300 leading-loose text-lg border-l-2 border-gold/30 pl-6">
                            {t('description')}
                        </p>

                        <div className="bg-[#1A2333]/50 p-8 rounded-2xl border border-gold/10 hover:border-gold/30 transition-colors">
                            <h3 className="text-xl font-bold text-gold mb-4">What You Will Get</h3>
                            <ul className="space-y-2">
                                {outcomes.map((outcome, index) => (
                                    <li key={index} className="flex items-start gap-3 text-white">
                                        <span className="text-gold mt-1">★</span>
                                        <span className="italic">{outcome}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Process Section - Premium Timeline Design */}
                        <div className="space-y-8 pt-8">
                            <h2 className="text-3xl font-heading font-bold text-white">
                                My Process
                            </h2>
                            <div className="relative">
                                {/* Vertical connecting line */}
                                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-gold/50 to-transparent" />

                                <div className="space-y-6">
                                    {process.map((step, index) => (
                                        <div key={index} className="relative pl-12 group">
                                            {/* Timeline dot */}
                                            <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center shadow-lg shadow-gold/20 group-hover:scale-110 transition-transform duration-300">
                                                <div className="w-3 h-3 rounded-full bg-black" />
                                            </div>

                                            {/* Content card */}
                                            <div className="bg-gradient-to-r from-[#1A2333]/80 to-[#0A0F1F]/50 p-6 rounded-xl border border-white/5 group-hover:border-gold/30 transition-all duration-300 backdrop-blur-sm">
                                                <div className="flex items-start gap-4">
                                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center border border-gold/20 group-hover:bg-gold/20 transition-colors">
                                                        <span className="text-gold font-bold text-sm">{index + 1}</span>
                                                    </div>
                                                    <div className="flex-1">
                                                        <p className="text-gray-200 text-lg leading-relaxed group-hover:text-white transition-colors">
                                                            {step}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Hover glow effect */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features Column */}
                    <div className="space-y-8 animate-in">
                        <h2 className="text-3xl font-heading font-bold text-white">
                            What's Included
                        </h2>
                        <ul className="space-y-4">
                            {included.map((feature, index) => (
                                <li key={index} className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20 group-hover:bg-gold group-hover:text-black transition-all duration-300">
                                        <span className="text-gold group-hover:text-black transition-colors">✓</span>
                                    </div>
                                    <span className="text-lg text-gray-300 group-hover:text-white transition-colors">
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Optional: Portfolio Section */}
                {Array.isArray(portfolio) && (
                    <div className="max-w-5xl mx-auto mt-20 space-y-8 animate-in">
                        <h2 className="text-3xl font-heading font-bold text-white text-center">
                            Selected Works
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {portfolio.map((item, index) => (
                                <div key={index} className="group relative bg-[#1A2333]/30 border border-gold/10 p-8 rounded-xl hover:border-gold/30 transition-all duration-500 overflow-hidden">
                                    <div className="absolute inset-0 bg-gold/5 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-500" />
                                    <div className="relative z-10 space-y-4">
                                        <div className="text-4xl text-white/10 font-heading font-bold group-hover:text-gold/20 transition-colors">
                                            {item.year}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm text-gray-400 mt-1">
                                                {item.type}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Optional: FAQ Section */}
                {Array.isArray(faq) && (
                    <div className="max-w-3xl mx-auto mt-20 space-y-8 animate-in">
                        <h2 className="text-3xl font-heading font-bold text-white text-center">
                            FAQ
                        </h2>
                        <div className="space-y-4">
                            {faq.map((item, index) => (
                                <div key={index} className="bg-[#1A2333]/30 border border-white/5 rounded-lg overflow-hidden hover:border-gold/20 transition-colors">
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-3">
                                            <span className="text-gold">Q.</span> {item.question}
                                        </h3>
                                        <p className="text-gray-400 pl-7 border-l border-gold/10">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </section>

            <CTASection customTitle={ctaTitle} customButtonText={ctaButton} />
        </main>
    );
}
