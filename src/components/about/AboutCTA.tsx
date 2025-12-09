"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function AboutCTA() {
    return (
        <section className="py-32 relative overflow-hidden bg-black">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-gradient-to-t from-gold/10 to-transparent blur-[100px] pointer-events-none" />

            {/* Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(10)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-gold/30 blur-sm"
                        style={{
                            left: Math.random() * 100 + "%",
                            top: Math.random() * 100 + "%",
                            width: Math.random() * 3 + 1 + "px",
                            height: Math.random() * 3 + 1 + "px",
                            animation: `float ${Math.random() * 10 + 10}s infinite linear`
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8 max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
                        Ready to grow your digital business with <span className="text-gold">confidence</span>?
                    </h2>

                    <p className="text-xl text-muted-foreground mb-10">
                        Let’s build a scalable system that works for you.
                    </p>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            size="lg"
                            className="bg-gold hover:bg-gold-light text-black font-bold text-lg px-10 py-8 rounded-full shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] transition-all duration-300 group"
                        >
                            Book a Strategy Call
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
