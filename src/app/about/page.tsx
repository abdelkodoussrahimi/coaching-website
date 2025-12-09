import { AboutHero } from "@/components/about/AboutHero";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutExpertise } from "@/components/about/AboutExpertise";
import { AboutExperience } from "@/components/about/AboutExperience";
import { AboutProcess } from "@/components/about/AboutProcess";
import { AboutSuccess } from "@/components/about/AboutSuccess";
import { AboutPhilosophy } from "@/components/about/AboutPhilosophy";
import { AboutCTA } from "@/components/about/AboutCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Me | Premium Coaching & Digital Systems",
    description: "Learn more about my mission to help entrepreneurs build digital systems that sell with clarity, structure, and results.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-gold selection:text-black">
            <AboutHero />
            <AboutStory />
            <AboutExpertise />
            <AboutExperience />
            <AboutProcess />
            <AboutSuccess />
            <AboutPhilosophy />
            <AboutCTA />
        </main>
    );
}
