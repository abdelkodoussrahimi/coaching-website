"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const blogPosts = [
    {
        title: "10 WhatsApp Marketing Strategies That Actually Work",
        excerpt: "Discover the proven WhatsApp marketing tactics that drive engagement and convert prospects into paying customers.",
        image: "https://placehold.co/800x600/1a1a1a/D4AF37?text=WhatsApp+Marketing",
        category: "Marketing",
        readTime: "5 min read",
        href: "/blog/whatsapp-marketing-strategies",
    },
    {
        title: "SEO in 2024: Complete Guide to Ranking #1",
        excerpt: "Master the latest SEO techniques and dominate search rankings with this comprehensive guide to modern optimization.",
        image: "https://placehold.co/800x600/1a1a1a/D4AF37?text=SEO+Guide",
        category: "SEO",
        readTime: "8 min read",
        href: "/blog/seo-guide-2024",
    },
    {
        title: "Building a 6-Figure Digital Product Business",
        excerpt: "Step-by-step blueprint to create, launch, and scale profitable digital products that generate passive income.",
        image: "https://placehold.co/800x600/1a1a1a/D4AF37?text=Digital+Products",
        category: "Business",
        readTime: "7 min read",
        href: "/blog/digital-product-business",
    },
];

export default function BlogHighlights() {
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
                        Latest Insights
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/60 text-lg max-w-2xl mx-auto"
                    >
                        Strategies, tips, and actionable advice to grow your business.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href={post.href} className="group block">
                                <Card className="bg-dark-blue border-white/10 overflow-hidden h-full hover:border-primary/50 transition-all duration-300">
                                    <CardContent className="p-0">
                                        {/* Image */}
                                        <div className="relative aspect-video w-full overflow-hidden">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
                                            />
                                            <div className="absolute top-4 left-4 bg-primary text-black px-3 py-1 rounded-full text-xs font-bold">
                                                {post.category}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <div className="flex items-center gap-2 text-white/40 text-sm mb-3">
                                                <span>{post.readTime}</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                                {post.title}
                                            </h3>
                                            <p className="text-white/60 mb-4 line-clamp-2">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                                Read More <ArrowRight className="ml-2 w-4 h-4" />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                        View All Articles <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
