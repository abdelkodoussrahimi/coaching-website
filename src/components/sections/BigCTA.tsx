"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BigCTA() {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-dark-blue to-black">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
            </div>

            {/* Glow Effects */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse delay-700" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                        Let's grow your business{" "}
                        <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                            together
                        </span>
                    </h2>
                    <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        Book a free strategy call and get actionable insights tailored to your goals.
                        No obligations, just real value.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <Button
                            size="lg"
                            className="group h-16 px-10 bg-primary text-primary-foreground text-xl font-bold hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300"
                        >
                            Book a Call Now
                            <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
                        </Button>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/60 text-sm"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <span>Free consultation</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <span>No credit card required</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <span>Results-focused approach</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
