import Hero from "@/components/sections/Hero";
import MiniAbout from "@/components/sections/MiniAbout";
import ServicesPreview from "@/components/sections/ServicesPreview";
import ResultsPreview from "@/components/sections/ResultsPreview";
import Testimonials from "@/components/sections/Testimonials";
import BlogHighlights from "@/components/sections/BlogHighlights";
import BigCTA from "@/components/sections/BigCTA";

export default function Home() {
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
