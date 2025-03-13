
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Calculator } from "lucide-react";

const PricingSection = () => {
  const [blockRange, setBlockRange] = useState([100000]);
  const [holderCount, setHolderCount] = useState([1000]);
  
  // Simple pricing calculator based on block range and holder count
  const calculatePrice = () => {
    const blocks = blockRange[0];
    const holders = holderCount[0];
    
    // Base computation fee
    const computeFee = (blocks / 1000) * 0.05;
    
    // Gas fee based on holder count
    const gasFee = (holders / 100) * 0.02;
    
    // Total cost
    return (computeFee + gasFee).toFixed(2);
  };

  return (
    <section id="pricing" className="section-padding relative">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 rounded-full mb-4">
            Pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight">
            Transparent <span className="gradient-text">Cost Calculator</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our pricing is based on computational resources required to process your snapshot
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-3 bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-display font-bold mb-6">Calculate Your Cost</h3>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="font-medium">Block Range</label>
                    <span className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{blockRange[0].toLocaleString()} blocks</span>
                  </div>
                  <Slider
                    value={blockRange}
                    min={1000}
                    max={1000000}
                    step={1000}
                    onValueChange={setBlockRange}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>1,000</span>
                    <span>1,000,000</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="font-medium">Estimated Holder Count</label>
                    <span className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{holderCount[0].toLocaleString()} holders</span>
                  </div>
                  <Slider
                    value={holderCount}
                    min={100}
                    max={100000}
                    step={100}
                    onValueChange={setHolderCount}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>100</span>
                    <span>100,000</span>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-750 p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600 dark:text-gray-400">Computation Fee</span>
                    <span>${((blockRange[0] / 1000) * 0.05).toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-600 dark:text-gray-400">Gas Fee</span>
                    <span>${((holderCount[0] / 100) * 0.02).toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4 flex items-center justify-between">
                    <span className="font-medium">Total Cost</span>
                    <span className="text-xl font-bold text-blue-600">${calculatePrice()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8 h-full flex flex-col">
              <h3 className="text-2xl font-display font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6 opacity-90">
                Create your first token holder snapshot quickly and accurately with our powerful tools.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/30 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p>Pay only for what you use</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/30 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p>No subscription required</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/30 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p>Volume discounts available</p>
                </div>
              </div>

              <div className="mt-auto">
                <Button size="lg" className="w-full bg-white text-blue-600 hover:bg-blue-50">
                  Start Your Snapshot
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
