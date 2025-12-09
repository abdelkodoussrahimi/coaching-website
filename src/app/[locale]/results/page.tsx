'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Users, DollarSign, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

function AnimatedCounter({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, motionValue, value]);

    useEffect(() => {
        springValue.on('change', (latest) => {
            if (ref.current) {
                ref.current.textContent = prefix + Math.floor(latest).toLocaleString() + suffix;
            }
        });
    }, [springValue, suffix, prefix]);

    return <span ref={ref}>0{suffix}</span>;
}

const results = [
    {
        icon: TrendingUp,
        metric: '300%',
        label: 'Average Revenue Increase',
        description: 'Clients see significant growth within the first 3 months',
        color: 'text-primary',
    },
    {
        icon: Users,
        metric: '150',
        suffix: '+',
        label: 'Successful Projects',
        description: 'Businesses transformed through strategic digital systems',
        color: 'text-blue-400',
    },
    {
        icon: DollarSign,
        metric: '$2M',
        suffix: '+',
        label: 'Revenue Generated',
        description: 'Total revenue increase across all client projects',
        color: 'text-green-400',
    },
    {
        icon: Target,
        metric: '95',
        suffix: '%',
        label: 'Client Satisfaction',
        description: 'Clients who achieve their growth objectives',
        color: 'text-purple-400',
    },
];

const caseStudies = [
    {
        client: 'E-commerce Store',
        challenge: 'Low conversion rates and limited online visibility',
        solution: 'Implemented WhatsApp marketing funnels and SEO optimization',
        results: [
            '300% increase in revenue',
            '50k+ monthly organic visitors',
            '45% improvement in conversion rate',
        ],
    },
    {
        client: 'Digital Product Business',
        challenge: 'Struggling to scale digital product sales',
        solution: 'Created automated email campaigns and optimized sales funnels',
        results: [
            '6-figure revenue in 6 months',
            '10x increase in email subscribers',
            '35% conversion rate improvement',
        ],
    },
    {
        client: 'Service-Based Business',
        challenge: 'Low client acquisition and retention',
        solution: 'Built influencer brand and implemented strategic marketing systems',
        results: [
            '200% increase in leads',
            '80% client retention rate',
            '3x growth in monthly revenue',
        ],
    },
];

export default function ResultsPage() {
    useEffect(() => {
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

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <main className="bg-black min-h-screen">
            {/* Hero Section */}
            <section className="relative py-32 px-6 bg-gradient-to-b from-black via-[#0A0F1F] to-black overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
                
                <div className="relative max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
                            Proven <span className="text-primary">Results</span>
                        </h1>
                        <p className="text-xl text-white/70 max-w-3xl mx-auto">
                            Real numbers from real businesses. See how strategic digital systems drive measurable growth.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-24 px-6 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {results.map((result, index) => (
                            <motion.div
                                key={result.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                                    <CardContent className="p-8 text-center">
                                        <div className={`w-16 h-16 mx-auto mb-6 bg-white/5 rounded-lg flex items-center justify-center`}>
                                            <result.icon className={`w-8 h-8 ${result.color}`} />
                                        </div>
                                        <div className={`text-4xl md:text-5xl font-bold mb-2 ${result.color}`}>
                                            {result.suffix ? (
                                                <AnimatedCounter value={parseFloat(result.metric)} suffix={result.suffix} />
                                            ) : (
                                                result.metric
                                            )}
                                        </div>
                                        <div className="text-white font-semibold text-lg mb-2">{result.label}</div>
                                        <div className="text-white/60 text-sm">{result.description}</div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies Section */}
            <section className="py-24 px-6 bg-gradient-to-b from-black via-[#0A0F1F] to-black">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                            Success <span className="text-primary">Stories</span>
                        </h2>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            Detailed case studies showing how strategic implementation drives real business results.
                        </p>
                    </motion.div>

                    <div className="space-y-8">
                        {caseStudies.map((study, index) => (
                            <motion.div
                                key={study.client}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                                    <CardContent className="p-8 md:p-12">
                                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                            <div>
                                                <h3 className="text-2xl font-bold text-white mb-4">{study.client}</h3>
                                                <div className="space-y-2">
                                                    <p className="text-white/60 font-medium">Challenge:</p>
                                                    <p className="text-white/80">{study.challenge}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-white/60 font-medium mb-2">Solution:</p>
                                                <p className="text-white/80">{study.solution}</p>
                                            </div>
                                            <div>
                                                <p className="text-white/60 font-medium mb-2">Results:</p>
                                                <ul className="space-y-2">
                                                    {study.results.map((result, i) => (
                                                        <li key={i} className="text-primary flex items-start gap-2">
                                                            <span className="text-primary mt-1">✓</span>
                                                            <span className="text-white/80">{result}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}



