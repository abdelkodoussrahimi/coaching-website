"use client";

import { motion } from "framer-motion";
import { Layers, MessageCircle, Mail, TrendingUp, Users } from "lucide-react";

const expertiseItems = [
    {
        icon: Layers,
        title: "Digital Product Systems",
        description: "Helping you create, launch, and scale digital products.",
    },
    {
        icon: MessageCircle,
        title: "WhatsApp Marketing",
        description: "Full automation funnels that convert followers into buyers.",
    },
    {
        icon: Mail,
        title: "Email Marketing",
        description: "High-converting sequences for engagement and retention.",
    },
    {
        icon: TrendingUp,
        title: "SEO Growth",
        description: "Boosting visibility through strategic on-page and off-page optimizations.",
    },
    {
        icon: Users,
        title: "Influencer Account Building",
        description: "Transform your social presence into a business.",
    },
];

export function AboutExpertise() {
    return (
        <section className="py-24 bg-background relative">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-3 py-1 rounded-full bg-secondary border border-white/10 text-xs tracking-widest text-gold uppercase"
                    >
                        Expertise
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold"
                    >
                        What I Do <span className="text-gold">Best</span>
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {expertiseItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative p-8 rounded-2xl bg-secondary/50 border border-white/5 hover:border-gold/50 transition-all duration-300 backdrop-blur-sm overflow-hidden"
                        >
                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative z-10 space-y-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-transparent flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-gold/20">
                                    <item.icon className="w-6 h-6 text-gold" />
                                </div>

                                <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-muted-foreground leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
