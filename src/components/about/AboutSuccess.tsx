"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Jenkins",
        niche: "Fitness Coach",
        text: "The automated funnel system completely transformed my business. I'm now generating leads while I sleep.",
        rating: 5,
    },
    {
        name: "Michael Chen",
        niche: "E-commerce Founder",
        text: "Professional, structured, and results-driven. The clarity I gained from our strategy sessions was invaluable.",
        rating: 5,
    },
    {
        name: "Jessica Alwani",
        niche: "Content Creator",
        text: "Finally, someone who understands how to build systems for creators. My email list has grown by 300% in 2 months.",
        rating: 5,
    },
    {
        name: "David Ross",
        niche: "Real Estate Agent",
        text: "The premium design and branding instantly elevated my authority in the market. Highly recommended.",
        rating: 5,
    },
    {
        name: "Elena Rodriguez",
        niche: "Life Coach",
        text: "The best investment I've made for my coaching business. The systems are flawless.",
        rating: 5,
    },
];

export function AboutSuccess() {
    // Auto-scroll logic could be added here, but for simplicity/user control request "Slider" often implies interaction.
    // However, "Luxury Slider" often means smooth auto-scroll or clean distinct slides. 
    // I will implement a CSS-free marquee-like effect or simple horizontal scroll for simplicity and elegance.
    // Actually, let's do a simple horizontal scroll container with snap for better UX on mobile.

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 mb-12 relative z-10">
                <div className="text-center space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold"
                    >
                        Client <span className="text-gold">Success</span>
                    </motion.h2>
                    <p className="text-muted-foreground text-lg">Real results from real entrepreneurs.</p>
                </div>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="relative w-full overflow-x-auto pb-12 hide-scrollbar">
                <div className="flex gap-6 px-4 md:px-6 w-max mx-auto md:mx-0 md:min-w-full justify-start md:justify-center">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                            className="w-[300px] md:w-[400px] shrink-0 p-8 rounded-2xl bg-[#0F1629] border border-white/5 relative group hover:border-gold/30 transition-colors duration-300"
                        >
                            <Quote className="absolute top-6 right-6 w-8 h-8 text-gold/10 group-hover:text-gold/20 transition-colors" />

                            <div className="flex gap-1 mb-6">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                                ))}
                            </div>

                            <p className="text-lg text-gray-300 mb-8 italic leading-relaxed">
                                &quot;{item.text}&quot;
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-white/10" />
                                <div>
                                    <h4 className="font-bold text-white">{item.name}</h4>
                                    <p className="text-sm text-gold">{item.niche}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
