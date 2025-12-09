'use client';

import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
    {
        name: 'Sarah Johnson',
        industry: 'E-commerce Owner',
        rating: 5,
        text: 'Working with this coach transformed my online store. Revenue increased by 300% in just 3 months. The WhatsApp marketing strategies alone were game-changing!',
        image: 'https://placehold.co/100x100/1a1a1a/D4AF37?text=SJ',
    },
    {
        name: 'Michael Chen',
        industry: 'Digital Entrepreneur',
        rating: 5,
        text: 'The SEO optimization brought us 50k+ monthly organic visitors. Best investment I\'ve made for my business. Professional, results-driven, and incredibly knowledgeable.',
        image: 'https://placehold.co/100x100/1a1a1a/D4AF37?text=MC',
    },
    {
        name: 'Emma Rodriguez',
        industry: 'Social Media Influencer',
        rating: 5,
        text: 'Reached over 1M accounts on Instagram using the strategies taught. The guidance was clear, actionable, and delivered real results beyond my expectations.',
        image: 'https://placehold.co/100x100/1a1a1a/D4AF37?text=ER',
    },
    {
        name: 'David Kim',
        industry: 'SaaS Founder',
        rating: 5,
        text: 'The email campaign system increased our conversion rate by 45%. Absolutely worth every penny. Highly recommend to anyone serious about growth.',
        image: 'https://placehold.co/100x100/1a1a1a/D4AF37?text=DK',
    },
    {
        name: 'Lisa Anderson',
        industry: 'Online Coach',
        rating: 5,
        text: 'From zero to 6-figures in digital product sales. The mentorship and strategies provided were exactly what I needed to scale my coaching business.',
        image: 'https://placehold.co/100x100/1a1a1a/D4AF37?text=LA',
    },
    {
        name: 'James Taylor',
        industry: 'Marketing Agency Owner',
        rating: 5,
        text: 'Implementing these WhatsApp marketing funnels for our clients has been a game-changer. Response rates tripled and client satisfaction soared.',
        image: 'https://placehold.co/100x100/1a1a1a/D4AF37?text=JT',
    },
    {
        name: 'Maria Garcia',
        industry: 'Fitness Coach',
        rating: 5,
        text: 'The digital product strategy helped me create passive income streams I never thought possible. Now I have multiple revenue sources working for me.',
        image: 'https://placehold.co/100x100/1a1a1a/D4AF37?text=MG',
    },
    {
        name: 'Robert Williams',
        industry: 'Consultant',
        rating: 5,
        text: 'The influencer building strategies positioned me as an authority in my niche. Now I get speaking opportunities and high-value clients regularly.',
        image: 'https://placehold.co/100x100/1a1a1a/D4AF37?text=RW',
    },
];

export default function TestimonialsPage() {
    const [currentIndex, setCurrentIndex] = useState(0);

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

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

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
                            Client <span className="text-primary">Testimonials</span>
                        </h1>
                        <p className="text-xl text-white/70 max-w-3xl mx-auto">
                            Real results from real people who trusted the process and transformed their businesses.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Featured Testimonial Carousel */}
            <section className="py-24 px-6 bg-black">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                            <CardContent className="p-8 md:p-12">
                                <Quote className="w-12 h-12 text-primary/50 mb-6" />
                                
                                <div className="flex gap-1 mb-6">
                                    {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                                    ))}
                                </div>

                                <p className="text-white text-lg md:text-xl leading-relaxed mb-8 italic">
                                    "{testimonials[currentIndex].text}"
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                                        {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <div className="text-white font-bold text-lg">
                                            {testimonials[currentIndex].name}
                                        </div>
                                        <div className="text-white/60 text-sm">
                                            {testimonials[currentIndex].industry}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <div className="flex items-center justify-center gap-4 mt-8">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all"
                        >
                            ←
                        </button>
                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${
                                        index === currentIndex ? 'bg-primary w-8' : 'bg-white/20'
                                    }`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all"
                        >
                            →
                        </button>
                    </div>
                </div>
            </section>

            {/* All Testimonials Grid */}
            <section className="py-24 px-6 bg-gradient-to-b from-black via-[#0A0F1F] to-black">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                            More <span className="text-primary">Stories</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="bg-white/5 border-white/10 backdrop-blur-sm h-full">
                                    <CardContent className="p-6">
                                        <div className="flex gap-1 mb-4">
                                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                            ))}
                                        </div>
                                        <p className="text-white/80 text-sm leading-relaxed mb-4 italic">
                                            "{testimonial.text}"
                                        </p>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                                                {testimonial.name.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <div>
                                                <div className="text-white font-semibold text-sm">
                                                    {testimonial.name}
                                                </div>
                                                <div className="text-white/60 text-xs">
                                                    {testimonial.industry}
                                                </div>
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



