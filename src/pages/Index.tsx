
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeatureSection from "@/components/FeatureSection";
import PricingSection from "@/components/PricingSection";
import AirdropSection from "@/components/AirdropSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  // Add smooth animations when sections come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const hiddenElements = document.querySelectorAll(".reveal-on-scroll");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main>
        <HeroSection />
        <FeatureSection />
        <HowItWorksSection />
        <PricingSection />
        <AirdropSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
