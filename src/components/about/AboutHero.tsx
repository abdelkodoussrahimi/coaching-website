"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function AboutHero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-[#0F1629] to-background">
            {/* Background Particles (Simplified for performance) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-gold/20 blur-sm"
                        initial={{
                            x: Math.random() * 100 + "%",
                            y: Math.random() * 100 + "%",
                            scale: Math.random() * 0.5 + 0.5,
                        }}
                        animate={{
                            y: [null, Math.random() * -100 + "%"],
                            opacity: [0, 0.5, 0],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        style={{
                            width: Math.random() * 4 + 2 + "px",
                            height: Math.random() * 4 + 2 + "px",
                        }}
                    />
                ))}
                {/* Geometric Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
            </div>

            <div className="container mx-auto relative z-10 px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col items-start space-y-6"
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-sm">
                            <span className="text-sm font-medium text-gold uppercase tracking-wider">
                                Who I Am
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
                            About <span className="text-gold italic">Me</span>
                        </h1>

                        <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                            Helping entrepreneurs build digital systems that sell — with clarity, structure, and results.
                        </p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            <Button
                                size="lg"
                                className="bg-gold hover:bg-gold-light text-black font-semibold text-lg px-8 py-6 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300"
                            >
                                Work With Me
                            </Button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="relative lg:ml-auto"
                    >
                        <div className="relative w-full max-w-md aspect-[4/5] mx-auto">
                            {/* Decorative Frame */}
                            <div className="absolute -inset-4 border border-gold/30 rounded-2xl z-0 translate-x-4 translate-y-4" />
                            <div className="absolute -inset-4 border border-gold/10 rounded-2xl z-0 -translate-x-4 -translate-y-4" />

                            {/* Image Container */}
                            <div className="relative h-full w-full rounded-xl overflow-hidden shadow-2xl bg-muted border border-white/5">
                                {/* Placeholder Image */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 to-blue-900/20 mix-blend-overlay z-10" />
                                {/* Using a placeholder text since we don't have the image yet */}
                                <div className="flex items-center justify-center h-full bg-secondary text-muted-foreground">
                                    <span className="text-center p-4">Your Photo<br />(High Quality)</span>
                                </div>
                                {/* <Image
                  src="/your-photo.jpg" 
                  alt="Coach Profile"
                  fill
                  className="object-cover"
                /> */}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
