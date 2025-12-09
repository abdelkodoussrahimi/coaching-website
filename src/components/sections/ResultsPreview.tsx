"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const results = [
    {
        title: "E-commerce Revenue Growth",
        metric: "+300%",
        description: "Revenue increase in 3 months",
        image: "https://placehold.co/800x600/1a1a1a/D4AF37?text=Revenue+Chart",
    },
    {
        title: "SEO Traffic Boost",
        metric: "50k+",
        description: "Monthly organic visitors",
        image: "https://placehold.co/800x600/1a1a1a/D4AF37?text=SEO+Graph",
    },
    {
        title: "Social Media Reach",
        metric: "1M+",
        description: "Accounts reached on Instagram",
        image: "https://placehold.co/800x600/1a1a1a/D4AF37?text=Social+Growth",
    },
];

export default function ResultsPreview() {
    return (
        <section className="py-24 bg-black relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-heading text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        Proven Results
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/60 text-lg max-w-2xl mx-auto"
                    >
                        Real numbers from real clients. We don't just promise growth; we deliver it.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {results.map((result, index) => (
                        <motion.div
                            key={result.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <Card className="bg-dark-blue border-white/10 overflow-hidden group hover:border-primary/50 transition-colors">
                                <CardContent className="p-0">
                                    <div className="relative aspect-video w-full overflow-hidden">
                                        <Image
                                            src={result.image}
                                            alt={result.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <span className="text-4xl font-bold text-primary">{result.metric}</span>
                                            <span className="text-white font-medium">{result.description}</span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-white mb-2">{result.title}</h3>
                                        <p className="text-white/60 text-sm">{result.description}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
