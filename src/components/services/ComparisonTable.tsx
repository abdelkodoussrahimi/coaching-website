'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslations } from 'next-intl';

gsap.registerPlugin(ScrollTrigger);

export default function ComparisonTable() {
    const t = useTranslations('services.comparison');
    const tableRef = useRef<HTMLDivElement>(null);

    const serviceKeys = ['website', 'seo', 'email', 'social_growth', 'payment', 'digital', 'whatsapp'] as const;

    useEffect(() => {
        if (!tableRef.current) return;

        const rows = tableRef.current.querySelectorAll('.table-row');

        gsap.fromTo(
            rows,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: tableRef.current,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse',
                },
            }
        );
    }, []);

    const getRoiDots = (service: string) => {
        const roiLevels: Record<string, number> = {
            website: 4,
            seo: 5,
            email: 5,
            social_growth: 4,
            payment: 4,
            digital: 5,
            whatsapp: 4,
        };
        return roiLevels[service] || 3;
    };

    return (
        <section className="py-24 px-6 bg-black">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-5xl md:text-6xl font-heading font-bold text-white">
                        {t('title')} <span className="text-gold">{t('titleHighlight')}</span>
                    </h2>
                    <p className="text-xl text-gray-400">{t('subtitle')}</p>
                    <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto" />
                </div>

                <div
                    ref={tableRef}
                    className="overflow-x-auto rounded-2xl border border-gold/20 bg-gradient-to-br from-[#0A0F1F] to-[#1A2333]"
                >
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gold/30">
                                <th className="px-6 py-5 text-left text-sm font-semibold text-gold uppercase tracking-wider">
                                    {t('table.headers.service')}
                                </th>
                                <th className="px-6 py-5 text-left text-sm font-semibold text-gold uppercase tracking-wider">
                                    {t('table.headers.reach')}
                                </th>
                                <th className="px-6 py-5 text-left text-sm font-semibold text-gold uppercase tracking-wider">
                                    {t('table.headers.automation')}
                                </th>
                                <th className="px-6 py-5 text-left text-sm font-semibold text-gold uppercase tracking-wider">
                                    {t('table.headers.roi')}
                                </th>
                                <th className="px-6 py-5 text-left text-sm font-semibold text-gold uppercase tracking-wider">
                                    {t('table.headers.results')}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {serviceKeys.map((key) => {
                                const cardT = useTranslations(`services.cards.${key}`);
                                return (
                                    <tr
                                        key={key}
                                        className="table-row border-b border-gold/10 hover:bg-gold/5 transition-colors duration-300"
                                    >
                                        <td className="px-6 py-5 font-semibold text-white">{cardT('title')}</td>
                                        <td className="px-6 py-5 text-gray-300">{t(`table.data.${key}.reach`)}</td>
                                        <td className="px-6 py-5">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gold/20 text-gold">
                                                {t(`table.data.${key}.automation`)}
                                            </span>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className={`w-2 h-2 rounded-full ${i < getRoiDots(key) ? 'bg-gold' : 'bg-gray-600'
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 text-gray-300">{t(`table.data.${key}.timeframe`)}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                {/* Bottom note */}
                <p className="text-center text-gray-500 mt-8 italic">
                    {t('note')}
                </p>
            </div>
        </section>
    );
}
