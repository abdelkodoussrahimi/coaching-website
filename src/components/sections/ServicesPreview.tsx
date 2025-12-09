"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Laptop, MessageCircle, Mail, Users, Search, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
    {
        title: "WhatsApp Marketing",
        description: "Direct-to-consumer strategies that drive instant engagement and conversions.",
        icon: MessageCircle,
        href: "/services/whatsapp",
    },
    {
        title: "SEO Boost",
        description: "Dominate search rankings and drive free, organic traffic to your business.",
        icon: Search,
        href: "/services/seo",
    },
    {
        title: "Email Campaigns",
        description: "Automated flows and campaigns that nurture leads and maximize revenue.",
        icon: Mail,
        href: "/services/email",
    },
    {
        title: "Digital Product Selling",
        description: "Build and scale profitable digital product businesses with proven systems.",
        icon: Laptop,
        href: "/services/digital-products",
    },
];

export default function ServicesPreview() {
    return (
        <section className="py-24 bg-dark-blue relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-heading text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        Premium Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/60 text-lg max-w-2xl mx-auto"
                    >
                        Comprehensive solutions designed to elevate your brand and maximize revenue.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href={service.href}>
                                <Card className="h-full bg-white/5 border-white/10 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2">
                                    <CardHeader>
                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                            <service.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <CardTitle className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                                            {service.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-white/60 mb-6">{service.description}</p>
                                        <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                            Learn More <ArrowRight className="ml-2 w-4 h-4" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
