"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Button } from "@/components/ui/button";
import HeroScene from "@/components/3d/HeroScene";

export default function Hero() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-black via-dark-blue to-black">
            {/* Particles Background */}
            {init && (
                <Particles
                    id="tsparticles"
                    className="absolute inset-0 z-0"
                    options={{
                        background: {
                            color: {
                                value: "transparent",
                            },
                        },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 100,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#D4AF37",
                            },
                            links: {
                                color: "#D4AF37",
                                distance: 150,
                                enable: true,
                                opacity: 0.2,
                                width: 1,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 1,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                },
                                value: 60,
                            },
                            opacity: {
                                value: 0.3,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 3 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
            )}

            {/* 3D Scene */}
            <HeroScene />

            {/* Content */}
            <div className="relative z-10 flex h-full items-center justify-center px-6">
                <div className="max-w-4xl text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="font-heading text-5xl font-bold leading-tight text-white md:text-7xl lg:text-8xl"
                    >
                        I help businesses grow using{" "}
                        <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                            high-impact digital strategies
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="mx-auto mt-6 max-w-2xl text-lg text-white/80 md:text-xl"
                    >
                        WhatsApp Marketing • Digital Products • SEO • Email Marketing • Social Media
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                    >
                        <Button
                            size="lg"
                            className="group h-14 min-w-[200px] bg-primary text-lg font-bold text-primary-foreground hover:bg-primary/90"
                        >
                            View My Services
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="h-14 min-w-[200px] border-white/20 bg-white/5 text-lg font-medium text-white backdrop-blur-sm hover:bg-white/10 hover:text-white"
                        >
                            Book a Strategy Call
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
