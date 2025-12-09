'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import PremiumHeader from '@/components/services/PremiumHeader';
import Service3DGrid from '@/components/services/Service3DGrid';
import ServiceExplanation from '@/components/services/ServiceExplanation';
import ComparisonTable from '@/components/services/ComparisonTable';
import CTASection from '@/components/services/CTASection';

export default function ServicesPage() {
    useEffect(() => {
        // Initialize smooth scroll with Lenis
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

    return (
        <main className="bg-black min-h-screen">
            <PremiumHeader />
            <Service3DGrid />
            <ServiceExplanation />
            <ComparisonTable />
            <CTASection />
        </main>
    );
}
