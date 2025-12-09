"use client";

import { motion } from "framer-motion";

export function AboutStory() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-5xl font-bold">
                                My <span className="text-gold">Mission</span>
                            </h2>
                            <div className="w-20 h-1 bg-gold rounded-full" />
                        </div>

                        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                I started my journey with a simple realization: too many talented entrepreneurs fail not because they lack passion, but because they lack <span className="text-white font-medium">systems</span>.
                            </p>
                            <p>
                                My purpose is to bridge that gap. I combine strategic thinking with premium design to help you build an online presence that doesn&apos;t just look good—it <span className="text-white font-medium">converts</span>.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 pt-4">
                            {['Clarity', 'Impact', 'Results', 'Strategy'].map((item, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <div className="w-2 h-2 rounded-full bg-gold shadow-[0_0_10px_#D4AF37]" />
                                    <span className="text-white font-medium text-lg">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative flex items-center justify-center"
                    >
                        {/* Abstract Glowing Shape */}
                        <div className="relative w-full max-w-[400px] aspect-square">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border border-gold/20 border-dashed"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-12 rounded-full border border-blue-500/20"
                            />
                            <div className="absolute inset-0 bg-gradient-radial from-gold/10 via-blue-900/10 to-transparent blur-3xl opacity-50" />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-gold/20 to-transparent backdrop-blur-md border border-white/10 shadow-2xl flex items-center justify-center">
                                    <span className="text-6xl">🚀</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
