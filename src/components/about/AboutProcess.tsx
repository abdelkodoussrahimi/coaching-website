"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Discovery Call",
        description: "We analyze your current situation to understand your unique challenges and opportunities.",
    },
    {
        number: "02",
        title: "Custom Strategy",
        description: "I give you a clear roadmap for your goals, tailored specifically to your business model.",
    },
    {
        number: "03",
        title: "Execution & Systems",
        description: "We build the tools, funnels, and automation needed to bring the strategy to life.",
    },
    {
        number: "04",
        title: "Optimization",
        description: "We refine and scale the system based on data to maximize your ROI.",
    },
];

export function AboutProcess() {
    return (
        <section className="py-24 bg-background relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-20 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-3 py-1 rounded-full bg-secondary border border-white/10 text-xs tracking-widest text-gold uppercase"
                    >
                        How It Works
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold"
                    >
                        My <span className="text-gold">Process</span>
                    </motion.h2>
                </div>

                <div className="relative max-w-3xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent md:-translate-x-1/2" />

                    <div className="space-y-12 md:space-y-24">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-[20px] md:left-1/2 w-3 h-3 md:w-4 md:h-4 bg-background border-2 border-gold rounded-full transform -translate-x-1/2 mt-1.5 md:mt-0 z-10 shadow-[0_0_10px_#D4AF37]" />

                                {/* Content */}
                                <div className="pl-12 md:pl-0 md:w-1/2 md:px-12">
                                    <div className={`space-y-2 ${index % 2 === 0 && "md:text-left"} ${index % 2 !== 0 && "md:text-right"}`}>
                                        <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gold/50 to-transparent opacity-50 block md:hidden">
                                            {step.number}
                                        </span>
                                        <h3 className="text-2xl font-bold text-white flex items-center gap-4 md:block">
                                            <span className="hidden md:inline-block text-gold/50 text-base font-normal mr-2">
                                                {step.number}
                                            </span>
                                            {step.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Empty side for layout balance */}
                                <div className="hidden md:block md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
