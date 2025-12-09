'use client';

import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { motion } from 'framer-motion';
import { Calendar, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const timeSlots = [
    { time: '9:00 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '11:00 AM', available: false },
    { time: '1:00 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '4:00 PM', available: false },
    { time: '5:00 PM', available: true },
];

const benefits = [
    'Free 30-minute strategy session',
    'No commitment required',
    'Personalized recommendations',
    'Clear action plan for your business',
];

export default function BookingPage() {
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [selectedTime, setSelectedTime] = useState<string>('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        business: '',
        goals: '',
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
        // Here you would typically send the data to your booking API
        console.log('Booking submitted:', { selectedDate, selectedTime, formData });
        setSubmitted(true);
    };

    const getNext7Days = () => {
        const days = [];
        for (let i = 1; i <= 7; i++) {
            const date = new Date();
            date.setDate(date.getDate() + i);
            days.push(date.toISOString().split('T')[0]);
        }
        return days;
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
                            Book Your <span className="text-primary">Strategy Call</span>
                        </h1>
                        <p className="text-xl text-white/70 max-w-3xl mx-auto">
                            Let's discuss your business goals and create a customized plan to accelerate your growth.
                        </p>
                    </motion.div>
                </div>
            </section>

            {!submitted ? (
                <section className="py-24 px-6 bg-black">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Benefits */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl font-heading font-bold text-white mb-6">
                                    What You'll Get
                                </h2>
                                <div className="space-y-4 mb-8">
                                    {benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                            <span className="text-white/80">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                                    <CardContent className="p-6">
                                        <h3 className="text-white font-bold mb-4">Session Details</h3>
                                        <div className="space-y-2 text-white/70 text-sm">
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-4 h-4" />
                                                <span>30 minutes</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4" />
                                                <span>Video call or phone</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Booking Form */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                                    <CardContent className="p-8">
                                        <h2 className="text-2xl font-heading font-bold text-white mb-6">
                                            Select Date & Time
                                        </h2>
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            {/* Date Selection */}
                                            <div>
                                                <label className="text-white/80 text-sm font-medium mb-2 block">
                                                    Select Date
                                                </label>
                                                <div className="grid grid-cols-2 gap-2">
                                                    {getNext7Days().map((date) => {
                                                        const dateObj = new Date(date);
                                                        const dayName = dateObj.toLocaleDateString('en', { weekday: 'short' });
                                                        const dayNum = dateObj.getDate();
                                                        const month = dateObj.toLocaleDateString('en', { month: 'short' });
                                                        return (
                                                            <button
                                                                key={date}
                                                                type="button"
                                                                onClick={() => setSelectedDate(date)}
                                                                className={`p-3 rounded-lg border transition-all ${
                                                                    selectedDate === date
                                                                        ? 'border-primary bg-primary/20 text-white'
                                                                        : 'border-white/10 bg-white/5 text-white/70 hover:border-white/20'
                                                                }`}
                                                            >
                                                                <div className="text-xs">{dayName}</div>
                                                                <div className="font-bold">{dayNum}</div>
                                                                <div className="text-xs">{month}</div>
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                            </div>

                                            {/* Time Selection */}
                                            {selectedDate && (
                                                <div>
                                                    <label className="text-white/80 text-sm font-medium mb-2 block">
                                                        Select Time
                                                    </label>
                                                    <div className="grid grid-cols-2 gap-2">
                                                        {timeSlots.map((slot) => (
                                                            <button
                                                                key={slot.time}
                                                                type="button"
                                                                onClick={() => slot.available && setSelectedTime(slot.time)}
                                                                disabled={!slot.available}
                                                                className={`p-3 rounded-lg border transition-all ${
                                                                    !slot.available
                                                                        ? 'border-white/5 bg-white/5 text-white/30 cursor-not-allowed'
                                                                        : selectedTime === slot.time
                                                                        ? 'border-primary bg-primary/20 text-white'
                                                                        : 'border-white/10 bg-white/5 text-white/70 hover:border-white/20'
                                                                }`}
                                                            >
                                                                {slot.time}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Form Fields */}
                                            {selectedDate && selectedTime && (
                                                <div className="space-y-4 pt-4 border-t border-white/10">
                                                    <div>
                                                        <input
                                                            type="text"
                                                            placeholder="Your Name"
                                                            value={formData.name}
                                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-primary"
                                                            required
                                                        />
                                                    </div>
                                                    <div>
                                                        <input
                                                            type="email"
                                                            placeholder="Email Address"
                                                            value={formData.email}
                                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-primary"
                                                            required
                                                        />
                                                    </div>
                                                    <div>
                                                        <input
                                                            type="tel"
                                                            placeholder="Phone Number"
                                                            value={formData.phone}
                                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-primary"
                                                            required
                                                        />
                                                    </div>
                                                    <div>
                                                        <input
                                                            type="text"
                                                            placeholder="Business Name"
                                                            value={formData.business}
                                                            onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                                                            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-primary"
                                                            required
                                                        />
                                                    </div>
                                                    <div>
                                                        <textarea
                                                            placeholder="What are your main business goals?"
                                                            value={formData.goals}
                                                            onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                                                            rows={4}
                                                            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-primary resize-none"
                                                            required
                                                        />
                                                    </div>
                                                    <Button
                                                        type="submit"
                                                        className="w-full bg-primary text-black hover:bg-primary/90 font-bold"
                                                    >
                                                        Confirm Booking
                                                        <ArrowRight className="ml-2 h-4 w-4" />
                                                    </Button>
                                                </div>
                                            )}
                                        </form>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>
                    </div>
                </section>
            ) : (
                <section className="py-24 px-6 bg-black">
                    <div className="max-w-2xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <CheckCircle className="w-20 h-20 text-primary mx-auto mb-6" />
                            <h2 className="text-3xl font-heading font-bold text-white mb-4">
                                Booking Confirmed!
                            </h2>
                            <p className="text-white/70 text-lg mb-8">
                                We've received your booking request. You'll receive a confirmation email shortly with all the details.
                            </p>
                            <Button
                                onClick={() => {
                                    setSubmitted(false);
                                    setSelectedDate('');
                                    setSelectedTime('');
                                    setFormData({ name: '', email: '', phone: '', business: '', goals: '' });
                                }}
                                variant="outline"
                                className="border-white/20 text-white hover:bg-white/10"
                            >
                                Book Another Session
                            </Button>
                        </motion.div>
                    </div>
                </section>
            )}
        </main>
    );
}



