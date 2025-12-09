"use client";

import { motion } from "framer-motion";

export function AboutPhilosophy() {
    return (
        <section className="py-32 bg-background relative flex items-center justify-center">
            {/* Decorative Gold Circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-gold/5 rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-gold/5 rounded-full pointer-events-none opacity-50" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-12">
                        &ldquo;I believe in building <span className="text-gold italic">systems</span>, not just strategies.
                        Systems that generate results even when you&rsquo;re not online.&rdquo;
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
                    {["Long-term Thinking", "Clear Structures", "High-impact Optimization"].map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + (index * 0.1) }}
                            className="flex flex-col items-center gap-3"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_10px_#D4AF37]" />
                            <span className="text-lg font-medium text-white tracking-wide">{point}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
