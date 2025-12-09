'use client';

import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const contactMethods = [
    {
        icon: Mail,
        title: 'Email',
        value: 'hello@coachbrand.com',
        description: 'Send us an email anytime',
    },
    {
        icon: Phone,
        title: 'Phone',
        value: '+1 (555) 123-4567',
        description: 'Mon-Fri from 9am-6pm',
    },
    {
        icon: MapPin,
        title: 'Location',
        value: 'Remote Worldwide',
        description: 'Serving clients globally',
    },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to your contact API
        console.log('Contact form submitted:', formData);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
    };

    return (
        <main className="bg-black min-h-screen">
            {/* Hero Section */}
            <section className="relative py-32 px-6 bg-gradient-to-b from-black via-[#0A0F1F] to-black overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
                
                <div className="relative max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
                            Get In <span className="text-primary">Touch</span>
                        </h1>
                        <p className="text-xl text-white/70 max-w-3xl mx-auto">
                            Have questions? Want to discuss your business goals? Let's start a conversation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="py-24 px-6 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {contactMethods.map((method, index) => (
                            <motion.div
                                key={method.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="bg-white/5 border-white/10 backdrop-blur-sm h-full">
                                    <CardContent className="p-8 text-center">
                                        <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-lg flex items-center justify-center">
                                            <method.icon className="w-8 h-8 text-primary" />
                                        </div>
                                        <h3 className="text-white font-bold text-lg mb-2">{method.title}</h3>
                                        <p className="text-primary mb-2">{method.value}</p>
                                        <p className="text-white/60 text-sm">{method.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <div className="max-w-2xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                                <CardContent className="p-8">
                                    <h2 className="text-3xl font-heading font-bold text-white mb-6">
                                        Send Us a Message
                                    </h2>
                                    {submitted ? (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="text-center py-8"
                                        >
                                            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                                            <p className="text-white text-lg">
                                                Thank you! We'll get back to you soon.
                                            </p>
                                        </motion.div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div>
                                                <input
                                                    type="text"
                                                    placeholder="Your Name"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full p-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-primary transition-colors"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="email"
                                                    placeholder="Email Address"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full p-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-primary transition-colors"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="text"
                                                    placeholder="Subject"
                                                    value={formData.subject}
                                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                                    className="w-full p-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-primary transition-colors"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <textarea
                                                    placeholder="Your Message"
                                                    value={formData.message}
                                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                    rows={6}
                                                    className="w-full p-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-primary transition-colors resize-none"
                                                    required
                                                />
                                            </div>
                                            <Button
                                                type="submit"
                                                className="w-full bg-primary text-black hover:bg-primary/90 font-bold py-6 text-lg"
                                            >
                                                Send Message
                                                <Send className="ml-2 h-5 w-5" />
                                            </Button>
                                        </form>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 px-6 bg-gradient-to-b from-black via-[#0A0F1F] to-black">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                            Common <span className="text-primary">Questions</span>
                        </h2>
                    </motion.div>

                    <div className="space-y-6">
                        {[
                            {
                                q: 'How quickly will you respond?',
                                a: 'We typically respond within 24 hours during business days. For urgent matters, please call us directly.',
                            },
                            {
                                q: 'Do you offer free consultations?',
                                a: 'Yes! Book a free 30-minute strategy call to discuss your business goals and see how we can help.',
                            },
                            {
                                q: 'What services do you offer?',
                                a: 'We specialize in WhatsApp marketing, SEO, email campaigns, digital products, and influencer building. Check our Services page for details.',
                            },
                            {
                                q: 'Do you work with international clients?',
                                a: 'Absolutely! We work with clients worldwide remotely. All our services are delivered online.',
                            },
                        ].map((faq, index) => (
                            <motion.div
                                key={faq.q}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                                    <CardContent className="p-6">
                                        <h3 className="text-white font-bold text-lg mb-2">{faq.q}</h3>
                                        <p className="text-white/70">{faq.a}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}



