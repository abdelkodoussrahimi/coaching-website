"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, motionValue, value]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
            }
        });
    }, [springValue, suffix]);

    return <span ref={ref}>0{suffix}</span>;
}

const stats = [
    { value: 150, suffix: "+", label: "Projects" },
    { value: 80, suffix: "+", label: "Happy Clients" },
    { value: 3, suffix: "+", label: "Years Experience" },
    { value: 20, suffix: "+", label: "Optimized Funnels" },
];

export default function MiniAbout() {
    return (
        <section className="relative py-24 bg-black overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-2xl border border-white/10">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                            <Image
                                src="https://placehold.co/600x750/1a1a1a/D4AF37?text=Your+Photo"
                                alt="Coach Profile"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
                    </motion.div>

                    {/* Text Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
                            Who Am I?
                        </h2>
                        <h3 className="text-xl text-primary font-medium mb-6">
                            Digital Growth Strategist & E-commerce Expert
                        </h3>
                        <p className="text-white/70 text-lg leading-relaxed mb-8">
                            I'm a digital strategist helping entrepreneurs scale their business through clear, actionable systems.
                            With proven expertise in WhatsApp marketing, SEO, email campaigns, and digital products,
                            I transform your vision into measurable results.
                        </p>

                        {/* Stats Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="grid grid-cols-2 gap-6 mb-8"
                        >
                            {stats.map((stat, index) => (
                                <div
                                    key={stat.label}
                                    className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm"
                                >
                                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                    </div>
                                    <div className="text-white/60 text-sm font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>

                        <Link href="/about">
                            <Button className="bg-white text-black hover:bg-white/90 font-bold px-8 py-6 text-lg">
                                More About Me
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
