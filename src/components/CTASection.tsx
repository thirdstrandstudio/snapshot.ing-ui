
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="section-padding relative">
      <div className="container max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl overflow-hidden">
          <div className="relative p-8 md:p-12 text-white">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 tracking-tight">
                Ready to Create Your First Snapshot?
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                Start capturing token holder balances with precision and unlock powerful airdrop capabilities today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="rounded-full px-8 bg-white text-blue-600 hover:bg-blue-50">
                  Get Started Now
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 border-white/30 bg-transparent hover:bg-white/10">
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
