'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import Hero from "@/components/sections/Hero";
import MiniAbout from "@/components/sections/MiniAbout";
import ServicesPreview from "@/components/sections/ServicesPreview";
import ResultsPreview from "@/components/sections/ResultsPreview";
import Testimonials from "@/components/sections/Testimonials";
import BlogHighlights from "@/components/sections/BlogHighlights";
import BigCTA from "@/components/sections/BigCTA";

export default function Home() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
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
    <div className="flex flex-col min-h-screen">
      <Hero />
      <MiniAbout />
      <ServicesPreview />
      <ResultsPreview />
      <Testimonials />
      <BlogHighlights />
      <BigCTA />
    </div>
  );
}
