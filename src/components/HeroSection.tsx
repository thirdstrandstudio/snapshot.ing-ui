
import { Button } from "@/components/ui/button";
import { Database, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToHowItWorks = () => {
    const element = document.getElementById("how-it-works");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-200/30 dark:bg-indigo-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 text-center relative">
        <div className="inline-block animate-fade-in-up">
          <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Snapshot EVM Token Holders with Precision
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 animate-fade-in-up tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
          Capture Token Holder Balances
          <br className="hidden md:block" /> at Any Block Height
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up opacity-90">
          SnaptShot.ing gives you the power to create accurate snapshots of token balances across EVM networks, with powerful filtering and airdrop capabilities.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up">
          <Button className="rounded-full px-8 py-6 bg-blue-500 hover:bg-blue-600 transition-all text-base">
            Create Your First Snapshot
          </Button>
          <Button variant="outline" className="rounded-full px-8 py-6 border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800 transition-all text-base">
            View Documentation
          </Button>
        </div>

        <div 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
          onClick={scrollToHowItWorks}
        >
          <ChevronDown className="h-8 w-8 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
