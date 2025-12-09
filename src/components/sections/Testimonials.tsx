"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const testimonials = [
    {
        name: "Sarah Johnson",
        industry: "E-commerce Owner",
        rating: 5,
        text: "Working with this coach transformed my online store. Revenue increased by 300% in just 3 months. The WhatsApp marketing strategies alone were game-changing!",
        image: "https://placehold.co/100x100/1a1a1a/D4AF37?text=SJ",
    },
    {
        name: "Michael Chen",
        industry: "Digital Entrepreneur",
        rating: 5,
        text: "The SEO optimization brought us 50k+ monthly organic visitors. Best investment I've made for my business. Professional, results-driven, and incredibly knowledgeable.",
        image: "https://placehold.co/100x100/1a1a1a/D4AF37?text=MC",
    },
    {
        name: "Emma Rodriguez",
        industry: "Social Media Influencer",
        rating: 5,
        text: "Reached over 1M accounts on Instagram using the strategies taught. The guidance was clear, actionable, and delivered real results beyond my expectations.",
        image: "https://placehold.co/100x100/1a1a1a/D4AF37?text=ER",
    },
    {
        name: "David Kim",
        industry: "SaaS Founder",
        rating: 5,
        text: "The email campaign system increased our conversion rate by 45%. Absolutely worth every penny. Highly recommend to anyone serious about growth.",
        image: "https://placehold.co/100x100/1a1a1a/D4AF37?text=DK",
    },
    {
        name: "Lisa Anderson",
        industry: "Online Coach",
        rating: 5,
        text: "From zero to 6-figures in digital product sales. The mentorship and strategies provided were exactly what I needed to scale my coaching business.",
        image: "https://placehold.co/100x100/1a1a1a/D4AF37?text=LA",
    },
    {
        name: "James Taylor",
        industry: "Marketing Agency Owner",
        rating: 5,
        text: "Implementing these WhatsApp marketing funnels for our clients has been a game-changer. Response rates tripled and client satisfaction soared.",
        image: "https://placehold.co/100x100/1a1a1a/D4AF37?text=JT",
    },
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-24 bg-dark-blue relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-heading text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        Client Success Stories
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/60 text-lg max-w-2xl mx-auto"
                    >
                        Real results from real people who trusted the process and transformed their businesses.
                    </motion.p>
                </div>

                {/* Carousel */}
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
                                {/* Stars */}
                                <div className="flex gap-1 mb-6">
                                    {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                                    ))}
                                </div>

                                {/* Text */}
                                <p className="text-white text-lg md:text-xl leading-relaxed mb-8 italic">
                                    "{testimonials[currentIndex].text}"
                                </p>

                                {/* Author */}
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

                    {/* Navigation */}
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
                                    className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-primary w-8" : "bg-white/20"
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
            </div>
        </section>
    );
}
