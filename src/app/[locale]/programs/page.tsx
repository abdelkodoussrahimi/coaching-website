'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap, Target, Users, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const programs = [
    {
        name: 'Starter Program',
        price: '$997',
        duration: '4 weeks',
        description: 'Perfect for businesses just starting their digital transformation journey.',
        features: [
            'WhatsApp Marketing Setup',
            'Basic SEO Optimization',
            'Email Campaign Framework',
            '2 Strategy Sessions',
            'Email Support',
        ],
        icon: Zap,
        popular: false,
    },
    {
        name: 'Growth Program',
        price: '$2,997',
        duration: '8 weeks',
        description: 'Comprehensive solution for businesses ready to scale rapidly.',
        features: [
            'Full Digital Marketing Suite',
            'Advanced SEO & Content Strategy',
            'Automated Email Funnels',
            'Digital Product Creation',
            '4 Strategy Sessions',
            'Priority Support',
            'Performance Analytics',
        ],
        icon: Target,
        popular: true,
    },
    {
        name: 'Elite Program',
        price: '$5,997',
        duration: '12 weeks',
        description: 'Complete transformation for serious entrepreneurs committed to growth.',
        features: [
            'Everything in Growth Program',
            '1-on-1 Weekly Coaching',
            'Custom Strategy Development',
            'Influencer Brand Building',
            'Multiple Revenue Streams',
            'Unlimited Support',
            'Quarterly Reviews',
            'Exclusive Community Access',
        ],
        icon: Award,
        popular: false,
    },
];

export default function ProgramsPage() {
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
                            Coaching <span className="text-primary">Programs</span>
                        </h1>
                        <p className="text-xl text-white/70 max-w-3xl mx-auto">
                            Choose the program that fits your business goals and growth stage. All programs include proven systems and personalized support.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Programs Grid */}
            <section className="py-24 px-6 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {programs.map((program, index) => (
                            <motion.div
                                key={program.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative"
                            >
                                {program.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                                        <span className="bg-primary text-black px-4 py-1 rounded-full text-sm font-bold">
                                            Most Popular
                                        </span>
                                    </div>
                                )}
                                <Card className={`bg-white/5 border-white/10 backdrop-blur-sm h-full ${
                                    program.popular ? 'border-primary/50' : ''
                                }`}>
                                    <CardHeader className="text-center pb-8">
                                        <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-lg flex items-center justify-center">
                                            <program.icon className="w-8 h-8 text-primary" />
                                        </div>
                                        <CardTitle className="text-2xl font-bold text-white mb-2">
                                            {program.name}
                                        </CardTitle>
                                        <div className="text-4xl font-bold text-primary mb-2">
                                            {program.price}
                                        </div>
                                        <div className="text-white/60 text-sm">{program.duration}</div>
                                        <p className="text-white/70 text-sm mt-4">{program.description}</p>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-4 mb-8">
                                            {program.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                                    <span className="text-white/80 text-sm">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Button
                                            className={`w-full ${
                                                program.popular
                                                    ? 'bg-primary text-black hover:bg-primary/90'
                                                    : 'bg-white/10 text-white hover:bg-white/20'
                                            }`}
                                        >
                                            Get Started
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 px-6 bg-gradient-to-b from-black via-[#0A0F1F] to-black">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                            Frequently Asked <span className="text-primary">Questions</span>
                        </h2>
                    </motion.div>

                    <div className="space-y-6">
                        {[
                            {
                                q: 'Can I switch programs later?',
                                a: 'Yes, you can upgrade to a higher-tier program at any time. We\'ll prorate the cost based on what you\'ve already paid.',
                            },
                            {
                                q: 'What if I need more support?',
                                a: 'All programs include support, but Elite Program members get unlimited access. You can also book additional sessions as needed.',
                            },
                            {
                                q: 'Do you offer payment plans?',
                                a: 'Yes, we offer flexible payment plans for all programs. Contact us to discuss options that work for you.',
                            },
                            {
                                q: 'What results can I expect?',
                                a: 'Results vary by business, but most clients see significant improvements within the first 30-60 days. We focus on measurable outcomes.',
                            },
                        ].map((faq, index) => (
                            <motion.div
                                key={faq.q}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                                    <CardContent className="p-6">
                                        <h3 className="text-white font-bold text-lg mb-2">{faq.q}</h3>
                                        <p className="text-white/70">{faq.a}</p>
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



